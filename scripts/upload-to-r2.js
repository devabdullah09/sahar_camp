import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize S3 client for Cloudflare R2
// Trim whitespace from credentials to avoid issues
const accountId = (process.env.R2_ACCOUNT_ID || '').trim()
const accessKeyId = (process.env.R2_ACCESS_KEY_ID || '').trim()
const secretAccessKey = (process.env.R2_SECRET_ACCESS_KEY || '').trim()

// Validate credentials before creating client
if (!accountId || !accessKeyId || !secretAccessKey) {
  console.error('❌ Error: Missing R2 credentials in .env file')
  console.error('Please check: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY')
  process.exit(1)
}

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
})

const BUCKET_NAME = process.env.R2_BUCKET_NAME
const WEBSITE_ID = process.env.WEBSITE_ID || 'sahar-camp'
const ASSETS_DIR = path.join(__dirname, '../src/assets')

// Function to get all files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = path.join(dirPath, file)
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
    } else {
      arrayOfFiles.push(filePath)
    }
  })

  return arrayOfFiles
}

// Function to upload a file to R2
async function uploadFile(filePath) {
  const fileContent = fs.readFileSync(filePath)
  
  // Create R2 key (path) - maintain folder structure with website ID prefix
  const relativePath = path.relative(ASSETS_DIR, filePath)
  const r2Key = `${WEBSITE_ID}/${relativePath.replace(/\\/g, '/')}`

  // Determine content type
  const ext = path.extname(filePath).toLowerCase()
  const contentTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.svg': 'image/svg+xml',
  }
  const contentType = contentTypes[ext] || 'application/octet-stream'

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: BUCKET_NAME,
      Key: r2Key,
      Body: fileContent,
      ContentType: contentType,
      // Note: R2 doesn't use ACL. Public access is configured at bucket level in dashboard.
      // Make sure to enable "Public Access" in your R2 bucket settings.
    },
  })

  try {
    await upload.done()
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${r2Key}`
    console.log(`✓ Uploaded: ${r2Key}`)
    return { key: r2Key, url: publicUrl, localPath: relativePath }
  } catch (error) {
    console.error(`✗ Failed to upload ${r2Key}:`, error.message)
    return null
  }
}

// Main upload function
async function uploadAllAssets() {
  console.log('🚀 Starting R2 upload...\n')
  console.log(`Website ID: ${WEBSITE_ID}`)
  console.log(`Bucket: ${BUCKET_NAME}`)
  console.log(`Assets directory: ${ASSETS_DIR}\n`)

  // Validate environment variables
  if (!process.env.R2_BUCKET_NAME || !process.env.R2_PUBLIC_URL) {
    console.error('❌ Error: Missing required environment variables.')
    console.error('Please check your .env file and ensure R2_BUCKET_NAME and R2_PUBLIC_URL are set.')
    process.exit(1)
  }
  
  // Log credential lengths for debugging (without showing actual values)
  console.log(`Account ID length: ${accountId.length} characters`)
  console.log(`Access Key ID length: ${accessKeyId.length} characters`)
  console.log(`Secret Key length: ${secretAccessKey.length} characters`)
  console.log('(Expected: Account ID ~32, Access Key ~32, Secret Key ~40)\n')

  // Check if assets directory exists
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Error: Assets directory not found at ${ASSETS_DIR}`)
    process.exit(1)
  }

  // Get all files
  const allFiles = getAllFiles(ASSETS_DIR)
  console.log(`Found ${allFiles.length} files to upload\n`)

  // Upload files
  const results = []
  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i]
    const result = await uploadFile(file)
    if (result) {
      results.push(result)
    }
    // Small delay to avoid rate limiting
    if (i < allFiles.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }

  // Generate mapping file
  const mapping = {}
  results.forEach(({ localPath, url }) => {
    // Normalize path separators for cross-platform compatibility
    const normalizedPath = localPath.replace(/\\/g, '/')
    mapping[normalizedPath] = url
  })

  // Save mapping to JSON file
  const mappingPath = path.join(__dirname, '../src/config/r2-assets.json')
  const mappingDir = path.dirname(mappingPath)
  if (!fs.existsSync(mappingDir)) {
    fs.mkdirSync(mappingDir, { recursive: true })
  }
  
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))
  
  console.log(`\n✅ Upload complete!`)
  console.log(`📝 Mapping saved to: ${mappingPath}`)
  console.log(`\nUploaded ${results.length}/${allFiles.length} files successfully`)
  console.log(`\n💡 Next steps:`)
  console.log(`   1. Set VITE_USE_R2=true in your .env file`)
  console.log(`   2. Restart your dev server to use R2 URLs`)
  console.log(`   3. For other websites, change WEBSITE_ID and run upload again`)
}

// Run upload
uploadAllAssets().catch(console.error)


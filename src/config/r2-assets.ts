/**
 * Cloudflare R2 Asset URLs Configuration
 * 
 * This file manages asset URLs, supporting both R2 (production) and local assets (development).
 * 
 * Usage:
 * - Set VITE_USE_R2=true in .env to use R2 URLs
 * - Run `npm run upload:assets` to upload assets and generate r2-assets.json
 * - The getR2Url() function will automatically use R2 URLs if available
 */

// Check if we should use R2 URLs
const USE_R2 = import.meta.env.VITE_USE_R2 === 'true'

// Import the generated mapping (created after upload)
// The r2-assets.json file exists (empty {} if not uploaded yet)
// Vite handles JSON imports at build time
import r2AssetsMapping from './r2-assets.json'

// Use the mapping only if R2 is enabled
const assetMapping: Record<string, string> = USE_R2 
  ? (r2AssetsMapping as Record<string, string> || {})
  : {}

/**
 * Get the R2 URL for a local asset path
 * @param localPath - The local path relative to src/assets (e.g., "logo/logo.png")
 * @returns The R2 public URL
 */
export function getR2Url(localPath: string): string {
  // Normalize path separators
  const normalizedPath = localPath.replace(/\\/g, '/')
  
  // If using R2 and we have a mapping entry, return R2 URL
  if (USE_R2 && assetMapping[normalizedPath]) {
    return assetMapping[normalizedPath]
  }
  
  // If R2 is enabled but mapping not found, log warning and return empty string
  if (USE_R2) {
    console.warn(`R2 URL not found for: ${normalizedPath}. Make sure you've uploaded assets.`)
    return ''
  }
  
  // If R2 is not enabled, return empty string (assets should be uploaded to R2)
  console.warn(`R2 is not enabled. Set VITE_USE_R2=true in .env file.`)
  return ''
}

/**
 * Get R2 URL for an experience image
 */
export function getExperienceImage(experiencePath: string): string {
  return getR2Url(`OUR EXPERIENCES/${experiencePath}`)
}

/**
 * Get R2 URL for a logo
 */
export function getLogoPath(logoName: string): string {
  return getR2Url(`logo/${logoName}`)
}

/**
 * Get R2 URL for landing video
 */
export function getLandingVideo(videoName: string): string {
  return getR2Url(`landing/${videoName}`)
}

// Export the mapping for direct access if needed
export { assetMapping }


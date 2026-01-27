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

// Import the generated mapping (created after upload)
// The r2-assets.json file exists (empty {} if not uploaded yet)
// Vite handles JSON imports at build time
import r2AssetsMapping from './r2-assets.json'

// Import local logo assets
import logoImage from '../assets/logo.png'

// Always use the mapping if available (regardless of USE_R2 setting)
const assetMapping: Record<string, string> = (r2AssetsMapping as Record<string, string> || {})

// Base R2 URL pattern
const R2_BASE_URL = 'https://pub-0ced7f0e94b24d54a8ad2db4c5d26104.r2.dev/sahar-camp'

/**
 * Get the R2 URL for a local asset path
 * @param localPath - The local path relative to src/assets (e.g., "logo/logo.png")
 * @returns The R2 public URL
 */
export function getR2Url(localPath: string): string {
  // Normalize path separators
  const normalizedPath = localPath.replace(/\\/g, '/')
  
  // If we have a mapping entry, use it (regardless of USE_R2 setting)
  if (assetMapping[normalizedPath]) {
    return assetMapping[normalizedPath]
  }
  
  // If no mapping found, construct URL from base pattern
  // Encode each path segment to handle spaces and special characters properly
  const pathSegments = normalizedPath.split('/')
  const encodedSegments = pathSegments.map(segment => {
    // Don't encode if it's already a valid URL segment, but encode spaces and special chars
    return encodeURIComponent(segment)
  })
  const encodedPath = encodedSegments.join('/')
  return `${R2_BASE_URL}/${encodedPath}`
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
 * Get the local logo image
 */
export function getSaharLogo(): string {
  return logoImage
}

/**
 * Get local logo for white backgrounds (using the same logo for now)
 */
export function getSaharLogoWhite(): string {
  return logoImage
}

/**
 * Get local logo for dark backgrounds (using the same logo for now)
 */
export function getSaharLogoDark(): string {
  return logoImage
}

/**
 * Get R2 URL for landing video
 */
export function getLandingVideo(videoName: string): string {
  return getR2Url(`landing/${videoName}`)
}

// Export the mapping for direct access if needed
export { assetMapping }


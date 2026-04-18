import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000"

const NORMALIZED_API_BASE_URL = API_BASE_URL.endsWith("/")
  ? API_BASE_URL.slice(0, -1)
  : API_BASE_URL

export function resolveProductImageUrl(imageUrl?: string) {
  if (!imageUrl) return ""

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl
  }

  const normalizedImagePath = imageUrl.replace(/^\/+/, "")

  if (normalizedImagePath.startsWith("storage/")) {
    return `${NORMALIZED_API_BASE_URL}/${normalizedImagePath}`
  }

  return `${NORMALIZED_API_BASE_URL}/storage/${normalizedImagePath}`
}

import type { User } from "./types"
import { SUBSCRIPTION_LIMITS } from "./types"

export function canCreateNote(user: User): boolean {
  if (user.subscription === "pro") return true

  const limit = SUBSCRIPTION_LIMITS.free.maxNotes
  return user.notes.length < limit
}

export function getRemainingNotes(user: User): number {
  if (user.subscription === "pro") return -1 // unlimited

  const limit = SUBSCRIPTION_LIMITS.free.maxNotes
  return Math.max(0, limit - user.notes.length)
}

export function getSubscriptionFeatures(subscription: "free" | "pro"): string[] {
  return SUBSCRIPTION_LIMITS[subscription].features
}

export function isFeatureAvailable(user: User, feature: string): boolean {
  const features = getSubscriptionFeatures(user.subscription)
  return features.includes(feature)
}

// Mock payment processing - in real app this would integrate with Stripe, PayPal, etc.
export async function processUpgrade(userId: string): Promise<{ success: boolean; error?: string }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock success (in real app, this would handle actual payment processing)
  return { success: true }
}

export function formatSubscriptionPrice(subscription: "free" | "pro"): string {
  switch (subscription) {
    case "free":
      return "Free"
    case "pro":
      return "$9/month"
    default:
      return "Unknown"
  }
}

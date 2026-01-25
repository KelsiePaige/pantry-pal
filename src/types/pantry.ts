// src/types/pantry.ts

export type PantrySource = "manual" | "barcode" | "receipt";

export type PantryStatus = "fresh" | "good" | "use_soon" | "expired" | "consumed" | "discarded" | "unknown";

export type PantryUnit =
  | "count"
  | "g"
  | "mg"
  | "kg"
  | "oz"
  | "lb"
  | "ml"
  | "l"
  | "tsp"
  | "tbsp"
  | "cup"
  | "gal"
  | "pt"
  | "qt"
  | "fl oz"
  | "bag"
  | "box"
  | "can"
  | "jar";

/**
 * Canonical local model for Pantry items (UI-first).
 * Status is typically computed in-app from dates, but kept as a field
 * so UI can render without recalculating in every component.
 */
export interface PantryItem {
  // Identity
  id: string;

  // Display
  name: string;
  categorySlug?: string; // e.g. "produce", "dairy", "canned_goods"
  brand?: string;

  // Quantity (minimal but flexible)
  quantity?: number;
  unit?: PantryUnit;

  // Dates
  purchasedAt?: string; // ISO string
  openedAt?: string; // ISO string
  expiresAt?: string; // ISO string

  // Origin / metadata
  source: PantrySource;
  barcode?: string;

  // UX helpers
  notes?: string;

  // Derived / UI-facing
  status: PantryStatus; // computed by your logic
  confidence?: "high" | "medium" | "low"; // optional: for scanned/derived fields

  // Timestamps (useful even locally)
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}
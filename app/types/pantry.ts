export type PantrySource = "manual" | "barcode" | "receipt";

export type PantryStatus =
    | "fresh"
    | "good"
    | "use_soon"
    | "expired"
    | "consumed"
    | "discarded"
    | "unknown";

export type PantryLocation = "pantry" | "fridge" | "freezer" | "other";

export type PantryUnit =
    | "ct"
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
    | "fl_oz"
    | "bag"
    | "box"
    | "can"
    | "jar"
    | "bottle"
    | "pack";

export type ConfidenceLevel = "high" | "medium" | "low";

/**
 * Form contract for Manual Add (what the user can enter).
 * Intentionally excludes system fields like id/source/status/timestamps.
 */
export type ManualPantryItemDraft = {
    name: string;

    quantity?: number;
    unit?: PantryUnit;

    categorySlug?: string;
    location?: PantryLocation;

    purchasedAt?: string; // ISO string (date-only ok)
    expiresAt?: string; // ISO string (date-only ok)

    notes?: string;
};

/**
 * Canonical local model for Pantry items (UI-first).
 **/
export interface PantryItem {
    // Identity (required)
    id: string;

    // Core display (required/optional)
    name: string;
    categorySlug?: string;
    brand?: string;

    // Quantity (optional)
    quantity?: number;
    unit?: PantryUnit;

    // Placement (optional)
    location?: PantryLocation;

    // Dates (optional)
    purchasedAt?: string; // ISO string
    openedAt?: string; // ISO string
    expiresAt?: string; // ISO string

    // Source / metadata (required + optional)
    source: PantrySource;
    barcode?: string;

    // Notes (optional)
    notes?: string;

    // Derived / UI-facing (required + optional)
    status: PantryStatus;
    confidence?: ConfidenceLevel;

    // System timestamps (required)
    createdAt: string; // ISO string
    updatedAt: string; // ISO string
}
import type { PantryItem } from "../types/pantry";

const now = new Date().toISOString();

export const pantrySeedItems: PantryItem[] = [
    {
        id: "seed-avocado-1",
        name: "Avocado",
        quantity: 2,
        unit: "ct",
        location: "fridge",
        status: "use_soon",
        source: "manual",
        expiresAt: new Date(Date.now() + 2 * 86400000).toISOString(), // +2 days
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "seed-milk-1",
        name: "Whole Milk",
        quantity: 1,
        unit: "gal",
        location: "fridge",
        status: "expired",
        source: "manual",
        expiresAt: new Date(Date.now() - 1 * 86400000).toISOString(), // yesterday
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "seed-rice-1",
        name: "Jasmine Rice",
        quantity: 1,
        unit: "bag",
        location: "pantry",
        status: "good",
        source: "manual",
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "seed-chicken-1",
        name: "Chicken Breast",
        quantity: 2,
        unit: "lb",
        location: "freezer",
        status: "fresh",
        source: "manual",
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "seed-sauce-1",
        name: "Pasta Sauce",
        quantity: 1,
        unit: "jar",
        location: "pantry",
        status: "consumed",
        source: "manual",
        createdAt: now,
        updatedAt: now,
    },
    {
        id: "seed-snack-1",
        name: "Granola Bars",
        quantity: 1,
        unit: "box",
        location: "pantry",
        status: "unknown",
        source: "manual",
        createdAt: now,
        updatedAt: now,
    },
];

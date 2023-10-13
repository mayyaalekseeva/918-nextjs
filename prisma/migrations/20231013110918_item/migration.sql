-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL,
    "name" TEXT,
    "ingredients" TEXT,
    "price" TEXT,
    "weight" TEXT,
    "kcal" TEXT
);
INSERT INTO "new_Item" ("category", "createdAt", "id", "ingredients", "kcal", "name", "price", "weight") SELECT "category", "createdAt", "id", "ingredients", "kcal", "name", "price", "weight" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

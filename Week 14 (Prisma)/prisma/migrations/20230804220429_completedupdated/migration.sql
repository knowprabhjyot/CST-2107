-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Todo" ("completed", "createdAt", "description", "id", "title") SELECT "completed", "createdAt", "description", "id", "title" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE UNIQUE INDEX "Todo_id_key" ON "Todo"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

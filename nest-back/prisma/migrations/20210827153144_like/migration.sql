-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Like" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" INTEGER,
    FOREIGN KEY ("authorId") REFERENCES "Tweet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Like" ("authorId", "id") SELECT "authorId", "id" FROM "Like";
DROP TABLE "Like";
ALTER TABLE "new_Like" RENAME TO "Like";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

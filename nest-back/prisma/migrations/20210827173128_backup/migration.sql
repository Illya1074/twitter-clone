/*
  Warnings:

  - You are about to drop the `_TweetToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_TweetToUser_B_index";

-- DropIndex
DROP INDEX "_TweetToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TweetToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "authorId" INTEGER,
    "authorUsername" TEXT,
    FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tweet" ("authorId", "authorUsername", "content", "id") SELECT "authorId", "authorUsername", "content", "id" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

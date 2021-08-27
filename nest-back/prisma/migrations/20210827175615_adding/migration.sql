-- CreateTable
CREATE TABLE "_TweetToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Tweet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT,
    "authorId" INTEGER,
    "authorUsername" TEXT
);
INSERT INTO "new_Tweet" ("authorId", "authorUsername", "content", "id") SELECT "authorId", "authorUsername", "content", "id" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_TweetToUser_AB_unique" ON "_TweetToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TweetToUser_B_index" ON "_TweetToUser"("B");

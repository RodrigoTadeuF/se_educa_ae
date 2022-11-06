/*
  Warnings:

  - You are about to drop the column `text` on the `documents` table. All the data in the column will be lost.
  - Added the required column `author_name` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_documents" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "documents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_documents" ("created_at", "description", "id", "title", "user_id") SELECT "created_at", "description", "id", "title", "user_id" FROM "documents";
DROP TABLE "documents";
ALTER TABLE "new_documents" RENAME TO "documents";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

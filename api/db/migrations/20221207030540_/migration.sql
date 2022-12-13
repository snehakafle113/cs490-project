/*
  Warnings:

  - You are about to drop the column `description` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `end` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `summary` on the `Appointments` table. All the data in the column will be lost.
  - Added the required column `date` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_Appointments" ("id", "user_id") SELECT "id", "user_id" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

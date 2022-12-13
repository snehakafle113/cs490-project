/*
  Warnings:

  - You are about to drop the column `created_at` on the `Appointments` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Appointments` table. All the data in the column will be lost.
  - Added the required column `description` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "summary" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "user_id" TEXT NOT NULL
);
INSERT INTO "new_Appointments" ("id", "user_id") SELECT "id", "user_id" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

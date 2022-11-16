/*
  Warnings:

  - You are about to drop the `Apointments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Apointments";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Appointments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL
);

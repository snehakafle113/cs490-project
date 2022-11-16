/*
  Warnings:

  - Added the required column `date` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urgency` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Apointments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status_name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL,
    "urgency" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "Task_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("created_at", "id", "title", "user_id") SELECT "created_at", "id", "title", "user_id" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

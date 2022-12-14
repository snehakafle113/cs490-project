-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FName" TEXT NOT NULL,
    "LName" TEXT NOT NULL,
    "currPass" TEXT NOT NULL,
    "newPass" TEXT NOT NULL,
    "confirmPass" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Profile" ("FName", "LName", "confirmPass", "currPass", "id", "newPass") SELECT "FName", "LName", "confirmPass", "currPass", "id", "newPass" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

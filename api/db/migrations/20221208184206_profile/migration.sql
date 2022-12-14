-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FName" TEXT NOT NULL,
    "LName" TEXT NOT NULL,
    "currPass" TEXT NOT NULL,
    "newPass" TEXT NOT NULL,
    "confirmPass" TEXT NOT NULL
);

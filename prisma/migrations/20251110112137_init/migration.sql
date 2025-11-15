-- CreateTable
CREATE TABLE "Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "type_service" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "other_info" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" DATETIME NOT NULL
);

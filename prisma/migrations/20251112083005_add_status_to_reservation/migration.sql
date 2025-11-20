-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reservation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "type_service" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "other_info" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_date" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending'
);
INSERT INTO "new_Reservation" ("adresse", "created_at", "date", "email", "hour", "id", "nom", "other_info", "phone", "type_service", "update_date") SELECT "adresse", "created_at", "date", "email", "hour", "id", "nom", "other_info", "phone", "type_service", "update_date" FROM "Reservation";
DROP TABLE "Reservation";
ALTER TABLE "new_Reservation" RENAME TO "Reservation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

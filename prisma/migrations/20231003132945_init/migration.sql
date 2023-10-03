/*
  Warnings:

  - You are about to drop the column `RG` on the `Secretaria` table. All the data in the column will be lost.
  - You are about to drop the column `id_consulta` on the `Secretaria` table. All the data in the column will be lost.
  - You are about to drop the column `Usuario` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `rg` to the `Secretaria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_consulta` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Secretaria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Secretaria" ("created_at", "id", "nome", "updated_at") SELECT "created_at", "id", "nome", "updated_at" FROM "Secretaria";
DROP TABLE "Secretaria";
ALTER TABLE "new_Secretaria" RENAME TO "Secretaria";
CREATE TABLE "new_Consulta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_paciente" TEXT NOT NULL,
    "nome_dents" TEXT NOT NULL,
    "id_paciente" TEXT NOT NULL,
    "id_agenda" TEXT NOT NULL,
    "id_consulta" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Consulta_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_id_agenda_fkey" FOREIGN KEY ("id_agenda") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Consulta_id_consulta_fkey" FOREIGN KEY ("id_consulta") REFERENCES "Secretaria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Consulta" ("created_at", "id", "id_agenda", "id_paciente", "nome_dents", "nome_paciente", "updated_at") SELECT "created_at", "id", "id_agenda", "id_paciente", "nome_dents", "nome_paciente", "updated_at" FROM "Consulta";
DROP TABLE "Consulta";
ALTER TABLE "new_Consulta" RENAME TO "Consulta";
CREATE UNIQUE INDEX "Consulta_id_paciente_key" ON "Consulta"("id_paciente");
CREATE UNIQUE INDEX "Consulta_id_agenda_key" ON "Consulta"("id_agenda");
CREATE UNIQUE INDEX "Consulta_id_consulta_key" ON "Consulta"("id_consulta");
CREATE TABLE "new_Paciente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Paciente" ("created_at", "id", "senha", "updated_at") SELECT "created_at", "id", "senha", "updated_at" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

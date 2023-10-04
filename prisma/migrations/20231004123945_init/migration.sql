/*
  Warnings:

  - A unique constraint covering the columns `[rg]` on the table `Secretaria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Secretaria_rg_key" ON "Secretaria"("rg");

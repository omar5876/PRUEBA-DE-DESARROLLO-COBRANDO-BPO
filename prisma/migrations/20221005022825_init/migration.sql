/*
  Warnings:

  - A unique constraint covering the columns `[codigo_departamento]` on the table `empleado` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo_departamento` to the `empleado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empleado" ADD COLUMN     "codigo_departamento" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "departamento" (
    "codigo" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "presupuesto" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "departamento_pkey" PRIMARY KEY ("codigo")
);

-- CreateIndex
CREATE UNIQUE INDEX "empleado_codigo_departamento_key" ON "empleado"("codigo_departamento");

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_codigo_departamento_fkey" FOREIGN KEY ("codigo_departamento") REFERENCES "departamento"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

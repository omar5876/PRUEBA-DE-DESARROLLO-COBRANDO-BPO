-- DropForeignKey
ALTER TABLE "empleado" DROP CONSTRAINT "empleado_codigo_departamento_fkey";

-- AlterTable
ALTER TABLE "empleado" ALTER COLUMN "codigo_departamento" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "empleado" ADD CONSTRAINT "empleado_codigo_departamento_fkey" FOREIGN KEY ("codigo_departamento") REFERENCES "departamento"("codigo") ON DELETE SET NULL ON UPDATE CASCADE;

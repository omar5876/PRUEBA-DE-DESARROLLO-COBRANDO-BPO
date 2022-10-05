-- CreateTable
CREATE TABLE "empleado" (
    "codigo" SERIAL NOT NULL,
    "nif" VARCHAR(9) NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido1" VARCHAR(100) NOT NULL,
    "apellido2" VARCHAR(100),

    CONSTRAINT "empleado_pkey" PRIMARY KEY ("codigo")
);

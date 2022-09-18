/*
  Warnings:

  - You are about to drop the `teachersDisciplines` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "teachersDisciplines";

-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_name_key" ON "disciplines"("name");

/*
  Warnings:

  - Added the required column `termId` to the `disciplines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "disciplines" ADD COLUMN     "termId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "terms" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

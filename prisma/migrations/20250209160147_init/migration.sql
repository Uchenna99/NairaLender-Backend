/*
  Warnings:

  - Added the required column `monthlyPayment` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "monthlyPayment" INTEGER NOT NULL;

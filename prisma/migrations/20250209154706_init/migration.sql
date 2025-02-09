/*
  Warnings:

  - A unique constraint covering the columns `[cardNumber]` on the table `PaymentCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PaymentCard_cardNumber_key" ON "PaymentCard"("cardNumber");

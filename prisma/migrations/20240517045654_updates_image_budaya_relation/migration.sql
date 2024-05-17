/*
  Warnings:

  - You are about to drop the `_budayatocategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `budayaId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_budayatocategory` DROP FOREIGN KEY `_BudayaToCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_budayatocategory` DROP FOREIGN KEY `_BudayaToCategory_B_fkey`;

-- AlterTable
ALTER TABLE `category` ADD COLUMN `budayaId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_budayatocategory`;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_budayaId_fkey` FOREIGN KEY (`budayaId`) REFERENCES `Budaya`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

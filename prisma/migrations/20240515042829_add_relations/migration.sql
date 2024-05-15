/*
  Warnings:

  - You are about to drop the `_budayatoimage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Budaya` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budayaId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_budayatoimage` DROP FOREIGN KEY `_BudayaToImage_A_fkey`;

-- DropForeignKey
ALTER TABLE `_budayatoimage` DROP FOREIGN KEY `_BudayaToImage_B_fkey`;

-- AlterTable
ALTER TABLE `budaya` ADD COLUMN `authorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `image` ADD COLUMN `budayaId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_budayatoimage`;

-- AddForeignKey
ALTER TABLE `Budaya` ADD CONSTRAINT `Budaya_author_fkey` FOREIGN KEY (`authorId`) REFERENCES `Contributor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_budayaId_fkey` FOREIGN KEY (`budayaId`) REFERENCES `Budaya`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

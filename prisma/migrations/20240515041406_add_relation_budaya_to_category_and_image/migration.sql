/*
  Warnings:

  - You are about to drop the column `images` on the `budaya` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `budaya` DROP COLUMN `images`;

-- CreateTable
CREATE TABLE `_BudayaToImage` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BudayaToImage_AB_unique`(`A`, `B`),
    INDEX `_BudayaToImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_BudayaToCategory` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_BudayaToCategory_AB_unique`(`A`, `B`),
    INDEX `_BudayaToCategory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BudayaToImage` ADD CONSTRAINT `_BudayaToImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `Budaya`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BudayaToImage` ADD CONSTRAINT `_BudayaToImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `Image`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BudayaToCategory` ADD CONSTRAINT `_BudayaToCategory_A_fkey` FOREIGN KEY (`A`) REFERENCES `Budaya`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BudayaToCategory` ADD CONSTRAINT `_BudayaToCategory_B_fkey` FOREIGN KEY (`B`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

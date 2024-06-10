-- DropForeignKey
ALTER TABLE "Budaya" DROP CONSTRAINT "Budaya_author_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_budayaId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_budayaId_fkey";

-- AddForeignKey
ALTER TABLE "Budaya" ADD CONSTRAINT "Budaya_author_fkey" FOREIGN KEY ("authorId") REFERENCES "Contributor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_budayaId_fkey" FOREIGN KEY ("budayaId") REFERENCES "Budaya"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_budayaId_fkey" FOREIGN KEY ("budayaId") REFERENCES "Budaya"("id") ON DELETE CASCADE ON UPDATE CASCADE;

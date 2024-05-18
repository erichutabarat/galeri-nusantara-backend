/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contributor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Contributor_email_key` ON `Contributor`(`email`);

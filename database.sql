-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for galeri_nusantara
CREATE DATABASE IF NOT EXISTS `bayj41nqezbrxarawure` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bayj41nqezbrxarawure`;

-- Dumping structure for table galeri_nusantara.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('CONTRIBUTOR','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ADMIN',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Admin_username_key` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara.admin: ~1 rows (approximately)
DELETE FROM `admin`;
INSERT INTO `admin` (`id`, `username`, `password`, `email`, `role`) VALUES
	(1, 'admin', 'admin', 'ericdaniel.dev@gmail.com', 'ADMIN');

-- Dumping structure for table galeri_nusantara.contributor
CREATE TABLE IF NOT EXISTS `contributor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('CONTRIBUTOR','ADMIN') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CONTRIBUTOR',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Contributor_username_key` (`username`),
  UNIQUE KEY `Contributor_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara.contributor: ~5 rows (approximately)
DELETE FROM `contributor`;
INSERT INTO `contributor` (`id`, `username`, `password`, `email`, `role`) VALUES
	(1, 'user', 'user', NULL, 'CONTRIBUTOR'),
	(2, 'test', 'test', NULL, 'CONTRIBUTOR'),
	(6, 'tost', 'test', NULL, 'CONTRIBUTOR'),
	(9, 'tust', 'tust', 'email@gmail.com', 'CONTRIBUTOR'),
	(12, 'asd', 'asd', NULL, 'CONTRIBUTOR');

-- Dumping structure for table galeri_nusantara.budaya
CREATE TABLE IF NOT EXISTS `budaya` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `authorId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Budaya_title_key` (`title`),
  KEY `Budaya_author_fkey` (`authorId`),
  CONSTRAINT `Budaya_author_fkey` FOREIGN KEY (`authorId`) REFERENCES `contributor` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara.budaya: ~4 rows (approximately)
DELETE FROM `budaya`;
INSERT INTO `budaya` (`id`, `title`, `source`, `description`, `createdAt`, `updatedAt`, `authorId`) VALUES
	(1, 'bunga', 'taman', 'bunga di taman', '2024-05-18 12:10:54.000', '2024-05-18 12:11:01.396', 1),
	(2, 'Tari Jaipong', 'Sunda', 'Jaipongan adalah sebuah jenis tari pergaulan tradisional masyarakat Sunda yang berasal dari wilayah Karawang dan sangat populer di Indonesia.', '2024-05-23 04:18:11.355', '2024-05-23 04:18:11.355', 2),
	(5, 'Tari Kecak', 'Bali', 'Tari kecak adalah seni tari yang berasal dari Bali. Seni tari kecak ini dipertunjukkan oleh puluhan penari laki-laki yang duduk berbaris dengan pola melingkar dan dengan irama tertentu menyerukan "cak, cak, cak" serta mengangkat kedua lengan.', '2024-05-23 04:34:09.042', '2024-05-23 04:34:09.042', 2),
	(6, 'Tari Kecak 2', 'Bali', 'Tari kecak adalah seni tari yang berasal dari Bali. Seni tari kecak ini dipertunjukkan oleh puluhan penari laki-laki yang duduk berbaris dengan pola melingkar dan dengan irama tertentu menyerukan "cak, cak, cak" serta mengangkat kedua lengan.', '2024-05-26 05:07:21.508', '2024-05-26 05:07:21.508', 1);

-- Dumping structure for table galeri_nusantara.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budayaId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Category_budayaId_fkey` (`budayaId`),
  CONSTRAINT `Category_budayaId_fkey` FOREIGN KEY (`budayaId`) REFERENCES `budaya` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara.category: ~1 rows (approximately)
DELETE FROM `category`;
INSERT INTO `category` (`id`, `name`, `budayaId`) VALUES
	(1, 'hiasan', 1);

-- Dumping structure for table galeri_nusantara.image
CREATE TABLE IF NOT EXISTS `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `budayaId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Image_budayaId_fkey` (`budayaId`),
  CONSTRAINT `Image_budayaId_fkey` FOREIGN KEY (`budayaId`) REFERENCES `budaya` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara.image: ~5 rows (approximately)
DELETE FROM `image`;
INSERT INTO `image` (`id`, `url`, `description`, `budayaId`) VALUES
	(1, 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg', 'bunga di taman', 1),
	(4, 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg', 'Sample', 2),
	(5, 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg', 'Sample', 5),
	(9, 'http://res.cloudinary.com/djwftgm6b/image/upload/v1716440565/images-1716440563937.jpg', 'null', 5),
	(10, 'http://res.cloudinary.com/djwftgm6b/image/upload/v1715915182/sample.jpg', 'Sample', 6);

-- Dumping structure for table galeri_nusantara._prisma_migrations
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table galeri_nusantara._prisma_migrations: ~12 rows (approximately)
DELETE FROM `_prisma_migrations`;
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('1b0d68fa-b076-43b9-8574-1534b94df0b8', 'ff1f162abc1ce5dc0201a587435eb66f5e0357c83048e88f10285617672a10f1', '2024-05-20 06:06:26.641', '20240520060626_update_image', NULL, NULL, '2024-05-20 06:06:26.566', 1),
	('522bf9ee-5b20-4351-9bbd-02756554f65d', 'dd44953f7282412538c27f2744920eeb0583845e7a60687be951544dc2e410ec', '2024-05-15 03:59:04.549', '20240515035904_add_admin_models', NULL, NULL, '2024-05-15 03:59:04.500', 1),
	('5d8f3034-6cc5-4dcd-b062-7fab87ea6954', '9a68127892a6418e756a2411dbdb6aba1ea7f880720f71139ce42c0c52f4731c', '2024-05-15 04:11:05.429', '20240515041105_add_category_models', NULL, NULL, '2024-05-15 04:11:05.417', 1),
	('798efcd5-6e5f-4d07-ac93-2c7aff7c7061', '2afb5faf2a2740a19b11e637e1ffd4a801f096aacab4e210cfbda08e8df4be2d', '2024-05-18 05:10:16.603', '20240518051016_update_image', NULL, NULL, '2024-05-18 05:10:16.587', 1),
	('85009106-ce27-422f-b2b1-74e12d80aab5', 'a0a562408b8b156fd9f190ae78065de760f030f4e7e062e443d2d79b0a532264', '2024-05-15 04:09:58.486', '20240515040958_add_budaya_models', NULL, NULL, '2024-05-15 04:09:58.455', 1),
	('8a74e182-7d86-4188-904b-10b59b6a6604', 'fdfc4a5c21b1bd002ac612228c570491241d6bd100ac0b857ae341ad4005cc28', '2024-05-15 04:12:23.641', '20240515041223_add_image_models', NULL, NULL, '2024-05-15 04:12:23.624', 1),
	('91d3c35b-a312-4f56-a3fc-e3a52047f75c', 'd9a32839e57d07f0f28c494ce7115ed704a7a31698fdb914f39d3ebf90f853db', '2024-05-15 04:28:29.134', '20240515042829_add_relations', NULL, NULL, '2024-05-15 04:28:29.029', 1),
	('99a5d7b6-6cca-499a-8f6c-ad1f1e280266', 'af43eec7ab2d97cfafede2134166f687af860edf447455cb2a2f6599ff5d2915', '2024-05-18 04:34:04.712', '20240518043404_update_contributor', NULL, NULL, '2024-05-18 04:34:04.676', 1),
	('a2707846-39b0-4ca6-8624-4770a13e1d9c', '306313d8f7731da92e67c3f3e63010c126adf8f93b9f8a179ae2d16697a39d20', '2024-05-17 04:56:54.957', '20240517045654_updates_image_budaya_relation', NULL, NULL, '2024-05-17 04:56:54.885', 1),
	('a299ce5a-23d9-4175-9918-4426e657961b', 'b43fe8651d9f282abbda48c94617f11cc1baa09938122d17d2ecc7281722dbd0', '2024-05-15 04:06:14.578', '20240515040614_add_contributor_models', NULL, NULL, '2024-05-15 04:06:14.545', 1),
	('d8676d95-8ce5-4887-8b9c-989e330eb418', '0b1e47cd6fdbf96d9b5b779eb5315b8c473d976208dbf0ea422ad72d69c9c0dc', '2024-05-23 04:33:32.783', '20240523043332_update_budaya', NULL, NULL, '2024-05-23 04:33:32.734', 1),
	('db2bbb11-2c21-4ff2-8dc4-cd08e4689e19', 'b63fa2be026141c65518050b3e95801e07845250655b574bc9406773c5e49a25', '2024-05-15 04:14:07.111', '20240515041406_add_relation_budaya_to_category_and_image', NULL, NULL, '2024-05-15 04:14:06.922', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

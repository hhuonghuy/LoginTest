-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2023 at 12:36 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(1, 'huy', 'huynhhuonghuy01@gmail.com', '$2b$10$yjqMoFhD04ZleltLTRc/neXHcJ8pjddEHlwROidXNZD0MOhYdwZQi'),
(2, 'khoa 123', 'khoalk1@gmail.com', '$2b$10$Vd.ZHfdNyM3BzHjfwTQ4e.1MGpk6qknD7QSUbAfCJNvECbaGhjapC'),
(3, 'hưng', '123@gmail.com', '$2b$10$u9NbF9NXfnsThHTccHWOFuXoAUUXYGBcujJkPOb8ykZ3yjH.nnn5W'),
(4, 'huy huynh huong', 'huyuchiha@gmai.com', '$2b$10$sfnHtHE.qMLQ6/E61lLs3.EcQTipepP61RPdH9w4nUU2tcz6GpfpS'),
(5, 'sói cô đơn', 'lolicon@gmail.com', '$2b$10$DsIja9Lew/GrbZGxHof1uema8b396WyU8Qg88BqlONL/2/ox3bcku'),
(14, 'Sói già phố Wall', 'huy123456@gmail.com', '$2b$10$m7zyZiFCSumHM5TGBOaANuT5OuE0szaPmdv7TIPhAlb/XMzwBe/Mi'),
(15, 'Kobe Bryant: Legends In Sports', '123@gmail.com', '$2b$10$v6JaQfv398WuSSWS8s7ieuegWKBiK1atXeKqf0lyiWJJpVNgPMfs6'),
(16, 'Sói già phố Wall', 'lolicon@gmail.com', '$2b$10$Vk9Ne.mh/aRhkpnCrret8.aV0Tp5RZDAoJL5bYJv46ZN0j2Siw5MG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

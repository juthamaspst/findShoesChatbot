-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Nov 18, 2022 at 02:46 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `updatedata`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `shopname` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL,
  `Imagename` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `shopname`, `brand`, `color`, `Imagename`) VALUES
(0, 'ffffffffffffffffffffff', 'nike', 'blue', 'TEST_20.jpg'),
(0, 'papshop', 'adidas', 'red', 'TEST_10.jpg'),
(0, 'test2', 'nike', 'red', 'TEST_4.jpg'),
(0, 'beeshop', 'nike', 'white', 'TEST_6.jpg'),
(0, 'bobshop2', 'nike', 'grey', 'MicrosoftTeams-image (549).png'),
(0, 'test2', 'nike', 'red', 'TEST_4.jpg'),
(0, 'papshop', 'adidas', 'blue', 'TEST_31.jpg'),
(0, 'bobshop2', 'nike', 'red', 'MicrosoftTeams-image (557).png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

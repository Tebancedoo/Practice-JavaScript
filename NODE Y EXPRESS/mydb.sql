-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2024 a las 15:50:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `name` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`name`, `adress`) VALUES
('Juan Perez', '1'),
('Jose Gomez', '2'),
('Pepe Gonzalez', '3'),
('Carla ', '4'),
('Mateo', '5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(10) NOT NULL COMMENT '	Aquí de alojara el codigo con el orden en el que ingrese el producto',
  `codigo_producto` varchar(30) NOT NULL COMMENT 'Aqui se alojara el un identificador alfanumerico del producto que ingrese',
  `nombre_producto` varchar(30) NOT NULL COMMENT ' Aquí se alojara el nombre de los productos.',
  `id_categoria` int(10) NOT NULL COMMENT '	Aquí se alojara el identificador numerico de la categoria',
  `documento_creador` varchar(30) NOT NULL COMMENT 'Aquí se alojara en documento del creador del producto.	',
  `precio_producto` double NOT NULL COMMENT 'Aquí se guardara el precio del prodcuto seleccionado.',
  `id_estado` int(10) NOT NULL COMMENT '	Aqui se almacenara el estado del producto'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `codigo_producto`, `nombre_producto`, `id_categoria`, `documento_creador`, `precio_producto`, `id_estado`) VALUES
(1, 'A1', 'Xiaomi redmi 9A', 1, '1212', 389, 1),
(2, 'A2', 'Xiaomi 12', 1, '1212', 1769900, 1),
(3, 'A3', 'Umidigi A11 Pro Max', 1, '1212', 419900, 1),
(4, 'A4', 'Smartphone Tecno Pop', 1, '1212', 315499, 1),
(5, 'A5', 'Doogee S98', 1, '1212', 2349990, 1),
(6, 'A6', 'Umidigi A11s', 1, '1212', 319900, 1),
(7, 'A7', 'Xiaomi Redmi Note 10', 1, '1212', 801900, 1),
(8, 'A8', 'iPhone 7', 1, '1212', 1789000, 1),
(9, 'B1', 'Tablet Samsung', 2, '222', 717460, 1),
(10, 'B2', 'Tableta Ma11', 2, '222', 419419, 1),
(11, 'B3', 'Tableta Inteligente 10', 2, '222', 366272, 1),
(12, 'B4', 'Tableta Hd', 2, '222', 439941, 1),
(13, 'B5', 'Tableta Hd', 2, '222', 439941, 1),
(14, 'B6', 'Tableta Inteligente', 2, '222', 331963, 1),
(15, 'B7', 'Tableta Inch X11pro ', 2, '222', 298591, 1),
(16, 'B8', 'Tableta Inteligente Android 11', 2, '222', 320372, 1),
(17, 'C1', 'Portátil Asus X415EA', 3, '333', 298591, 1),
(18, 'C2', 'Portátil Lenovo IdeaPad', 3, '333', 1300000, 1),
(19, 'C3', 'Portátil Asus Vivobook', 3, '333', 2699800, 1),
(20, 'C4', 'Portátil Asus VivoBook Pro 15', 3, '333', 2599000, 1),
(21, 'C5', 'Portátil gamer Asus TUF', 3, '444', 3299000, 1),
(22, 'C6', 'Laptop Hp 14', 3, '444', 1299000, 1),
(23, 'C7', 'Portátil Asus VivoBook X543UA', 3, '444', 2020553, 1),
(24, 'C8', 'Portátil Gamer Acer Nitro 5', 3, '444', 2020553, 1),
(28, 'D4', 'Torre Cpu Gamer Ryzen 7', 4, '555', 1009900, 1),
(30, 'D6', 'Cpu Torre+monitor 17', 4, '555', 1949900, 1),
(31, 'D7', 'Torre Cpu Intel Celeron G5925', 4, '555', 1450000, 1),
(32, 'D8', 'Cpu Torre Pc Gamer Amd', 4, '555', 3169900, 1),
(33, 'E1', 'Audífonos in-ear gamer', 5, '222', 1282500, 1),
(34, 'E2', 'Audífonos Logitech G', 5, '222', 579900, 1),
(35, 'E3', 'Audífonos inalámbricos Sony', 5, '222', 579900, 1),
(36, 'E4', 'Redmi Buds 4 Pro', 5, '222', 359000, 1),
(37, 'E5', 'Audífonos inalámbricos JBL', 5, '333', 185900, 1),
(38, 'E6', ' Lenovo LivePods LP6', 5, '333', 76282, 1),
(39, 'E7', 'Udífonos in-ear gamer inalámbr', 5, '333', 76282, 1),
(40, 'E8', 'Audífonos in-ear inalámbricos ', 5, '333', 33999, 1),
(41, 'F1', 'Monitor gamer curvo Samsung', 6, '444', 798619, 1),
(42, 'F2', 'Monitor gamer Samsung F24T35 l', 6, '444', 583178, 1),
(43, 'F3', 'Monitor Gamer LG 23.8', 6, '444', 583178, 1),
(44, 'F4', 'Monitor Gamer 22', 6, '444', 468000, 1),
(45, 'F5', 'Pantalla De Monitor Mini 3.5', 6, '555', 468000, 1),
(46, 'F6', 'Monitor Samsung M5', 6, '555', 468000, 1),
(47, 'F7', 'Monitor gamer LG 27UL500 led', 6, '555', 1536308, 1),
(48, 'F8', 'Monitor Gamer LG 27 Ultragear', 6, '555', 1117719, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo_producto`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `documento_creador` (`documento_creador`),
  ADD KEY `id_estado` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE DATABASE IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `meals`
DROP TABLE IF EXISTS `meals`;
CREATE TABLE `meals` (
  `idmeals` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `number_of_guests` int(11) DEFAULT NULL,
  PRIMARY KEY (`idmeals`)
) ENGINE = InnoDB AUTO_INCREMENT = 6;
-- Dumping data for table `meals`
LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO
  `meals`
VALUES
  (1, 'bla bla bla', 3),(2, 'bla bla bla', 3),(3, 'asdasd', 7),(4, 'benjamins karry', 10),(5, 'oooooooooo', 1);
  /*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
use heroku_14812ab0db46b5e;
CREATE TABLE `meals` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(45) DEFAULT NULL,
    `number_of_guests` int(11) DEFAULT NULL,
    `price` DECIMAL(10.2),
    `created_date` DATE,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 6;
INSERT INTO
  `meals`(
    `title`,
    `number_of_guests`,
    `price`,
    `created_date`
  )
VALUES
  ('Chickenburger', 6, '600', '2021-10-22 12:00:00');
INSERT INTO
  `meals`(
    `title`,
    `number_of_guests`,
    `price`,
    `created_date`
  )
VALUES
  ('Vegburger', 4, '400', '2021-10-30 12:00:00');
INSERT INTO
  `meals`(
    `title`,
    `number_of_guests`,
    `price`,
    `created_date`
  )
VALUES
  ('lambburger', 5, '800', '2021-10-26 16:00:00');
CREATE Table reservation(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    number_of_guests INT NOT NULL,
    meal_id INT NOT NULL,
    created_date DATE,
    contact_phonenumber VARCHAR(250),
    contact_name VARCHAR(250),
    contact_email VARCHAR(250),
    FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`)
  );
INSERT INTO
  reservation(
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    4,
    15,
    '2021-10-02',
    '111111',
    'Jhon',
    'jhon@mail.com'
  );
INSERT INTO
  reservation(
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    4,
    25,
    '2021-10-25',
    '222222',
    'santhosh',
    'san@mail.com'
  );
INSERT INTO
  reservation(
    number_of_guests,
    meal_id,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email
  )
VALUES(
    5,
    35,
    '2021-10-30',
    '333333',
    'sunil',
    'sunil@mail.com'
  );
select
  *
from
  reservation;
CREATE TABLE review(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(300),
    meal_id INT,
    FOREIGN KEY(`meal_id`) REFERENCES `meals` (`id`),
    stars INT,
    created_date DATE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
INSERT INTO
  review(title, meal_id, stars, created_date)
VALUES('good', 15, 4, '2021-10-30');
INSERT INTO
  review(title, meal_id, stars, created_date)
VALUES('avarage', 25, 2, '2021-10-24');
INSERT INTO
  review(title, meal_id, stars, created_date)
VALUES('Super', 35, 5, '2021-10-23');
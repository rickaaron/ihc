/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 8.0.13 : Database - db_consultorio
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_consultorio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `db_consultorio`;

/*Table structure for table `t_dat_patients` */

DROP TABLE IF EXISTS `t_dat_patients`;

CREATE TABLE `t_dat_patients` (
  `id_patient` int(10) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `lastname_1` varchar(40) DEFAULT NULL,
  `lastname_2` varchar(40) DEFAULT NULL,
  `sex` enum('hombre','mujer','indefinido') DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `birthdate` varchar(20) DEFAULT NULL,
  `civil_status` enum('soltero','casado','divorciado','viudo','libre') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `children` int(10) DEFAULT NULL,
  `direction` varchar(40) DEFAULT NULL,
  `colony` varchar(20) DEFAULT NULL,
  `cp` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `telephone` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `office` varchar(10) DEFAULT NULL,
  `cellphone` varchar(40) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `record` text,
  `status` enum('deleted','active') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'active',
  `uuid` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_patient`),
  KEY `t_dat_patients_ibfk_1` (`f_id_user`),
  CONSTRAINT `t_dat_patients_ibfk_1` FOREIGN KEY (`f_id_user`) REFERENCES `t_dat_users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_patients` */

LOCK TABLES `t_dat_patients` WRITE;

insert  into `t_dat_patients`(`id_patient`,`f_id_user`,`name`,`lastname_1`,`lastname_2`,`sex`,`age`,`birthdate`,`civil_status`,`children`,`direction`,`colony`,`cp`,`city`,`telephone`,`office`,`cellphone`,`email`,`record`,`status`,`uuid`) values (5,11,'Alejandro Ernandez','Ramirez','Carrizales','indefinido',18,'2019-05-25','libre',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active','HMUu38FVzS34g'),(12,11,'Arturo Ramirez','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','deleted','HMUu38FVzSgg33'),(13,11,'NUEVO','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','deleted','HMUu38FVzSveee'),(14,11,'uuid','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','deleted','HMUu38FVzSwe'),(15,11,'Roberto Gonzales','Ramirez','Carrizales','indefinido',18,'2019-05-03','soltero',2,'Nuevo Leon, Mexico','Aspreso #2015','6764','Monterrey','789789789','456456456','123123123','alan@gmail.com','Pesadillas','active','HMUu38FVzS');

UNLOCK TABLES;

/*Table structure for table `t_dat_quotes` */

DROP TABLE IF EXISTS `t_dat_quotes`;

CREATE TABLE `t_dat_quotes` (
  `id_quote` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(11) NOT NULL,
  `f_id_patient` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `hour` int(11) DEFAULT NULL,
  `period` enum('pm','am') DEFAULT NULL,
  `min` varchar(4) DEFAULT NULL,
  `status` enum('active','deleted','archived') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'active',
  `reason` text,
  PRIMARY KEY (`id_quote`),
  KEY `f_id_patient` (`f_id_patient`),
  CONSTRAINT `t_dat_quotes_ibfk_1` FOREIGN KEY (`f_id_patient`) REFERENCES `t_dat_patients` (`id_patient`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_quotes` */

LOCK TABLES `t_dat_quotes` WRITE;

insert  into `t_dat_quotes`(`id_quote`,`f_id_user`,`f_id_patient`,`date`,`hour`,`period`,`min`,`status`,`reason`) values (1,11,5,'2019-05-08',1,'am','0','archived',NULL),(2,11,5,'2019-05-08',1,'am','0','archived',NULL),(3,11,5,'2019-05-08',1,'am','0','deleted',NULL),(4,11,5,'2019-05-08',1,'am','0','deleted','me la pelas\n'),(5,11,5,'2019-05-08',1,'am','0','deleted',''),(6,11,5,'2019-05-08',1,'am','0','deleted',''),(7,11,12,'2019-05-08',1,'am','0','deleted',''),(8,11,5,'2019-05-08',1,'am','0','deleted',''),(9,11,5,'2019-05-08',9,'am','00','archived',NULL),(10,11,15,'2019-05-08',1,'am','00','active',NULL);

UNLOCK TABLES;

/*Table structure for table `t_dat_specialties` */

DROP TABLE IF EXISTS `t_dat_specialties`;

CREATE TABLE `t_dat_specialties` (
  `id_spe` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(11) DEFAULT NULL,
  `specialtie` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id_spe`),
  KEY `f_id_user` (`f_id_user`),
  CONSTRAINT `t_dat_specialties_ibfk_1` FOREIGN KEY (`f_id_user`) REFERENCES `t_dat_users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_specialties` */

LOCK TABLES `t_dat_specialties` WRITE;

insert  into `t_dat_specialties`(`id_spe`,`f_id_user`,`specialtie`) values (1,1,'asdasdasd'),(18,11,'qcqcqwcqcwcwqwc');

UNLOCK TABLES;

/*Table structure for table `t_dat_treatments` */

DROP TABLE IF EXISTS `t_dat_treatments`;

CREATE TABLE `t_dat_treatments` (
  `id_treatment` int(11) NOT NULL AUTO_INCREMENT,
  `f_id_user` int(11) DEFAULT NULL,
  `f_id_patient` int(11) DEFAULT NULL,
  `f_id_quote` int(11) DEFAULT NULL,
  `symptom` text,
  `treatment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `status` enum('active','deleted') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'active',
  `reason` text,
  PRIMARY KEY (`id_treatment`),
  KEY `f_id_quote` (`f_id_quote`),
  KEY `f_id_user` (`f_id_user`),
  KEY `f_id_patient` (`f_id_patient`),
  CONSTRAINT `t_dat_treatments_ibfk_1` FOREIGN KEY (`f_id_quote`) REFERENCES `t_dat_quotes` (`id_quote`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `t_dat_treatments_ibfk_2` FOREIGN KEY (`f_id_user`) REFERENCES `t_dat_users` (`id_user`),
  CONSTRAINT `t_dat_treatments_ibfk_3` FOREIGN KEY (`f_id_patient`) REFERENCES `t_dat_patients` (`id_patient`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_treatments` */

LOCK TABLES `t_dat_treatments` WRITE;

insert  into `t_dat_treatments`(`id_treatment`,`f_id_user`,`f_id_patient`,`f_id_quote`,`symptom`,`treatment`,`status`,`reason`) values (1,11,5,5,' quotequote',' quotequote','deleted','no es segisdjobsd csdichb sldhic'),(2,11,5,5,' asdasdasd',' asdasdasd','deleted',''),(3,11,5,1,' asdasdasd',' asdasdasdasd','deleted',''),(4,11,5,1,'sdfsdfsdf',' sdfsdfsdf','deleted',''),(5,11,5,1,' f_id_quotef_id_quote',' f_id_quotef_id_quote','deleted',''),(6,11,5,1,' change_quotechange_quote',' change_quotechange_quote','deleted',''),(7,11,5,1,' vdfvdfv',' vdfvdfv','deleted',''),(10,11,5,1,' sdfsdffds',' sdfsdffds','active',''),(11,11,5,1,' dqwefwefwef',' wfwefwef','active',''),(12,11,5,2,' sdfsvsdv',' sdvsvsdv','active',''),(13,11,5,9,' Le duele la cabeza',' PArasetamol','active',NULL);

UNLOCK TABLES;

/*Table structure for table `t_dat_users` */

DROP TABLE IF EXISTS `t_dat_users`;

CREATE TABLE `t_dat_users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `lastname_1` varchar(30) DEFAULT NULL,
  `lastname_2` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `direction` varchar(50) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `rfc` varchar(30) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `t_dat_users` */

LOCK TABLES `t_dat_users` WRITE;

insert  into `t_dat_users`(`id_user`,`name`,`lastname_1`,`lastname_2`,`email`,`direction`,`telephone`,`rfc`,`password`) values (1,'qweqwe','qweqwe','qweqwe','asdasdasd',NULL,NULL,NULL,NULL),(11,'ricardo','Esquivel','Gauna','ricardoaaron_@hotmail.com','Valle hermoso sector 2','8118930037','AR123123123','qweqweqwe');

UNLOCK TABLES;

/* Trigger structure for table `t_dat_treatments` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `t_dat_treatment` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `t_dat_treatment` AFTER INSERT ON `t_dat_treatments` FOR EACH ROW BEGIN 
      
    
    UPDATE t_dat_quotes SET  `status` = 'archived' WHERE id_quote = NEW.f_id_quote;
    END */$$


DELIMITER ;

/*Table structure for table `v_cat_quotes` */

DROP TABLE IF EXISTS `v_cat_quotes`;

/*!50001 DROP VIEW IF EXISTS `v_cat_quotes` */;
/*!50001 DROP TABLE IF EXISTS `v_cat_quotes` */;

/*!50001 CREATE TABLE  `v_cat_quotes`(
 `id_user` int(11) ,
 `id_patient` int(11) ,
 `id_quote` int(11) ,
 `name` varchar(40) ,
 `date` date ,
 `hour` int(11) ,
 `period` enum('pm','am') ,
 `min` varchar(4) ,
 `status` enum('active','deleted','archived') 
)*/;

/*Table structure for table `v_cat_tratments` */

DROP TABLE IF EXISTS `v_cat_tratments`;

/*!50001 DROP VIEW IF EXISTS `v_cat_tratments` */;
/*!50001 DROP TABLE IF EXISTS `v_cat_tratments` */;

/*!50001 CREATE TABLE  `v_cat_tratments`(
 `id_user` int(11) ,
 `id_patient` int(11) ,
 `id_treatment` int(11) ,
 `symptom` text ,
 `treatment` text ,
 `status` enum('active','deleted') ,
 `name` varchar(40) ,
 `date` date ,
 `hour` varchar(19) 
)*/;

/*View structure for view v_cat_quotes */

/*!50001 DROP TABLE IF EXISTS `v_cat_quotes` */;
/*!50001 DROP VIEW IF EXISTS `v_cat_quotes` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_cat_quotes` AS select `user`.`id_user` AS `id_user`,`quote`.`f_id_patient` AS `id_patient`,`quote`.`id_quote` AS `id_quote`,`patient`.`name` AS `name`,`quote`.`date` AS `date`,`quote`.`hour` AS `hour`,`quote`.`period` AS `period`,`quote`.`min` AS `min`,`quote`.`status` AS `status` from ((`t_dat_users` `user` join `t_dat_quotes` `quote` on((`user`.`id_user` = `quote`.`f_id_user`))) join `t_dat_patients` `patient` on((`quote`.`f_id_patient` = `patient`.`id_patient`))) */;

/*View structure for view v_cat_tratments */

/*!50001 DROP TABLE IF EXISTS `v_cat_tratments` */;
/*!50001 DROP VIEW IF EXISTS `v_cat_tratments` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_cat_tratments` AS select `user`.`id_user` AS `id_user`,`treatment`.`f_id_patient` AS `id_patient`,`treatment`.`id_treatment` AS `id_treatment`,`treatment`.`symptom` AS `symptom`,`treatment`.`treatment` AS `treatment`,`treatment`.`status` AS `status`,`patient`.`name` AS `name`,`quote`.`date` AS `date`,concat(`quote`.`hour`,':',`quote`.`min`,' ',`quote`.`period`) AS `hour` from (((`t_dat_users` `user` join `t_dat_treatments` `treatment` on((`user`.`id_user` = `treatment`.`f_id_user`))) join `t_dat_quotes` `quote` on((`treatment`.`f_id_quote` = `quote`.`id_quote`))) join `t_dat_patients` `patient` on((`treatment`.`f_id_patient` = `patient`.`id_patient`))) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

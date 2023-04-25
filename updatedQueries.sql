-- @author:Kazi tanvir azad --
-- All members are mandatorily required to execute below queries one by one sequentially to update the database --

-- login to root user --
-- create database --
 create database hotel_management_project_2;
 GRANT ALL PRIVILEGES ON hotel_management_project_2.* TO 'yourusername'@localhost;

-- now you can login to your user to perform below task --
system mysql -u yourusername -p;
-- customer table --
CREATE TABLE customer(
cust_id INT AUTO_INCREMENT NOT NULL,
f_name VARCHAR(20) NOT NULL,
l_name VARCHAR(20),
email VARCHAR(40) NOT NULL,
phone VARCHAR(10) NOT NULL,
street VARCHAR(100) NOT NULL,
city VARCHAR(20) NOT NULL,
state VARCHAR(20) NOT NULL,
zip VARCHAR(10) NOT NULL,
CONSTRAINT customer_PK_cust_id PRIMARY KEY(cust_id)
);

-- setting auto increment to 100 as default starting number for primary key --
ALTER TABLE customer AUTO_INCREMENT=100;

-- CUSTOMER table dummy data --
INSERT INTO CUSTOMER (f_name,l_name,email,phone,street,city,state,zip) VALUES ('Tom','Cruise','tom_cruise@gmail.com','8734234785','Royal Street','Hollywood','California','742101'),('Geoffrey','Knapper','gknapper0@bbb.org','2045192878','Chive','Dryden','Tombu','672341'),('Allys','Lazonby','alazonby1@quantcast.com','5295672451','Packers','Porter','Binzhou','364564'),('Dael','Bradd','dbradd2@tiny.cc','5692332546','Browning','Lisui','Reindahl','234221'),('Teodorico','Brent','tbrent3@amazon.co.uk','8476230153','Eagan','Santa Cruz do Bispo','Porto','4455794'),('Holt','Whipple','hwhipple4@ed.gov','9433980751','Thackeray','Maria','Namekagon','622923'),('Gran','Medina','gmedina5@pbs.org','2681329513','Logan','Nanchoc','Westridge','976756'),('Avivah','Lundy','alundy6@e-recht24.de','4556327021','Stephen','Obuasi','Crownhardt','976542'),('Foss','Dennerley','fdennerley7@odnoklassniki.ru','1083454105','Upham','Chiclayo','Twin Pines','786553'),('Hodge','Andrus','handrus8@squidoo.com','1239537436','American Ash','Ratnapura','Sodermanland','70000'),('Roberta','Kimmince','rkimmince9@merriam-webster.com','1563136259','Bayside','Sanankerto','Carpenter','4455794'),('Leo','Newsome','lnewsomea@auda.org.au','6136579017','Little Fleur','Vingaker','Sodermanland','643292'),('Urbanus','Shepton','usheptonb@washington.edu','2707147220','Farragut','Xiali','Onsgard','764552'),('Cicily','Bickerdicke','cbickerdickec@vkontakte.ru','1455387059','Delaware','Kurkino','Nanchoc','303623'),('Louisette','Riddler','lriddlerd@facebook.com','1735323600','Mesta','Meybod','Knutson','4221331'),('Aura','Bruhnsen','abruhnsene@yellowpages.com','8438857890','Springs','Tongchon-up','Waywood','235212'),('Atalanta','Laboune','alabounef@hugedomains.com','5271048973','Northview','Klatakan','Colorado','456324'),('Zacharie','Cadalleder','zcadallederg@accuweather.com','7242957874','Dryden','Vincennes','Ile-de-France','94685'),('Betteann','Darridon','bdarridonh@hubpages.com','5907308433','Vahlen','Talakag','Ratnapura','877508'),('Andromache','Crimes','acrimesi@cbsnews.com','6783820139','Dayton','Tierp','Uppsala','8152324'),('Terence','Snalum','tsnalumj@pbs.org','5333887940','Dorton','Rappang','Vingaker','232456');


-- room_ctgry table--
CREATE TABLE roomtype(
rt_id INT AUTO_INCREMENT NOT NULL,
category VARCHAR(40) NOT NULL,
no_rooms INT NOT NULL,
rate DOUBLE NOT NULL,
CONSTRAINT roomtype_PK_rt_id PRIMARY KEY(rt_id)
);

-- setting auto increment to 100 as default starting number for primary key --
ALTER TABLE roomtype AUTO_INCREMENT=3301;


-- roomtype table dummy data --
INSERT INTO roomtype (category, no_rooms,rate) VALUES ('Maharaja Suite',5,2800.00),('Premium Suite',6,1800.00),('Luxury Suite',5,1200.00),('Business Executive',6,950.00);



-- services table--
CREATE TABLE services(
service_id INT AUTO_INCREMENT NOT NULL,
servtype VARCHAR(30) NOT NULL,
rate DOUBLE NOT NULL,
CONSTRAINT services_PK_service_id PRIMARY KEY(service_id)
);


-- services table dummy data --
INSERT INTO services (servtype,rate) VALUES ('Sauna',200.00),('Spa',300.00),('Laundry',80.00),('Mini Bar',500.00),('Refrigerator',100.00),('Internet',60.00);



-- room table--
CREATE TABLE room(
room_id INT NOT NULL AUTO_INCREMENT,
rt_id INT,
room_num VARCHAR(6) NOT NULL,
CONSTRAINT room_PK_room_id PRIMARY KEY(room_id),
CONSTRAINT FK_roomtype_room FOREIGN KEY(rt_id) REFERENCES roomtype(rt_id)
);



-- room table dummy data --
INSERT INTO room (rt_id,room_num) VALUES (3301,'m401'),(3301,'m402'),(3301,'m403'),(3301,'m404'),(3301,'m405'),(3302,'p301'),(3302,'p302'),(3302,'p303'),(3302,'p304'),(3302,'p305'),(3302,'p306'),(3303,'l201'),(3303,'l202'),(3303,'l203'),(3303,'l204'),(3303,'l205'),(3304,'b101'),(3304,'b102'),(3304,'b103'),(3304,'b104'),(3304,'b105'),(3304,'b106');




-- bookings table--
CREATE TABLE bookings(
book_id INT AUTO_INCREMENT NOT NULL,
cust_id INT,
room_id INT,
checkin DATE NOT NULL,
checkout DATE NOT NULL,
CONSTRAINT bookings_PK_book_id PRIMARY KEY(book_id),
CONSTRAINT FK_customer_bookings FOREIGN KEY(cust_id) REFERENCES customer(cust_id),
CONSTRAINT FK_room_bookings FOREIGN KEY(room_id) REFERENCES room(room_id));

-- setting auto increment to 500 as default starting number for primary key --
ALTER TABLE bookings AUTO_INCREMENT=3301;


-- bookings table dummy data --
-- bookings from 14th may to 17th may 2022 there will not be any free slots available for Luxury Suite --
-- rooms to simulate room not available during the range --
INSERT INTO bookings (cust_id,room_id,checkin,checkout) VALUES (100,6,'2021-10-02','2021-10-06'),(101,16,'2021-10-11','2021-10-14'),(102,12,'2021-10-15','2021-10-21'),(103,9,'2021-10-22','2021-10-25'),(104,8,'2021-10-25','2021-10-29'),(105,7,'2021-11-12','2021-11-16'),(106,21,'2021-11-17','2021-11-22'),(107,15,'2021-11-19','2021-11-26'),(108,11,'2021-11-30','2021-12-06'),(109,19,'2021-12-02','2021-12-08'),(110,18,'2021-12-05','2021-12-11'),(111,9,'2021-12-09','2021-12-12'),(112,4,'2021-12-17','2021-12-23'),(100,16,'2021-12-18','2021-12-25'),(104,4,'2021-12-21','2021-12-26'),(107,17,'2022-01-02','2022-01-08'),(106,1,'2022-01-05','2022-01-11'),(113,6,'2022-01-11','2022-01-15'),(114,14,'2022-01-26','2022-02-01'),(105,9,'2022-02-02','2022-02-06'),(102,10,'2022-02-07','2022-02-11'),(101,21,'2022-02-14','2022-02-17'),(115,16,'2022-03-10','2022-03-13'),(116,7,'2022-03-15','2022-03-21'),(117,13,'2022-03-17','2022-03-19'),(118,19,'2022-03-23','2022-03-27'),(119,4,'2022-04-01','2022-04-06'),(120,17,'2022-04-06','2022-04-13'),(113,18,'2022-04-09','2022-04-11'),(115,12,'2022-04-13','2022-04-22'),(110,18,'2022-04-22','2022-04-27'),(118,13,'2022-04-27','2022-05-01'),(117,14,'2022-05-12','2022-05-17'),(120,12,'2022-05-13','2022-05-20'),(116,13,'2022-05-13','2022-05-21'),(103,16,'2022-05-14','2022-05-21'),(119,15,'2022-05-14','2022-05-22');



-- bookserv table--
CREATE TABLE bookserv(
bksrv_id INT NOT NULL AUTO_INCREMENT,
book_id INT,
service_id INT,
CONSTRAINT bookserv_PK_bksrv_id PRIMARY KEY(bksrv_id),
CONSTRAINT FK_bookings_bookserv FOREIGN KEY(book_id) REFERENCES bookings(book_id),
CONSTRAINT FK_services_bookserv FOREIGN KEY(service_id) REFERENCES services(service_id)
);

-- bookserv table dummy data --
INSERT INTO bookserv (book_id,service_id) VALUES (3301,6),(3301,4),(3301,3),(3302,1),(3302,2),(3302,3),(3303,5),(3303,4),(3303,2),(3304,4),(3304,2),(3304,6),(3305,3),(3305,1),(3305,6),(3306,2),(3306,3),(3307,6),(3307,5),(3307,1),(3308,6),(3308,4),(3308,2),(3309,6),(3309,1),(3309,5),(3310,4),(3310,3),(3310,6),(3311,2),(3311,4),(3312,3),(3312,2),(3312,4),(3312,5),(3313,6),(3314,3),(3314,4),(3314,2),(3315,6),(3315,2),(3315,3),(3316,4),(3316,6),(3316,3),(3317,6),(3317,4),(3318,6),(3318,5),(3318,1),(3318,2),(3319,3),(3319,2),(3319,4),(3320,5),(3320,2),(3321,3),(3322,5),(3322,4),(3322,3),(3323,2),(3323,4),(3323,5),(3324,6),(3324,2),(3325,1),(3325,5),(3326,1),(3326,4),(3327,6),(3328,4),(3328,6),(3328,3),(3329,6),(3329,3),(3330,1),(3330,5),(3330,4),(3331,6),(3331,4),(3332,1),(3332,4),(3332,3),(3333,5),(3333,4),(3333,2),(3334,6),(3334,1),(3334,3),(3335,6),(3335,2),(3335,1),(3336,5),(3336,3),(3337,2),(3337,6);


-- payments table --
CREATE TABLE payments(
pay_id INT NOT NULL AUTO_INCREMENT,
book_id INT,
pay_methd VARCHAR(20) NOT NULL,
tax DOUBLE NOT NULL,
discount DOUBLE NOT NULL,
CONSTRAINT payments_PK_pay_id PRIMARY KEY(pay_id),
CONSTRAINT FK_bookings_payments FOREIGN KEY(book_id) REFERENCES bookings(book_id)
);

-- setting auto increment to 100 as default starting number for primary key -
ALTER TABLE payments AUTO_INCREMENT=100;

-- payments table dummy data --
INSERT INTO payments (book_id,pay_methd,tax,discount) VALUES (3301,'card',18.0,20.0),(3302,'cash',18.0,20.0),(3303,'paypal',18.0,15.0),(3304,'cash',18.0,20.0),(3305,'card',18.0,15.0),(3306,'paypal',18.0,20.0),(3307,'cash',18.0,15.0),
(3308,'cash',18.0,15.0),(3309,'card',18.0,20.0),(3310,'paypal',18.0,20.0),(3311,'net banking',18.0,15.0),(3312,'card',18.0,20.0),(3313,'paypal',18.0,15.0),(3314,'net banking',18.0,15.0),(3315,'net banking',18.0,20.0),(3316,'card',18.0,15.0),(3317,'card',18.0,15.0),(3318,'card',18.0,15.0),(3319,'net banking',18.0,20.0),(3320,'card',18.0,15.0),(3321,'net banking',18.0,15.0),(3322,'net banking',18.0,25.0),(3323,'card',18.0,25.0),(3324,'card',18.0,25.0),(3325,'paypal',18.0,15.0),(3326,'net banking',18.0,15.0),(3327,'card',18.0,25.0),(3328,'net banking',18.0,15.0),(3329,'card',18.0,25.0),(3330,'cash',18.0,25.0),(3331,'card',18.0,15.0),(3332,'net banking',18.0,20.0),(3333,'cash',18.0,25.0),(3334,'net banking',18.0,25.0),(3335,'card',18.0,25.0),(3336,'card',18.0,20.0),(3337,'net banking',18.0,20.0);
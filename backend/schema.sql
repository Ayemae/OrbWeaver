DROP DATABASE IF EXISTS orbweaver_db;

CREATE DATABASE orbweaver_db;

USE orbweaver_db;

CREATE TABLE pages (
id INT NOT NULL AUTO_INCREMENT,
page_path TEXT(2000),
upload_time DATETIME,
author_text TEXT,
next_page INT(10),
book_id INT,
chapter_id INT,
posted BOOLEAN,
PRIMARY KEY (id)
);


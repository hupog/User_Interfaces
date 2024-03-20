var pruebasunitarias = Array(
//tests id_programa
Array(1,'programa', 'id_programa', 1, '',false),
Array(1,'programa','id_programa', 2,'123',true),
Array(2,'programa','id_programa', 3,'1234567', false),
Array(2,'programa','id_programa', 4,'123',true),
Array(3,'programa','id_programa', 5,'123e',false),
Array(3,'programa','id_programa', 6,'12345',true),
Array(4,'programa','id_programa', 7,'123456adv',false),
Array(4,'programa','id_programa', 8,'654321',true),
//tests nombre_programa
Array(5 ,'programa','nombre_programa', 9,'a',false),
Array(5 ,'programa','nombre_programa', 10,'Nombre de programa',true),
Array(6 ,'programa','nombre_programa', 11,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(6 ,'programa','nombre_programa', 12,'nombre de programa ñe',true),
Array(7 ,'programa','nombre_programa', 13,'nombre: de programa',false),
Array(7 ,'programa','nombre_programa', 14,'nombre de programa á',true),
Array(8 ,'programa','nombre_programa', 15,'nombre, de programa',false),
Array(8 ,'programa','nombre_programa', 16,'programa correcto con ñ y ácentos',true),

//tests acronimo_programa
Array(9,'programa','acronimo_programa',17,'aa',false),
Array(9,'programa','acronimo_programa',18,'AAAa',true),
Array(10,'programa','acronimo_programa',19,'aaaaaaaaaaaaaaaaaaaaa',false),
Array(10,'programa','acronimo_programa',20,'hola',true),
Array(11,'programa','acronimo_programa',21,'ABCDEFG HIJ',false),
Array(11,'programa','acronimo_programa',22,'áeiou',false),
Array(11,'programa','acronimo_programa',23,'AEUIOUF',true),
Array(12,'programa','acronimo_programa',24,'ABCD ÉFGH,',false),
Array(12,'programa','acronimo_programa',25,'AbcEfg',true),

//tests nombre_original_programa
Array(13,'programa','nombre_original_programa',26,'nombre',false),
Array(13,'programa','nombre_original_programa',27,'nombreprograma',true),
Array(14,'programa','nombre_original_programa',28,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(14,'programa','nombre_original_programa',29,'nombre programa',true),
Array(15,'programa','nombre_original_programa',30,'nombre_programa',false),
Array(15,'programa','nombre_original_programa',31,'ñombreprograma',true),
Array(16,'programa','nombre_original_programa',32,'nombre_programa.hola',false),
Array(16,'programa','nombre_original_programa',33,'Ñombreprograma',true),

//tests autor_programa
Array(17,'programa','autor_programa',34,'nombre',false),
Array(17,'programa','autor_programa',35,'nombreprograma',true),
Array(18,'programa','autor_programa',36,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(18,'programa','autor_programa',37,'nombre programa',true),
Array(19,'programa','autor_programa',38,'autor_programa',false),
Array(19,'programa','autor_programa',39,'ñombreprograma',true),
Array(20,'programa','autor_programa',40,'autor_programa.hola',false),
Array(20,'programa','autor_programa',41,'Ñombreprograma',true),

//tests autor_original_programa
Array(21,'programa','autor_original_programa',42,'nombre',false),
Array(21,'programa','autor_original_programa',43,'nombreprograma',true),
Array(22,'programa','autor_original_programa',44,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(22,'programa','autor_original_programa',45,'nombre programa',true),
Array(23,'programa','autor_original_programa',46,'autor_original_programa',false),
Array(23,'programa','autor_original_programa',47,'ñombreprograma',true),
Array(24,'programa','autor_original_programa',48,'autor_original_programa.hola',false),
Array(24,'programa','autor_original_programa',49,'Ñombreprograma',true),

//tests ano_programa
Array(25,'programa','ano_programa',50,'',false),
Array(25,'programa','ano_programa',51,'2023',true),
Array(26,'programa','ano_programa',52,'20003',false),
Array(26,'programa','ano_programa',53,'1492',true),
Array(27,'programa','ano_programa',54,'2026',false),
Array(27,'programa','ano_programa',55,'2022',true),
Array(28,'programa','ano_programa',56,'200a',false),
Array(28,'programa','ano_programa',57,'2000',true),

//tests ano_original_programa
Array(29,'programa','ano_original_programa',58,'',false),
Array(29,'programa','ano_original_programa',59,'2023',true),
Array(30,'programa','ano_original_programa',60,'20003',false),
Array(30,'programa','ano_original_programa',61,'1492',true),
Array(31,'programa','ano_original_programa',62,'2026',false),
Array(31,'programa','ano_original_programa',63,'2022',true),
Array(32,'programa','ano_original_programa',64,'200a',false),
Array(32,'programa','ano_original_programa',65,'2000',true),

//tests requisitos_programa
Array(33,'programa','requisitos_programa',66,'',false),
Array(33,'programa','requisitos_programa',67,'aaaaaaa',true),
Array(34,'programa','requisitos_programa',68,'Aqui seria una cadena de 301 caracteres',false),
Array(34,'programa','requisitos_programa',69,'aaaaaaaaaa',true),
Array(35,'programa','requisitos_programa',70,'aáaá ñ,espacio_ aaa',false),
Array(35,'programa','requisitos_programa',71,'aáaá ñ,espacio',true),
Array(36,'programa','requisitos_programa',72,'Requisitos_programa, áaañ',false),
Array(36,'programa','requisitos_programa',73,'Requisitos, de programa',true),

//tests poblacion_desde_programa
Array(37,'programa','poblacion_desde_programa',74,'',false),
Array(37,'programa','poblacion_desde_programa',75,'2',true),
Array(38,'programa','poblacion_desde_programa',76,'222',false),
Array(38,'programa','poblacion_desde_programa',77,'22',true),
Array(39,'programa','poblacion_desde_programa',78,'aa',false),
Array(39,'programa','poblacion_desde_programa',79,'11',true),
Array(40,'programa','poblacion_desde_programa',80,'1234aa',false),
Array(40,'programa','poblacion_desde_programa',81,'12',true),

//tests poblacion_hasta_programa
Array(41,'programa','poblacion_hasta_programa',82,'',false),
Array(41,'programa','poblacion_hasta_programa',83,'2',true),
Array(42,'programa','poblacion_hasta_programa',84,'222',false),
Array(42,'programa','poblacion_hasta_programa',85,'22',true),
Array(43,'programa','poblacion_hasta_programa',86,'aa',false),
Array(43,'programa','poblacion_hasta_programa',87,'11',true),
Array(44,'programa','poblacion_hasta_programa',88,'1234aa',false),
Array(44,'programa','poblacion_hasta_programa',89,'12',true),

//tests unidad_poblacion
Array(45,'programa','unidad_poblacion',90,'MESES',true),
Array(45,'programa','unidad_poblacion',91,'AÑOS',true),
Array(45,'programa','unidad_poblacion',92,'DIAS',false),

Array(46,'programa','unidad_poblacion',93,'MESES',true),
Array(46,'programa','unidad_poblacion',94,'AÑOS',true),
Array(46,'programa','unidad_poblacion',95,'DIAS',false),

//tests tipo_programa
Array(47,'programa','tipo_programa',96,'EVALUACIÓN',true),
Array(47,'programa','tipo_programa',97,'INTERVENCIÓN',true),
Array(47,'programa','tipo_programa',98,'EVALUACIÓN E INTERVENCIÓN',true),
Array(47,'programa','tipo_programa',99,'aaaaaa',false),

Array(48,'programa','tipo_programa',100,'EVALUACIÓN',true),
Array(48,'programa','tipo_programa',101,'INTERVENCIÓN',true),
Array(48,'programa','tipo_programa',102,'EVALUACIÓN E INTERVENCIÓN',true),
Array(48,'programa','tipo_programa',103,'aaaaaa',false),

//tests tiempo_aplicacion_programa
Array(49,'programa','tiempo_aplicacion_programa',104,'',false),
Array(49,'programa','tiempo_aplicacion_programa',105,'22',true),
Array(50,'programa','tiempo_aplicacion_programa',106,'22222',false),
Array(50,'programa','tiempo_aplicacion_programa',107,'222',true),
Array(51,'programa','tiempo_aplicacion_programa',108,'aaa',false),
Array(51,'programa','tiempo_aplicacion_programa',109,'111',true),
Array(52,'programa','tiempo_aplicacion_programa',110,'1234aa',false),
Array(52,'programa','tiempo_aplicacion_programa',111,'12',true),

//tests descrip_interp_programa
Array(53,'programa','descrip_interp_programa',112,'',false),
Array(53,'programa','descrip_interp_programa',113,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),
Array(54,'programa','descrip_interp_programa',114,'Aqui iria una cadena de 5001 caracteres',false),
Array(54,'programa','descrip_interp_programa',115,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaañññ,;',true),
Array(55,'programa','descrip_interp_programa',116,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,____',false),
Array(55,'programa','descrip_interp_programa',117,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaañññ,;',true),
Array(56,'programa','descrip_interp_programa',118,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,____23123123',false),
Array(56,'programa','descrip_interp_programa',119,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,aaaaaaaaaaa23123123',true),

//tests fichero_programa
Array(57,'programa','fichero_programa',120,'aa',false),
Array(57,'programa','fichero_programa',121,'AAAaaaaa',true),
Array(58,'programa','fichero_programa',122,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(58,'programa','fichero_programa',123,'holaaaaaaaa',true),
Array(59,'programa','fichero_programa',124,'ABCDEFG HIJññññ',false),
Array(59,'programa','fichero_programa',125,'áeioujfh',false),
Array(59,'programa','fichero_programa',126,'AEUIOUF',true),
Array(60,'programa','fichero_programa',127,'ABCD ÉFGH,',false),
Array(60,'programa','fichero_programa',128,'AbcEfgasd',true),


//tests enlace_programa
Array(61,'programa','enlace_programa',129,'enlaces',false),
Array(61,'programa','enlace_programa',130,'enlaces.net',true),
Array(62,'programa','enlace_programa',131,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(62,'programa','enlace_programa',132,'enlaces.net:',true),
Array(63,'programa','enlace_programa',133,'enláces ñ /',false),
Array(63,'programa','enlace_programa',134,'enlaces.net/hola',true),
Array(64,'programa','enlace_programa',135,'eñlaces_hola',false),
Array(64,'programa','enlace_programa',136,'enlaces.net/hola',true),

//tests formato_programa
Array(65,'programa','formato_programa',137,'PAPEL',true),
Array(65,'programa','formato_programa',138,'ELECTRÓNICO',true),
Array(65,'programa','formato_programa',139,'PAPEL Y ELECTRÓNICO',true),
Array(65,'programa','formato_programa',140,'aaaaaaa',false),

Array(66,'programa','formato_programa',141,'PAPEL',true),
Array(66,'programa','formato_programa',142,'ELECTRONICO',true),
Array(66,'programa','formato_programa',143,'PAPEL Y ELECTRÓNICO',true),
Array(66,'programa','formato_programa',144,'aaaaaaa',false),

//tests modo_correccion_programa
Array(67,'programa','modo_correccion_programa',145,'PAPEL',true),
Array(67,'programa','modo_correccion_programa',146,'ELECTRÓNICO',true),
Array(67,'programa','modo_correccion_programa',147,'PAPEL Y ELECTRÓNICO',true),
Array(67,'programa','modo_correccion_programa',148,'aaaaaaa',false),

Array(68,'programa','modo_correccion_programa',149,'PAPEL',true),
Array(68,'programa','modo_correccion_programa',150,'ELECTRÓNICO',true),
Array(68,'programa','modo_correccion_programa',151,'PAPEL Y ELECTRÓNICO',true),
Array(68,'programa','modo_correccion_programa',152,'aaaaaaa',false),

//tests modo_aplicacion_programa
Array(69,'programa','modo_aplicacion_programa',153,'INDIVIDUAL',true),
Array(69,'programa','modo_aplicacion_programa',154,'COLECTIVO',true),
Array(69,'programa','modo_aplicacion_programa',155,'INDIVIDUAL Y COLECTIVO',true),
Array(69,'programa','modo_aplicacion_programa',156,'aaaa',false),

Array(70,'programa','modo_aplicacion_programa',157,'INDIVIDUAL',true),
Array(70,'programa','modo_aplicacion_programa',158,'COLECTIVO',true),
Array(70,'programa','modo_aplicacion_programa',159,'INDIVIDUAL Y COLECTIVO',true),
Array(70,'programa','modo_aplicacion_programa',160,'aaaa',false),

//tests imagen_programa
Array(71,'programa','imagen_programa',161,'aa',false),
Array(71,'programa','imagen_programa',162,'AAAaaaaa',true),
Array(72,'programa','imagen_programa',163,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(72,'programa','imagen_programa',164,'holaaaaaaaa',true),
Array(73,'programa','imagen_programa',165,'ABCDEFG HIJññññ',false),
Array(73,'programa','imagen_programa',166,'áeioujfh',false),
Array(73,'programa','imagen_programa',167,'AEUIOUF',true),
Array(74,'programa','imagen_programa',168,'ABCD ÉFGH,',false),
Array(74,'programa','imagen_programa',169,'AbcEfgasd',true),

Array(1,'publicacion', 'id_publicacion', 1, '',false),
Array(1,'publicacion', 'id_publicacion', 2, '212',true),
Array(2,'publicacion', 'id_publicacion', 3, '212341221312',false),
Array(2,'publicacion', 'id_publicacion', 4, '222',true),
Array(3,'publicacion', 'id_publicacion', 5, 'fbaoc',false),
Array(3,'publicacion', 'id_publicacion', 6, '521',true),
Array(4,'publicacion', 'id_publicacion', 7, 'da12',false),
Array(4,'publicacion', 'id_publicacion', 8, '2312',true),

Array(5,'publicacion', 'titulo_publicacion', 1, '',false),
Array(5,'publicacion', 'titulo_publicacion', 2, 'ksadnsdv asd',true),
Array(6,'publicacion', 'titulo_publicacion', 3, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(6,'publicacion', 'titulo_publicacion', 4, 'fsdavsdv',true),
Array(7,'publicacion', 'titulo_publicacion', 5, 'fsadafdf/.',false),
Array(7,'publicacion', 'titulo_publicacion', 6, 'vasdvasdovsadv',true),
Array(8,'publicacion', 'titulo_publicacion', 7, 'vsv987._',false),
Array(8,'publicacion', 'titulo_publicacion', 8, 'vaevwarv',true),

Array(9,'publicacion', 'autor_publicacion', 9, '',false),
Array(9,'publicacion', 'autor_publicacion', 10, 'paeper',true),
Array(10,'publicacion', 'autor_publicacion', 11, 'safassaffassafasfssafassaffassafasfssafassaffassafasfssafassaffassafasfssafassaffassafasfs',false),
Array(10,'publicacion', 'autor_publicacion', 12, 'askdnvaodsas',true),
Array(11,'publicacion', 'autor_publicacion', 13, '89236432',false),
Array(11,'publicacion', 'autor_publicacion', 14, 'nskdfsdoa',true),
Array(12,'publicacion', 'autor_publicacion', 15, '8932-;a',false),
Array(12,'publicacion', 'autor_publicacion', 16, 'sioajhfsdla',true),

Array(13,'publicacion', 'fecha_publicacion', 17, '12/11/2003',false),
Array(13,'publicacion', 'fecha_publicacion', 18, '12/11/2025',true),
Array(14,'publicacion', 'fecha_publicacion', 19, '12-10-2024',false),
Array(14,'publicacion', 'fecha_publicacion', 20, '12/11/2024',true),
Array(15,'publicacion', 'fecha_publicacion', 21, 'dmqpwodwqp',false),
Array(15,'publicacion', 'fecha_publicacion', 22, '12/11/2026',true),

Array(16,'publicacion', 'area_publicacion', 23, '',false),
Array(16,'publicacion', 'area_publicacion', 24, '1223',true),
Array(17,'publicacion', 'area_publicacion', 25, '123214124214',false),
Array(17,'publicacion', 'area_publicacion', 26, '1232',true),
Array(18,'publicacion', 'area_publicacion', 27, 'sfsad',false),
Array(18,'publicacion', 'area_publicacion', 28, '123',true),
Array(19,'publicacion', 'area_publicacion', 29, 'cd-.a',false),
Array(19,'publicacion', 'area_publicacion', 30, '1221',true),

Array(20,'publicacion', 'texto_publicacion', 31, '',false),
Array(20,'publicacion', 'texto_publicacion', 32, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),
Array(21,'publicacion', 'texto_publicacion', 33, 'cadena de 8001 caracteres',false),
Array(21,'publicacion', 'texto_publicacion', 34, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),
Array(22,'publicacion', 'texto_publicacion', 35, 'caracter no ascii',false),
Array(22,'publicacion', 'texto_publicacion', 36, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),
Array(23,'publicacion', 'texto_publicacion', 37, 'cadena de 8002 caracteres',false),
Array(23,'publicacion', 'texto_publicacion', 38, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),

Array(24,'publicacion', 'imagen_publicacion', 39, '',false),
Array(24,'publicacion', 'imagen_publicacion', 40, 'hola.jpg',true),
Array(25,'publicacion', 'imagen_publicacion', 41, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpeg',false),
Array(25,'publicacion', 'imagen_publicacion', 42, 'aaaaaaaaaaaaaaaaaaaaaaaa.jpeg',true),
Array(26,'publicacion', 'imagen_publicacion', 43, 'ñaññaña.jpg',false),
Array(26,'publicacion', 'imagen_publicacion', 44, 'nananana.jpg',true),
Array(27,'publicacion', 'imagen_publicacion', 45, 'hola.pdf',false),
Array(27,'publicacion', 'imagen_publicacion', 46, 'hola.jpeg',true),
Array(28,'publicacion', 'imagen_publicacion', 47, '',false),
Array(28,'publicacion', 'imagen_publicacion', 48, '',true),

);
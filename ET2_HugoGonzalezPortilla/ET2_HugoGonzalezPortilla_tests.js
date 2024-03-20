var def_test = Array(
//tests id_programa
Array('programa','id_programa',1,'tamaño menor que 1' ,false,'id_programa no puede tener menos de 1 dígito'),
Array('programa','id_programa',2,'tamaño mayor que 6',false,'id_programa no puede tener mas de 6 caracteres'),
Array('programa','id_programa',3,'contiene caracter distinto de dígito', false, 'id_programa debe contener solo dígitos'),
Array('programa','id_programa',4,'solo dígitos & tamaño mayor que 1 & menor que 6',true,'Exito'),

//tests nombre_programa
Array('programa','nombre_programa', 5,'tamaño menor que 6', false, 'nombre_programa debe contener al menos 6 caracteres de longitud'),
Array('programa','nombre_programa', 6,'tamaño mayor que 60', false, 'nombre_programa debe tener como máximo 60 caracteres de longitud'),
Array('programa','nombre_programa', 7,'contiene caracter distinto a alfabético con acentos o ñ o espacios', false, 'nombre_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('programa','nombre_programa', 8, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 60', true, 'Exito'), 

//tests acronimo_programa
Array('programa','acronimo_programa',9 ,'tamaño menor que 3',false ,'acronimo_programa debe tener como minimo 3 caracteres de longitud'),
Array('programa','acronimo_programa',10 ,'tamaño mayor que 20',false ,'La longitud maxima de acronimo_programa es de 20 caracteres'),
Array('programa','acronimo_programa',11,'contiene caracter distinto a alfabetico sin espacios o sin acentos',false ,'acronimo_programa solo permite caracteres alfabeticos sin espacios y sin acentos'),
Array('programa','acronimo_programa',12,'caracteres alfabeticos sin espacios y sin acentos & tamaño mayor que 3 & tamaño menor que 20',true ,'Exito'),

//tests nombre_original_programa
Array('programa','nombre_original_programa', 13,'tamaño menor que 6', false, 'nombre_original_programa debe contener al menos 6 caracteres de longitud'),
Array('programa','nombre_original_programa', 14,'tamaño mayor que 60', false, 'nombre_original_programa debe tener como máximo 60 caracteres de longitud'),
Array('programa','nombre_original_programa', 15,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'nombre_original_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('programa','nombre_original_programa', 16, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 60', true, 'Exito'), 

//tests autor_programa
Array('programa','autor_programa', 17,'tamaño menor que 6', false, 'autor_programa debe contener al menos 6 caracteres de longitud'),
Array('programa','autor_programa', 18,'tamaño mayor que 50', false, 'autor_programa debe tener como máximo 60 caracteres de longitud'),
Array('programa','autor_programa', 19,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'autor_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('programa','autor_programa', 20, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 50', true, 'Exito'), 

//tests autor_original_programa
Array('programa','autor_original_programa', 21,'tamaño menor que 6', false, 'autor_original_programa debe contener al menos 6 caracteres de longitud'),
Array('programa','autor_original_programa', 22,'tamaño mayor que 50', false, 'autor_original_programa debe tener como máximo 60 caracteres de longitud'),
Array('programa','autor_original_programa', 23,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'autor_original_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('programa','autor_original_programa', 24,'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 50', true, 'Exito'), 

//tests ano_programa
Array('programa','ano_programa', 25,'tamaño menor que 4', false,'ano_programa debe tener como minimo 4 caracteres de longitud'),
Array('programa','ano_programa', 26,'tamaño mayor que 4', false,'ano_programa debe tener como maximo 4 caracteres de longitud'),
Array('programa','ano_programa', 27,'año superior al actual', false,'El año no puede superior al actual'),
Array('programa','ano_programa', 28,'tamaño = 4 y año no superior al actual', true,'Exito'),

//tests ano_original_programa
Array('programa','ano_original_programa', 29,'tamaño menor que 4', false,'ano_original_programa debe tener como minimo 4 caracteres de longitud'),
Array('programa','ano_original_programa', 30,'tamaño mayor que 4', false,'ano_original_programa debe tener como maximo 4 caracteres de longitud'),
Array('programa','ano_original_programa', 31,'año superior al actual', false,'El año no puede superior al actual'),
Array('programa','ano_original_programa', 32,'tamaño = 4 y año no superior al actual', true,'Exito'),

//tests requisitos_programa
Array('programa','requisitos_programa', 33,'tamaño menor que 6', false,'requisitos_programa debe tener al menos 6 caracteres de longitud'),   
Array('programa','requisitos_programa', 34,'tamaño mayor que 300', false,'requisitos_programa debe tener como maximo 300 caracteres de longitud'),
Array('programa','requisitos_programa', 35,'Contiene caracter distinto de alfabético que no sea ni acento ni ñ ni espacios ni signos de puntuacion', false,'requisitos_programa solo puede contener alfabéticos con acentos, ñ, espacios y signos de puntuación'),
Array('programa','requisitos_programa', 36,'Tamaño mayor que 6 y tamaño menor que 300 y contiene solo caracteres alfabetico incluido acento y ñ y espacios y signos de puntuacion', true,'Exito'),

//tests poblacion_desde_programa
Array('programa','poblacion_desde_programa', 37,'tamaño menor que 1', false,'poblacion_desde_programa debe tener al menos 1 caracter de longitud'),
Array('programa','poblacion_desde_programa', 38,'tamaño mayor que 2', false,'poblacion_desde_programa debe tener como maximo 2 caracteres de longitud'),
Array('programa','poblacion_desde_programa', 39,'Contiene caracter distinto de digito', false,'poblacion_desde_programa solo puede contener digitos'),
Array('programa','poblacion_desde_programa', 40,'tamaño mayor que 1 y tamaño menor que 2 y contiene solo digitos', true,'Exito'),

//tests poblacion_hasta_programa
Array('programa','poblacion_hasta_programa', 41,'tamaño menor que 1', false,'El tamaño no puede ser menor que 1'),
Array('programa','poblacion_hasta_programa', 42,'tamaño mayor que 2', false,'El tamaño no puede ser mayor que 2'),
Array('programa','poblacion_hasta_programa', 43,'Contiene caracter distinto de digito', false,'poblacion_hasta_programa solo puede contener digitos'),
Array('programa','poblacion_hasta_programa', 44,'tamaño mayor que 1 y tamaño menor que 2 y contiene solo digitos', true,'Exito'),

//tests unidad_poblacion
Array('programa','unidad_poblacion', 45,'Contiene valor diferente a MESES o AÑOS', false,'unidad_poblacion solo puede tener MESES o AÑOS como valores'),
Array('programa','unidad_poblacion', 46,'Contiene valor MESES o AÑOS', true,'Exito'),


//tests tipo_programa
Array('programa', 'tipo_programa', 47,'Contiene valor diferente a EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION', false,'tipo_programa solo puede tener EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION como valores'),
Array('programa', 'tipo_programa', 48,'Contiene valor EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION', true,'Exito'),

//tests tiempo_aplicacion_programa
Array('programa', 'tiempo_aplicacion_programa', 49,'tamaño menor que 1', false,'El tamaño no puede ser menor que 1'),
Array('programa', 'tiempo_aplicacion_programa', 50,'tamaño mayor que 4', false,'El tamaño no puede ser mayor que 4'),
Array('programa', 'tiempo_aplicacion_programa', 51,'Contiene caracter distinto de digito', false,'tiempo_aplicacion_programa solo puede contener digitos'),
Array('programa', 'tiempo_aplicacion_programa', 52,'tamaño mayor que 1 y tamaño menor que 4 y contiene solo digitos', true,'Exito'),

//tests descrip_interp_programa
Array('programa', 'descrip_interp_programa', 53,'tamaño menor que 100', false,'El tamaño no puede ser menor a 100'),
Array('programa', 'descrip_interp_programa', 54,'tamaño mayor que 5000', false,'El tamaño no puede ser mayor a 5000'),
Array('programa', 'descrip_interp_programa', 55,'Contiene caracter distinto de alfabético que no sea ni acento ni ñ ni espacios ni signos de puntuacion ni retornos de carro', false,'requisitos_programa solo puede contener alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro'),
Array('programa', 'descrip_interp_programa', 56,'Tamaño mayor que 6 y tamaño menor que 300 y contiene solo caracteres alfabetico incluido acento y ñ y espacios y signos de puntuacion y retornos de carro', true,'Exito'),

//tests fichero_programa
Array('programa', 'fichero_programa', 57,'tamaño menor que 7', false,'El tamaño no puede ser menor a 7'),
Array('programa', 'fichero_programa', 58,'tamaño mayor que 60', false,'El tamaño no puede ser mayor a 60'),
Array('programa', 'fichero_programa', 59,'contiene caracter distinto a alfabetico sin espacios o sin acentos o ñ',false ,'fichero_programa solo permite caracteres alfabeticos sin espacios sin ñ y sin acentos'),
Array('programa', 'fichero_programa', 60,'caracteres alfabeticos sin espacios sin ñ y sin acentos & tamaño mayor que 7 & tamaño menor que 60',true ,'Exito'),

//tests enlace_programa
Array('programa', 'enlace_programa', 61,'tamaño menor que 10', false,'El tamaño no puede ser menor a 10'),
Array('programa', 'enlace_programa', 62,'tamaño mayor que 100', false,'El tamaño no puede ser mayor a 100'),
Array('programa', 'enlace_programa', 63,'contiene caracter distinto de alfabetico sin acentos ni ñ ni espacios o : o / o .', false,'enlace_programa solo permite caracteres alfabetico sin acentos ni ñ ni espacios o : o / o .'),
Array('programa', 'enlace_programa', 64,'tamaño mayor que 10 y tamaño menor que 100 y contiene solo caracteres alfabeticos sin acentos ni ñ ni espacios o : o / o .', true,'Exito'),

//tests formato_programa
Array('programa', 'formato_programa', 65,'Contiene valor diferente a PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', false,'formato_programa solo puede tener PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO'),
Array('programa', 'formato_programa', 66,'Contiene valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', true,'Exito'),

//tests modo_correccion_programa
Array('programa', 'modo_correccion_programa', 67,'Contiene valor diferente a PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', false,'modo_correccion_programa solo puede tener PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO como valores'),
Array('programa', 'modo_correccion_programa', 68,'Contiene valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', true,'Exito'),

//tests modo_aplicacion_programa
Array('programa', 'modo_aplicacion_programa', 69,'Contiene valor diferente a INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO', false,'modo_aplicacion_programa solo puede tener INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO como valores'),
Array('programa', 'modo_aplicacion_programa', 70,'Contiene valor INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO', true,'Exito'),

//tests imagen_programa
Array('programa', 'imagen_programa', 71,'tamaño menor que 7', false,'El tamaño no puede ser menor a 7'),
Array('programa', 'imagen_programa', 72,'tamaño mayor que 60', false,'El tamaño no puede ser mayor a 60'),
Array('programa', 'imagen_programa', 73,'contiene caracter distinto a alfabetico sin espacios o sin acentos o ñ',false ,'fichero_programa solo permite caracteres alfabeticos sin espacios sin ñ y sin acentos'),
Array('programa', 'imagen_programa', 74,'extension diferente de .jpg O .jpeg',false ,'La imagen debe tener como extension solo .jpeg o .jpg'),
Array('programa','imagen_programa', 75,'caracteres alfabeticos sin espacios sin ñ y sin acentos & tamaño mayor que 7 & tamaño menor que 60',true ,'Exito'),

//test id_publicacion
Array('publicacion','id_publicacion',1,'tamaño menor que 1',false,'El tamaño no puede ser menor que 1'),
Array('publicacion','id_publicacion',2,'tamaño mayor que 6',false,'El tamaño no puede ser mayor que 6'),
Array('publicacion','id_publicacion',3,'contiene caracter distinto de digito',false,'id_publicacion solo permite digitos'),
Array('publicacion','id_publicacion',4,'contiene solo digitos & tamaño menor que 1 & tamaño mayor que 6',true,'Exito'),

//test titulo_publicacion
Array('publicacion','titulo_publicacion',5,'tamaño menor que 6',false,'El tamaño no puede ser menor que 6'),
Array('publicacion','titulo_publicacion',6,'tamaño mayor que 80',false,'El tamaño no puede ser mayor que 80'),
Array('publicacion','titulo_publicacion',7,'contiene caracter distinto a alfabetico',false,'titulo_publicacion solo permite caracteres alfabeticos con acentos, ñ y espacios'),
Array('publicacion','titulo_publicacion',8,'contiene caracter alfabetico o espacios o acentos o ñ & tamaño menor que 6 & tamaño mayor que 80',true,'Exito'),

//test autor_publicacion
Array('publicacion','autor_publicacion',9,'tamaño menor que 6',false,'El tamaño no puede ser menor que 6'),
Array('publicacion','autor_publicacion',10,'tamaño mayor que 40',false,'El tamaño no puede ser mayor que 40'),
Array('publicacion','autor_publicacion',11,'contiene caracter distinto a alfabetico',false,''),
Array('publicacion','autor_publicacion',12,'contiene caracter alfabetico o espacios o acentos o ñ & tamaño menor que 6 & tamaño mayor que 80',true,'Exito'),

//test fecha_publicacion
Array('publicacion','fecha_publicacion',13,'fecha menor a la actual',false,'La fecha no puede ser menor que la actual'),
Array('publicacion','fecha_publicacion',14,'formato diferente de dd/mm/aaaa',false,'La fecha debe tener formato dd/mm/aaaa'),
Array('publicacion','fecha_publicacion',15,'fecha igual o mayo a la actual & formato dd/mm/aaaa',true,'Exito'),

//test area_publicacion
Array('publicacion','area_publicacion',16,'tamaño menor que 1',false,'El tamaño no puede ser menor que 1'),
Array('publicacion','area_publicacion',17,'tamaño mayor que 6',false,'El tamaño no puede ser mayor que 6'),
Array('publicacion','area_publicacion',18,'contiene caracter distinto de digito',false,''),
Array('publicacion','area_publicacion',19,'contiene solo digitos & tamaño menor que 1 & tamaño mayor que 6',true,'Exito'),

//test texto_publicacion
Array('publicacion','texto_publicacion',20,'tamaño menor que 30',false,'El tamaño no puede ser menor que 30'),
Array('publicacion','texto_publicacion',21,'tamaño mayor que 8000',false,'El tamaño no puede ser mayor que 8000'),
Array('publicacion','texto_publicacion',22,'contiene caracter que no sea ascii',false,'texto_publicacion solo debe conteter caracteres ascii'),
Array('publicacion','texto_publicacion',23,'contiene caracteres ascii & tam > 30 && tam < 8000',true,'Exito'),

//test imagen_publicacion
Array('publicacion', 'imagen_publicacion', 24,'tamaño menor que 7', false,'El tamaño no puede ser menor a 7'),
Array('publicacion', 'imagen_publicacion', 25,'tamaño mayor que 60', false,'El tamaño no puede ser mayor a 60'),
Array('publicacion', 'imagen_publicacion', 26,'contiene caracter distinto a alfabetico sin espacios o sin acentos o ñ',false ,'fichero_programa solo permite caracteres alfabeticos sin espacios sin ñ y sin acentos'),
Array('publicacion', 'imagen_publicacion', 27,'extension diferente de .jpg O .jpeg',false ,'La imagen debe tener como extension solo .jpeg o .jpg'),
Array('publicacion', 'imagen_publicacion', 28,'caracteres alfabeticos sin espacios sin ñ y sin acentos & tamaño mayor que 7 & tamaño menor que 60',true ,'Exito'),

);
<script type="text/javascript">

pruebasunitarias_HugoGonzalezPortilla = Array(

 //tests id_programa
Array(1,'id_programa', 1, '',false),
Array(1,'id_programa', 2,'123',true),
Array(2,'id_programa', 3,'1234567', false),
Array(2,'id_programa', 4,'123',true),
Array(3,'id_programa', 5,'123e',false),
Array(3,'id_programa', 6,'12345',true),
Array(4,'id_programa', 7,'123456adv',false),
Array(4,'id_programa', 8,'654321',true),

//tests nombre_programa
Array(1 ,'nombre_programa', 1,'a',false),
Array(1 ,'nombre_programa', 2,'Nombre de programa',true),
Array(2 ,'nombre_programa', 3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2 ,'nombre_programa', 4,'nombre de programa ñe',true),
Array(3 ,'nombre_programa', 5,'nombre: de programa',false),
Array(3 ,'nombre_programa', 6,'nombre de programa á',true),
Array(4 ,'nombre_programa', 7,'nombre, de programa',false),
Array(4 ,'nombre_programa', 8,'programa correcto con ñ y ácentos',true),

//tests acronimo_programa
Array(1,'acronimo_programa',1,'aa',false),
Array(1,'acronimo_programa',2,'AAAa',true),
Array(2,'acronimo_programa',3,'aaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'acronimo_programa',4,'hola',true),
Array(3,'acronimo_programa',5,'ABCDEFG HIJ',false),
Array(3,'acronimo_programa',5,'áeiou',false),
Array(3,'acronimo_programa',6,'AEUIOUF',true),
Array(4,'acronimo_programa',7,'ABCD ÉFGH,',false),
Array(4,'acronimo_programa',8,'AbcEfg',true),

//tests nombre_original_programa
Array(1,'nombre_original_programa',1,'nombre',false),
Array(1,'nombre_original_programa',2,'nombreprograma',true),
Array(2,'nombre_original_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'nombre_original_programa',4,'nombre programa',true),
Array(3,'nombre_original_programa',5,'nombre_programa',false),
Array(3,'nombre_original_programa',6,'ñombreprograma',true),
Array(4,'nombre_original_programa',7,'nombre_programa.hola',false),
Array(4,'nombre_original_programa',8,'Ñombreprograma',true),

//tests autor_programa
Array(1,'autor_programa',1,'nombre',false),
Array(1,'autor_programa',2,'nombreprograma',true),
Array(2,'autor_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'autor_programa',4,'nombre programa',true),
Array(3,'autor_programa',5,'autor_programa',false),
Array(3,'autor_programa',6,'ñombreprograma',true),
Array(4,'autor_programa',7,'autor_programa.hola',false),
Array(4,'autor_programa',8,'Ñombreprograma',true),

//tests autor_original_programa
Array(1,'autor_original_programa',1,'nombre',false),
Array(1,'autor_original_programa',2,'nombreprograma',true),
Array(2,'autor_original_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'autor_original_programa',4,'nombre programa',true),
Array(3,'autor_original_programa',5,'autor_original_programa',false),
Array(3,'autor_original_programa',6,'ñombreprograma',true),
Array(4,'autor_original_programa',7,'autor_original_programa.hola',false),
Array(4,'autor_original_programa',8,'Ñombreprograma',true),

//tests ano_programa
Array(1,'ano_programa',1,'',false),
Array(1,'ano_programa',2,'2023',true),
Array(2,'ano_programa',3,'20003',false),
Array(2,'ano_programa',4,'1492',true),
Array(3,'ano_programa',5,'2026',false),
Array(3,'ano_programa',6,'2022',true),
Array(4,'ano_programa',7,'200a',false),
Array(4,'ano_programa',8,'2000',true),
Array(4,'ano_programa',7,'2001abc',false),
Array(4,'ano_programa',8,'2004',true),

//tests ano_original_programa
Array(1,'ano_original_programa',1,'',false),
Array(1,'ano_original_programa',2,'2023',true),
Array(2,'ano_original_programa',3,'20003',false),
Array(2,'ano_original_programa',4,'1492',true),
Array(3,'ano_original_programa',5,'2026',false),
Array(3,'ano_original_programa',6,'2022',true),
Array(4,'ano_original_programa',7,'200a',false),
Array(4,'ano_original_programa',8,'2000',true),
Array(4,'ano_original_programa',7,'2001abc',false),
Array(4,'ano_original_programa',8,'2004',true),

//tests requisitos_programa
Array(1,'requisitos_programa',1,'',false),
Array(1,'requisitos_programa',2,'aaaaaaa',true),
Array(2,'requisitos_programa',3,'Aqui seria una cadena de 301 caracteres',false),
Array(2,'requisitos_programa',4,'aaaaaaaaaa',true),
Array(3,'requisitos_programa',5,'aáaá ñ,espacio_ aaa',false),
Array(3,'requisitos_programa',6,'aáaá ñ,espacio',true),
Array(4,'requisitos_programa',7,'Requisitos_programa, áaañ',false),
Array(4,'requisitos_programa',8,'Requisitos, de programa',true),

//tests poblacion_desde_programa
Array(1,'poblacion_desde_programa',1,'',false),
Array(1,'poblacion_desde_programa',2,'2',true),
Array(2,'poblacion_desde_programa',3,'222',false),
Array(2,'poblacion_desde_programa',4,'22',true),
Array(3,'poblacion_desde_programa',5,'aa',false),
Array(3,'poblacion_desde_programa',6,'11',true),
Array(4,'poblacion_desde_programa',7,'1234aa',false),
Array(4,'poblacion_desde_programa',8,'12',true),

//tests poblacion_hasta_programa
Array(1,'poblacion_hasta_programa',1,'',false),
Array(1,'poblacion_hasta_programa',2,'2',true),
Array(2,'poblacion_hasta_programa',3,'222',false),
Array(2,'poblacion_hasta_programa',4,'22',true),
Array(3,'poblacion_hasta_programa',5,'aa',false),
Array(3,'poblacion_hasta_programa',6,'11',true),
Array(4,'poblacion_hasta_programa',7,'1234aa',false),
Array(4,'poblacion_hasta_programa',8,'12',true),

//tests unidad_poblacion
Array(1,'unidad_poblacion',1,'MESES',true),
Array(1,'unidad_poblacion',2,'AÑOS',true),
Array(1,'unidad_poblacion',3,'DIAS',false),

Array(2,'unidad_poblacion',4,'MESES',true),
Array(2,'unidad_poblacion',5,'AÑOS',true),
Array(2,'unidad_poblacion',6,'DIAS',false),

//tests tipo_programa
Array(1,'tipo_programa',1,'EVALUACION',true),
Array(1,'tipo_programa',2,'INTERVENCION',true),
Array(1,'tipo_programa',3,'EVALUACION E INTERVENCION',true),
Array(1,'tipo_programa',4,'aaaaaa',false),

Array(2,'tipo_programa',5,'EVALUACION',true),
Array(2,'tipo_programa',6,'INTERVENCION',true),
Array(2,'tipo_programa',7,'EVALUACION E INTERVENCION',true),
Array(2,'tipo_programa',8,'aaaaaa',false),

//tests tiempo_aplicacion_programa
Array(1,'tiempo_aplicacion_programa',1,'',false),
Array(1,'tiempo_aplicacion_programa',2,'22',true),
Array(2,'tiempo_aplicacion_programa',3,'22222',false),
Array(2,'tiempo_aplicacion_programa',4,'222',true),
Array(3,'tiempo_aplicacion_programa',5,'aaa',false),
Array(3,'tiempo_aplicacion_programa',6,'111',true),
Array(4,'tiempo_aplicacion_programa',7,'1234aa',false),
Array(4,'tiempo_aplicacion_programa',8,'12',true),

//tests descrip_interp_programa
Array(1,'descrip_interp_programa',1,'',false),
Array(1,'descrip_interp_programa',2,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',true),
Array(2,'descrip_interp_programa',3,'Aqui iria una cadena de 5001 caracteres',false),
Array(2,'descrip_interp_programa',4,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaañññ,;',true),
Array(3,'descrip_interp_programa',5,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,____',false),
Array(3,'descrip_interp_programa',6,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaañññ,;',true),
Array(4,'descrip_interp_programa',7,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,____23123123',false),
Array(4,'descrip_interp_programa',8,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaññññ,,,,,,,aaaaaaaaaaa23123123',true),

//tests fichero_programa
Array(1,'fichero_programa',1,'aa',false),
Array(1,'fichero_programa',2,'AAAaaaaa',true),
Array(2,'fichero_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'fichero_programa',4,'holaaaaaaaa',true),
Array(3,'fichero_programa',5,'ABCDEFG HIJññññ',false),
Array(3,'fichero_programa',5,'áeioujfh',false),
Array(3,'fichero_programa',6,'AEUIOUF',true),
Array(4,'fichero_programa',7,'ABCD ÉFGH,',false),
Array(4,'fichero_programa',8,'AbcEfgasd',true),


//tests enlace_programa
Array(1,'enlace_programa',1,'enlaces',false),
Array(1,'enlace_programa',2,'enlaces.net',true),
Array(2,'enlace_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'enlace_programa',4,'enlaces.net:',true),
Array(3,'enlace_programa',5,'enláces ñ /',false),
Array(3,'enlace_programa',6,'enlaces.net/hola',true),
Array(4,'enlace_programa',7,'eñlaces_hola',false),
Array(4,'enlace_programa',8,'enlaces.net/hola',true),

//tests formato_programa
Array(1,'formato_programa',1,'PAPEL',true),
Array(1,'formato_programa',2,'ELECTRONICO',true),
Array(1,'formato_programa',3,'PAPEL Y ELECTRONICO',true),
Array(1,'formato_programa',4,'aaaaaaa',false),

Array(2,'formato_programa',5,'PAPEL',true),
Array(2,'formato_programa',6,'ELECTRONICO',true),
Array(2,'formato_programa',7,'PAPEL Y ELECTRONICO',true),
Array(2,'formato_programa',8,'aaaaaaa',false),

//tests modo_correccion_programa
Array(1,'modo_correccion_programa',1,'PAPEL',true),
Array(1,'modo_correccion_programa',2,'ELECTRONICO',true),
Array(1,'modo_correccion_programa',3,'PAPEL Y ELECTRONICO',true),
Array(1,'modo_correccion_programa',4,'aaaaaaa',false),

Array(2,'modo_correccion_programa',5,'PAPEL',true),
Array(2,'modo_correccion_programa',6,'ELECTRONICO',true),
Array(2,'modo_correccion_programa',7,'PAPEL Y ELECTRONICO',true),
Array(2,'modo_correccion_programa',8,'aaaaaaa',false),

//tests modo_aplicacion_programa
Array(1,'modo_aplicacion_programa',1,'INDIVIDUAL',true),
Array(1,'modo_aplicacion_programa',2,'COLECTIVO',true),
Array(1,'modo_aplicacion_programa',3,'INDIVIDUAL Y COLECTIVO',true),
Array(1,'modo_aplicacion_programa',4,'aaaa',false),

Array(2,'modo_aplicacion_programa',5,'INDIVIDUAL',true),
Array(2,'modo_aplicacion_programa',6,'COLECTIVO',true),
Array(2,'modo_aplicacion_programa',7,'INDIVIDUAL Y COLECTIVO',true),
Array(2,'modo_aplicacion_programa',8,'aaaa',false),

//tests imagen_programa
Array(1,'imagen_programa',1,'aa',false),
Array(1,'imagen_programa',2,'AAAaaaaa',true),
Array(2,'imagen_programa',3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',false),
Array(2,'imagen_programa',4,'holaaaaaaaa',true),
Array(3,'imagen_programa',5,'ABCDEFG HIJññññ',false),
Array(3,'imagen_programa',5,'áeioujfh',false),
Array(3,'imagen_programa',6,'AEUIOUF',true),
Array(4,'imagen_programa',7,'ABCD ÉFGH,',false),
Array(4,'imagen_programa',8,'AbcEfgasd',true),

);
</script>
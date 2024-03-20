<script type="text/javascript">

def_test_HugoGonzalezPortilla = Array(

 //tests id_programa
Array('id_programa',1,'tamaño menor que 1' ,false,'id_programa no puede tener menos de 1 dígito'),
Array('id_programa',2,'tamaño mayor que 6',false,'id_programa no puede tener mas de 6 caracteres'),
Array('id_programa',3,'contiene caracter distinto de dígito', false, 'id_programa debe contener solo dígitos'),
Array('id_programa',4,'solo dígitos & tamaño mayor que 1 & menor que 6',true,'Exito'),

//tests nombre_programa
Array('nombre_programa', 1,'tamaño menor que 6', false, 'nombre_programa debe contener al menos 6 caracteres de longitud'),
Array('nombre_programa', 2,'tamaño mayor que 60', false, 'nombre_programa debe tener como máximo 60 caracteres de longitud'),
Array('nombre_programa', 3,'contiene caracter distinto a alfabético con acentos o ñ o espacios', false, 'nombre_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('nombre_programa', 4, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 60', true, 'Exito'), 


//tests acronimo_programa
Array('acronimo_programa',1 ,'tamaño menor que 3',false ,'acronimo_programa debe tener como minimo 3 caracteres de longitud'),
Array('acronimo_programa',2 ,'tamaño mayor que 20',false ,'La longitud maxima de acronimo_programa es de 20 caracteres'),
Array('acronimo_programa',3 ,'contiene caracter distinto a alfabetico sin espacios o sin acentos',false ,'acronimo_programa solo permite caracteres alfabeticos sin espacios y sin acentos'),
Array('acronimo_programa',4 ,'caracteres alfabeticos sin espacios y sin acentos & tamaño mayor que 3 & tamaño menor que 20',true ,'Exito'),

//tests nombre_original_programa
Array('nombre_original_programa', 1,'tamaño menor que 6', false, 'nombre_original_programa debe contener al menos 6 caracteres de longitud'),
Array('nombre_original_programa', 2,'tamaño mayor que 60', false, 'nombre_original_programa debe tener como máximo 60 caracteres de longitud'),
Array('nombre_original_programa', 3,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'nombre_original_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('nombre_original_programa', 4, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 60', true, 'Exito'), 

//tests autor_programa
Array('autor_programa', 1,'tamaño menor que 6', false, 'autor_programa debe contener al menos 6 caracteres de longitud'),
Array('autor_programa', 2,'tamaño mayor que 50', false, 'autor_programa debe tener como máximo 60 caracteres de longitud'),
Array('autor_programa', 3,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'autor_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('autor_programa', 4, 'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 50', true, 'Exito'), 

//tests autor_original_programa
Array('autor_original_programa', 1,'tamaño menor que 6', false, 'autor_original_programa debe contener al menos 6 caracteres de longitud'),
Array('autor_original_programa', 2,'tamaño mayor que 50', false, 'autor_original_programa debe tener como máximo 60 caracteres de longitud'),
Array('autor_original_programa', 3,'contiene caracter distinto de alfabético con acentos o ñ o espacios', false, 'autor_original_programa solo debe contener caracteres alfabéticos, espacios, tildes o ñ'),
Array('autor_original_programa', 4,'alfabeticos o con acentos o con ñ o con espacios & tamaño mayor que 6 & tamaño menor que 50', true, 'Exito'), 

//tests ano_programa
Array('ano_programa', 1,'tamaño menor que 4', false,'ano_programa debe tener como minimo 4 caracteres de longitud'),
Array('ano_programa', 2,'tamaño mayor que 4', false,'ano_programa debe tener como maximo 4 caracteres de longitud'),
Array('ano_programa', 3,'año superior al actual', false,'El año no puede superior al actual'),
Array('ano_programa', 4,'tamaño = 4 y año no superior al actual', true,'Exito'),

//tests ano_original_programa
Array('ano_original_programa', 1,'tamaño menor que 4', false,'ano_original_programa debe tener como minimo 4 caracteres de longitud'),
Array('ano_original_programa', 2,'tamaño mayor que 4', false,'ano_original_programa debe tener como maximo 4 caracteres de longitud'),
Array('ano_original_programa', 3,'año superior al actual', false,'El año no puede superior al actual'),
Array('ano_original_programa', 4,'tamaño = 4 y año no superior al actual', true,'Exito'),

//tests requisitos_programa
Array('requisitos_programa', 1,'tamaño menor que 6', false,'requisitos_programa debe tener al menos 6 caracteres de longitud'),   
Array('requisitos_programa', 2,'tamaño mayor que 300', false,'requisitos_programa debe tener como maximo 300 caracteres de longitud'),
Array('requisitos_programa', 3,'Contiene caracter distinto de alfabético que no sea ni acento ni ñ ni espacios ni signos de puntuacion', false,'requisitos_programa solo puede contener alfabéticos con acentos, ñ, espacios y signos de puntuación'),
Array('requisitos_programa', 4,'Tamaño mayor que 6 y tamaño menor que 300 y contiene solo caracteres alfabetico incluido acento y ñ y espacios y signos de puntuacion', true,'Exito'),

//tests poblacion_desde_programa
Array('poblacion_desde_programa', 1,'tamaño menor que 1', false,'poblacion_desde_programa debe tener al menos 1 caracter de longitud'),
Array('poblacion_desde_programa', 2,'tamaño mayor que 2', false,'poblacion_desde_programa debe tener como maximo 2 caracteres de longitud'),
Array('poblacion_desde_programa', 3,'Contiene caracter distinto de digito', false,'poblacion_desde_programa solo puede contener digitos'),
Array('poblacion_desde_programa', 4,'tamaño mayor que 1 y tamaño menor que 2 y contiene solo digitos', true,'Exito'),

//tests poblacion_hasta_programa
Array('poblacion_hasta_programa', 1,'tamaño menor que 1', false,'El tamaño no puede ser menor que 1'),
Array('poblacion_hasta_programa', 2,'tamaño mayor que 2', false,'El tamaño no puede ser mayor que 2'),
Array('poblacion_hasta_programa', 3,'Contiene caracter distinto de digito', false,'poblacion_hasta_programa solo puede contener digitos'),
Array('poblacion_hasta_programa', 4,'tamaño mayor que 1 y tamaño menor que 2 y contiene solo digitos', true,'Exito'),

//tests unidad_poblacion
Array('unidad_poblacion', 1,'Contiene valor diferente a MESES o AÑOS', false,'unidad_poblacion solo puede tener MESES o AÑOS como valores'),
Array('unidad_poblacion', 2,'Contiene valor MESES o AÑOS', true,'Exito'),


//tests tipo_programa
Array('tipo_programa', 1,'Contiene valor diferente a EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION', false,'tipo_programa solo puede tener EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION como valores'),
Array('tipo_programa', 2,'Contiene valor EVALUACION o INTERVENCION o EVALUACION  E INTERVENCION', true,'Exito'),

//tests tiempo_aplicacion_programa
Array('tiempo_aplicacion_programa', 1,'tamaño menor que 1', false,'El tamaño no puede ser menor que 1'),
Array('tiempo_aplicacion_programa', 2,'tamaño mayor que 4', false,'El tamaño no puede ser mayor que 4'),
Array('tiempo_aplicacion_programa', 3,'Contiene caracter distinto de digito', false,'tiempo_aplicacion_programa solo puede contener digitos'),
Array('tiempo_aplicacion_programa', 4,'tamaño mayor que 1 y tamaño menor que 4 y contiene solo digitos', true,'Exito'),

//tests descrip_interp_programa
Array('descrip_interp_programa', 1,'tamaño menor que 100', false,'El tamaño no puede ser menor a 100'),
Array('descrip_interp_programa', 2,'tamaño mayor que 5000', false,'El tamaño no puede ser mayor a 5000'),
Array('descrip_interp_programa', 3,'Contiene caracter distinto de alfabético que no sea ni acento ni ñ ni espacios ni signos de puntuacion ni retornos de carro', false,'requisitos_programa solo puede contener alfabéticos con acentos, ñ, espacios, signos de puntuación y retornos de carro'),
Array('descrip_interp_programa', 4,'Tamaño mayor que 6 y tamaño menor que 300 y contiene solo caracteres alfabetico incluido acento y ñ y espacios y signos de puntuacion y retornos de carro', true,'Exito'),

//tests fichero_programa
Array('fichero_programa', 1,'tamaño menor que 7', false,'El tamaño no puede ser menor a 7'),
Array('fichero_programa', 2,'tamaño mayor que 60', false,'El tamaño no puede ser mayor a 60'),
Array('fichero_programa', 3,'contiene caracter distinto a alfabetico sin espacios o sin acentos o ñ',false ,'fichero_programa solo permite caracteres alfabeticos sin espacios sin ñ y sin acentos'),
Array('fichero_programa', 4,'caracteres alfabeticos sin espacios sin ñ y sin acentos & tamaño mayor que 7 & tamaño menor que 60',true ,'Exito'),

//tests enlace_programa
Array('enlace_programa', 1,'tamaño menor que 10', false,'El tamaño no puede ser menor a 10'),
Array('enlace_programa', 2,'tamaño mayor que 100', false,'El tamaño no puede ser mayor a 100'),
Array('enlace_programa', 3,'contiene caracter distinto de alfabetico sin acentos ni ñ ni espacios o : o / o .', false,'enlace_programa solo permite caracteres alfabetico sin acentos ni ñ ni espacios o : o / o .'),
Array('enlace_programa', 4,'tamaño mayor que 10 y tamaño menor que 100 y contiene solo caracteres alfabeticos sin acentos ni ñ ni espacios o : o / o .', true,'Exito'),

//tests formato_programa
Array('formato_programa', 1,'Contiene valor diferente a PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', false,'formato_programa solo puede tener PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO'),
Array('formato_programa', 2,'Contiene valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', true,'Exito'),

//tests modo_correccion_programa
Array('modo_correccion_programa', 1,'Contiene valor diferente a PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', false,'modo_correccion_programa solo puede tener PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO como valores'),
Array('modo_correccion_programa', 2,'Contiene valor PAPEL o ELECTRÓNICO o PAPEL Y ELECTRÓNICO', true,'Exito'),

//tests modo_aplicacion_programa
Array('modo_aplicacion_programa', 1,'Contiene valor diferente a INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO', false,'modo_aplicacion_programa solo puede tener INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO como valores'),
Array('modo_aplicacion_programa', 2,'Contiene valor INDIVIDUAL o COLECTIVO o INDIVIDUAL Y COLECTIVO', true,'Exito'),

//tests imagen_programa
Array('imagen_programa', 1,'tamaño menor que 7', false,'El tamaño no puede ser menor a 7'),
Array('imagen_programa', 2,'tamaño mayor que 60', false,'El tamaño no puede ser mayor a 60'),
Array('imagen_programa', 3,'contiene caracter distinto a alfabetico sin espacios o sin acentos o ñ',false ,'fichero_programa solo permite caracteres alfabeticos sin espacios sin ñ y sin acentos'),
Array('imagen_programa', 4,'caracteres alfabeticos sin espacios sin ñ y sin acentos & tamaño mayor que 7 & tamaño menor que 60',true ,'Exito'),

);
</script>
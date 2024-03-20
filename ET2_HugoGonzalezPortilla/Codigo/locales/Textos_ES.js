let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'',
    'SQL_KO':'',
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'dni_es_nulo_KO':'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'ERROR_UPLOAD_foto_programa_KO':'La foto de programa debe tener extension jpg o jpeg y tamaño menor de 200000',
    'controlador_invalido':'',
    'action_invalido':'',

    // mensajes de la entidad programa
    // ---------------------------------

    // atributos programa (usados en el titulo de la tabla de presentación de datos)

    'id_programa': 'ID del programa',
    'nombre_programa': 'Nombre del programa',
    'acronimo_programa': 'Acrónimo del programa',
    'nombre_original_programa': 'Nombre original del programa',
    'autor_programa': 'Autor del programa',
    'autor_original_programa': 'Autor original del programa',
    'ano_programa': 'Año del programa',
    'ano_original_programa': 'Año original del programa',
    'requisitos_programa': 'Requisitos del programa',
    'poblacion_desde_programa': 'Población desde del programa',
    'poblacion_hasta_programa': 'Población hasta del programa',
    'unidad_poblacion': 'Unidad de población del programa',
    'tipo_programa': 'Tipo de programa',
    'tiempo_aplicacion_programa': 'Tiempo de aplicación del programa',
    'descrip_interp_programa': 'Descripción o interpretación del programa',
    'fichero_programa': 'Fichero del programa',
    'enlace_programa': 'Enlace del programa',
    'formato_programa': 'Formato del programa',
    'modo_correccion_programa': 'Modo de corrección del programa',
    'modo_aplicacion_programa': 'Modo de aplicación del programa',

    'id_publicacion': 'ID de la publicación',
    'titulo_publicacion': 'Título de la publicación',
    'autor_publicacion': 'Autor de la publicación',
    'fecha_publicacion': 'Fecha de la publicación',
    'area_publicacion': 'Área de la publicación',
    'texto_publicacion': 'Texto de la publicación',


    // label atributos programa
    
    'label_id_programa': 'Introduzca ID del programa: ',
    'label_nombre_programa': 'Introduzca Nombre del programa: ',
    'label_acronimo_programa': 'Introduzca Acrónimo del programa: ',
    'label_nombre_original_programa': 'Introduzca Nombre original del programa: ',
    'label_autor_programa': 'Introduzca Autor del programa: ',
    'label_autor_original_programa': 'Introduzca Autor original del programa: ',
    'label_ano_programa': 'Introduzca Año del programa: ',
    'label_ano_original_programa': 'Introduzca Año original del programa: ',
    'label_requisitos_programa': 'Introduzca Requisitos del programa: ',
    'label_poblacion_desde_programa': 'Introduzca Población desde del programa: ',
    'label_poblacion_hasta_programa': 'Introduzca Población hasta del programa: ',
    'label_unidad_poblacion': 'Introduzca Unidad de población del programa: ',
    'label_tipo_programa': 'Introduzca Tipo de programa: ',
    'label_tiempo_aplicacion_programa': 'Introduzca Tiempo de aplicación del programa: ',
    'label_descrip_interp_programa': 'Introduzca Descripción o interpretación del programa: ',
    'label_fichero_programa': 'Introduzca Archivo del programa: ',
    'label_enlace_programa': 'Introduzca Enlace del programa: ',
    'label_formato_programa': 'Introduzca Formato del programa: ',
    'label_modo_correccion_programa': 'Introduzca Modo de corrección del programa: ',
    'label_modo_aplicacion_programa': 'Introduzca Modo de aplicación del programa: ',

    'label_id_publicacion': 'Introduzca ID de la publicación: ',
    'label_titulo_publicacion': 'Introduzca Título de la publicación: ',
    'label_autor_publicacion': 'Introduzca Autor de la publicación: ',
    'label_fecha_publicacion': 'Introduzca Fecha de la publicación: ',
    'label_area_publicacion': 'Introduzca Área de la publicación: ',
    'label_texto_publicacion': 'Introduzca Texto de la publicación: ',

    // titulo general pagina programa
    
    'titulo_pagina_programa':'Gestión de programa',
    'titulo_pagina_publicacion':'Gestión de publicacion',

    // titulos formularios acciones

    "titulo_form_ADD_programa":"Incorporar una programa",
    "titulo_form_EDIT_programa":"Modicar programa",
    "titulo_form_DELETE_programa":"Confirmar borrar una programa",
    "titulo_form_SEARCH_programa":"Buscar una programa",
    "titulo_form_SHOWCURRENT_programa":"Ver detalle de una programa",

    "titulo_form_ADD_publicacion": "Incorporar una publicación",
    "titulo_form_EDIT_publicacion": "Modificar publicación",
    "titulo_form_DELETE_publicacion": "Confirmar borrar una publicación",
    "titulo_form_SEARCH_publicacion": "Buscar una publicación",
    "titulo_form_SHOWCURRENT_publicacion": "Ver detalle de una publicación",
   
    // errores de formato de programa en front

    // id_programa
    "KO_id_programa_tam_min": "El ID del programa es demasiado corto",
    "KO_id_programa_tam_max": "El ID del programa es demasiado largo",
    "KO_id_programa_caracteres_validos": "El ID del programa tiene caracteres invalidos",

    // nombre_programa
    "KO_nombre_programa_tam_min": "El nombre del programa es demasiado corto",
    "KO_nombre_programa_tam_max": "El nombre del programa es demasiado largo",
    "KO_nombre_programa_caracteres_validos": "El nombre del programa tiene caracteres invalidos",

    // acronimo_programa
    "KO_acronimo_programa_tam_min": "El acrónimo del programa es demasiado corto",
    "KO_acronimo_programa_tam_max": "El acrónimo del programa es demasiado largo",
    "KO_acronimo_programa_caracteres_validos": "El acrónimo del programa tiene caracteres invalidos",

    // nombre_original_programa
    "KO_nombre_original_programa_tam_min": "El nombre original del programa es demasiado corto",
    "KO_nombre_original_programa_tam_max": "El nombre original del programa es demasiado largo",
    "KO_nombre_original_programa_caracteres_validos": "El nombre original del programa tiene caracteres invalidos",

    // autor_programa
    "KO_autor_programa_tam_min": "El autor del programa es demasiado corto",
    "KO_autor_programa_tam_max": "El autor del programa es demasiado largo",
    "KO_autor_programa_caracteres_validos": "El autor del programa tiene caracteres invalidos",


    // autor_original_programa
    "KO_autor_original_programa_tam_min": "El autor original del programa es demasiado corto",
    "KO_autor_original_programa_tam_max": "El autor original del programa es demasiado largo",
    "KO_autor_original_programa_caracteres_validos": "El autor original del programa tiene caracteres invalidos",


    // ano_programa
    "KO_ano_programa_tam_exacto": "El año del programa debe ser de 4 dígitos",
    "KO_ano_programa_superior_actual": "El año del programa no debe ser mayor al actual",


    // ano_original_programa
    "KO_ano_original_programa_tam_exacto": "El año original del programa debe ser de 4 dígitos",
    "KO_ano_original_programa_superior_actual": "El año original del programa no debe ser mayor al actual",

    // poblacion_desde_programa
    "KO_poblacion_desde_programa_tam_min": "El valor de población desde del programa es demasiado corto",
    "KO_poblacion_desde_programa_tam_max": "El valor de población desde del programa es demasiado largo",
    "KO_poblacion_desde_programa_digitos": "El valor de población desde del programa tiene caracteres inválidos",

    // poblacion_hasta_programa
    "KO_poblacion_hasta_programa_tam_min": "El valor de población hasta del programa es demasiado corto",
    "KO_poblacion_hasta_programa_tam_max": "El valor de población hasta del programa es demasiado largo",
    "KO_poblacion_hasta_programa_digitos": "El valor de población hasta del programa tiene caracteres inválidos",

    // unidad_poblacion
    "KO_unidad_poblacion_tam_min": "La unidad de población del programa es demasiado corta",
    "KO_unidad_poblacion_tam_max": "La unidad de población del programa es demasiado larga",
    "KO_unidad_poblacion_valor_invalido": "La unidad de población del programa tiene caracteres inválidos",

    // tipo_programa
    "KO_tipo_programa_tam_min": "El tipo de programa es demasiado corto",
    "KO_tipo_programa_tam_max": "El tipo de programa es demasiado largo",
    "KO_tipo_programa_valor_invalido": "El tipo de programa tiene caracteres inválidos",

    // tiempo_aplicacion_programa
    "KO_tiempo_aplicacion_programa_tam_min": "El tiempo de aplicación del programa es demasiado corto",
    "KO_tiempo_aplicacion_programa_tam_max": "El tiempo de aplicación del programa es demasiado largo",
    "KO_tiempo_aplicacion_programa_digitos": "El tiempo de aplicación del programa tiene caracteres inválidos",

    // descrip_interp_programa
    "KO_descrip_interp_programa_tam_min": "La descripción o interpretación del programa es demasiado corta",
    "KO_descrip_interp_programa_tam_max": "La descripción o interpretación del programa es demasiado larga",
    "KO_descrip_interp_programa_caracteres_validos": "La descripción o interpretación del programa tiene caracteres inválidos",

    // fichero_programa
    "KO_fichero_programa_tam_min": "El archivo del programa es demasiado pequeño",
    "KO_fichero_programa_tam_max": "El archivo del programa es demasiado largo",
    "KO_fichero_programa_extension_invalida": "El archivo del programa tiene una extensión inválida",
    "KO_fichero_programa_size_excedido": "El fichero del programa ha excedido el tamaño permitido",
    "KO_fichero_programa_vacio": "El fichero del programa esta vacio",
    "KO_fichero_programa_caracteres_validos": "El fichero del programa contiene caracteres invalidos",


    // enlace_programa
    "KO_enlace_programa_tam_min": "El enlace del programa es demasiado corto",
    "KO_enlace_programa_tam_max": "El enlace del programa es demasiado largo",
    "KO_enlace_programa_caracteres_validos": "El enlace del programa tiene caracteres inválidos",

    // formato_programa
    "KO_formato_programa_tam_min": "El formato del programa es demasiado corto",
    "KO_formato_programa_tam_max": "El formato del programa es demasiado largo",
    "KO_formato_programa_valor_invalido": "El formato del programa tiene un valor inválido",

    // modo_correccion_programa
    "KO_modo_correccion_programa_tam_min": "El modo de corrección del programa es demasiado corto",
    "KO_modo_correccion_programa_tam_max": "El modo de corrección del programa es demasiado largo",
    "KO_modo_correccion_programa_valor_invalido": "El modo de corrección del programa tiene un valor inválido",

    // modo_aplicacion_programa
    "KO_modo_aplicacion_programa_tam_min": "El modo de aplicación del programa es demasiado corto",
    "KO_modo_aplicacion_programa_tam_max": "El modo de aplicación del programa es demasiado largo",
    "KO_modo_aplicacion_programa_caracteres_validos": "El modo de aplicación del programa tiene caracteres inválidos",

    // imagen_programa
    "KO_imagen_programa_tam_min": "La imagen del programa es demasiado corta",
    "KO_imagen_programa_tam_max": "La imagen del programa es demasiado larga",
    "KO_imagen_programa_extension_invalida": "La imagen del programa tiene una extensión inválida",
    "KO_imagen_programa_tamano_excedido": "La imagen del programa ha excedido el tamaño permitido",

    "KO_id_publicacion_tam_min": "El ID de la publicacion es demasiado corto",
    "KO_id_publicacion_tam_max": "El ID de la publicacion es demasiado largo",
    "KO_id_publicacion_caracteres_validos": "El ID del publicacion tiene caracteres invalidos",

    "KO_titulo_publicacion_tam_min": "El titulo de la publicacion es demasiado corto",
    "KO_titulo_publicacion_tam_max": "El titulo de la publicacion es demasiado largo",
    "KO_titulo_publicacion_caracteres_validos": "El titulo de la publicacion tiene caracteres invalidos",

    "KO_autor_publicacion_tam_min": "El autor de la publicacion es demasiado corto",
    "KO_autor_publicacion_tam_max": "El autor de la publicacion es demasiado largo",
    "KO_autor_publicacion_caracteres_validos": "El autor de la publicacion tiene caracteres invalidos",

    "KO_fecha_publicacion_tam_min": "La fecha de publicacion es demasiado corto",
    "KO_fecha_publicacion_tam_max": "La fecha de publicacion es demasiado largo",
    "KO_fecha_publicacion_caracteres_validos": "La fecha de publicacion tiene caracteres invalidos",

    "KO_area_publicacion_tam_min": "El ID del publicacion es demasiado corto",
    "KO_area_publicacion_tam_max": "El ID del publicacion es demasiado largo",
    "KO_area_publicacion_caracteres_validos": "El ID del publicacion tiene caracteres invalidos",

    "KO_texto_publicacion_tam_min": "El ID del publicacion es demasiado corto",
    "KO_texto_publicacion_tam_max": "El ID del publicacion es demasiado largo",
    "KO_texto_publicacion_caracteres_validos": "El ID del publicacion tiene caracteres invalidos",

    "KO_imagen_publicacion_tam_min": "El ID del publicacion es demasiado corto",
    "KO_imagen_publicacion_tam_max": "El ID del publicacion es demasiado largo",
    "KO_imagen_publicacion_caracteres_validos": "El ID del publicacion tiene caracteres invalidos",
};


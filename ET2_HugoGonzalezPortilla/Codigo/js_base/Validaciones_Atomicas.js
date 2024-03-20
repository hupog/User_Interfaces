class validacionesatomicas{

    constructor(){

    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_exacto(id, valor){
        if (document.getElementById(id).value.length != valor){
            return false;
        }
        else{
            return true;
        }
    }

    static caracteres_validos(id, expresionregular){
        if(!expresionregular.test(document.getElementById(id).value)){
            return false;
        }else{
            return true;
        }
    }

    static valor_valido(id, valoresPermitidos) {
        // Obtener el valor del elemento con el ID proporcionado
        var valor = document.getElementById(id).value;
    
        // Verificar si el valor está incluido en el array de valores permitidos
        return valoresPermitidos.includes(valor);
    }
    
    
    static validarExtensionFichero(id){
        let valor = document.getElementById(id).value;
        return (/\.(pdf|doc|docx)$/i.test(valor));
    }

    static validarExtensionImagen(id){
        let valor = document.getElementById(id).value;
        return (/\.(jpg|jpeg)$/i.test(valor));
    }


    // validaciones ficheros(file)

    static validarArchivoVacio(id) {
        let archivo = document.getElementById(id); 
        if (archivo.files.length === 0) {
          return false; 
        }
      
        return true; 
    }

    static size_min_nuevo_file(id,valorminimo){
        let nombre = document.getElementById(id).files[0].name;
        if(nombre.split(".")[0].length <= valorminimo){
            return false;
        }else{
            return true;
        }
    }

    static size_max_nuevo_file(id,valormaximo){
        let nombre = document.getElementById(id).files[0].name;
        if(nombre.split(".")[0].length > valormaximo){
            return false;
        }else{
            return true;
        }
    }

    static validarNombreNuevoArchivo(id){
        let valor = document.getElementById(id).files[0].name;
        let nombre = valor.split(".")[0];
        return (/^[a-zA-Z]+$/.test(nombre));
    }
    
    static validarExtensionNuevoFichero(id){
        let valor = document.getElementById(id).files[0].name;
        return (/\.(pdf|doc|docx)$/i.test(valor));
    }

    static validarExtensionNuevoImagen(id){
        let valor = document.getElementById(id).files[0].name;
        return (/\.(jpg|jpeg)$/i.test(valor));
    }

    static validar_tam_nuevo_file(id){
        let img = document.getElementById(id).files[0];
        let tamanoMax = 2000000
        if(img.size > tamanoMax){
            return false;
        }
        else{
            return true;
        }
    }

}
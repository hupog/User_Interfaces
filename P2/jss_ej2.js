  let formulario;
  function validarCampo(elemento) {
      let valor = elemento.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco
      if (valor === "") {
        alert("Este campo no puede estar vacío.");
        return false;
      }
      return true;
  }
 
  function mostrarDiv(texto) {
    let div = document.getElementById("miDiv");
    document.getElementById("id_texto_p").innerHTML = texto;
    div.style.display = "block"; // Cambiar el estilo para mostrar el div
  }
  
  function ocultarDiv() {
    document.getElementById("id_texto_p").innerHTML = "";
    let div = document.getElementById("miDiv");
    div.style.display = "none"; // Cambiar el estilo para ocultar el div
  }
  
  function mensajealerta(){
    alert("hola");
  }

  function validarFormulario(){
    formulario.forEach(element => {
      if(!validarCampo(element))
        return false;
    });
  }
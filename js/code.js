function presionarBoton(valor, interfaz){
  const valorIngresado=valor.textContent;
        if (valor.id === "clear") {
           interfaz.textContent="0";
            return;
        } else if (valor.id === "borrar") {
          interfaz.textContent=interfaz.textContent.slice(0, -1);
            return;
        } else if (valor.id === "igual") {
          try{
             interfaz.textContent=eval(interfaz.textContent);
              }catch{
                interfaz.textContent="Error!";
              }
            return;
        } else {
          if (interfaz.textContent === "0" || interfaz.textContent === "Error!") {
            interfaz.textContent = valorIngresado;
          } else {
      interfaz.textContent += valorIngresado;
    }
  }
}
function iniciar(){
  const interfaz= document.querySelector(".ingreso");
  const valores = document.querySelectorAll(".boton");
    valores. forEach(valor=>{
      valor.addEventListener("click", ()=>{
      presionarBoton(valor, interfaz);
    });
  });
}  
window.addEventListener('load',iniciar);


let btn;

window.onload = ()=>{
  alert("alerta 1")
btn = document.getElementById(btn_formulario);
btn.addEventListener("click",enviar);
}

function enviar(event){
    alert("hola");return;
    frm = document.getElementById("formulario");
      if(frm.checkValidity())
      {
        txt = document.getElementById("boletin");
        txt.value = "";
        alert("¡Gracias por registrarte, espera proximante el boletin de Metallica!");
        event.preventDefault();  
      }
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const valor = document.getElementById("input");

  const divi = document.getElementById("divi");

  const rellenaDivi = () => {
    const p = document.createElement("ul");
    const p2 = document.createElement("li");
    const diviTexto = document.createTextNode(valor.value);
    divi.appendChild(p);
    p.appendChild(p2);
    p2.appendChild(diviTexto);
    limpiarValor();
  }
  btn.addEventListener("click", () => {
    rellenaDivi();
  })
  
  const limpiarValor =()=>{
    valor.value="";

  }
});

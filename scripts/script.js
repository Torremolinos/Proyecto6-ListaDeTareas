/**
 * @Autor: Adrian Iglesias Riño
 * @github: https://github.com/Torremolinos/Proyecto6-ListaDeTareas.git
 */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const valor = document.getElementById("input");
  const btn2 = document.getElementById("btn2");
  const div = document.getElementById("divi");

  const rellenaDivi = () => {
    if (valor.value === "") {
      alert(`Ingresa un valor valido`);
    } else {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";

      const label = document.createElement("label");
      label.textContent = valor.value.trim();
      div.appendChild(li);
      li.appendChild(checkbox);
      li.appendChild(label);
      
      //estoy metiendo aqui este addevent porque sino no pilla las variables label y checkbox
      checkbox.addEventListener("change", () => {
        label.classList.toggle("completed", checkbox.checked);
      });

      limpiarValor();
    }
  };
  btn.addEventListener("click", () => {
    rellenaDivi();
  });

  const limpiarValor = () => {
    valor.value = "";
    valor.focus();
  };


  const limpiarLista = () => {
    const li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
      div.removeChild(li[i]);
    }
  };

  btn2.addEventListener("click", () => {
    limpiarLista();
  });
});

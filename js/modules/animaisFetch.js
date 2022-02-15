import AnimaNumeros from "./animaNumeros.js";

export default function initAnimaisFetch() {
  async function animaisFetch(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", "numeros", "ativo");
      animaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.type}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  animaisFetch("../../animaisApi.json");
}

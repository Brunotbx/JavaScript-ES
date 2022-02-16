export default function btcFetch(link, target) {
  fetch(link)
    .then((response) => response.json())
    .then((response) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / response.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}

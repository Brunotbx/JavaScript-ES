export default function initBtcFetch() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((response) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / response.BRL.sell).toFixed(4);
    })
    .catch((error) => {
      console.log(error);
    });
}

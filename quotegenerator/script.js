const QuoteContainer = document.getElementById("quote");
const btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      QuoteContainer.textContent = `${item.content} - ${item.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      QuoteContainer.textContent = "Failed to load quote.";
    });
};

btn.addEventListener("click", getQuote);
getQuote();

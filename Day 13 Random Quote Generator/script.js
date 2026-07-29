const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "A single rose can be my garden... a single friend, my world",
    author: "Dr.A.p.j.Abdul kalam"
  },
  {
    quote: "True friendship cannot be broken by distance or time",
    author: "Ved Vyasa"
  },
  {
    quote: "Friendship is the only cement that will ever hold the world together",
    author: "Chanakya"
  },
  {
    quote: "The love of a friend is like a calm light, steady and bright",
    author: "Rabindranath Tagore"
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  }
];

function generateQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote").innerText = randomQuote.quote;

  document.getElementById("author").innerText = "- " + randomQuote.author;


}


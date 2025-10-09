// const blockQuotes = [
//   {
//     id: 1,
//     driver: "Ayrton Senna",
//     quote:
//       "If you no longer go for a gap that exists, you are no longer a racing driver.",
//   },
//   {
//     id: 2,
//     driver: "Kimi Räikkönen",
//     quote: "Leave me alone, I know what I'm doing.",
//   },
//   {
//     id: 3,
//     driver: "Fernando Alonso",
//     quote: "All the time you have to leave a space!",
//   },
//   {
//     id: 4,
//     driver: "Michael Schumacher",
//     quote: "I am not here to be popular. I am here to win.",
//   },
//   {
//     id: 5,
//     driver: "James Hunt",
//     quote:
//       "My biggest advantage is that I have bigger balls than the other drivers.",
//   },
//   {
//     id: 6,
//     driver: "Max Verstappen",
//     quote: "That's what you get when you don't leave me space.",
//   },
//   {
//     id: 7,
//     driver: "Niki Lauda",
//     quote: "You can give this car to a monkey and he would finish sixth.",
//   },
//   { id: 8, driver: "Lewis Hamilton", quote: "It's hammer time." },
//   {
//     id: 9,
//     driver: "Daniel Ricciardo",
//     quote: "Sometimes you've just got to lick the stamp and send it.",
//   },
//   { id: 10, driver: "Juan Pablo Montoya", quote: "Oh, deer!" },
// ];

// const quoteDriver = document.getElementById('quoteDriver');
// const quoteText = document.getElementById('quoteText');
// const quoteCountDown = document.getElementById('quoteCountDown');
// const Counting = 5;

// const getRandomQuote = () => {
//     let randomIndex = Math.floor(Math.random() * blockQuotes.length);
//     return blockQuotes[randomIndex];
// }

// const setQuoteDoc = () => {
//     const randomQuote = getRandomQuote();
//     quoteDriver.innerHTML = `${randomQuote.driver}`;
//     quoteText.innerHTML = `${randomQuote.quote}`;
// }




const blockQuotes = [
  {
    id: 1,
    driver: "Ayrton Senna",
    quote:
      "If you no longer go for a gap that exists, you are no longer a racing driver.",
  },
  {
    id: 2,
    driver: "Kimi Räikkönen",
    quote: "Leave me alone, I know what I'm doing.",
  },
  {
    id: 3,
    driver: "Fernando Alonso",
    quote: "All the time you have to leave a space!",
  },
  {
    id: 4,
    driver: "Michael Schumacher",
    quote: "I am not here to be popular. I am here to win.",
  },
  {
    id: 5,
    driver: "James Hunt",
    quote:
      "My biggest advantage is that I have bigger balls than the other drivers.",
  },
  {
    id: 6,
    driver: "Max Verstappen",
    quote: "That's what you get when you don't leave me space.",
  },
  {
    id: 7,
    driver: "Niki Lauda",
    quote: "You can give this car to a monkey and he would finish sixth.",
  },
  { id: 8, driver: "Lewis Hamilton", quote: "It's hammer time." },
  {
    id: 9,
    driver: "Daniel Ricciardo",
    quote: "Sometimes you've just got to lick the stamp and send it.",
  },
  { id: 10, driver: "Juan Pablo Montoya", quote: "Oh, deer!" },
];

const quoteText = document.getElementById("quoteText");
const quoteDriver = document.getElementById("quoteDriver");
const quoteCountDown = document.getElementById("count");
let chargeLevel = 5;

const getRandomQuote = () => {
  let randomIndex = Math.floor(Math.random() * blockQuotes.length);
  return blockQuotes[randomIndex];
};

const setQuoteDoc = () => {
  const randomQuote = getRandomQuote();
  quoteText.innerHTML = `"${randomQuote.quote}"`;
  quoteDriver.innerHTML = randomQuote.driver;
};

setQuoteDoc();

const quoteTime = setInterval(() => {
  chargeLevel--;
  if (chargeLevel <= 0) {
    setQuoteDoc();
    chargeLevel = 5;
  }
  quoteCountDown.innerHTML = chargeLevel;
}, 1000);

const restartButton = () => {
  chargeLevel = 5;
  quoteCountDown.innerHTML = chargeLevel;
}
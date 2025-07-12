const quotes = [
  {
    text: "العقل زينة.",
    author: "مثل عربي"
  },
  {
    text: "كن التغيير الذي تريد أن تراه في العالم.",
    author: "غاندي"
  },
  {
    text: "من جد وجد ومن زرع حصد.",
    author: "حكمة عربية"
  },
  {
    text: "النجاح لا يأتي صدفة، بل نتيجة مجهود مستمر.",
    author: "مجهول"
  },
  {
    text: "إذا لم تخطط لحياتك، فغيرك سيخطط لك.",
    author: "جيم رون"
  }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteText.textContent = `"${randomQuote.text}"`;
  quoteAuthor.textContent = `- ${randomQuote.author}`;
});

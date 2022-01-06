const quotes = [{
    quote : "He who has never hoped can never despair.",
    author : "George Bernard Shaw",
},{
    quote : "Laughter is by definition healthy.",
    author : "Doris Lessing",
},{
    quote : "A friend to all is a friend to none.",
    author : "Aristotle",
},{
    quote : "When you stare into the abyss the abyss stares back at you.",
    author :  "Friedrich Nietzsche",
},{
    quote : "The more I want to get something done, the less I call it work.",
    author : "Richard Bach",
},{
    quote : "Dreams come true. Without that possibility, nature would not incite us to have them.",
    author : "John Updike",
},{
    quote : "You may be disappointed if you fail, but you are doomed if you don't try.",
    author : "Beverly Sills",
},{
    quote : "When virtue has slept, she will get up more refreshed.",
    author : "Friedrich Nietzsche",
},{
    quote : "About the only thing that comes to us without effort is old age.",
    author : "Gloria Pitzer",
},{
    quote : "True life is lived when tiny changes occur.",
    author : "Leo Tolstoy",
}];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
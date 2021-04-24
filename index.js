
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];



//Show new quote

function newQuote(){
	// Pick a random quote from api
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; 
	authorText.textContent = quote.author;
	quoteText.textContent = quote.text;

}



//Quote from API

async function getQuotes(){
	const apiUrl = "https://type.fit/api/quotes";
try{
	const response = await fetch(apiUrl);
	apiQuotes = await fetch(apiUrl);
	apiQuotes = await response.json();
	newQuote();
} catch (error) {

	}
}

getQuotes();



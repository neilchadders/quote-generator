
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-button");
const image = document.createElement("img");


let apiQuotes = [];



//Show new quote

function newQuote(){
	// Pick a random quote from api
const img = document.getElementById("jcb");
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]; 

if (Math.floor(Math.random() * apiQuotes.length) / 33 > 30){
	authorText.textContent = "JCB - Chorley";
	quoteText.textContent = quote.text;
	img.classList.remove("jcb");

}

else {
	authorText.textContent = quote.author;
	quoteText.textContent = quote.text;
	img.classList.add("jcb");
}
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

//Event Listeners 
newQuoteBtn.addEventListener("click", newQuote);

getQuotes();



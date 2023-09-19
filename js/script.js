const apiUrl = "https://api.api-ninjas.com/v1/quotes?";
const apiKey = "2TidqqXkCjVE08hf7pDsYQ==bJmQVy2ku63YTUvq";
const quoteElement = document.querySelector(".quote");
const categoryElement = document.querySelector(".category");
const authorElement = document.querySelector(".author");
const btn = document.querySelector(".btn");

async function fetchQuote() {
	try {
		const response = await fetch(apiUrl, {
			headers: {
				"X-Api-Key": apiKey,
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.status} - ${response.statusText}`);
		}

		const data = await response.json();
		const { author, quote, category } = data[0];
		quoteElement.textContent = `"${quote}"`;
		categoryElement.textContent = `#${category}`;
		authorElement.textContent = `- ${author}`;
		// console.log(data);
	} catch (error) {
		console.error(error);
	}
}

btn.addEventListener("click", fetchQuote);

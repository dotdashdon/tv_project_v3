const API_URL = 'https://api.tvmaze.com/shows/82/episodes';
// const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY'

fetch(API_URL)
	.then((response) => {
		console.log('we got a response');
		console.log(response);
		return response.json();
	})
	.then((jsonData) => {
		const results = jsonData.map((element) => element.name);
		displaySearchResults(results);
	});

function searchShow(query) {
	const SEARCH_API = `https://api.tvmaze.com//search/shows?&q=${query}`;
	fetch(SEARCH_API)
		.then((response) => {
			return response.json();
		})
		.then((jsonData) => {
			console.log(jsonData);
		});
}

function displaySearchResults(results) {
	const list = document.getElementById('resultsList');
	list.innerHTML = '';
	results.forEach((result) => {
		const element = document.createElement('li');
		element.innerText = result;
		list.appendChild(element);
	});
}

let searchTimeoutToken = 0;

window.onload = () => {
	const searchElement = document.getElementById('search');
	searchElement.oninput = (event) => {
		clearTimeout(searchTimeoutToken);

		searchTimeoutToken = setTimeout(() => {
			searchShow(searchElement.value);
		}, 250);
	};
};

// const API_URL = 'https://api.tvmaze.com/shows/82/episodes'
// const IMG_PATH = 'https://api.tvmaze.com/shows/1/images'
// const SEARCH_URL = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY'

// const form =document.getElementById('form')
// const search = document.getElementById('')

// getEpisodes(API_URL)

// async function getEpisodes(url) {
//    const res = await fetch(url)
//    const data = await res.json()

//    console.log(data.results)
// }

// form.addEventListener ('submit', (e) => {
//   e.preventDefault()
// })
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

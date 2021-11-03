const API_URL = 'https://api.tvmaze.com/shows/82/episodes';
const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY'
const IMG_PATH = 'https://api.tvmaze.com/shows/82/images'

const main = document.getElementById('main')
const form =document.getElementById('form')
const search = document.getElementById('')

fetch(API_URL)
	.then((response) => {
		console.log('we got a response');
		showEpisodes(response);
		return response.json();
	})
	.then((jsonData) => {
		const results = jsonData.map((element) => element.name);
		displaySearchResults(results);
	});


function showEpisodes(jsonData) {
	 main.innerHTML = ''
	 
	 jsonData.forEach((data)=> {
		 const { name, season, episode.image.medium summary} = data

		 const episodeElement = document.createElement('div')
		 episodeElement.classList.add('episode')

		 episodeElement.innerHTML= `
		    <div class="episode">
      <img src="${IMG_PATH + image.medium}" alt="">
      <div class="epsiode-info">
        <h3>Episode Title</h3>
        <span class="SNumEpNum">0101</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quae quam totam ab officiis
        ipsa quod doloribus error dicta. Consectetur,
        recusandae? Consectetur ea explicabo libero.
        Accusantium optio placeat corrupti eius corporis!
      </div>
    </div>
		 `
	 })
}


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
// const IMG_PATH = 'https://api.tvmaze.com/shows/82/images'
// const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=82'//this is wrong

// const form =document.getElementById('form')
// const search = document.getElementById('')

// getEpisodes(API_URL)



// async function getEpisodes(url) {
//    const res = await fetch(url)  //instead of doing .then 
//    const data = await res.json()

//    console.log(data.result)
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

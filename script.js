// const API_URL = 'https://api.tvmaze.com/shows/82/episodes'; //returns object with episode data
// const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY' //search of object 
// const IMG_PATH = 'https://api.tvmaze.com/shows/82/images' //return array of objects with img data

// const main = document.getElementById('main')
// const form =document.getElementById('form')
// const search = document.getElementById('')

// fetch(API_URL)
// 	.then((response) => {
// 		console.log('we got a response');
// 		showEpisodes(response);
// 		return response.json();
// 	})
// 	.then((jsonData) => {
// 		const results = jsonData.map((element) => element.name);
// 		displaySearchResults(results);
// 	});


// function showEpisodes(jsonData) {
// 	 main.innerHTML = ''
	 
// 	 jsonData.forEach((data)=> {
// 		 const { name, season, episode,image, medium summary} = data

// 		 const episodeElement = document.createElement('div')
// 		 episodeElement.classList.add('episode')

// 		 episodeElement.innerHTML= `
// 		    <div class="episode">
//       <img src="${IMG_PATH + image.medium}" alt="">
//       <div class="epsiode-info">
//         <h3>Episode Title</h3>
//         <span class="SNumEpNum">0101</span>
//       </div>
//       <div class="overview">
//         <h3>Overview</h3>
//         Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Quae quam totam ab officiis
//         ipsa quod doloribus error dicta. Consectetur,
//         recusandae? Consectetur ea explicabo libero.
//         Accusantium optio placeat corrupti eius corporis!
//       </div>
//     </div>
// 		 `
// 	 })
// }


// function searchShow(query) {
// 	const SEARCH_API = `https://api.tvmaze.com//search/shows?&q=${query}`;
// 	fetch(SEARCH_API)
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((jsonData) => {
// 			console.log(jsonData);
// 		});
// }

// function displaySearchResults(results) {
// 	const list = document.getElementById('resultsList');
// 	list.innerHTML = '';
// 	results.forEach((result) => {
// 		const element = document.createElement('li');
// 		element.innerText = result;
// 		list.appendChild(element);
// 	});
// }

// let searchTimeoutToken = 0;

// window.onload = () => {
// 	const searchElement = document.getElementById('search');
// 	searchElement.oninput = (event) => {
// 		clearTimeout(searchTimeoutToken);

// 		searchTimeoutToken = setTimeout(() => {
// 			searchShow(searchElement.value);
// 		}, 250);
// 	};
// };



 const API_URL = 'https://api.tvmaze.com/shows/82/episodes'; //returns object with episode data
 const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY' //search of object 
 const IMG_PATH = 'https://api.tvmaze.com/shows/82/images' //return array of objects with img data


const form =document.getElementById('form')
const search = document.getElementById('')
const main = document.getElementById('main')
//Get Episodes 
getEpisodes(API_URL)

async function getEpisodes(url) {
   const res = await fetch(url)  //instead of doing .then 
   const data = await res.json()

   showEpisodes(data)
}

function showEpisodes(episodes) {
 main.innerHTML ='' //to stop episodes being added on to the bottom 

 episodes.forEach((episode )=> {
	 const {name,season, poster_medium , summary} = episode           //this is using DESTRUCTURING episode is an object with all the episode data 
																		//.Use {} to pull out particular info . instead of having to use episode.title etc 
																		//take the episodes/data that is fetched  and loop through 
	
	const episodeEl = document.createElement('div')
	episodeEl.classList.add('episode')

	episodeEl.innerHTML =`
      <img src="${IMG_PATH} + poster_medium" alt="${name}">
      <div class="epsiode-info">
        <h3>${name}</h3>
        <span class="Season">${season}</span>            
      </div>
      <div class="summary">
        <h3>Summary</h3>
        ${summary}
      </div>
    
	`

	main.appendChild(episodeEl)
	//need to create pad function for season zero padding 
	
														 
 })     												



}




form.addEventListener ('submit', (e) => {
  e.preventDefault() // so does not submit to the page 

const searchTerm = search.value 

if (searchTerm && searchTerm !== '') {  //  if search term exists and is not equal to nothing
 getEpisodes(SEARCH_API + searchTerm)  //get all episodes and add on search 
 
 search.value =''                     //clear the search value to nothing again 
} else {                              //so if submit with nothing in there then page is reloaded 
	window.location.reload () 
}
})

// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

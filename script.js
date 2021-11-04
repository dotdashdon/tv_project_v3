
 const API_URL = 'https://api.tvmaze.com/shows/82/episodes'; //returns object with episode data
 const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY';//search of object 

 let allEpisodes =[];  //to store array of episodes fetched

const form =document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


function setup() {
  getEpisodes(API_URL);
}


async function getEpisodes(url) {
   const res = await fetch(url);  //instead of doing .then 
   allEpisodes = await res.json();

   showEpisodes(allEpisodes);
}

function showEpisodes(episodes) {
 main.innerHTML ='' //to stop episodes being added on to the bottom 

 episodes.forEach((episode )=> {
	 const episodeEl = createEpisodeCard(episode);
	 main.appendChild(episodeEl);													 
 })     												

}

function createEpisodeCard (episode){
  const {name,season, number,image , summary} = episode;
	const episodeEl = document.createElement('div');
	episodeEl.classList.add('episode')

	episodeEl.innerHTML =`
      <img src="${image.medium}" alt="${name}">
      <div class="episode-info">
        <h3>${name}</h3>
        <span class="Season">S${season               //use this to create another function for drop down
      .toString()
      .padStart(2, "0")}: E${number.toString().padStart(2, "0")}</span>            
      </div>
      <div class="summary">
        <h3>Summary</h3>
        ${summary}
      </div> 
	`
 return episodeEl;
}


search.addEventListener ('input', (e) => {
  e.preventDefault() // so does not submit to the page 

const searchTerm = search.value 
if (searchTerm && searchTerm !== '') {  //  if search term exists and is not equal to nothing
  const filteredEps = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchTerm) ||
      episode.summary.toLowerCase().includes(searchTerm)
    );
  });
 
  showEpisodes(filteredEps);          
}
})




window.onload = setup;

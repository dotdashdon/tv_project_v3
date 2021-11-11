
 const API_URL = 'https://api.tvmaze.com/shows/82/episodes'; //returns object with episode data
 const SEARCH_API = 'https://api.tvmaze.com//search/shows?&q=SEARCH_QUERY';//search of object 
 
 let allEpisodes =[];  //to store array of episodes fetched

const form =document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const selectEp = document.getElementById('');
const selectShow = document.getElementById('');


function setup() {
  getEpisodes(API_URL); //calls the getEpisodes function passing in API URL 
  const select =  document.getElementById('dropDownEpisodes'); //grabbing select element 
  select.addEventListener ('change', handleSelect);
}

function handleSelect(event) {  //called every time something changes in select 
  const value = event.target.value; //capturing value from event. (value of option clicked on - id or empty string) 
  console.log(value);
  if (value){
    const filteredEps = allEpisodes.filter ((episode) => {
       return episode.id == value;
    })
    showEpisodes(filteredEps);
  } else {
    showEpisodes(allEpisodes);
  }
}

//using fetch() to make GET request from URL. 
async function getEpisodes(url) {
   const res = await fetch(url);  //instead of doing .then 
   allEpisodes = await res.json();    //uses .json() method to convert response to JSON
  populateEpisodeDropdown(allEpisodes);
   showEpisodes(allEpisodes);  //runs showEpisodes 
}

function populateEpisodeDropdown(episodes) {
    const select =  document.getElementById('dropDownEpisodes');
    select.innerHTML = '<option value="" >All Episodes</option>'; //putting select back to have one option 
    episodes.forEach((episode) =>{
      const {name,season, number,id} = episode;
      const option = document.createElement('option');
      option.value = id;
      option.innerHTML = `S${season               //use this to create another function for drop down
      .toString()
      .padStart(2, "0")}: E${number.toString().padStart(2, "0")} ${name}`;
      select.appendChild(option);
    })

}


 function getShows(shows) {

 } 


function populateShowDropdown(shows){
  const select = document.getElementById('dropDownShow');
  select.innerHTML = '<option value="" >All Shows</option>';

}

function showEpisodes(episodes) {
 main.innerHTML ='' //to stop episodes being added on to the bottom 
 episodes.forEach((episode )=> {    //looping through episode array & creates new element for each episode?
	 const episodeEl = createEpisodeCard(episode); //creates new element 
	 main.appendChild(episodeEl);													 
 })     												

}

function createEpisodeCard (episode){
  const {name,season, number,image , summary} = episode; //destructuring 
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



// function populateSelectShow(show) {
//    const { name, id} = show;
//    const seasonEl =document.createElement(''); // should thisbe form , select or div?
//    seasonEl.classList.add('season') //adding class 

//    seasonEl.innerHTML =`
//    <label for="dropDownSeason"></label>
//   <select name="dropDownSeasons" id="dropDownSeasons" class="dropdownSeas">
//     <optgroup label="chooseSeason">
//       <option value="${name} <span class="Season">S${season               
//       .toString()
//       .padStart(2, "0")}: E${number.toString().padStart(2, "0")}</span>       
    
//     </optgroup>
//   </select>
   
//    `
//    return seasonEl;
// }



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

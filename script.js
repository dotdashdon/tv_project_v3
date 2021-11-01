

const API_URL = 'https://api.tvmaze.com/shows/82/episodes'
const IMG_PATH = 'https://api.tvmaze.com/shows/1/images'
const SEARCH_URL = 'https://api.tvmaze.com//search/shows?&query='


//
getEpisodes(API_URL)


async function getEpisodes(url) {
   const res = await fetch(url)
   const data = await res.json()
   
   console.log(data.results)
}


// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;

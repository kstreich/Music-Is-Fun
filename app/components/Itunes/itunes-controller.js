import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let songs = itunesService.getMusicByArtist()
  let template = ""

  results.forEach(result => {
    template += `
    <div class= "col-4 card">
      <div class= "card-body justifty-content-around text-center">
      
        <img class= "card-img-top" src="${result.albumArt}"> 
        

          <h5 class="card-title">${result.title}</h5>
          <h5 class= "card-title">${result.artist}</h5>
          <p class="card-text">${result.collection}</p>
          <p class="card-text">${result.price}</p>
          <audio controls class="audio-width" src="${result.preview}">
          </audio>
      </div> 
    </div>
    `

  })
  document.getElementById("songs").innerHTML = template
}




//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}
export default ItunesController



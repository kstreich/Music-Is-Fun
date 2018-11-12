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
   <table class="table">
     <tbody>
       <tr class="tbr">
          <th scope="row"></th>
          <td><img class="art" src="${result.albumArt}"></td>
          <td><audio class="audio-bar" controls src="${result.preview}"></audio></td>
          <td><strong>${result.title}</strong></td>
          <td>${result.artist}</td>
          <td>${result.collection}</td>
          <td>${result.price}</td>
       </tr>
     </tbody>
   </table>
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


  // <div class= "col-3 card" style= "width: 15rem" >
  //   <div class="card-body justifty-content-around text-center">

  //     <img class="card-img-top" src="${result.albumArt}">

  //       <h5 class="card-title">${result.title}</h5>
  //       <h5 class="card-title">${result.artist}</h5>
  //       <p class="card-text">${result.collection}</p>
  //       <p class="card-text">${result.price}</p>
  //       <audio controls class="audio-width mt-2" src="${result.preview}"></audio>
  //     </div> 
  //   </div>


  // < table class="table" >
  //   <tbody>
  //     <tr>
  //       <th scope="row"></th>
  //       <td><img src="${result.albumArt}"></td>
  //         <td><audio controls src="${result.preview}"></td>
  //           <td>${result.title}</td>
  //           <td>${result.artist}</td>
  //           <td>${result.collection}</td>
  //           <td>${result.price}</td>
  //     </tr>
  //   </tbody>
  // </table>
  //     `
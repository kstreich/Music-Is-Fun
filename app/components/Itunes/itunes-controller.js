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
    <div class= "col card">
      <img src="${result.albumArt}">
      <h5>${result.title}</h5>
      <h5>${result.artist}</h5>
      <p>${result.collection}</p>
      <p>${result.price}</p>
      <audio controls src="${result.preview}"></audio>
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


//     event.preventDefault();
//     let form = event.target
//     let formData = {
//     title: form.title.value,
//     albumArt: form.albumArt.value,
//     artist: form.artist.value,
//     colletion: form.collection.value,
//     price: form.price.value,
//     preview: form.preview.value
//     }
//   }
// }



  // `<div class="container">
  //       <div class="row">
  //           <div class="col-sm-4">
  //               <div id="songs">
  //                   <div class="form-group">
  //                       <label for="title">Song Title</label>
  //                   </div>
  //                   <div class="form-group">
  //                       <label for="albumArt">Img</label>
  //                   </div>
  //                   <div class="form-group">
  //                       <label for="artist">Artist</label>
  //                   </div>
  //                   <div class="form-group">
  //                       <label for="colletion">Collection</label>
  //                   </div>
  //                   <div class="form-group">
  //                       <label for="price">Price</label>
  //                   </div>
  //                   <div class="form-group">
  //                       <label for="preview">Preview</label>
  //                   </div>
  //               </div>
  //           </div>
  //       </div>
  //   </div>`
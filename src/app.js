document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit(); 
  });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems, options);
  });
let cards = document.getElementById("cards")
  fetch("../json/Lista.json")
    .then(response=>response.json())
      .then(data=>{
        for(let i in data){
          cards.innerHTML+=
          `<div class="col s12 m6 l4 ">
          <div class="card z-depth-5" id=${i}>
            <div class="card-image">
              <img class="cardImage" src=${data[i].image}>
            </div>
            <div class="card-content">
              <center><h5>${data[i].name}</h5></center>
            </div>
            <button class="btnMore"><div class="card-action">
              Más...
            </div></button>
          </div>
        </div>`         
          console.log()
        }
      })


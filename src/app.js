let cards = document.getElementById("cards");
let content = document.getElementById("content");



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
        
        const btn = document.getElementsByClassName("btnMore");
         
        for( let i = 0; i< btn.length; i++){
          btn[i].addEventListener("click", ()=>{
            cards.style.display="none";
            content.style.display="block";
            fetch("../json/productos.json")
              .then(response=>response.json())
                .then(data=>{
                  data.forEach(element => {
                    for(let value in element){
                     if( element.category == i+1){                  
                      content.innerHTML+= `<div class="col s12 m6 l4 ">
                      <div class="card z-depth-5" id=${element.id}>
                        <div class="card-image">
                          <img class="cardImage" src=${element.image}>
                        </div>
                        <div class="card-content">  
                          <center><h5>${element.name}</h5></center>
                          <center><p>${element.description}</p></center>                     
                        </div>
                      </div>
                    </div>`
                     }else{
                       console.log("error")
                     }
                    }
                  });
                  
                  // if(btn[i]===data.id){
                  //   alert("hola")
                  // }
                })
         
          })
         
        }

  //  if(i === btn)
//     alert(btn);
//   }
// }
        }
      })



const URL = "https://api.escuelajs.co/api/v1/products";
const btnLoad = document.getElementById("btnLoad");

btnLoad.addEventListener("click",(event)=>{
    event.preventDefault();
      fetch(URL)
          .then(resp=>resp.json())
          .then(resp=>{
            const cards = new Array(...document.getElementsByClassName("card"));
            for (const [i,card] of cards.entries())
              editCard(card,resp[i]);
          })
          .catch(err=>{console.error("Error al cargar contenido: "+err.message);
          });
})//onClick);

function editCard(card,content){
  //card.style.height="45em";
  const fecha = new Date(content.updatedAt);
  let imgContainer = card.getElementsByTagName("svg").item(0);
  if(imgContainer)
    card.getElementsByClassName("card-body").item(0).insertAdjacentHTML("afterbegin",`<h3></h3>`)
  else
    imgContainer= card.getElementsByClassName("card-img-top").item(0);//Permite presionar varias veces cargar
  imgContainer.replaceWith(createImage(content));
  card.getElementsByClassName("card-text").item(0).innerText = content.description;
  card.getElementsByTagName("h3").item(0).innerText =content.title;
  card.getElementsByTagName("button").item(0).innerText =content.category.name;
  card.getElementsByTagName("button").item(1).innerText =fecha.getFullYear();
  card.getElementsByTagName("small").item(0).innerText =`$ ${content.price}`;

}//editCard

function createImage(content) {
  let img = document.createElement("img");
  img.className = "bd-placeholder-img card-img-top";
  img.width = "100%";
  img.src = content.images[1]||"https://http.cat/images/404.jpg";
  img.alt = content.slug;
  img.referrerPolicy = "no-referrer";
  return (img);
}//createImage()






/*
//card.insertAdjacentHTML("afterbegin",`
//  <img class="bd-placeholder-img card-img-top" width="100%" src="${content.images}" alt="${content.slug}" referrerpolicy="no-referrer" />
//`);

<div class="col" style="min-height: 45em;">
          <div class="card shadow-sm h-100" id="${card.id}" >

            <svg class="bd-placeholder-img card-img-top" width="100%" height="20" 
            xmlns="http://www.w3.org/2000/svg" role="img" 
            aria-label="Placeholder: Thumbnail" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
              <title>${card.title}</title>
             
              <rect width="100%" height="100%" fill="#55595c" 
              data-darkreader-inline-fill="" 
              style="--darkreader-inline-fill: var(--darkreader-background-55595c, #43484b);">
              </rect>
              
              <text x="50%" y="50%" fill="#eceeef" dy=".3em" data-darkreader-inline-fill="" style="--darkreader-inline-fill: var(--darkreader-text-eceeef, #dddad6);">
              </text>
            </svg>
            <div class="card-body d-flex flex-column justify-content-between">
              <p class="card-text">${card.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">${card.category.name}</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">${fecha.getFullYear()}</button>
                </div>
                <small class="text-body-secondary">$ ${card.price}</small>
              </div>
            </div>
          </div>
        </div>

*/
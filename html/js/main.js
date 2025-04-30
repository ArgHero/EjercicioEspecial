const URL = "https://api.escuelajs.co/api/v1/products";
const btnLoad = document.getElementById("btnLoad");
const cardContainer = document.getElementById("cardContainer");
//onclick="onPress(event);
btnLoad.addEventListener("click",(event)=>{
    event.preventDefault();
    fetch(URL)
        .then(resp=>resp.json())
        .then(resp=>{
            cardContainer.innerHTML="";
        })
        .catch(err=>console.error(err.message));
})//onClick);

const createCard = (card)=>{
    console.log("crea tarjeta");
    
    cardContainer.insertAdjacentHTML("beforeend",`
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="${card.images.item(0)}" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">${card.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$ price</small>
              </div>
            </div>
          </div>
        </div>
        `);
}
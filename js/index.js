// console.log("rana")


const getALLData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools.slice(0, 6)));
};
 const displayData = (data)=>{
    console.log(data)
    const allCards=document.getElementById('all-cards');
    data.forEach(card =>{
        const cardDiv=document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card h-100 p-3 shadow-sm">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title ">Features</h3>
          <p class="opacity-75">1.${card.features[0]} </p>
          <p class="opacity-75">2.${card.features[1]} </p>
          <p class="opacity-75">3.${card.features[2]} </p>
        </div>
        <div class="border-top d-flex justify-content-between">
        <div>
        <h6 class="">${card.name
        }</h6>
        <i class="fa-regular fa-calendar-days"> <span class="fs-6"> ${card.published_in}</span></i>
        </div>
        <div class="mt-3" >
        <i class="fas fa-arrow-right"></i>
      </div>

        </div>
      </div>
        `;
        allCards.appendChild( cardDiv);

    });

 }

 const loadAllCard = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
    const seeBtn =document.getElementById('see-btn');
    seeBtn.classList.add('d-none')
};
getALLData()



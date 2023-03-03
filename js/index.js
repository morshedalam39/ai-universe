// console.log("rana")


const getALLData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools.slice(0, 6)));

    document.getElementById("spinner").classList.remove("d-none");
   
    
};
 const displayData = (data)=>{
    console.log(data)
    
    const allCards=document.getElementById('all-cards');
    allCards.innerHTML = "";

    data.forEach(card =>{
        const cardDiv=document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card h-100 p-3 shadow-sm">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title ">Features</h3>

          
          <ol id="${card.id}"></ol>

        </div>
        <div class="border-top d-flex justify-content-between">
        <div>
        <h6 class="">${card.name
        }</h6>
        <i class="fa-regular fa-calendar-days" > <span style="font-size: small;"> ${card.published_in}</span></i>
        </div>
        <div class="mt-3" >

        <i class="fas fa-arrow-right btn btn-danger rounded opacity-75"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
      </div>

        </div>
      </div>
        `;

        allCards.appendChild( cardDiv);
        const featuresContainer= document.getElementById(card.id);
        card.features.forEach(feature => {
          const featureItem = document.createElement('li');
          featureItem.innerText=feature;
          featuresContainer.appendChild(featureItem);

        })
       
        document.getElementById("spinner").classList.add("d-none");
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



// console.log("rana")


const getALLData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools.slice(0, 6)));

    document.getElementById("spinner").classList.remove("d-none");
   
    
};
 const displayData = (data)=>{
    // console.log(data)
    
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

        <i class="fas fa-arrow-right btn btn-danger rounded opacity-75"  data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getSingleData('${
          card.id
        }')"></i>
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


const getSingleData = (id) => {

  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleData(data.data));
};

const showSingleData = (data) => {
  document.getElementById('modalBody').innerHTML=`
  <div class="w-50 border border-danger-subtle p-3 bg-danger-subtle">
  <h4 class=" fs-5" id="detailsModalLabel">${data.description}</h4>
  <div class="d-flex gap-3 mt-3">
  <div class="border border-secondary-subtle rounded p-2 bg-light text-success">
  <ul style="list-style:none">
  <li class="text-center"><h6>${data.pricing[0].price ? data.pricing[0].price : 'Free of Cost/Basic'}</h6></li>
  <li><h5>${data.pricing[0].plan}</h5></li>
  </ul>
  </div>
  <div class="border border-secondary-subtle rounded p-2 bg-light text-danger">
  <ul style="list-style:none">
  <li ><h6>${data.pricing[1].price}</h6></li>
  <li><h5>${data.pricing[1].plan}</h5></li>
  </ul>
  </div>
  <div class="border border-secondary-subtle rounded p-2 bg-light text-danger-emphasis">
  <ul style="list-style:none">
  <li ><h6>${data.pricing[2].price}</h6></li>
  <li><h5>${data.pricing[2].plan}</h5></li>
  </ul>
  </div>
  </div>

  <div class="d-flex gap-5">
  <div class="mt-4">
  <h4>Features</h4>
  <ul>
  <li>${data.features[1].feature_name}</li>
  <li>${data.features[2].feature_name}</li>
  <li>${data.features[3].feature_name}</li>
  </ul>
  </div>
  <div class="mt-4">
  <h4>Integrations</h4>
  <ul>
  <li>${data.integrations[0] ? data.integrations[0] : 'No Data Found'}</li>
  <li>${data.integrations[1] ? data.integrations[1] : 'No Data Found'}</li>
  <li>${data.integrations[2] ? data.integrations[2] : 'No Data Found'}</li>
  </ul>
  </div>
  </div>
  </div>

  <div class="w-50 border border-danger-subtle p-3">
  <img class="img-fluid" src="${data.image_link[0]}">
  <div class="position-relative">

  
  </div>
  <h5 class="text-center  mt-2 fw-bold">${data.input_output_examples[0].input}</h5>
  <p class="text-center mt-2">${data.input_output_examples[1].output ? data.input_output_examples[1].output : 'No! Not Yet! Take a break!'}</p>
  </div>
  `

};
getALLData()







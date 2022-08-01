//toggle Spinner
const toggleSpinner=displayStyle=>{
    document.getElementById("spinner").style.display=displayStyle;
}

// search Phones
const searchPhones=()=>{
    const searchText=document.getElementById("search-field").value;
    const result=searchText.toLowerCase();
   toggleSpinner('block');
    loadPhones(result);
    document.getElementById("search-field").value='';

}

//loadPhones
const loadPhones=phone=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${phone}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhones(data.data.slice(0,20)));
}


// display phones in UI
const displayPhones=phones =>{
    const container=document.getElementById('divContainer');
    container.textContent='';
    console.log(phones);
    //error
    //it isnot done showing error
    phones?.forEach(phone=>{
        const div=document.createElement('div');
        div.classList.add('col');
        div.style.width='20rem';
        div.innerHTML=` 
        <div class="card ">
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
            <button onclick="loadPhoneDetails('${phone.slug}')">Explore</button>
          </div>
        </div>`
        container.appendChild(div);
    })

   toggleSpinner('none');
}
//loadPhone details
const loadPhoneDetails= phoneId=>{
    const url= `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhoneDetails(data.data));
}
//displaying phone details in UI
const displayPhoneDetails=Id=>{
    const container=document.getElementById("detailDiv");
    container.textContent='';
    console.log(Id);
        const div=document.createElement('div');
        div.classList.add('card');
        div.style.width='25rem';
        div.innerHTML=`
        <img src="${Id.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Id.name}</h5>
          <h3>${Id.releaseDate?  Id.releaseDate:'Result Not Found'}</h3>
          <p class="card-text"><h3>MainFeatures:</h3>
          <h5>Chipset: ${Id.mainFeatures.chipSet}</h5>
          <h5>Display Size: ${Id.mainFeatures.displaySize}</h5>
          <h5>Memory: ${Id.mainFeatures.memory}</h5>
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
        container.appendChild(div);
    

}
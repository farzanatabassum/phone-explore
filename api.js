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
        div.innerHTML=` 
        <div class="card w-100">
          <img src="${phone.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.brand}</p>
          </div>
        </div>`
        container.appendChild(div);
    })

   toggleSpinner('none');
}
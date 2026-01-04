const country = document.querySelector('.countries-container');
const subtitle = document.querySelector('.subtitle');
const searchInput = document.getElementById('search');




countries.forEach(element => {
    country.innerHTML += `
    <div class="map">
            <div class="country-name" id="${element}">${element}</div>
        </div>
    `
});

function Search(){
    let count = 0;
    subtitle.textContent = 'Total Number of countries ';
    country.innerHTML = '';
    console.log(searchInput.value)
    countries.forEach(element =>{
        if(element.toUpperCase().includes(searchInput.value.toUpperCase())){
            count+=1;
            country.innerHTML += `
            <div class="map">
            <div class="country-name" id="${element}">${element}</div>
            </div>
            `
        }
    })
    subtitle.textContent += ` containing ${searchInput.value} is ${count}`
}

function SearchFirst(){
    country.innerHTML = '';
    const firstWord = searchInput.value.split(" ")[0];
    countries.forEach(element =>{
        if(element.toUpperCase().includes(firstWord.toUpperCase())){
            country.innerHTML += `
            <div class="map">
            <div class="country-name" id="${element}">${element}</div>
            </div>
            `
        }
    })
}


function Sort(){
    country.innerHTML = '';
    countries.reverse();
    countries.forEach(element => {
        country.innerHTML += `
        <div class="map">
                <div class="country-name" id="${element}">${element}</div>
            </div>
        `
    });
}
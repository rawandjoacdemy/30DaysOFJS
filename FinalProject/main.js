const countriesList = document.querySelector('.countries-list');
const countriesBar = document.querySelector('.countries-population');
const population = document.querySelector('.population-number');
const graphTitle = document.querySelector('.graph-title')
const country = document.querySelector('.countries-container');
const subtitle = document.querySelector('.subtitle');
const searchInput = document.getElementById('search');
const sortbtn = document.querySelector('.sortBtn');
const sortbyCapbtn = document.querySelector('.sortbyCapBtn');
const sortbyPopbtn = document.querySelector('.sortbyPopBtn');
const populationChartBtn = document.querySelector('.population-chart');
const populationOptionBtn = document.querySelector('.population');
const languageOptionBtn = document.querySelector('.languages');

let searched = [];


subtitle.innerHTML = `Currently, We have ${countries_data.length} Countries`;


function Render(countries)
{
    countries.forEach(element => {
        country.innerHTML += `
           <div class="card" id="${element.name}">
                <img src="${element.flag}" alt="flag" class="flag">
                <div class="country-name">
                    ${element.name}
                </div>
                <div class="card-content">
                <p>
                    Capital: ${element.capital} <br>
                    Language: ${element.languages} <br>
                    population : ${element.population}
                </p>
                </div>
            </div>
        `
    });
}

Render(countries_data);


function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex].population < right[rightIndex].population){
            result.push(right[rightIndex]);
            rightIndex++;
        } else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr){

    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
}

function ShowPopulation(countries){
    let count;
    if(countries == ''){
        countries = countries_data;
        count = 10;
    }
    else{
        count = countries.length;
    }
    graphTitle.textContent = '10 Most populated countries'
    countriesList.innerHTML = '';
    countriesBar.innerHTML = '';
    population.innerHTML  = '';

    let totalWorldPopulation = countries.reduce((acc, cur) => acc + cur.population, 0);
    countriesList.innerHTML += `<li> World </li>`;
    countriesBar.innerHTML +=  `<li class="bar" style = "width: 100%"></li>`
    population.innerHTML += `<li>${totalWorldPopulation}</li>`
    
    const sortedCountries = mergeSort(countries);
    
    const topTen = sortedCountries.slice(0, count);
    
    
    topTen.forEach(country => {
        countriesList.innerHTML += `<li>${country.name}</li>`;
        countriesBar.innerHTML +=  `<li class="bar" style = "width: ${(country.population/7758589152)*100}%"></li>`
        population.innerHTML += `<li>${country.population}</li>`
    });

}

ShowPopulation(searched);


function ShowLanguages(searched){
     let count;
    if(searched.length === 0){
        searched = countries_data;
        count = 10;
    }
    else{
        count = searched.length;
    }
    graphTitle.textContent = 'Languages Spoken'
    let topTen = mostFrequent(searched, count);
    countriesList.innerHTML = '';
    countriesBar.innerHTML = '';
    population.innerHTML  = '';

    
    
    topTen.forEach(language => {
        countriesList.innerHTML += `<li>${language[0]}</li>`;
        countriesBar.innerHTML +=  `<li class="bar" style = "width: ${(language[1]/123)*100}%"></li>`
        population.innerHTML += `<li>${language[1]}</li>`
    });


}


function mostFrequent(countries_data, count){
    const frequencyMap = new Map();
    
    countries_data.forEach(country => {
    
        country.languages.forEach(language => {
            
            if(frequencyMap.has(language)){
                frequencyMap.set(language, frequencyMap.get(language) + 1)
            }
            else{
                frequencyMap.set(language, 1);
            }
            
        });
    });
    
    let frequencyArray = Array.from(frequencyMap.entries())
    
    frequencyArray.sort((a,b) => b[1] - a[1])
    
    
    let mostFrequentCounties = frequencyArray.splice(0, count)
    
    return mostFrequentCounties;
}


function Search(){
    let count = 0;
    subtitle.textContent = 'Total Number of countries ';
    country.innerHTML = '';
    console.log(searchInput.value)
    countries_data.forEach(element =>{
        if(element.name.toUpperCase().includes(searchInput.value.toUpperCase())){
            searched.push(element);
            count+=1;
           country.innerHTML += `
           <div class="card" id="${element.name}">
           <img src="${element.flag}" alt="flag" class="flag">
                <div class="country-name">
                    ${element.name}
                </div>
                <div class="card-content">
                <p>
                    Capital: ${element.capital} <br>
                    Language: ${element.languages} <br>
                    population : ${element.population}
                </p>
                </div>
            </div>
        `
        }
    })
    subtitle.textContent += ` containing ${searchInput.value} is ${count}`
    console.log(searched)
    ShowPopulation(searched);
}


let isAscendingS = true;
function Sort(countriesToSort) {
    if(countriesToSort == ''){
        countriesToSort = countries_data
    }
    country.innerHTML = '';
    
    const countries = countriesToSort.sort((a, b) => {
        const capA = (a.name || '').toUpperCase();
        const capB = (b.name || '').toUpperCase();
        
        if (capA < capB) return isAscendingS ? -1 : 1;
        if (capA > capB) return isAscendingS ? 1 : -1;
        return 0;
    });
    
    isAscendingS = !isAscendingS; 
    Render(countries);
}


let isAscendingC = true;
function sortByCapital(countriesToSort) {
    if(countriesToSort == ''){
        countriesToSort = countries_data
    }
    country.innerHTML = '';
    
    const countries = countriesToSort.sort((a, b) => {
        const capA = (a.capital || '').toUpperCase();
        const capB = (b.capital || '').toUpperCase();
        
        if (capA < capB) return isAscendingC ? -1 : 1;
        if (capA > capB) return isAscendingC ? 1 : -1;
        return 0;
    });
    
    isAscendingC = !isAscendingC; 
    Render(countries);
}



let isAscendingP
function SortByPopulation(countriesToSort){
    if(countriesToSort == ''){
        countriesToSort = countries_data
    }
    country.innerHTML = '';
    const countries = countriesToSort.sort((a, b) => 
        (isAscendingP) ? a.population - b.population : b.population - a.population
);

isAscendingP = !isAscendingP; 
Render(countries)
}


sortbtn.onclick = () => Sort(searched);
sortbyCapbtn.onclick = () => sortByCapital(searched);
sortbyPopbtn.onclick = () => SortByPopulation(searched);
populationChartBtn.onclick = () => ShowPopulation(searched);
populationOptionBtn.onclick = () => ShowPopulation(searched);
languageOptionBtn.onclick = () => ShowLanguages(searched);



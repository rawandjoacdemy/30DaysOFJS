const countriesList = document.querySelector('.countries-list');
const countriesBar = document.querySelector('.countries-population');
const population = document.querySelector('.population-number');



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

function ShowPopulation(){
    countriesList.innerHTML = '';
    countriesBar.innerHTML = '';
    population.innerHTML  = '';

    let totalWorldPopulation = countries_data.reduce((acc, cur) => acc + cur.population, 0);
    countriesList.innerHTML += `<li> World </li>`;
    countriesBar.innerHTML +=  `<li class="bar" style = "width: 100%"></li>`
    population.innerHTML += `<li>${totalWorldPopulation}</li>`
    
    console.log("total = "+ totalWorldPopulation)
    const sortedCountries = mergeSort(countries_data);
    
    const topTen = sortedCountries.slice(0, 10);
    
    
    topTen.forEach(country => {
        countriesList.innerHTML += `<li>${country.name}</li>`;
        countriesBar.innerHTML +=  `<li class="bar" style = "width: ${country.population/10000000}px"></li>`
        population.innerHTML += `<li>${country.population}</li>`
    });

}


function ShowLanguages(){

    let topTen = mostFrequent(countries_data);
    countriesList.innerHTML = '';
    countriesBar.innerHTML = '';
    population.innerHTML  = '';

    
    
    topTen.forEach(language => {
        countriesList.innerHTML += `<li>${language[0]}</li>`;
        countriesBar.innerHTML +=  `<li class="bar" style = "width: ${language[1] * 6}px"></li>`
        population.innerHTML += `<li>${language[1]}</li>`
    });


}





function mostFrequent(countries_data){
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
    
    let topTen = frequencyArray.splice(0,10)
    
    return topTen;
}

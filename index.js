// console.log("hello");



// mvp.1 | fetch() a single country ✅
const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/" +countryName);
    const data = await response.json();
    displayData(data)
}

// mvp.2 | take the output from your getCountryByName() function and make use of it on the webpage ✅
const section = document.querySelector("#countries")
const displayData = (data) => {

    const name = document.createElement("p")
    name.innerText = "Name: " + data[0].name.common
    section.appendChild(name);

    const capital = document.createElement("p")
    capital.innerText = "Capital: " + data[0].capital[0]
    section.appendChild(capital);

    const languages = document.createElement("p")
    languages.innerText = "Languages: " + Object.values(data[0].languages).join(", ")
    section.appendChild(languages);

    const population = document.createElement("p")
    population.innerText = "Population: " + data[0].population
    section.appendChild(population);


    // const countryName = document.createElement("p")
    // countryName.innerText = "Name: " + countryName.name.common;
    // section.appendChild(countryName);


// console.log(population);

}

const getAllCountries = document.querySelector("p")

getCountryByName("Norway");


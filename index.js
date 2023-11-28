// console.log("hello");

const getCountryByName = async (countryName) => {
    const response = await fetch("https://restcountries.com/v3.1/name/" +countryName);
    const data = await response.json();
    displayData(data)
}


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

console.log(population);


}

getCountryByName("Norway");
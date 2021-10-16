/*import countryCardTpl from "./template.hbs"
import API from "./fetchCountries.js";*/
import "./styles.css";

/*const countryContainer = document.querySelector(".js-country-container");
const input = document.querySelector(".js-input");
input.addEventListener("input", onInputCountry);

function onInputCountry(evt) {
    console.log(evt.currentTarget);
}*/

const c = fetch("https://restcountries.com/v2/name");
console.log(c);
   /* .then(response => {
        return response.json();
    })
    .then(country => {
        console.log(country);
    })
    .catch(error => { });*/

/*API.fetchCountries(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError)


function renderCountryCard(country) {
    const markup = countryCardTpl(country);
    countryContainer.innerHTML = markup;
}
function onFetchError(error) {
    function alert() { "Упс. что-то не так!" };
}*/
export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => { return response.json(); });
}
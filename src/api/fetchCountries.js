const BASE_URL = 'https://restcountries.eu'

function fetchCountries(searchQuery) {
     return fetch(`${BASE_URL}/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        
}
export default fetchCountries
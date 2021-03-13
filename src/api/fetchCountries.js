

const BASE_URL = 'https://restcountries.eu'

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/rest/v2/name/${searchQuery}`)
        .then(response => {
            
            if (response.ok) {
                return response.json()
            } 
            throw new Error
        
            })
    
}
        
export default fetchCountries
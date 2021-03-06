

const BASE_URL = 'https://restcountries.eu'

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}/rest/v2/name/${searchQuery}`)
        .then(response => { 
            return new Promise((resolve, reject) => { 
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject()
                }
            })
        })
}
        
export default fetchCountries
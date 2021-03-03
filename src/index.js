
import debounce from 'lodash.debounce'
import fetchCountries from './api/fetchCountries'

let searchCountry = ''
const inputRef = document.querySelector('#search');
inputRef.addEventListener('input', debounce(() => {
    searchCountry = inputRef.value
    fetchCountries(searchCountry).then((result) => {
        createMarkup(result)
    })
}, 500)
)

function createMarkup(arr) { 
    if (arr.length > 10) {
        alert('Too match');
    } else if (arr.length > 2 || arr.length < 10) {
        console.log(arr);
    } else { 
        console.log(arr);
    }
    
}


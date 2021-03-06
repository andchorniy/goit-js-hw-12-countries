import './styles.css';  
import debounce from 'lodash.debounce'
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import fetchCountries from './api/fetchCountries'
import markupCountryCard from './templates/country-card.hbs'

const refs = {
    contryList: document.querySelector('.contry-list'),
    contryWrapper: document.querySelector('.contry-wrapper'),
    input: document.querySelector('#search')
}

refs.input.addEventListener('input', debounce(() => {
    refs.input.value && fetchCountries(refs.input.value)
        .then(hendlerCountryArray).catch(() => { PNotify.error('Country not found') })
        
}, 500)
)

function hendlerCountryArray(arr) {
    refs.contryList.innerHTML = ''
    if (arr.length > 10 ) {
        PNotify.error('Too many matches found. Please enter a more specific query!');
    } else {
        return createMarkup(arr);
    }   
}
function createMarkup(arrayCountries) { 
    if (arrayCountries.length >= 2 && arrayCountries.length < 10) {
        refs.contryWrapper.innerHTML = ''
         arrayCountries.map((contry) => {
            refs.contryList.insertAdjacentHTML('beforeend', `<li class="list-item">${contry.name}</li>`)
         })
        
    } else  { 
        refs.contryWrapper.innerHTML = `${markupCountryCard(arrayCountries)}`
    }
}




import './styles.css';  
import debounce from 'lodash.debounce'
import PNotify from '../node_modules/pnotify/dist/es/PNotify';
import fetchCountries from './api/fetchCountries'
import markupCountryCard from './templates/country-card.hbs'

const refs = {
    contryList: document.querySelector('.contry-list'),
    contryWrapper: document.querySelector('.contry-wrapper'),
    input: document.querySelector('#search'),
    button: document.querySelector('.country-btn')
}

refs.input.addEventListener('input', debounce( handlerData, 500)
)
function handlerData() {
    refs.input.value.trim() && fetchCountries(refs.input.value.trim())
        .then(handlerCountryArray)
        .catch(() => { PNotify.error('Country not found') })
        
}


function handlerCountryArray(arr) {
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
            refs.contryList.insertAdjacentHTML('beforeend', `<li class="list-item"><button class="country-btn">${contry.name}</button></li>`)
         })
        
    } else  { 
        refs.contryWrapper.innerHTML = `${markupCountryCard(arrayCountries)}`
    }
}

// refs.contryList.addEventListener('click', (e) => {
//     if (e.target === refs.button) {
//         refs.input.value = `${e.target.textContent}`
//         handlerData()
//     }
//  })



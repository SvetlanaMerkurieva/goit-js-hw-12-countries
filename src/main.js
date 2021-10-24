import API from "./fetchCountries.js";
import countryCardTpl from "./template.hbs";
import debounce from 'lodash.debounce';
import { alert, notice, info, success, error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '@pnotify/confirm';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

const input = document.querySelector(".js-input");
const listCountries = document.querySelector("js-list-countries")
const countryContainer = document.querySelector(".js-country-container");

input.addEventListener("input", debounce(onInputCountry, 500));

function onInputCountry(evt) {
    localStorage.setItem('countryInput', evt.target.value);
    listCountries.innerHTML = '';
    countryContainer.innerHTML = '';
    if (evt.target.value === '') { return; }
    
    API(evt.target.value)
        .then(response => response.json())
        .then(countries => {
            if (countries.length > 10) {
                const myStack = new Stack({
                    delay: 1000,
                    dir1: 'down',
                    dir2: 'left',
                    mode: 'light',
                    firstpost1: 25,
                    firstpost2: 25,
                    spacing1: 36,
                    spacing2: 36,
                    push: 'top',
                    context: document.body,
                    positioned: true,
                    maxStrategy: 'close',
                });
                alert({
                    title: 'Oh, no!',
                    text: 'Too many matches found. Please enter a more specific query!',
                    type: 'error',
                    stack: myStack,
                    addClass: 'alert',
                });
            } else if (countries.length > 1) {
                listCountries.innerHTML = countries
                    .map(({ name }) => `<li>${name}</li>`)
                    .join('');
            } else if (countries.length === 1) {
                countryContainer.innerHTML = countryCardTpl(countries[0]);
            }
            const myStackEr = new Stack({
                delay: 1000,
                dir1: 'down',
                dir2: 'left',
                mode: 'light',
                firstpost1: 25,
                firstpost2: 25,
                spacing1: 36,
                spacing2: 36,
                push: 'top',
                context: document.body,
                positioned: true,
                maxStrategy: 'close',
            });
            alert({
                title: 'Oh, no!',
                text: 'No matches',
                type: 'error',
                stack: myStackEr,
                addClass: 'alert',
            });
        });
}

fetch("https://restcountries.com/v2/name/peru")
   .then(response => {
       return response.json();
    })
    .then(country => {
        console.log(country[0].languages[0].name);
        console.log(countryCardTpl(country));
        countryContainer.innerHTML = countryCardTpl(countries[0]);
    })
    .catch(error => {
        console.log(error);
    });

let localStorageSave = localStorage.getItem('countryInput');
if (localStorageSave !== undefined) {
  onInputCountry({ target: { value: localStorageSave } });
  input.value = localStorageSave;
}


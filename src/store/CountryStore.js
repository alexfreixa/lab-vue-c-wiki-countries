import { defineStore } from 'pinia'
import { ref } from 'vue';
import { getAllCountries } from '../assets/api.js';

export const useCountryStore = defineStore('country', () => {
    const countriesList = ref([]);

    async function fetchCountries(){
        countriesList.value = await getAllCountries();
    }

    return {
        //State
        countriesList,
        //Actions
        fetchCountries
    }

});

  /*export const useCountryStore = defineStore('country', {
    state: () => ({
      countries: [],

    }),
    actions: {
      async fetchCountries() {
        try {
          const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const countries = await response.json();
          this.countries = countries;
          console.log(countries);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      },
    },
  });*/
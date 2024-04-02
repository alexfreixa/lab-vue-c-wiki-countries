import { defineStore } from 'pinia'
import { computed, ref } from 'vue';
import { getAllCountries } from '../assets/api.js';

export const useCountryStore = defineStore('country', () => {
    const countriesList = ref([]);
    const countryCodeSelected = ref('')

    const countrySelected = computed(() => {
      return countriesList.value.find(country => country.alpha3Code === countryCodeSelected.value);
    })

    async function fetchCountries(){
        countriesList.value = await getAllCountries();
    }

    function searchSelectedCountry(alpha3Code) {
      countryCodeSelected.value = alpha3Code;
    }

    return {
        //State
        countriesList,
        countryCodeSelected,
        //Get
        countrySelected,
        //Actions
        fetchCountries,
        searchSelectedCountry,
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
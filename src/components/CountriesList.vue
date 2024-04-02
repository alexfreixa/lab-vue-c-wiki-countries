<script>

import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCountryStore } from '../store/CountryStore';



export default {
  setup() {
    const countryStore = useCountryStore();
    const { countriesList } = storeToRefs(countryStore);

    onMounted(() => {
      countryStore.fetchCountries();
      console.log(countriesList)
    })

  },
};


</script>

<template>
  <!-- Countries List (Bootstrap column) -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">

    <router-link v-for="country in countriesList" :key="country.alpha3Code" :to="'/list/' +country.alpha3Code" class="list-group-item list-group-item-action">
        <img :src="'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'"/>
        <p>{{ country.name.common }}</p>
    </router-link>

    </div>
  </div>
</template>

<style></style>

<script setup>

import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useCountryStore } from '../store/CountryStore';

const countryStore = useCountryStore();
const { countriesList } = storeToRefs(countryStore);

onMounted(async () => {
  await countryStore.fetchCountries();
});

</script>

<template>
  <!-- Countries List (Bootstrap column) -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">

    <router-link v-for="country in countriesList" :key="country.alpha3Code" :to="'/' +country.alpha3Code" class="list-group-item list-group-item-action">
        <img :src="country.flag"/>
        <p>{{ country.name }}</p>
    </router-link>

    </div>
  </div>
</template>

<style></style>

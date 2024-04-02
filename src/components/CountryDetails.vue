<script setup>
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useCountryStore } from "../store/CountryStore";
import { useRoute } from "vue-router";

const countryStore = useCountryStore();
const { countrySelected } = storeToRefs(countryStore);
const route = useRoute();

onMounted(async () => {
  countryStore.searchSelectedCountry(route.params.alpha3Code);
});

watch(
  () => route.params.alpha3Code,
  async (a3Code) => {
    countryStore.searchSelectedCountry(a3Code);
  }
);
</script>

<template>
  <!-- Country Details (Bootstrap column) -->
  <div class="col-7" v-if="countrySelected">
    <img :src="countrySelected.flag" alt="country flag" style="width: 100px" />
    <h1>{{ countrySelected.name }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ countrySelected.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ countrySelected.area }} km <sup>2</sup></td>
        </tr>
        <tr v-if="countrySelected.borders.length">
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in countrySelected.borders" :key="border.alpha3Code">
                <RouterLink :to="`/${border.alpha3Code}`">{{ border.name }}</RouterLink>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style></style>

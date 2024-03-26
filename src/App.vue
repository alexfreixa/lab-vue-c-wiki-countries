<script>
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
import CountryDetails from "./components/CountryDetails.vue";

export default {
  components: {
    NavBar,
    CountriesList,
    CountryDetails
  },
};
</script>

<template>
  <div class="app">
    <NavBar></NavBar>

    <!-- Bootstrap container wrapper div -->
    <div class="container">
      <!-- Bootstrap row wrapper div -->
      <div class="row">
        <CountriesList/>
        <CountryDetails/>
      </div>
    </div>

  </div>
</template>

<style></style>

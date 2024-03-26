<script>


export default {
  data() {
    return {
      responseData: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        this.responseData = await response.json();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};


</script>

<template>
  <!-- Countries List (Bootstrap column) -->
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">

    <router-link v-for="country in responseData" :key="country.alpha3Code" :to="'/list/' +country.alpha3Code" class="list-group-item list-group-item-action">
        <img :src="'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png'"/>
        <p>{{ country.name.common }}</p>
    </router-link>

    </div>
  </div>
</template>

<style></style>

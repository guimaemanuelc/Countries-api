<template>
    <div class="[ container ]" >
      <HeaderCountry />

      <div class="[ search ]">
        <FilterCountries />
      </div>

      <div class="[ home ]">
        <CountryCard v-for="(country, index) in countries" :key="index" :country="country" @openDetails="goToDetails"/>
      </div>
    </div>
</template>

  <script>
  import HeaderCountry from '@/components/HeaderCountry.vue'
  import CountryCard from '../components/CountryCard.vue'
  import CountriesService from '@/services/CountriesService';
  import FilterCountries from '../components/FilterCountries.vue';
  
    export default {
      name: 'HomePage',
      components: {
        HeaderCountry,
        CountryCard,
        FilterCountries
      },
      data() {
        return {
          countries: [],
        }
      },
      created() {
        CountriesService.getAll().then(({ data }) => {
          this.countries = data.map((country) => ({
            id: country.cca2,
            name: country.name.official,
            population: country.population,
            flag: country.flags.png,
            region: country.region,
            capital: country.capital,
          }))
        });
      },
      methods: {
        goToDetails(id) {
          this.$router.push({ name: 'country', params: { id } })
        },
      }
    }
  </script>

<style lang="scss">
.container{
    font-family: 'Nunito Sans';
    color: var(--very-dark-blue-text);

  .home {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 85px;
    gap: 60px;
  }
}
</style>

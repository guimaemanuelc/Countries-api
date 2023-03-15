<template>
    <div class="[ container ]" >
      <HeaderCountry @toggleTheme="$emit('toggleTheme')"/>

      <div class="[ search ]">
        <FilterCountries @updateSearch="search = $event" @updateFilter= "filter = $event"/>
      </div>

      <div class="[ home ]">
        <CountryCard class="[ home_card ]" v-for="(country, index) in countriesList" :key="index" :country="country" @openDetails="goToDetails"/>
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
        search: '',
        filter: null,
      }
    },
    computed: {
      countriesList() {
        const filterValidation = (contry)=> {
          if (this.filter) {
            return contry.region === this.filter
          }
            return true;
        }
          return this.countries.filter((country) => country.name.includes(this.search)  && filterValidation(country))
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
          capital: country.capital ? country.capital[0] : '',            
          subregion: country.subregion,
        }))       
      })
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

  .search {
    padding: 30px 85px;
  }

  .home {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 60px;
    padding-left: 82px;
    padding-bottom: 30px;
    background-color: var(--very-light-gray);
  }

  @media only screen and (max-width:1270px ) {
    .home {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width:1000px ) {
    .search {
      padding-right: 85px;
    }
    
    .home {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width:700px ) {
    .search {
      padding: 30px 20px;
    }

    .home {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width:430px ) {
    .search {
      padding: 20px 10px;
    }

    .home {
      padding-left: 45px;
    }
  }
}
</style>

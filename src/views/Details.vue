<template>
  <div class="[ container ]">
    <HeaderCountry @toggleTheme="$emit('toggleTheme')"/>
    <BackHome class="backhome"/>
    <div>
      <CountryStatus :country="country"/>
    </div>
  </div>
</template>

<script>
import BackHome from '../components/BackHome.vue'
import HeaderCountry from '../components/HeaderCountry.vue'
import CountryStatus from '../components/CountryStatus.vue'
import CountriesService from '@/services/CountriesService'

export default {
    name: 'CountryDetails',
    components: {
      HeaderCountry,
      BackHome,
      CountryStatus,
    },
    data() {
      return {
        country: {}
      }
    },
    created() {
        const { id } = this.$route.params
        CountriesService.get(id).then(({data}) => {
          this.country = data[0]
        })
    },
}
</script>

<style lang="scss">
  .container {
    font-family: 'Nunito Sans';
    background-color: var(--very-light-gray);
    color: var(--very-dark-blue-text);


    .backhome {
      padding: 60px 85px;
    }

    @media only screen and (max-width: 750px) {
      .backhome  {
        padding: 60px 30px;
     }
}
}
</style>
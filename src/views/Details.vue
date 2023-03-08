<template>
  <div class="[ container ]">
    <HeaderCountry />
    
    <div>
      <BackHome />
    </div>

    <div>
      <country-status />
    </div>
  </div>
</template>

<script>
import BackHome from '../components/BackHome.vue'
import HeaderCountry from '../components/HeaderCountry.vue'
import CountryStatus from '../components/CountryStatus.vue'

export default {
    name: 'CountryDetails',
    components: {
      HeaderCountry,
      BackHome,
      CountryStatus
    },
    created() {
        const { id } = this.$route.params
        console.log(id)
    }
}
</script>

<style lang="scss">
  .container {
    font-family: 'Nunito Sans';
  }
</style>
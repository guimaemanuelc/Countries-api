<template>
  <div @click="handleOpenDetails" class="[ country-card ]">

    <div>
      <img :src="country.flag">
    </div>

    <div class="[ country-data ]">
      <div class="[ country-name ]">
        <h2>{{ country.name }}</h2>
      </div>

      <div class="[ country-info ]">
        <p><span>Population: </span> {{ country.population }}</p>
        <p><span>Region: </span>{{ country.region }}</p>
        <p><span>Capital: </span>{{ country.capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CountryCard',
    props: {
      country: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      handleOpenDetails() {
        this.$emit('openDetails', this.country.id)
      }
    }
}
</script>

<style lang="scss" scoped>
.country-card {
  border: 1px solid black;
  width: 280px;
  height: 320px;
  display: flex;
  background-color: var(--white);
  color: var(--very-dark-blue-text);
  border-radius: 7px;
  flex-direction: column;
  border: none;
  -webkit-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
  -moz-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
  box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);

    img {
      width: 100%;
      height: 150px;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    .country-data{
      padding: 15px;
      
      .country-name h2{
        font-weight: 800;
        padding-bottom: 30px;
      }

      .country-info {
        font-size: 14px;

        p{
          margin-bottom: 6px;
        }

        span {
          font-weight: 600;
        }
      }
    }
}
</style>
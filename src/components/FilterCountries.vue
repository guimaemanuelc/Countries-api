<template>
  <div class="[ filter ]">
    <CountrySearch/>
    <CountryContinents />
  </div>
</template>

<script>
import CountrySearch from './CountrySearch.vue';
import CountryContinents from './CountryContinents.vue';

export default {
    name: 'FilterCountries',
    components: {
        CountrySearch,
        CountryContinents
    }
}
</script>

<style lang="scss">
.filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 85px;
}
</style>
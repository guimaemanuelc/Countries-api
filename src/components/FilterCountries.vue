<template>
  <div class="[ filter ]">
    <CountrySearch @update="$emit('updateSearch', $event)"/>
    <CountryContinents @update="$emit('updateFilter', $event)"/>
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
    },
}
</script>

<style lang="scss">
.filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 25px;
    background-color:  var( --very-light-gray);
}
</style>
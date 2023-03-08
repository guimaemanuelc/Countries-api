<template>
  <div class="[ container-select ]">
    <select class="[ select ]">
        <option v-for="(continent,index) in continents" :key="index">{{ continent }}</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'CountryFilter',
    data() {
        return {
            continents: ['Filter by Region','Africa', 'America','Asia', 'Europe', 'Oceania']
        }
    }
}
</script>

<style lang="scss">
    .container-select{

        .select {   
            padding: 15px 70px 15px 10px;
            -webkit-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            -moz-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            border: none;
            border-radius: 5px;
    }
}

    
</style>
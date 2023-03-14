<template>
  <div class="[ container-select ]">
    <select v-model="selected" class="[ select ]">
        <option v-for="(continent,index) in continents" :value="continent.value" :key="index">{{ continent.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
    name: 'CountryFilter',
    data() {
        return {
            selected: null,
            continents: [
                 {
                    label: 'Filter by Region',
                    value: null
                },
                {
                    label: 'Africa',
                    value: 'Africa'
                },
                {
                    label: 'Americas',
                    value: 'Americas'
                },
                {
                    label:  'Asia',
                    value:  'Asia'
                },
                {
                    label:  'Europe',
                    value: 'Europe'
                },
                {
                    label: 'Oceania',
                    value: 'Oceania'
                }
        
                ]
        }
    },
    watch: {
        selected() {
            this.$emit('update', this.selected)
        }
    }
}
</script>

<style lang="scss">
    .container-select{

        .select {
            width: 180px;
            height: 50px;
            padding-left: 20px;
            -webkit-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            -moz-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.41);
            border: none;
            border-radius: 5px;
            background-color: var(--white);
            color: var(--very-dark-blue-text);
    }

    @media only screen and (max-width: 1000px) {
        .select {
            width: 180px;
            height: 50px;
        }
    }
} 
</style>
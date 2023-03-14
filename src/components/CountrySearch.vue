<template>
  <div class="[ search-bar ]">
    <div>
      <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    <div>
      <input v-model="search" type="text" placeholder="Search for a country...">
    </div>
  </div>
</template>

<script>
export default {
    name: 'CountrySearch',
    data() {
      return {
        search: '',
      }
    },
    watch: {
      search() {
        this.$emit('update', this.search) 
      }
    }
}
</script>

<style lang="scss">
.search-bar {
    position: relative;
    display: flex;
    align-items: center;

     .icon {
        position: absolute;
        left: 25px;
        bottom: 16px;
     }     
     
     input {
         width: 380px;
         height: 45px;
         border: 0 solid #fff;
         -webkit-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         -moz-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         border-radius: 5px;
         padding-left: 60px;
         background-color: var(--white);
         color: var(--very-dark-blue-text);
         margin-right: 60px;
     }

     @media only screen and (max-width: 430px) {
        input {
          width: 300px;
        }
    }
}
</style>
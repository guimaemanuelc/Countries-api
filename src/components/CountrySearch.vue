<template>
  <div class="[ search-bar ]">
    <div>
      <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
    </div>
    <div>
      <input type="text" placeholder="Search for a country..." @input="filterCountries">
    </div>
  </div>
</template>

<script>
export default {
    name: 'CountrySearch',
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
         width: 450px;
         height: 45px;
         border: 1px solid #fff;
         -webkit-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         -moz-box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         box-shadow: 0px 3px 48px -13px rgba(0,0,0,0.37);
         border-radius: 5px;
         padding-left: 60px;
     }
}
</style>
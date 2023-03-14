<template>
  <div class="[ header ]">
    <h1>Where in the World?</h1>
    <div @click="$emit('toggleTheme')" class="[ dark-btn ]">
      <i class="fa-regular fa-moon"></i><span>Dark Mode</span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss">
  .header {
    padding: 20px 85px;
    -webkit-box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.10);
    -moz-box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.6);
    box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.10);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  var(--white);

    h1 {
      font-weight: 800;
      font-size: 1.5rem;
    }

    .dark-btn {
      cursor: pointer;
      font-weight: 600;
      display: flex;
      align-items:center;

      .fa-moon {
        padding-right: 8px;
      }
    }

    @media only screen and (max-width: 700px) {
      padding: 20px;

      h1 {
        font-size: 1.2rem;
      }
    }
}
</style>
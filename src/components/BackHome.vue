<template>
  <div>
    <button @click="backHome"><i class="fa-solid fa-arrow-left-long"></i> Back</button>
  </div>
</template>

<script>
export default {
    name: 'BackHome',
    methods: {
      backHome() {
        history.back()
      }
    }
}
</script>

<style lang="scss">
button {
  padding: 7px 20px;
  border-radius: 4px;
  border: none;
  -webkit-box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.10);
  -moz-box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.6);
  box-shadow: 0px 5px 21px -1px rgba(0,0,0,0.10);
  background-color:  var(--white);
  color: var(--very-dark-blue-text);
  cursor: pointer;
}
</style>
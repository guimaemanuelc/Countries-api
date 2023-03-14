<template>
  <router-view @toggleTheme="dark = !dark" :class="{ dark }" class="bg"/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dark: false
    }
  }
}
</script>

<style lang="scss">

.dark {
  --very-dark-blue-text: #fff;
  --white: hsl(209, 23%, 22%);
  --very-light-gray: hsl(207, 26%, 17%);
}
</style>

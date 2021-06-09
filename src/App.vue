<template>
  <Navigation />
  <main>
  <router-view />
</main>
  <FooterMenu />
<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<script type="text/javascript">
import Navigation from '@/components/Navigation.vue'
import FooterMenu from '@/components/FooterMenu.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    FooterMenu
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
//
// #nav {
//   padding: 30px;
//
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

// @import 'base.normalize';
// @import 'settings.variables';
// @import 'settings.responsive';
// @import 'components.content';

@import "/scss/_variables.scss";

body {
    display: grid;
    margin: 0;
}

main {
    margin: 0;
    padding: 0;
    background-color: $petal;
}
</style>

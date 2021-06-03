<template>
  <main>
    <Navigation />
    <router-view/>
    <FooterMenu />
  </main>
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
      FooterMenu,
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

@mixin li-style {
  list-style: none;
  font-family: 'Aleo', serif;
}

$arbory: #006C67;
$grove: #00403d;
$lily: #E6F0F0;
$petal: #F2F7F7;
$pebble: #E9E9E9;
$boulder: #3D3D3D;

body {
  display: grid;
  background-color: $petal;
  margin: 0;
}

.Main {
  margin: 0;
  padding: 0;
}






</style>

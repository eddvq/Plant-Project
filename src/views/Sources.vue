<template lang="html">
  <Header>
    <template v-slot:headerSlot>Major thanks to the resources below for helping make this project work and look snazzy!</template>
  </Header>
  <div class="Container">
  <img class="Container__img" src="https://images.unsplash.com/photo-1527540049206-ed597e9de128?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=30" alt="Image of a ledge with different plants and seedlings against a wall">
  <div class="Container__text">
    <h2>Growstuff</h2>
    <p class="Container__text__p">Growstuff is website run by Alex Bayley who is an open source software developer from Melbourne, Australia. The site brings together a global community of gardeners that share information with each other. It also is the API that helps this website find you random plants from their database</p>
    <a href="https://www.growstuff.org/">Learn more about Growstuff</a>
    <h2>Unsplash</h2>
    <p class="Container__text__p">Need high quality imagery? Unpslash might be fore you! It is a collection of high quality images from talented photographers that are free to use. All the images on the sight were sourced from this site. I don't have time to stage and take pictures and found a bunch of good images that fit the theme of this project.</p>
    <a href="https://unsplash.com/about">Learn more about Unsplash</a>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Sources',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.Search {
    height: 6rem;
    padding: 1.5rem;
    background-image: url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.Container {
  padding: 1rem;
  margin-bottom: 1rem;
    @media only screen and (min-width: 768px) {
        display: flex;
        padding-bottom: 3rem;
    }
    &__img {
        width: 100%;
        @media only screen and (min-width: 768px) {
          object-fit: cover;
            width: 50%;
        }
    }
    &__text {
        @media only screen and (min-width: 768px) {
            margin-left: 2rem;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        &__p {
            font-size: 1rem;
            line-height: 1.5rem;
            font-family: 'Aleo', serif;

        }
    }
}

a {
    font-family: 'Aleo', serif;
}

h2 {
  font-family: 'Aleo', serif;
}

</style>

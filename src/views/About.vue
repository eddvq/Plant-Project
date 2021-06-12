<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">The inside scoop</h2>
  </div>
  <Header>
    <template v-slot:headerSlot>Do you like plants? Surely you do otherwise why are you here!? Thanks for checking my project out!</template>
  </Header>
  <p>The project started out of my curiosity of the plantlife in Seattle. I originally wanted a searchable plant resource that could help people find local plants they can grow in their garden.</p>
  <p>It seemed like a cool idea but found myself not being able to find the right infor or APIs and figured to scrap the project altogether and use different APIs</p>
  <p>Luckily, I found this cool site called Growstuff that had an API that could help me tweak my idea for this project. Instead of of a searchable site, I made a site that gives you a random plant you could maybe</p>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'About',
  components: {
    Header
  }
}
</script>

<style>

.Search {
    padding: 1.5rem;
    background-image: url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 768px) {
        height: 10rem;
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media only screen and (min-width: 1110px) {
      padding-left: 20rem;
      padding-right: 20rem;
    }
    &__h2 {
        font-size: 2.5rem;
        color: $lily;
        font-family: 'Aleo', serif;
        text-shadow: 2px 2px 6px #000000;
    }
    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient($sun,$daisy);
        border-radius: 4px;
        font-family: 'Aleo', serif;
        font-weight: bold;
        font-size: 1.6rem;
        height: 4rem;
        color: $coal;
        text-decoration: none;
        box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        @media only screen and (min-width: 768px) {
            padding-left: 4rem;
            padding-right: 4rem;
        }
        @media only screen and (min-width: 1110px) {
            padding-left: 11rem;
            padding-right: 11rem;
        }
        .fa-seedling{
          padding-left: 1rem;
        }
    }
}
</style>

<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">The inside scoop</h2>
  </div>
  <Header>
    <template v-slot:headerSlot>Do you like plants? Surely you do otherwise why are you here!? Thanks for checking my project out!</template>
  </Header>
  <div class="Container">
  <img class="Container__img" src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1719&q=80" alt="Laptop sitting on a table in a garden">
  <div class="Container__text">
    <p class="Container__text__p">The project started out of my curiosity of the plantlife of my neighborhood. I originally wanted a searchable plant resource that could help people find local plants they can grow in their garden.</p>
    <p class="Container__text__p">It seemed like a cool idea but found myself not being able to find the right information or APIs and figured to scrap the project altogether. I really wanted to keep the project about plants but best resource was more for agricultural operations. I don't think the average gardener has tons of acres to work with!</p>
    <p class="Container__text__p">Luckily, I found this cool site called <a href="https://www.growstuff.org/">Growstuff</a> that had an API that could help me tweak my idea for this project. Instead of of a searchable site, I made a site that gives you a random plant you could maybe grow in your garden</p>
    <p><a href="https://github.com/eddvq/Plant-Project/tree/master">Check it the code on GitHub!</a></p>
  </div>
</div>
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
    @media only screen and (min-width: 768px) {
        display: flex;
    }
    padding: 1rem;
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
</style>

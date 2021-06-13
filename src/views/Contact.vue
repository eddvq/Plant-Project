<template lang="html">
  <div class="Search">
    <h2 class="Search__h2">Want to reach out?</h2>
  </div>
  <Header>
    <template v-slot:headerSlot>Thank you for using this search tool. I'm learning more about code and would appreciate feedback to make this tool better.</template>
  </Header>

  <form class="Form" action="" method="post">
    <div class="Form__unit">
      <label class="Form__unit__label" for="name">Name</label>
      <input class="Form__unit__field" type="text" name="name">
    </div>

    <div class="Form__unit">
      <label class="Form__unit__label" for="email">Email</label>
      <input class="Form__unit__field" type="text" name="email">
    </div>

    <div class="Form__unit">
      <label class="Form__unit__label" for="comments">Let me know what you think could be better? Or other ideas!</label>
      <textarea class="Form__unit__text-area" name="comments" ></textarea>
    </div>


    <input class="Form__button" type="button" name="" value="Submit">

  </form>


</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Contact',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.Form {
  padding: 1.5rem;
  &__unit{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    &__label{
      font-family: 'Aleo', serif;
      font-size: 1rem;
      margin-bottom: .5rem;
    }
    &__field{
      height: 2rem;
    }
    &__text-area{
      height: 5rem;
    }
  }
  @media only screen and (min-width: 768px) {
      padding-left: 5rem;
      padding-right: 5rem;
  }
  @media only screen and (min-width: 1110px) {
    padding-left: 20rem;
    padding-right: 20rem;
  }
  &__button{
    width: 100%;
    align-items: center;
    background: linear-gradient($sun,$daisy);
    border-style: none;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    font-family: 'Aleo', serif;
    font-weight: bold;
    font-size: 1.6rem;
    height: 4rem;
    color: $coal;
    text-decoration: none;
    cursor: pointer;

  }
}

.Search {
    height: 6rem;
    padding: 1.5rem;
    background-image: url("https://images.unsplash.com/photo-1468408908883-029a25e230c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1959&q=20");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>

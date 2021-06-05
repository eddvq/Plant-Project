<template lang="html">
  <footer class="Footer">
  <ul class="Footer__ul">
    <li class="Footer__ul__li"><router-link class="Footer__ul__li__a" to="/about">About Plant Project</router-link></li>
    <li class="Footer__ul__li"><router-link class="Footer__ul__li__a" to="/sources">Sources Cited</router-link></li>
    <li class="Footer__ul__li"><router-link class="Footer__ul__li__a" to="/contact">Contact Us</router-link></li>
  </ul>
</footer>
</template>



<style lang="scss">

@import "../scss/_variables.scss";

.Footer {
    display: flex;
    justify-content: center;
    height: 10rem;
    width: 100%;
    background-color: $boulder;

    &__ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 0.75rem;
        margin: 0;

        &__li {
            @include li-style;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;

            &__a {
                color: $petal;
                text-decoration: none;
                font-size: 1.25rem;
            }
            &__a:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>

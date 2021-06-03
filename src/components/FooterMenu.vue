<template lang="html">
  <footer class="Footer">
  <ul class="Footer__ul">
    <li class="Footer__ul__li"><router-link class="Footer__ul__li__a" to="/about">About Plant Project</router-link></li>
    <li class="Footer__ul__li"><a class="Footer__ul__li__a" href="#">Sources Cited</a></li>
    <li class="Footer__ul__li"><a class="Footer__ul__li__a" href="#">Contact Us</a></li>
  </ul>
</footer>
</template>



<style lang="scss">

$arbory: #006C67;
$grove: #00403d;
$lily: #E6F0F0;
$petal: #F2F7F7;
$pebble: #E9E9E9;
$boulder: #3D3D3D;

@mixin li-style {
    list-style: none;
    font-family: 'Aleo', serif;
}

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

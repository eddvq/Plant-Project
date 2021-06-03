<template>
<nav class="Nav" id="hamburgerMenu">
  <i class="Nav__menu fas fa-bars" v-on:click="toggleOn"></i>
  <span class="Nav__title"><router-link class="Nav__title__a" to="/">Plant Project</router-link></span>
  <i class="Nav__search-icon fas fa-search"></i>

  <!-- Hamburger Menue-->
  <div class="Nav__sliding-menu" v-bind:style="toggle">
    <ul class="Nav__sliding-menu__ul">
      <i class="Nav__sliding-menu__ul__close-icon fas fa-times" id="nav_menu_close_icon" v-on:click="toggleOff"></i>
      <li class="Nav__sliding-menu__ul__li"><a class="Nav__sliding-menu__ul__li__a"><router-link to="/about">About Plant Project</router-link></a></li>
      <li class="Nav__sliding-menu__ul__li"><a class="Nav__sliding-menu__ul__li__a" href="#">Sources Cited</a></li>
      <li class="Nav__sliding-menu__ul__li"><a class="Nav__sliding-menu__ul__li__a" href="#">Contact Us</a></li>
    </ul>
  </div>

  <!-- Tablet and Desktop Menu -->
  <div class="Nav__desktop-menu">
    <ul class="Nav__desktop-menu__ul">
      <li class="Nav__desktop-menu__ul__li"><router-link class="Nav__desktop-menu__ul__li__a" to="/about">About</router-link></li>
      <li class="Nav__desktop-menu__ul__li"><a class="Nav__desktop-menu__ul__li__a" href="">Sources Cited</a></li>
      <li class="Nav__desktop-menu__ul__li"><a class="Nav__desktop-menu__ul__li__a" href="">Contact Us</a></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      toggle: 'width:0',
      status: false,
    }
  },
  methods: {
    toggleOn() {
      this.toggle = 'width:100%'
    },
    toggleOff() {
      this.toggle = 'width:0'
    }
  }
}
</script>

<style lang="scss" scoped>
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

.Nav {
    background-color: $arbory;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 768px) {
        flex-wrap: wrap;
        padding: 0;
    }

    &__menu.fas.fa-bars {
        color: $lily;
        font-size: 2.25rem;
        cursor: pointer;
        @media only screen and (min-width: 768px) {
            display: none;
        }
    }

    &__title {
        font-family: 'Aleo', serif;
        font-size: 2.25rem;
        font-weight: 400;
        text-align: center;
        @media only screen and (min-width: 768px) {
            width: 100%;
            padding: 1.25rem;
        }
        &__a {
            text-decoration: none;
            color: $lily;

        }

    }

    &__search-icon.fas.fa-search {
        color: $lily;
        font-size: 2.25rem;
        cursor: pointer;
        @media only screen and (min-width: 768px) {
            display: none;
        }
    }

    &__desktop-menu {
        display: none;
        background-color: $grove;
        @media only screen and (min-width: 768px) {
            flex-grow: 3;
            display: flex;
            height: 100%;
        }

        &__ul {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex: 1;

            &__li {
                @include li-style;

                &__a {
                    color: $lily;
                    font-size: 1.25rem;
                    text-decoration: none;
                }
                &__a:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    &__sliding-menu {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        overflow-x: hidden;
        transition: 0.45s;
        transition-timing-function: ease-out;
        background-color: $grove;

        &__ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 2.5rem;
            margin: 0;
            white-space: nowrap;

            &__close-icon {
                color: $lily;
                font-size: 2.50rem;
                align-self: flex-end;
                cursor: pointer;
            }

            &__li {
                @include li-style;
                padding-top: 1rem;
                padding-bottom: 1rem;

                &__a {
                    color: $petal;
                    text-decoration: none;
                    font-size: 1.75rem;
                }

                &__a:hover {
                    color: $petal;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>

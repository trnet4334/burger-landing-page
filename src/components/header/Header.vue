<template>
    <div>
        <nav :class="{'navbar--color': !isOnTheTop && !isOpen}">
            <div class="header__container flex--row">
                <div class="header__navigation flex--row">
                    <a href="#home" class="header__navigation--logo">
                        <svg enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path d="m407 512h-302c-57.891 0-105-47.109-105-105 0-8.291 6.709-15 15-15h482c8.291 0 15 6.709 15 15 0 57.891-47.109 105-105 105z"/>
                            <path d="m256 0c-140.61 0-256 87.48-256 195 0 8.291 6.709 15 15 15h482c8.291 0 15-6.709 15-15 0-107.52-115.39-195-256-195zm-110.395 115.605-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm91 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm90 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.86 15.352 0 21.211zm82.666 0-30 30c-5.859 5.859-15.351 5.86-21.211 0-5.859-5.859-5.859-15.352 0-21.211l30-30c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352 0 21.211z"/>
                            <path d="m15 271c7.2 0 13.5.899 18.9 2.399-2.117 6.82-2.71 8.859-3.9 30-3.9-1.5-8.699-2.399-15-2.399-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15z"/>
                            <path d="m512 286c0 8.399-6.599 15-15 15-6.301 0-11.1.899-15 2.399-.324-5.758.288-16.508-3.9-30 5.4-1.5 11.7-2.399 18.9-2.399 8.401 0 15 6.599 15 15z"/>
                            <path d="m33.9 273.399c13.5 3.301 22.5 9.901 30 15.601 9.3 6.899 16.199 12 31.199 12s21.601-5.101 30.901-12.001c10.8-8.101 25-17.999 49.9-17.999 25.199 0 38.399 9.899 49.199 17.999 9.302 6.9 15.901 12.001 30.901 12.001s21.599-5.101 30.901-12.001c10.8-8.101 24-17.999 49.199-17.999 24.901 0 39.101 9.899 49.9 17.999 9.3 6.899 15.901 12.001 30.901 12.001s21.899-5.101 31.199-12.001c7.5-5.7 16.5-12.299 30-15.601-3.164-11.788-8.436-22.659-15.216-32.399h-413.768c-6.78 9.74-12.052 20.611-15.216 32.4z"/>
                            <path d="m463.093 361c11.506-16.421 18.455-36.237 18.907-57.601-6 2.1-10.499 5.7-15.901 9.6-10.8 8.101-24 18.001-49.199 18.001-24.9 0-38.1-9.901-48.9-18.001-9.3-6.9-16.901-11.999-31.901-11.999s-21.899 5.099-31.199 11.999c-10.499 8.101-24 18.001-48.9 18.001s-38.401-9.901-48.9-18.001c-9.3-6.9-16.199-11.999-31.199-11.999s-22.601 5.099-31.901 11.999c-10.8 8.1-24 18.001-48.901 18.001-25.199 0-38.399-9.901-49.199-18.001-5.402-3.9-9.901-7.5-15.901-9.6.452 21.365 7.401 41.18 18.907 57.601z"/>
                        </svg>
                    </a>
                    <div class="header__links">
                        <ul class="flex--row">
                            <li>
                                <a href="#home">HOME</a>
                            </li>
                            <li>
                                <a href="#menu">MENU</a>
                            </li>
                            <li>
                                <a href="#about">ABOUT</a>
                            </li>
                            <li>
                                <a href="#contact">CONTACT</a>
                            </li>
                            <li>
                                <a href="#subscribe">SUBSCRIBE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="header__contact flex--row">
                    <button>
                        <span>480.666.8888</span>
                    </button>
                    <div class="menuBtn flex--col" @click="isOpen = !isOpen" :class="menuBtnClass">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
        <div class="overlay" :class="menuDisplayClass">
            <div class="overlay-content flex--col flex--center">
                <ul class="flex--col flex--center">
                    <li>
                        <a href="#home" @click="isOpen = !isOpen">HOME</a>
                    </li>
                    <li>
                        <a href="#menu" @click="isOpen = !isOpen">MENU</a>
                    </li>
                    <li>
                        <a href="#about" @click="isOpen = !isOpen">ABOUT</a>
                    </li>
                    <li>
                        <a href="#contact" @click="isOpen = !isOpen">CONTACT</a>
                    </li>
                    <li>
                        <a href="#subscribe" @click="isOpen = !isOpen">SUBSCRIBE</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isOnTheTop: true,
      topPosition: 0,
      isOpen: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.isOnTheTop = scrollTop === 0
    }
  },
  computed: {
      // To control menu button open and close animation
      menuBtnClass: function () {
          return {
              'button-open': this.isOpen
          }
      },
      // To display menu
      menuDisplayClass: function () {
          return {
              'menu-open': this.isOpen
          }
      }
  }
}
</script>
<style src="./Header.scss" scoped lang="scss"/>

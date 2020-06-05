<template>
  <div id="app">
      <Header/>
      <Home/>
      <Menu/>
      <About/>
      <Feed/>
      <Contact/>
      <Subscribe/>
      <Footer/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Home from './components/home/Home.vue'
import Menu from './components/menu/Menu.vue'
import About from './components/about/About.vue'
import Feed from './components/feed/Feed.vue'
import Contact from './components/contact/Contact.vue'
import Subscribe from './components/subscribe/Subscribe.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Menu,
    About,
    Feed,
    Contact,
    Subscribe,
    Footer
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: #000000;
}
    *, *:before, *:after {
        box-sizing: border-box;
        &:focus {
            outline: none !important;
        }
    }
</style>

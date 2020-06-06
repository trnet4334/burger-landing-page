<template>
    <section id="menu">
        <div class="menu__container">
            <div class="menu__header">
<!--                TODO: Add two image into figure tag-->
                <div class="menu__header--images">
                    <div class="header--colorBlock"/>
                    <div class="util__flex--row">
                        <div class="header--image1"/>
                        <div class="header--image2"/>
                    </div>
                </div>
                <div class="menu__header--description">
                    <h2>BETTER THAN JUST FASTFOOD</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut debitis dolores ea eaque earum eius illum libero magni maxime, modi obcaecati odio, quia ratione rem similique vitae voluptas! Accusamus, ad culpa debitis, dicta doloribus et facere impedit laboriosam quasi repudiandae rerum sit tempore tenetur ullam vero. A eaque eligendi labore libero quisquam quos rem voluptate! Accusantium itaque, non?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut dolorem ducimus eos excepturi illum iure, nam nisi nobis officia perferendis quis quo voluptatum! Accusamus aliquam aperiam aut cupiditate eligendi error inventore laborum molestiae nesciunt omnis quis rem temporibus, unde. Atque commodi consectetur dolorem, eaque, enim esse facilis fuga hic id in maiores placeat praesentium rem sequi soluta unde, veritatis?</p>
                </div>
            </div>
            <div class="menu__content">
                <div class="menu__content--title">
                    <h2>MENU</h2>
                    <a href="javascript:;">
                        <font-awesome-icon icon="download"/>
                        <span>DOWNLOAD</span>
                    </a>
                </div>
                <div class="menu__content--main util__flex--row">
                    <div class="menu__product--category util__flex--column">
                        <div v-for="(item, index) in categories" :key="index">
                            <a href="javascript:;" :data-id="item[0]" @click="switchCategory">
                                <span>{{item[1]}}</span>
                            </a>
                        </div>
                    </div>
                    <div class="menu__product--detail util__flex--column">
                        <div v-for="(item, index) in menuItems[selectedCategory].items" :key="index">
                            <menu-item :item="item" :key="index"/>
                        </div>
                        <span>{{menuItems[selectedCategory].special}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import MenuItem from './MenuItem.vue'
const menu = require('../../assets/data/menu.json')
export default {
  components: {
    menuItem: MenuItem
  },
  created () {
    this.selectedCategory = 'burger'
  },
  data () {
    return {
      menuItems: menu,
      categories: [['burger', 'BURGER & SANDWICHES'], ['snacks', 'SNACKS'], ['salads', 'SALADS'], ['minime', 'MINI ME']],
      selectedCategory: ''
    }
  },
  methods: {
    switchCategory (event) {
      const target = event.currentTarget.dataset.id
      switch (target) {
        case 'burger':
          this.selectedCategory = 'burger'
          break
        case 'snacks':
          this.selectedCategory = 'snacks'
          break
        case 'salads':
          this.selectedCategory = 'salads'
          break
        case 'minime':
          this.selectedCategory = 'minime'
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .menu__container {
        position: relative;
        padding: 7.5vh 7.5vw;
        width: 100%;
        height: 100%;
    }
    .menu__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        height: 100%;
    }
    .menu__header--images{
        width: 50vw;
        position: relative;
    }
    .header--colorBlock {
        width: 20vw;
        height: 45vh;
        background-color: #ad9545;
        position: absolute;
        top: 10vh;
        left: 10vw;
        z-index: 1;
    }
    .header--image1 {
        background: url("../../assets/image/menu/menu-image-1.jpg") center no-repeat;
        width: 320px;
        height: 480px;
        background-size: cover;
        position: absolute;
        top: 15vh;
        left: 20vw;
        z-index: 2;
        opacity: 1;
    }
    .header--image2 {
        background: url("../../assets/image/menu/menu-image-2.jpg") center no-repeat;
        width: 320px;
        height: 320px;
        background-size: cover;
        position: absolute;
        top: 30vh;
        left: 1vw;
        z-index: 3;
    }
    .menu__header--description {
        width: 30vw;
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
            padding: 3.5vh 0;
            position: relative;
            text-align: start;
            &::before {
                content: "";
                background-color: #ad9545;
                height: 5px;
                width: 125px;
                position: absolute;
                transform: translate3d(-115%, 1rem, 0);
            }
        }
        & p {
            color: #ffffff;
            text-wrap: normal;
            text-align: start;
        }
    }
    .menu__content {
        position: relative;
        margin-top: 7.5vh;
    }
    .menu__content--title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        & h2 {
            font-weight: 900;
            font-size: 1.8rem;
            color: #ad9545;
        }
        & a {
            text-decoration: none;
            color: #ad9545;
            cursor: pointer;
            & span {
                margin-left: 6px;
            }
        }
    }
    .menu__content--main {
        align-items: flex-start;
        /*justify-content: space-around;*/
        justify-content: center;
    }
    .menu__product--category {
        width: 20%;
        height: 275px;
        justify-content: space-around;
        & a {
            /*padding: 15px 0;*/
            margin: 15px 0;
            cursor: pointer;
            text-decoration: none;
            & span {
                color: #999999;
                font-size: 1.1rem;
                font-weight: 700;
                text-wrap: normal;
                &:hover {
                    color: #ffffff;
                    &:before {
                        content: "";
                        background-color: #ffffff;
                        height: 3px;
                        width: 50px;
                        position: absolute;
                        transform: translate3d(-115%, 0.6rem, 0);
                    }
                }
            }
        }
    }
    .menu__product--detail {
        width: 50%;
        padding: 15px 10px 10px 50px;
        & span:last-of-type {
            color: #777777;
            padding-top: 15px;
            align-self: flex-start;
            text-wrap: normal;
            text-align: start;
            line-height: 2;
            font-size: 0.85rem;
        }
    }
    .util__flex--row {
        display: flex;
    }
    .util__flex--column {
        display: flex;
        flex-direction: column;
    }
</style>

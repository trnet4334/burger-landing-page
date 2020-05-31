<template>
    <section>
        <div class="menu__container">
            <div class="menu__header">
<!--                TODO: Add two image into figure tag-->
                <div class="menu__header--image">
                    <figure></figure>
                    <figure></figure>
                    <figure></figure>
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
                    <a href="#">
                        <font-awesome-icon icon="download"/>
                        <span>DOWNLOAD</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const menu = require('../../assets/data/menu.json')
export default {
  data () {
    return {
      menuItems: menu
    }
  },
  methods: {
    test () {
      console.log(this.menuItems)
    }
  }
}
</script>
<style lang="scss" scoped>
    .menu__container {
        position: relative;
        padding: 0 7.5vw;
    }
    .menu__header {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
    }
    .menu__header--image {
        width: 45vw;
        height: 60vh;
        background-color: grey;
    }
    .menu__header--description {
        width: 30vw;
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
            padding: 3.5vh 0;
            position: relative;
            transform: translateX(-5vw);
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
    }
    .menu__content--title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        & h2 {
            font-weight: bolder;
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
</style>

<template>
    <section id="menu">
        <div class="menu__container">
            <div class="menu__header flex--row">
                <div class="menu__header--images">
                    <div class="header--colorBlock"/>
                    <div class="flex--row">
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
                <div class="menu__content--title flex--row">
                    <h2>MENU</h2>
                    <a href="javascript:;">
                        <font-awesome-icon icon="download"/>
                        <span>DOWNLOAD</span>
                    </a>
                </div>
                <div class="menu__content--main flex--row">
                    <div class="menu__product--category flex--col">
                        <div v-for="(item, index) in categories" :key="index" class="category-item">
                            <a href="javascript:;" :data-id="item[0]" @click="switchCategory">
                                <span>{{item[1]}}</span>
                            </a>
                        </div>
                    </div>
                    <div class="menu__product--detail flex--col">
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
<style src="./Menu.scss" lang="scss" scoped/>

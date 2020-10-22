<template>
    <div class="menu__item flex--row">
        <div class="menu__item--description flex--col">
            <span>{{item.name}}</span>
            <span>{{item.detail}}</span>
        </div>
        <span class="menu__item--price">{{item.price}}</span>
    </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
<style src="./MenuItem.scss" lang="scss" scoped/>

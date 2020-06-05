<template>
    <div class="menu__item">
        <div class="menu__item--description">
            <span>{{item.name}}</span>
            <span>{{item.detail}}</span>
        </div>
        <span class="menu__item--price">{{item.price}}</span>
    </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style lang="scss" scoped>
    .menu__item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 25px;
    }
    .menu__item--description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 70%;
        & span:nth-of-type(1) {
            color: #ad9545;
            padding-bottom: 15px;
            font-size: 1.2rem;
            font-weight: 700;
        }
        & span:nth-of-type(2) {
            color: #ffffff;
            text-align: start;
            text-wrap: normal;
            font-size: 1rem;
        }
    }
    .menu__item--price {
        color: #ad9545;
        width: 30%;
        font-weight: 700;
        font-size: 1.2rem;
        opacity: 0.7;
    }
</style>

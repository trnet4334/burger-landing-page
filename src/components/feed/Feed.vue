<template>
    <section style="padding: 5vh 12.5vw;">
        <div class="feed__title">
            <h2>Feed</h2>
            <el-button type="default">Follow us</el-button>
        </div>
<!--        TODO: Add two background decoration-->
        <div>
<!--            TODO: Finish feed content-->
            <div class="grid__container">
                <div class="grid__item--1 div__test"/>
                <div class="grid__item--2 div__test"/>
                <div class="grid__item--3 div__test"/>
                <div class="grid__item--4 div__test"/>
                <div class="grid__item--5 div__test"/>
                <div class="grid__item--6 div__test"/>
                <div class="grid__item--7 div__test"/>
                <div class="grid__item--8 div__test"/>
                <div class="grid__item--9 div__test"/>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
    .feed__title {
        display: flex;
        align-items: center;
        justify-content: space-around;
        & h2 {
            text-transform: uppercase;
            color: #ad9545;
            font-size: 1.8rem;
            padding: 3.5vh 0;
            position: relative;
            &::before {
                content: "";
                background-color: #ad9545;
                height: 5px;
                width: 125px;
                position: absolute;
                transform: translate3d(-115%, 1rem, 0);
            }
        }
    }
    .grid__container {
        width: 100%;
        height: 675px;
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: auto auto auto;
        column-gap: 6px;
        row-gap: 6px;
    }
    .div__test {
        background-color: grey;
        width: 100%;
        height: 100%;
    }
    .grid__item--1 {
        grid-area: 1 / 1 / span 2 / span 2;
    }
    .grid__item--2 {
        background-color: white;
        grid-area: 1 / 3 / span 1 / span 1;
    }
    .grid__item--3 {
        background-color: #42b983;
        grid-area: 1 / 4 / span 1 / span 1;
    }
    .grid__item--4 {
        background-color: white;
        grid-area: 1 / 5 / span 1 / span 1;
    }
    .grid__item--5 {
        background-color: goldenrod;
        grid-area: 2 / 3 / span 1 / span 1;
    }
    .grid__item--6 {
        background-color: white;
        grid-area: 2 / 4 / span 2 / span 2;
    }
    .grid__item--7 {
        background-color: hotpink;
        grid-area: 3 / 1 / span 1 / span 1;
    }
    .grid__item--8 {
        background-color: darkblue;
        grid-area: 3 / 2 / span 1 / span 1;
    }
    .grid__item--9 {
        background-color: khaki;
        grid-area: 3 / 3 / span 1 / span 1;
    }
</style>

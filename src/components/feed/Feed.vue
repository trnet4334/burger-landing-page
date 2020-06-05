<template>
    <section id="feed">
        <div class="feed__container">
            <div class="feed__title">
                <h2>Feed</h2>
                <button>
                    <span>Follow us</span>
                </button>
            </div>
            <!--        TODO: Add two background decoration-->
            <div>
                <!--            TODO: Finish feed content-->
                <div class="grid__container">
                    <div class="grid__item--1 image__hover"/>
                    <div class="grid__item--2 image__hover"/>
                    <div class="grid__item--3 image__hover"/>
                    <div class="grid__item--4 image__hover"/>
                    <div class="grid__item--5 image__hover"/>
                    <div class="grid__item--6 image__hover"/>
                    <div class="grid__item--7 image__hover"/>
                    <div class="grid__item--8 image__hover"/>
                    <div class="grid__item--9 image__hover"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
    .feed__container {
        padding: 7.5vh 12.5vw;
    }
    .feed__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & h2 {
            text-transform: uppercase;
            color: #ad9545;
            font-size: 1.8rem;
            font-weight: 900;
            padding: 3.5vh 0;
            position: relative;
            transform: translate3d(200%, 0, 0);
            &::before {
                content: "";
                background-color: #ad9545;
                height: 5px;
                width: 125px;
                position: absolute;
                transform: translate3d(-115%, 1rem, 0);
            }
        }
        & button {
            padding: 15px 30px;
            border: 1px solid #ad9545;
            background-color: transparent;
            cursor: pointer;
            & span {
                font-size: 1.2rem;
                font-weight: 700;
                font-family: 'Roboto Slab', serif;
                text-transform: uppercase;
                color: #ad9545;
            }
            &:hover {
                background-color: #ad9545;
                & span {
                    color: #000000;
                }
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
    .grid__item--1 {
        grid-area: 1 / 1 / span 2 / span 2;
        background: url("../../assets/image/feed/feed-image-1.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--2 {
        grid-area: 1 / 3 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-2.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--3 {
        grid-area: 1 / 4 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-3.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--4 {
        grid-area: 1 / 5 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-4.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--5 {
        grid-area: 2 / 3 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-5.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--6 {
        grid-area: 2 / 4 / span 2 / span 2;
        background: url("../../assets/image/feed/feed-image-6.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--7 {
        grid-area: 3 / 1 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-7.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--8 {
        grid-area: 3 / 2 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-8.jpg") center no-repeat;
        background-size: cover;
    }
    .grid__item--9 {
        grid-area: 3 / 3 / span 1 / span 1;
        background: url("../../assets/image/feed/feed-image-9.jpg") center no-repeat;
        background-size: cover;
    }
    .image__hover:hover {
        transform: scale(1.2, 1.2);
    }
</style>

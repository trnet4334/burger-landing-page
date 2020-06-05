<template>
    <section id="home">
        <div class="home__container">
<!--            TODO: Finish all the style-->
            <div class="home__content--main util__flex--row">
                <div class="home__content--image"/>
                <div class="main__content">
                    <div class="util__flex--row" style="transform: translate3d(-7vw, 0, 0)">
                        <font-awesome-icon icon="star" class="main__content--icon"/>
                        <span class="main__content--slogan util__flex--column">
                            <span>Share moments, </span>
                            <span>share burger</span>
                        </span>
                    </div>
                    <div class="util__flex--row" style="margin-top: 10px; justify-content: center;">
                        <div class="main__content--info util__flex--column">
                            <div>
                                <font-awesome-icon icon="map-pin"/>
                                <span>1208 E Broadway Rd, Tempe, AZ</span>
                            </div>
                            <div>
                                <font-awesome-icon icon="clock"/>
                                <span>TUE-SUN: 12pm-11pm</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="home__content--sub util__flex--row">
                <div class="sub__content--slogan">
                    <span class="slogan--words">EST 2020</span>
                </div>
                <div class="sub__content--image"/>
            </div>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
    .home__container {
        padding: 0 6.75vw;
    }
    .home__content--main {
        position: relative;
    }
    .home__content--image {
        background: url("../../assets/image/home/home-image-1.jpg") center no-repeat;
        background-size: cover;
        width: 600px;
        height: 625px;
        opacity: 0.55;
    }
    .main__content {
        width: 60%;
        position: relative;
        top: 25vh;
        left: -5vw;
        z-index: 1;
    }
    .main__content--icon {
        color: #ad9545;
        width: 80px;
        height: 80px;
        margin-right: 12.5px;
    }
    .main__content--slogan {
        align-items: flex-start;
        text-transform: uppercase;
        font-size: 5.1vw;
        font-weight: bold;
        font-family: 'Piedra', cursive;
        letter-spacing: 2px;
        width: 100%;
        line-height: 1.3;
        color: #ad9545;
        margin-bottom: 45px;
    }
    .main__content--info {
        width: 70%;
        align-self: flex-end;
        align-items: flex-start;
        & span {
            margin-left: 10px;
            font-weight: bold;
            color: #ffffff;
            font-size: 1.4rem;
        }
        & svg {
            color: #ad9545;
        }
    }
    .sub__content--slogan {
        position: relative;
        .slogan--words {
            padding:10px 0 5px 0;
            font-size: 4.5vw;
            font-weight: bold;
            font-family: 'Piedra', cursive;
            color: #ad9545;
            border-top: 5px solid #ad9545;
            border-bottom: 5px solid #ad9545;
        }
        transform: rotate(-20deg) translate3d(10vw, 25vh, 0);
    }
    .sub__content--image {
        position: relative;
        background: url("../../assets/image/home/home-iamge-2.jpg") center no-repeat;
        background-size: cover;
        width: 640px;
        height: 427px;
        top: -5vh;
        left: 20vw;
    }
    .util__flex--row {
        display: flex;
        flex-wrap: nowrap;
    }
    .util__flex--column {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
</style>

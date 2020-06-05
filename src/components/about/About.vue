<template>
    <section id="about">
        <div class="about__container">
<!--            TODO: Add picture and logo-->
            <div class="about__container--main">
                <div class="about__background">
                    <div class="about__background--picture"/>
                </div>
                <div class="about__content">
                    <div class="about__content--logo"/>
                    <div class="about__content--main">
                        <h2>ABOUT US</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad expedita id perferendis praesentium quaerat, sapiente sed. Architecto, atque autem blanditiis corporis cum dolorem dolores eaque eius hic incidunt minima molestiae nemo neque odio officia qui quis recusandae rem repudiandae sed sint soluta suscipit unde voluptate voluptatum! A ex facere ipsam molestiae necessitatibus nobis numquam odit quidem, reprehenderit rerum tempore vitae?</p>
                        <br>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius, est iste libero magnam nostrum sint sit soluta. Alias aliquam at commodi cum cupiditate, deleniti id iure laboriosam suscipit veniam! At, cum cumque, cupiditate dolore dolorum ex impedit iure maxime neque nulla possimus quasi quos recusandae reprehenderit sed, sunt suscipit veritatis vitae voluptatem voluptates? Consectetur eos fuga fugit sapiente voluptas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
    #about {
        padding: 7.5vh 0;
    }
    .about__container {
        position: relative;
        width: 100%;
        &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: url("../../assets/image/about/about-image-1.jpg") no-repeat;
            background-size: cover;
            opacity: 0.4;
        }
    }
    .about__container--main {
        position: relative;
        padding: 0 7.5vw;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .about__background {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 55vw;
        height: 100%;
        margin: 0;
    }
    .about__background--picture {
        background: url("../../assets/image/about/about-image-2.jpg");
        background-size: contain;
        width: 320px;
        height: 480px;
        position: absolute;
        z-index: 2;
        transform: translate3d(20%, 60%, 0);
        border-radius: 10px;
    }
    .about__content {
        width: 37.5vw;
        padding: 2.5vh 2vw;
        position: relative;
        z-index: 3;
        background-color: #000000;
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
            font-weight: 900;
            padding: 0 0 2vh 0;
            position: relative;
            transform: translateX(-6vw);
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
            text-wrap: normal;
            text-align: start;
            color: #ffffff;
        }
    }
    .about__content--logo {
        width: 225px;
        height: 225px;
        background: url("../../assets/image/logo.png") center no-repeat;
        background-size: contain;
    }
    .about__content--main {
        background-color: #000000;
        padding: 15px;
        width: 100%;
        border-radius: 5px;
    }
</style>

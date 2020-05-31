<template>
    <section>
        <div class="about__container">
<!--            TODO: Add picture and logo-->
            <div class="about__background">
                <figure class="about__background--picture1">
                    <img src="" alt="picture 1">
                </figure>
                <figure class="about__background--picture2">
                    <img src="" alt="picture 2">
                </figure>
            </div>
            <div class="about__content">
                <figure class="about__background--logo">
                    <img src="" alt="logo">
                </figure>
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad expedita id perferendis praesentium quaerat, sapiente sed. Architecto, atque autem blanditiis corporis cum dolorem dolores eaque eius hic incidunt minima molestiae nemo neque odio officia qui quis recusandae rem repudiandae sed sint soluta suscipit unde voluptate voluptatum! A ex facere ipsam molestiae necessitatibus nobis numquam odit quidem, reprehenderit rerum tempore vitae?</p>
                <br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eius, est iste libero magnam nostrum sint sit soluta. Alias aliquam at commodi cum cupiditate, deleniti id iure laboriosam suscipit veniam! At, cum cumque, cupiditate dolore dolorum ex impedit iure maxime neque nulla possimus quasi quos recusandae reprehenderit sed, sunt suscipit veritatis vitae voluptatem voluptates? Consectetur eos fuga fugit sapiente voluptas.</p>
            </div>
        </div>
    </section>
</template>
<script>

</script>
<style lang="scss" scoped>
    .about__container {
        position: relative;
        padding: 0 7.5vw;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .about__background {
        position: relative;
        margin: 0;
    }
    .about__background--picture1 {
        & img {
            width: 50vw;
            height: 85vh;
        }
        width: 50vw;
        height: 85vh;
        position: relative;
        background-color: grey;
    }
    .about__background--picture2 {
        & img {
            width: 30vw;
            height: 30vh;
        }
        width: 30vw;
        height: 30vh;
        position: relative;
        transform: translate3d(10vw, -20vh, 0);
        background-color: dimgrey;
        z-index: 2;
    }
    .about__content--logo {
        width: 30vw;
        height: 25vh;
        background-color: dimgrey;
        transform: translate3d(-7.5vw, 5vh, 0);
    }
    .about__content {
        width: 30vw;
        padding: 2.5vh 2vw;
        position: relative;
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
            padding: 2vh 0;
            position: relative;
            transform: translateX(-7vw);
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
</style>

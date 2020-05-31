<template>
    <section class="subscribe__container">
        <div class="subscribe__main">
            <figure class="subscribe__main--title">
<!--                TODO: Place three stars figure above the top of the title.-->
                <svg>Three stars here</svg>
                <h2>JOIN OUR MAILING LIST</h2>
            </figure>
            <div class="subscribe__main--form">
                <p>Subscribe our newsletter for
                    the special events and promotions before we announce them anywhere else!</p>
                <input
                    type="email"
                    placeholder="Email address"
                    class="subscribe__form--input"
                    required
                    name="EMAIL"
                />
                <el-button type="warning" >SUBSCRIBE</el-button>
            </div>
<!--            TODO: Put background image (3) here.-->
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
    .subscribe__container {
        position: relative;
    }
    .subscribe__main {
        width: 50vw;
        max-width: 50vw;
        background-color: #222222;
        margin: 0 auto;
    }
    .subscribe__main--title {
        & h2 {
            color: #ad9545;
        }
    }
    .subscribe__main--form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & p {
            color: #ffffff;
            text-wrap: normal;
            width: 70%;
        }
    }
    .subscribe__form--input {
        border-color: transparent;
        border-bottom-color: #ffffff;
    }
</style>

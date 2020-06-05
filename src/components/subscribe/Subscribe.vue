<template>
    <section id="subscribe">
        <div class="subscribe__container">
            <div class="subscribe__main">
<!--                TODO: Style a background behind the content-->
<!--                <div class="subscribe__main&#45;&#45;background"/>-->
                <div style="z-index: 2">
                    <div class="subscribe__main--title">
                        <div class="main__title--icon">
                            <figure>
                                <font-awesome-icon icon="star" size="2x"/>
                            </figure>
                            <figure>
                                <font-awesome-icon icon="star" size="3x"/>
                            </figure>
                            <figure>
                                <font-awesome-icon icon="star" size="2x"/>
                            </figure>
                        </div>
                        <h2>JOIN OUR MAILING LIST</h2>
                    </div>
                    <div class="subscribe__main--form">
                        <p>Subscribe our newsletter for
                            the special events and promotions before we announce them anywhere else!</p>
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                name="EMAIL"
                            />
                            <button>
                                <span>SUBSCRIBE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
    .subscribe__container {
        position: relative;
        padding: 10vh 10vw;
    }
    .subscribe__main {
        width: 50vw;
        max-width: 50vw;
        background-color: #222222;
        border-radius: 20px;
        margin: 0 auto;
        padding-bottom: 5vh;
        position: relative;
    }
    .subscribe__main--background {
        position: absolute;
        width: 120%;
        background-color: #ad9545;
        height: 80%;
        z-index: 0;
    }
    .subscribe__main--title {
        transform: translate3d(0, -35%, 0);
        & h2 {
            color: #ad9545;
            font-weight: 900;
            font-size: 1.8rem;
        }
        .main__title--icon {
            color: #ad9545;
            display: flex;
            align-items: flex-end;
            justify-content: center;
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
            padding-bottom: 20px;
            font-size: 1.2rem;
        }
        & input {
            background-color: transparent;
            border-color: transparent transparent #ffffff transparent;
            margin-bottom: 7px;
            font-size: 1rem;
            padding: 5px 0;
            width: 100%;
            &::placeholder {
                color: #ffffff;
            }
        }
        & button {
            background-color: transparent;
            padding: 15px 30px;
            margin-top: 12.5px;
            border: 1px solid #ad9545;
            cursor: pointer;
            & span {
                font-weight: 700;
                font-size: 1.2rem;
                font-family: 'Roboto Slab', serif;
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
</style>

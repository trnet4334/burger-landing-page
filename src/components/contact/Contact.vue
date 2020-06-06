<template>
    <section id="contact">
        <div class="contact__container">
            <div class="contact__main">
                <div class="contact__main--map">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="700" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=1208%20e%20broadway%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://google-map-generator.com">google maps embed directions</a>
                        </div>
                    </div>
                </div>
                <div class="contact__main--info">
                    <div class="info__title">
                        <h2>CONTACT</h2>
                    </div>
                    <div class="info__content">
                        <div class="info__content--item">
                            <span>
                                <font-awesome-icon icon="map-pin"/>
                            </span>
                            <p>1208 E Broadway Rd, Tempe, AZ</p>
                        </div>
                        <div class="info__content--item">
                            <span>
                                <font-awesome-icon icon="clock"/>
                            </span>
                            <p>TUE-SUN: 12pm-11pm</p>
                        </div>
                        <div class="info__content--item">
                            <span>
                                <font-awesome-icon icon="phone-alt"/>
                            </span>
                            <p>480.666.8888</p>
                        </div>
                        <div class="info__content--message">
                            <span>
                                <font-awesome-icon icon="comment"/>
                            </span>
                            <div style="width: 100%">
                                <h4>MESSAGE US</h4>
<!--                                TODO: Add POST method of info to localStorage as demo need-->
                                <form id="message" method="post">
                                    <p>
                                        <input type="text" placeholder="Full Name" required/>
                                    </p>
                                    <p>
                                        <input type="text" placeholder="Phone Number" required/>
                                    </p>
                                    <p>
                                        <input type="text" placeholder="Email Address" required/>
                                    </p>
                                    <p>
                                        <textarea
                                            rows="4"
                                            placeholder="Message to us"
                                            required
                                        />
                                    </p>
                                    <button>
                                        <span>Send message</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script></script>
<style lang="scss" scoped>
    .contact__container {
        position: relative;
        padding: 7.5vh 4vw;
    }
    .contact__main {
        position: relative;
    }
    .contact__main--map {
        /*width: 55vw;*/
        /*height: 70vh;*/
        z-index: 5;
        position: absolute;
        transform: translate3d(37.5vw, 30%, 0);
    }
    .contact__main--info {
        width: 35vw;
        height: 100vh;
        position: relative;
        padding-top: 3vh;
        background-color: #222222;
        transform: translate3d(7.5vw, 0, 0);
        border-radius: 20px;
    }
    .info__title {
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
            font-weight: 900;
            padding: 3.5vh 0;
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
    }
    .info__content {
        width: 75%;
        position: relative;
    }
    .info__content--item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        & P {
            color: #ffffff;
            text-wrap: normal;
            text-align: start;
            font-weight: bold;
        }
        & span>svg {
            color: #ad9545;
            margin: 0 25px;
        }
    }
    .info__content--message {
        display: flex;
        width: 100%;
        & span>svg {
            color: #ad9545;
            margin: 0 25px;
        }
        & h4 {
            color: #ffffff;
            margin-top: 0px;
            text-align: start;
        }
        & form {
            width: 100%;
            & p {
                &>input[type=text], &>textarea {
                    width: 100%;
                    padding: 5px 10px;
                    border: 0;
                    border-radius: 5px;
                    box-shadow: 0 0 12px 4px rgba(200, 200, 200, 0.45);
                    font-family: inherit;
                }

            }
            & button {
                padding: 10px 15px;
                background-color: transparent;
                border: 1px solid #ad9545;
                & span {
                    font-size: 1rem;
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
    }
    .mapouter {
        position:relative;
        text-align:right;
        height:450px;
        width:700px;
    }
    .gmap_canvas {
        overflow:hidden;
        background:none!important;
        height:450px;
        width:700px;
    }
</style>

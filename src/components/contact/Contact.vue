<template>
    <section class="contact__container">
        <div class="contact__main">
            <div class="contact__main--map">
                <div class="contact__map--iframe">
<!--                    TODO: Add google map iframe-->
                    <h2>IFRAME</h2>
                </div>
            </div>
            <div class="contact__main--info">
                <div class="info__title">
                    <h2>CONTACT</h2>
                </div>
                <div class="info__content">
<!--                    TODO: Add contact info-->
                    <div class="info__content--item">
                        <span>
                            <font-awesome-icon icon="map-pin"/>
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, sed?Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="info__content--item">
                        <span>
                            <font-awesome-icon icon="clock"/>
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti explicabo inventore non quasi saepe?</p>
                    </div>
                    <div class="info__content--item">
                        <span>
                            <font-awesome-icon icon="phone-alt"/>
                        </span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iste nam quam reprehenderit temporibus, ullam.</p>
                    </div>
                    <div>
                        <div class="info__content--message">
                            <span>
                                <font-awesome-icon icon="comment"/>
                            </span>
                            <div style="width: 100%">
                                <h4>MESSAGE US</h4>
                                <el-form size="mini">
                                    <el-form-item prop="name">
                                        <el-input placeholder="Name"/>
                                    </el-form-item>
                                    <el-form-item prop="phone">
                                        <el-input placeholder="Phone Number"/>
                                    </el-form-item>
                                    <el-form-item prop="email">
                                        <el-input placeholder="Email Address"/>
                                    </el-form-item>
                                    <el-form-item prop="message">
                                        <el-input
                                            type="textarea"
                                            :rows="3"
                                            placeholder="Message to us"
                                        />
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="default">SEND MESSAGE</el-button>
                                    </el-form-item>
                                </el-form>
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
    }
    .contact__main {
        position: relative;
    }
    .contact__main--map {
        width: 55vw;
        height: 70vh;
        background-color: dimgrey;
        z-index: 100;
        position: absolute;
        transform: translate3d(37.5vw, 30%, 0);
    }
    .contact__main--info {
        width: 40vw;
        height: 130vh;
        position: relative;
        padding-top: 3vh;
        background-color: #222222;
        transform: translate3d(7.5vw, 0, 0);
    }
    .info__title {
        & h2 {
            color: #ad9545;
            font-size: 1.8rem;
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
        width: 65%;
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
    }
</style>

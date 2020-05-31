<template>
    <nav class="header__navigation">
        <div class="header__logo">
            <figure>
                <img src="#" alt="#">
                Logo
            </figure>
            <div>
                <ul class="header__items--words">
                    <li>
                        <a href="#home" class="header__item">HOME</a>
                    </li>
                    <li>
                        <a href="#menu" class="header__item">MENU</a>
                    </li>
                    <li>
                        <a href="#about" class="header__item">ABOUT</a>
                    </li>
                    <li>
                        <a href="#brewery" class="header__item">THE BREWERY</a>
                    </li>
                    <li>
                        <a href="#contact" class="header__item">CONTACT</a>
                    </li>
                    <li>
                        <a href="#subscribe" class="header__item">SUBSCRIBE</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header__contact">
            <div>
                <ul class="header__items--icons">
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="header__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="header__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'yelp']" size="2x" class="header__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'google']" size="2x" class="header__icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <el-button plain class="header__contact-btn">480.666.8888</el-button>
        </div>
    </nav>
</template>
<script>
</script>
<style scoped lang="scss">
    nav {
        border-color: transparent;
        /*position: fixed;*/
        width: 100vw;
    }
    .header__navigation {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .header__items--words, .header__items--icons {
        display: flex;
        list-style: none;
        /*&>li>a {*/
        /*    cursor: pointer;*/
        /*}*/
    }
    .header__items--words {
        & li {
            margin: 0 0.4rem;
            & a {
                text-decoration: none;
            }
        }
    }
    .header__logo, .header__contact {
        display: flex;
        justify-content: space-around;
    }
    .header__contact-btn {
        margin: 0 30px;
        color: #ad9545;
        border: 1.5px solid #ad9545;
        /*&:hover {*/
        /*    color: #ffffff;*/
        /*    border: 1.5px solid #ffffff;*/
        /*}*/
    }
    .header__icon {
        margin: 0 3px;
        color: #ad9545;
        &:hover {
            color: #ffffff;
        }
    }
</style>

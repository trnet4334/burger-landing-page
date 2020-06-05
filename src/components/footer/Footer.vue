<template>
    <footer>
        <div class="footer__logo">
            <img src="../../assets/image/logo.png" alt="logo">
        </div>
        <div class="footer__contact">
            <div class="footer__icons">
                <span>Connect with us</span>
                <ul>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="footer__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" class="footer__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'yelp']" size="2x" class="footer__icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'google']" size="2x" class="footer__icon"/>
                        </a>
                    </li>
                </ul>
            </div>
            <p>©{{getCurrentYear}} A's Burger Kitchen. All Rights Reserved.</p>
        </div>
    </footer>
</template>
<script>
export default {
  computed: {
    getCurrentYear () {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
    footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1vh 0 4vh 0;
        background-color: transparent;
    }
    .footer__logo {
        width: 250px;
        height: 250px;
        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .footer__contact {
        .footer__icons {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            & ul {
                display: flex;
                justify-content: space-between;
                padding-left: 0;
                list-style: none;
            }
            & span {
                font-size: 1.1rem;
                color: #ad9545;
                font-weight: bold;
                text-transform: uppercase;
            }
            .footer__icon {
                margin: 0 8px;
                color: #ad9545;
                &:hover {
                    color: #ffffff;
                }
            }
        }
        & p {
            color: #ffffff;
        }
    }
</style>

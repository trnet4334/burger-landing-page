<template>
    <footer class="flex--row footer">
        <div class="footer__logo">
            <img src="../../assets/image/logo.png" alt="logo">
        </div>
        <div class="footer__contact">
            <div class="footer__icons flex--col">
                <span>Connect with us</span>
                <ul class="flex--row">
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
<style src="./Footer.scss" lang="scss" scoped/>

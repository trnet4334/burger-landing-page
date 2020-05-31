<template>
    <footer>
        <figure>
<!--            TODO: Add logo-->
            <img src="" alt="logo">
        </figure>
        <figure>
            <p>©{{getCurrentYear}} A's Burger Kitchen. All Rights Reserved.</p>
        </figure>
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
        padding: 15vh 0 6vh 0;
    }
</style>

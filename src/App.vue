<template>
    <main id="app">
        <router-view/>
    </main>
</template>
<script>
</script>
<style lang="scss">
@import 'styles/app.scss';
body {
    margin: 0;
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
}
*, *:before, *:after {
    box-sizing: border-box;
    &:focus {
        outline: none !important;
    }
}
// Custom class for notification box in subscribe component
.notification-class {
    .el-notification__title {
        font-family: 'Roboto Slab', serif;
        font-size: 1.3rem;
    }
    .el-notification__content {
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
        text-align: start;
        word-break: break-all;
    }
}
</style>

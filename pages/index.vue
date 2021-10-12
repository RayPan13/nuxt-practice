<template>
    <div id="app">
        <div class="cover" :class="{ active }"></div>
        <layoutHeader />
        <layout-kv />
        <layout-product />
        <layout-featured />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import layoutKv from '@/components/LayoutKv.vue'
import layoutProduct from '@/components/LayoutProduct.vue'
import layoutFeatured from '@/components/LayoutFeatured.vue'
export default {
    components: {
        layoutHeader,
        layoutKv,
        layoutProduct,
        layoutFeatured,
    },
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
}
</script>

<style lang="scss">
html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
}
body {
    margin: 0;
    padding: 0;
}
main {
    display: block;
}
a {
    color: inherit;
    text-decoration: none;
}
.cover {
    display: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 8;
    &.active {
        display: block;
    }
}
</style>

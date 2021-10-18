<template>
    <div id="app">
        <div class="cover" :class="{ active }"></div>
        <layoutHeader />
        <layout-kv />
        <layout-product />
        <layout-featured />
        <layout-info />
        <layout-footer />
        <back-top-btn :scroll-top="scrollTop" />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import layoutKv from '@/components/LayoutKv.vue'
import layoutProduct from '@/components/LayoutProduct.vue'
import layoutFeatured from '@/components/LayoutFeatured.vue'
import layoutInfo from '@/components/LayoutInfo.vue'
import layoutFooter from '@/components/LayoutFooter.vue'
import backTopBtn from '@/components/BackTopBtn.vue'
export default {
    name: 'Index',
    components: {
        layoutHeader,
        layoutKv,
        layoutProduct,
        layoutFeatured,
        layoutInfo,
        layoutFooter,
        backTopBtn,
    },
    data() {
        return {
            scrollTop: 0,
        }
    },
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
    mounted() {
        window.addEventListener('scroll', this.scrollhandler, true)
    },
    methods: {
        scrollhandler() {
            this.scrollTop = document.documentElement.scrollTop
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
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f5f5f5;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #ff6b6b;
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

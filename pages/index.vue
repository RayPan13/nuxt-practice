<template>
    <div id="app">
        <div class="cover" :class="{ active }" @click="closeNav"></div>
        <layoutHeader />
        <main>
            <layout-kv />
            <layout-product />
            <layout-featured />
            <layout-info />
        </main>
        <back-top-btn :scroll-top="scrollTop" />
        <layout-footer />
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
        closeNav() {
            this.$store.commit('toggleNav', false)
        },
    },
}
</script>

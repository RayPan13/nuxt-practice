<template>
    <div>
        <div class="cover" :class="{ active }" @click="closeNav"></div>
        <layout-header />
        <nuxt />
        <back-top-btn :scroll-top="scrollTop" />
        <layout-footer />
    </div>
</template>
<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import layoutFooter from '@/components/LayoutFooter.vue'
import backTopBtn from '@/components/BackTopBtn.vue'

export default {
    components: { layoutHeader, layoutFooter, backTopBtn },
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
<style lang="scss"></style>

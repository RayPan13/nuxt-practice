<template>
    <div id="favorites">
        <layout-header />
        <breadcrumb page="favorites" />
        <main>
            <div class="container">
                <layout-favorites />
            </div>
        </main>
        <back-top-btn :scroll-top="scrollTop" />
        <layout-footer />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import breadcrumb from '@/components/Breadcrumb.vue'
import layoutFavorites from '@/components/LayoutFavorites.vue'
import backTopBtn from '@/components/BackTopBtn.vue'
import layoutFooter from '@/components/LayoutFooter.vue'

export default {
    components: { layoutHeader, breadcrumb, layoutFavorites, backTopBtn, layoutFooter },
    data() {
        return {
            scrollTop: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollhandler, true)
        this.closeNav()
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

<style lang="scss" scoped></style>

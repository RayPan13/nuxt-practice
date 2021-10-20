<template>
    <div id="contact">
        <div class="cover" :class="{ active }" @click="closeNav"></div>
        <layout-header />
        <breadcrumb />
        <main>
            <layout-contact />
            <map-area />
            <contact-form />
        </main>
        <back-top-btn :scroll-top="scrollTop" />
        <layout-footer />
    </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import layoutContact from '@/components/LayoutContact.vue'
import mapArea from '@/components/MapArea.vue'
import contactForm from '@/components/ContactForm.vue'
export default {
    components: { breadcrumb, layoutContact, mapArea, contactForm },

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

<style lang="scss" scoped></style>

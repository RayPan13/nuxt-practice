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
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
    methods: {
        closeNav() {
            this.$store.commit('toggleNav', false)
        },
    },
}
</script>

<style lang="scss" scoped></style>

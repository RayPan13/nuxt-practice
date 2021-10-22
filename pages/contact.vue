<template>
    <div id="contact">
        <breadcrumb page="contact" />
        <main>
            <layout-contact />
            <map-area />
            <contact-form />
        </main>
    </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import layoutContact from '@/components/LayoutContact.vue'
import mapArea from '@/components/MapArea.vue'
import contactForm from '@/components/ContactForm.vue'
export default {
    components: { breadcrumb, layoutContact, mapArea, contactForm },
    head: {
        title: 'contact',
        meta: [
            { hid: 'title', name: 'title', content: 'contact' },
            { hid: 'description', name: 'description', content: 'This is contact page' },
        ],
    },
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>

<style lang="scss" scoped></style>

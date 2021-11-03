<template>
    <div id="contact">
        <Breadcrumb page="contact" />
        <main>
            <TheContact />
            <MapArea />
            <ContactForm />
        </main>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import TheContact from '@/components/TheContact.vue'
import MapArea from '@/components/MapArea.vue'
import ContactForm from '@/components/ContactForm.vue'
export default {
    components: { Breadcrumb, TheContact, MapArea, ContactForm },
    head: {
        title: 'contact',
        meta: [
            { hid: 'title', name: 'title', content: 'contact' },
            { hid: 'description', name: 'description', content: 'This is contact page' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNavActive', false)
    },
}
</script>

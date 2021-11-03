<template>
    <div id="details">
        <main>
            <TheProductDetails />
            <TheDescription />
            <TheRelated />
        </main>
    </div>
</template>

<script>
import TheProductDetails from '@/components/TheProductDetails'
import TheDescription from '@/components/TheDescription'
import TheRelated from '@/components/TheRelated'
export default {
    components: {
        TheProductDetails,
        TheDescription,
        TheRelated,
    },
    head: {
        title: 'details',
        meta: [
            { hid: 'title', name: 'title', content: 'details' },
            { hid: 'description', name: 'description', content: 'This is details page' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNavActive', false)
    },
}
</script>

<template>
    <div id="details">
        <main>
            <TheProductDetails />
            <TheDescription />
        </main>
    </div>
</template>

<script>
import TheProductDetails from '@/components/TheProductDetails'
import TheDescription from '@/components/TheDescription'
export default {
    components: {
        TheProductDetails,
        TheDescription,
    },
    head: {
        title: 'details',
        meta: [
            { hid: 'title', name: 'title', content: 'details' },
            { hid: 'description', name: 'description', content: 'This is details page' },
        ],
    },
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>

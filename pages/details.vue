<template>
    <div id="details">
        <main>
            <TheProductDetails />
        </main>
    </div>
</template>

<script>
import TheProductDetails from '@/components/TheProductDetails'
export default {
    components: {
        TheProductDetails,
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

<template>
    <div id="favorites">
        <Breadcrumb page="favorites" />
        <main>
            <TheFavorites />
        </main>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import TheFavorites from '@/components/TheFavorites.vue'

export default {
    components: { Breadcrumb, TheFavorites },
    head: {
        title: 'favorites',
        meta: [
            { hid: 'title', name: 'title', content: 'favorites' },
            { hid: 'description', name: 'description', content: 'This is favorites page' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNavActive', false)
    },
}
</script>

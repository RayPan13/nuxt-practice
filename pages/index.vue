<template>
    <div id="app">
        <main>
            <TheKv />
            <TheProduct />
            <TheFeatured />
            <TheInfo />
        </main>
    </div>
</template>

<script>
import TheKv from '@/components/TheKv.vue'
import TheProduct from '@/components/TheProduct.vue'
import TheFeatured from '@/components/TheFeatured.vue'
import TheInfo from '@/components/TheInfo.vue'
export default {
    components: {
        TheKv,
        TheProduct,
        TheFeatured,
        TheInfo,
    },
    head: {
        title: 'index',
        meta: [
            { hid: 'title', name: 'title', content: 'index' },
            { hid: 'description', name: 'description', content: 'This is index page' },
        ],
    },
    mounted() {
        this.$store.dispatch('updateNavActive', false)
    },
}
</script>

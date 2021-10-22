<template>
    <div id="app">
        <main>
            <layout-kv />
            <layout-product />
            <layout-featured />
            <layout-info />
        </main>
    </div>
</template>

<script>
import layoutKv from '@/components/LayoutKv.vue'
import layoutProduct from '@/components/LayoutProduct.vue'
import layoutFeatured from '@/components/LayoutFeatured.vue'
import layoutInfo from '@/components/LayoutInfo.vue'
export default {
    components: {
        layoutKv,
        layoutProduct,
        layoutFeatured,
        layoutInfo,
    },
    head: {
        title: 'index',
        meta: [
            { hid: 'title', name: 'title', content: 'index' },
            { hid: 'description', name: 'description', content: 'This is index page' },
        ],
    },
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>

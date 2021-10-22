<template>
    <div id="product-details">
        <layout-header />
        <main>
            <layout-details />
        </main>
        <layout-footer />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import layoutFooter from '@/components/LayoutFooter.vue'
import layoutDetails from '@/components/LayoutDetails.vue'
export default {
    components: { layoutHeader, layoutFooter, layoutDetails },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/basic';
</style>

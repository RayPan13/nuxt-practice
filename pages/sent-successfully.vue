<template>
    <div id="sentSuccessfully">
        <layout-header />
        <main></main>
        <layout-footer />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import LayoutFooter from '~/components/LayoutFooter.vue'
export default {
    components: { layoutHeader, LayoutFooter },
}
</script>

<style lang="scss" scoped></style>

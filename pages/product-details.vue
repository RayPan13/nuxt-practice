<template>
    <div id="product-details">
        <main></main>
    </div>
</template>

<script>
export default {
    head: {
        title: 'product detail',
        meta: [
            { hid: 'title', name: 'title', content: 'product detail' },
            { hid: 'description', name: 'description', content: 'This is product detail page' },
        ],
    },
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>
<style lang="scss" scoped></style>

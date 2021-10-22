<template>
    <div id="product-details">
        <main></main>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>
<style lang="scss" scoped></style>

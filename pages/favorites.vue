<template>
    <div id="favorites">
        <h1>favorites</h1>
    </div>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', this.scrollhandler, true)
        this.closeNav()
    },
    methods: {
        scrollhandler() {
            this.scrollTop = document.documentElement.scrollTop
        },
        closeNav() {
            this.$store.commit('toggleNav', false)
        },
    },
}
</script>

<style lang="scss" scoped></style>

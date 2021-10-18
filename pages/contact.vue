<template>
    <div id="contact">
        <div class="cover" :class="{ active }" @click="closeNav"></div>
        <layoutHeader />
        <breadcrumb />
        <layout-footer />
    </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
export default {
    name: 'Contact',
    components: { breadcrumb },
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
    methods: {
        closeNav() {
            this.$store.commit('toggleNav', false)
        },
    },
}
</script>

<style lang="scss" scoped></style>

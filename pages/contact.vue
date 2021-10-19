<template>
    <div id="contact">
        <div class="cover" :class="{ active }" @click="closeNav"></div>
        <layout-header />
        <breadcrumb />
        <main>
            <layout-contact />
            <map-area />
        </main>
        <layout-footer />
    </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import layoutContact from '@/components/LayoutContact.vue'
import mapArea from '@/components/MapArea.vue'
export default {
    name: 'Contact',
    components: { breadcrumb, layoutContact, mapArea },
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

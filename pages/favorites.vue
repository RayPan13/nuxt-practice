<template>
    <div id="favorites">
        <breadcrumb page="favorites" />
        <main>
            <layout-favorites />
        </main>
    </div>
</template>

<script>
import breadcrumb from '@/components/Breadcrumb.vue'
import layoutFavorites from '@/components/LayoutFavorites.vue'

export default {
    components: { breadcrumb, layoutFavorites },
    head: {
        title: 'favorites',
        meta: [
            { hid: 'title', name: 'title', content: 'favorites' },
            { hid: 'description', name: 'description', content: 'This is favorites page' },
        ],
    },
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>

<style lang="scss" scoped></style>

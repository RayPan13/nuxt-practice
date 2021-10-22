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
    mounted() {
        this.$store.commit('toggleNav', false)
    },
}
</script>

<style lang="scss" scoped></style>

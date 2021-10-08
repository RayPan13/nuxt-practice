<template>
    <div class="product">
        <div class="container">
            <carousel-slide />
        </div>
    </div>
</template>

<script>
import carouselSlide from '@/components/CarouselSlide.vue'
export default {
    name: 'LayoutProduct',
    components: { carouselSlide },
}
</script>

<style lang="scss" scoped></style>

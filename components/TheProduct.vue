<template>
    <div class="product">
        <div class="container">
            <CarouselSlide :carousel="carousel" page="index" />
        </div>
    </div>
</template>

<script>
import CarouselSlide from '@/components/CarouselSlide.vue'
export default {
    name: 'LayoutProduct',
    components: { CarouselSlide },
    data() {
        return {
            carousel: [
                {
                    src: 'https://picsum.photos/200/200?random=6',
                    text: 'SPECIALS',
                },
                {
                    src: 'https://picsum.photos/200/200?random=7',
                    text: 'SHAKES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=8',
                    text: 'POPSICLES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=9',
                    text: 'CHOCOLATES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=10',
                    text: 'CREAMS',
                },
                {
                    src: 'https://picsum.photos/200/200?random=11',
                    text: 'DULCE DE LECHE',
                },
                {
                    src: 'https://picsum.photos/200/200?random=12',
                    text: 'FRUIT',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.product {
    width: 100%;
    margin-bottom: 24px;
}
</style>

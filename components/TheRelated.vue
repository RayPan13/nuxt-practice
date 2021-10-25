<template>
    <div class="container">
        <div class="related">
            <h2>Related Products</h2>
            <CarouselSlide :carousel="carousel" page="detail" />
        </div>
    </div>
</template>
<script>
import CarouselSlide from '@/components/CarouselSlide'
export default {
    name: 'TheRelated',
    components: {
        CarouselSlide,
    },
    data() {
        return {
            carousel: [
                {
                    src: 'https://picsum.photos/260/260?random=501',
                    title: 'Chocolate',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=502',
                    title: 'American Cream',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=503',
                    title: 'Dulce de Leche',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=504',
                    title: 'Swiss Cream',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=505',
                    title: 'Raspberry',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=506',
                    title: 'Dulce de Leche Brownie',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=507',
                    title: 'Chocolate with Raisins',
                    price: '10.00',
                },
                {
                    src: 'https://picsum.photos/260/260?random=508',
                    title: 'Lemon',
                    price: '10.00',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.related {
    width: 100%;
    margin-bottom: 24px;
    h2 {
        margin: 0 0 24px;
        font-size: 2.5rem;
        text-align: center;
        &::after {
            content: '';
            display: block;
            width: 100px;
            height: 4px;
            background-color: map-get($color, main);
            margin: 8px auto 0;
        }
    }
}
</style>

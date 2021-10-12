<template>
    <div class="featured">
        <div class="container">
            <h1>Featured Product</h1>
            <div class="tags">
                <div class="tag"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutFeatured',
    data() {
        return {
            tags: [
                { id: 1, tag: 'Popular' },
                { id: 2, tag: 'Creams' },
                { id: 3, tag: 'Chocolates' },
                { id: 4, tag: 'Fruit' },
                { id: 5, tag: 'Dulce de leche' },
            ],
            product: [
                {
                    src: 'https://picsum.photos/260/260?random=101',
                    title: 'Chocolate',
                    price: '10.00',
                    type: 'Chocolates',
                },
                {
                    src: 'https://picsum.photos/260/260?random=102',
                    title: 'American Cream',
                    price: '10.00',
                    type: 'Creams',
                },
                {
                    src: 'https://picsum.photos/260/260?random=103',
                    title: 'Dulce de Leche',
                    price: '10.00',
                    type: 'Dulce de leche',
                },
                {
                    src: 'https://picsum.photos/260/260?random=104',
                    title: 'Swiss Cream',
                    price: '10.00',
                    type: 'Creams',
                },
                {
                    src: 'https://picsum.photos/260/260?random=105',
                    title: 'Raspberry',
                    price: '10.00',
                    type: 'Fruit',
                },
                {
                    src: 'https://picsum.photos/260/260?random=106',
                    title: 'Dulce de Leche Brownie',
                    price: '10.00',
                    type: 'Dulce de leche',
                },
                {
                    src: 'https://picsum.photos/260/260?random=107',
                    title: 'Chocolate with Raisins',
                    price: '10.00',
                    type: 'Chocolates',
                },
                {
                    src: 'https://picsum.photos/260/260?random=108',
                    title: 'Lemon',
                    price: '10.00',
                    type: 'Fruit',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/basic';
.featured {
    width: 100%;
    margin-bottom: 24px;
    h1 {
        text-align: center;
        margin: 0;
        font-size: 3rem;
        padding-bottom: 12px;
        &::after {
            display: block;
            content: '';
            width: 100px;
            height: 4px;
            background-color: map-get($color, main);
            margin: 8px auto 0;
        }
    }
}
</style>

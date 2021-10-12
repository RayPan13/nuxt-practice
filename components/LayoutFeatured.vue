<template>
    <div class="featured">
        <div class="container">
            <h1>Featured Product</h1>
            <div class="tags">
                <ul>
                    <li
                        v-for="(obj, index) of tabs"
                        :key="obj.id"
                        :class="{ active: tabActive[index] }"
                        @click="clickTab(index)"
                    >
                        {{ obj.tab }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutFeatured',
    data() {
        return {
            tabActive: [1, 0, 0, 0, 0],
            tabs: [
                { id: 1, tab: 'Popular' },
                { id: 2, tab: 'Creams' },
                { id: 3, tab: 'Chocolates' },
                { id: 4, tab: 'Fruit' },
                { id: 5, tab: 'Dulce de leche' },
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
    mounted() {
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].id = i + 1
        }
    },
    methods: {
        clickTab(idx) {
            this.tabActive = [0, 0, 0, 0, 0]
            this.tabActive[idx] = 1
        },
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
        margin: 12px 0;
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
.tags {
    ul {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    li {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 300;
        margin: 0 12px 8px;
        padding-bottom: 4px;
        cursor: pointer;
        &:hover {
            color: map-get($color, main);
        }
        &.active {
            border-bottom: 2px solid map-get($color, main);
        }
    }
}
</style>

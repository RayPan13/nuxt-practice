<template>
    <div class="featured">
        <div class="container">
            <h1>Featured Product</h1>
            <div class="tabs">
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
            <div class="product">
                <transition-group tag="ul" name="flip">
                    <li
                        v-for="obj of product"
                        :key="obj.id"
                        :class="{ show: obj.show }"
                    >
                        <div class="box">
                            <div class="heart">
                                <fa :icon="['far', 'heart']" />
                            </div>
                            <div class="pic">
                                <a href="javascript:;">{{ obj.title }}</a>
                                <img :src="obj.src" alt="" />
                            </div>
                            <div class="txt">
                                <h3>{{ obj.title }}</h3>
                                <p class="price">{{ obj.price }}</p>
                            </div>
                            <button type="button">
                                <fa :icon="['fas', 'shopping-cart']" />
                                <span>ADD TO CART</span>
                            </button>
                        </div>
                    </li>
                </transition-group>
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
                    id: 1,
                    src: 'https://picsum.photos/260/260?random=101',
                    title: 'Chocolate',
                    price: '10.00',
                    type: 'Chocolates',
                    show: false,
                },
                {
                    id: 2,
                    src: 'https://picsum.photos/260/260?random=102',
                    title: 'American Cream',
                    price: '10.00',
                    type: 'Creams',
                    show: false,
                },
                {
                    id: 3,
                    src: 'https://picsum.photos/260/260?random=103',
                    title: 'Dulce de Leche',
                    price: '10.00',
                    type: 'Dulce de leche',
                    show: false,
                },
                {
                    id: 4,
                    src: 'https://picsum.photos/260/260?random=104',
                    title: 'Swiss Cream',
                    price: '10.00',
                    type: 'Creams',
                    show: false,
                },
                {
                    id: 5,
                    src: 'https://picsum.photos/260/260?random=105',
                    title: 'Raspberry',
                    price: '10.00',
                    type: 'Fruit',
                    show: false,
                },
                {
                    id: 6,
                    src: 'https://picsum.photos/260/260?random=106',
                    title: 'Dulce de Leche Brownie',
                    price: '10.00',
                    type: 'Dulce de leche',
                    show: false,
                },
                {
                    id: 7,
                    src: 'https://picsum.photos/260/260?random=107',
                    title: 'Chocolate with Raisins',
                    price: '10.00',
                    type: 'Chocolates',
                    show: false,
                },
                {
                    id: 8,
                    src: 'https://picsum.photos/260/260?random=108',
                    title: 'Lemon',
                    price: '10.00',
                    type: 'Fruit',
                    show: false,
                },
            ],
            show: 'Popular',
        }
    },
    mounted() {
        this.clickTab(0)
    },
    methods: {
        clickTab(idx) {
            this.tabActive = [0, 0, 0, 0, 0]
            this.tabActive[idx] = 1
            this.show = this.tabs[idx].tab
            if (this.show === 'Popular') {
                this.sortProduct()
            } else {
                this.formatProduct(this.show)
            }
        },
        formatProduct(show) {
            this.product.forEach((obj, index) => {
                if (obj.type === show) {
                    const temp = this.product.splice(index, 1)[0]
                    temp.show = true
                    this.product.unshift(temp)
                } else {
                    obj.show = false
                }
            })
        },
        sortProduct() {
            this.product.forEach((obj) => {
                obj.show = true
            })
            this.product.sort((a, b) => a.id - b.id)
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
.tabs {
    margin-bottom: 12px;
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
        line-height: 1.5;
        user-select: none;
        cursor: pointer;
        &:hover {
            color: map-get($color, main);
        }
        &.active {
            border-bottom: 2px solid map-get($color, main);
        }
    }
}
.product {
    width: 100%;
    overflow: hidden;
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 0;
    }
    li {
        list-style: none;
        flex-basis: 25%;
        padding: 0 12px;
        margin-bottom: 24px;
        box-sizing: border-box;
        background-color: #fff;
        height: 0;
        transition: transform 0.5s;
        transform: scale(0);
        overflow: hidden;
        &.show {
            transform: scale(1);
            height: auto;
        }
        @include media(1024) {
            flex-basis: 33.33%;
        }
        @include media(640) {
            flex-basis: 50%;
        }
        @include media(400) {
            flex-basis: 100%;
        }
        .box {
            border: 1px solid #d9d9d9;
            border-radius: 4px;
            padding-bottom: 12px;
            position: relative;
            overflow: hidden;
            &:hover {
                border-color: map-get($color, main);
            }
        }
        .heart {
            position: absolute;
            top: 8px;
            right: 4px;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
            z-index: 3;
            width: 30px;
            height: 30px;
            color: map-get($color, main);
            font-size: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg {
                transition: 0.5s;
            }
            &:hover {
                background-color: map-get($color, main);
                color: #fff;
                svg {
                    transform: rotate(360deg);
                }
            }
        }
        .txt {
            padding: 0 5%;
        }
        .pic {
            margin-bottom: 8px;
            position: relative;
            a {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            }
            img {
                width: 100%;
            }
        }
        h3 {
            margin: 0 0 8px;
            font-size: 1.6rem;
            font-weight: 300;
        }
        p {
            margin: 0 0 8px;
            font-size: 1.5rem;
            &::before {
                content: '$';
                display: inline-block;
            }
        }
        button {
            display: block;
            border: 0;
            border-radius: 4px;
            background-color: map-get($color, main);
            color: #fff;
            text-align: center;
            width: 90%;
            padding: 12px 0;
            margin: 0 auto;
            cursor: pointer;
            span {
                font-size: 1.4rem;
                font-weight: 600;
                padding-left: 4px;
            }
        }
    }
    .flip-move {
        transition: transform 0.5s;
    }
}
</style>

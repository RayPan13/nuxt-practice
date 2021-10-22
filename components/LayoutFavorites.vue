<template>
    <div class="container">
        <div class="favorites-list">
            <div class="control">
                <div class="options">
                    <span :class="{ active: selectedAll }"></span>
                    <label @click="toggleAll">Select All</label>
                    <button type="button">DELETE</button>
                </div>
            </div>
            <ul class="list">
                <li v-for="(obj, index) of list" :key="obj.id">
                    <div class="item">
                        <div class="info">
                            <div class="checkbox" :class="{ active: obj.selected }" @click="toggleSelected(index)">
                                <span></span>
                            </div>
                            <div class="pic">
                                <img :src="obj.src" alt="" />
                            </div>
                        </div>
                        <div class="box">
                            <div class="text">
                                <h3>{{ obj.name }}</h3>
                                <p class="price">{{ obj.price }}</p>
                                <p class="discount">
                                    <fa v-if="obj.discount.icon === 'shipping'" :icon="['fas', 'truck']"></fa>
                                    <span>{{ obj.discount.text }}</span>
                                </p>
                            </div>
                            <div class="list-control">
                                <button type="button" class="add">ADD TO CART</button>
                                <button type="button" class="checkout">BUY NOW</button>
                                <button type="button" class="delete">
                                    <fa :icon="['far', 'trash-alt']"></fa>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="pages">
                <div class="prev">
                    <fa :icon="['fas', 'angle-left']"></fa>
                </div>
                <div class="next">
                    <fa :icon="['fas', 'angle-right']"></fa>
                </div>
                <ul>
                    <li class="active">1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutFavorites',
    data() {
        return {
            list: [
                {
                    id: 1,
                    src: 'https://picsum.photos/140/140?random=201',
                    name: 'Chocolate',
                    price: '10.00',
                    discount: { icon: 'shipping', text: 'Freeshipping' },
                    selected: false,
                },
                {
                    id: 2,
                    src: 'https://picsum.photos/140/140?random=202',
                    name: 'Chocolate',
                    price: '11.00',
                    discount: { icon: 'discount', text: 'Discount 10%' },
                    selected: false,
                },
                {
                    id: 3,
                    src: 'https://picsum.photos/140/140?random=203',
                    name: 'Chocolate',
                    price: '12.00',
                    discount: { icon: 'shipping', text: 'Freeshipping' },
                    selected: false,
                },
            ],
            selectedAll: false,
        }
    },
    methods: {
        toggleSelected(index) {
            this.list[index].selected = !this.list[index].selected
            this.checkSelectedAll()
        },
        toggleAll() {
            this.selectedAll = !this.selectedAll
            this.list.forEach((obj) => {
                obj.selected = this.selectedAll
            })
        },
        checkSelectedAll() {
            this.selectedAll = this.list.every((obj) => {
                return obj.selected
            })
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.favorites-list {
    width: 100%;
    margin-bottom: 24px;
    position: relative;
    .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid #aaa;
        .options {
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            span {
                width: 20px;
                height: 20px;
                border: 1px solid #666;
                border-radius: 4px;
                display: inline-block;
                margin-right: 8px;
                position: absolute;
                z-index: -1;
                &.active {
                    background-color: map-get($color, main);
                    border-color: map-get($color, main);
                    &::after {
                        content: '';
                        display: block;
                        width: 60%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 8px;
                        left: 7px;
                        transform: rotate(-45deg);
                    }
                    &::before {
                        content: '';
                        display: block;
                        width: 40%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 9px;
                        left: 3px;
                        transform: rotate(45deg);
                    }
                }
            }
            label {
                color: #666;
                margin-right: 48px;
                user-select: none;
                cursor: pointer;
                padding-left: 28px;
            }
            button {
                border: 0;
                border-radius: 4px;
                background-color: map-get($color, main);
                color: #fff;
                padding: 12px;
                font-weight: 600;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
    .pages {
        display: inline-flex;
        position: absolute;
        top: 0;
        right: 0;
        @include media(640) {
            position: relative;
            right: -50%;
            transform: translateX(-50%);
        }
        ul {
            padding: 0 24px 0;
            margin: 0;
        }
        li {
            display: inline-block;
            list-style: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 4px;
            text-align: center;
            line-height: 30px;
            font-size: 1.4rem;
            user-select: none;
            cursor: pointer;
            color: map-get($color, main);
            &.active {
                color: #fff;
                background-color: map-get($color, main);
            }
        }
        .prev,
        .next {
            font-size: 1.8rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: map-get($color, main);
            cursor: pointer;
        }
        .prev {
            left: 0;
        }
        .next {
            right: 0;
        }
    }
    .list {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid #aaa;
        }
        .item {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .info {
            display: flex;
            align-items: center;
            .checkbox {
                margin: 0 24px;
                span {
                    width: 20px;
                    height: 20px;
                    border: 1px solid #666;
                    border-radius: 4px;
                    display: inline-block;
                    margin-right: 8px;
                    position: relative;
                    cursor: pointer;
                }
                &.active > span {
                    background-color: map-get($color, main);
                    border-color: map-get($color, main);
                    &::after {
                        content: '';
                        display: block;
                        width: 60%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 8px;
                        left: 7px;
                        transform: rotate(-45deg);
                    }
                    &::before {
                        content: '';
                        display: block;
                        width: 40%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 9px;
                        left: 3px;
                        transform: rotate(45deg);
                    }
                }
            }
            .pic {
                padding-right: 12px;
                @include media(640) {
                    display: none;
                }
            }
        }
        .box {
            flex-basis: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            @include media(1024) {
                flex-wrap: wrap;
                justify-content: flex-end;
            }
            .text {
                @include media(1024) {
                    flex-basis: 90%;
                    margin-bottom: 12px;
                }
                @include media(640) {
                    flex-basis: 100%;
                }
            }
            .list-control {
                display: flex;
                @include media(1024) {
                    flex-basis: 90%;
                }
                @include media(640) {
                    flex-basis: 100%;
                }
            }
            h3 {
                font-size: 1.8rem;
                margin: 0 0 8px;
            }
            p {
                margin: 0 0 8px;
                font-size: 1.4rem;
            }
            .price {
                color: map-get($color, main);
                font-weight: 600;
                &::before {
                    content: '$';
                    display: inline-block;
                    padding-right: 2px;
                }
            }
            .discount {
                color: map-get($color, aid);
                font-weight: 500;
            }
            button {
                border: 0;
                background: transparent;
                cursor: pointer;
                padding: 8px;
                margin-right: 12px;
                font-weight: 900;
                border-radius: 4px;
                &:last-child {
                    margin-right: 0;
                    padding: 0;
                }
            }
            .add {
                border: 1px solid map-get($color, main);
                color: map-get($color, main);
            }
            .checkout {
                background-color: map-get($color, main);
                color: #fff;
            }
            .delete {
                color: map-get($color, main);
                font-size: 1.8rem;
            }
        }
    }
}
</style>

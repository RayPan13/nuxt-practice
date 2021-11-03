<template>
    <nav :class="{ active }">
        <div class="close-btn" @click="closeNav"></div>
        <div class="logo">
            <fa :icon="['fas', 'ice-cream']" />
            COLOMBO
        </div>
        <ul>
            <li
                v-for="(obj, index) of navAry"
                :key="obj.txt"
                @mouseenter="menuEnter(index)"
                @mouseleave="menuLeave(index)"
                @click="openSubMenu(index)"
            >
                <nuxt-link :to="obj.to">{{ obj.txt }}</nuxt-link>
                <div v-if="obj.hasSub" class="arrow">
                    <fa :icon="['fas', 'angle-up']" class="icon" />
                </div>
                <ul v-if="obj.subMenu" :class="{ active: pageSubShow }">
                    <li v-for="subItem of obj.subMenu" :key="subItem.txt">
                        <nuxt-link :to="subItem.to">{{ subItem.txt }}</nuxt-link>
                    </li>
                </ul>
                <ul v-if="obj.subMenu" class="leftSubMenu" :class="{ open: leftSubMenuShow }">
                    <li v-for="subItem of obj.subMenu" :key="subItem.txt">
                        <nuxt-link :to="subItem.to">{{ subItem.txt }}</nuxt-link>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="tips">
            <div class="heart">
                <fa :icon="['far', 'heart']" />
                <span class="number">1</span>
            </div>
            <div class="cart">
                <fa :icon="['fas', 'shopping-cart']" />
                <span class="number">3</span>
            </div>
            <div class="price">$0.00</div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'LayoutNav',
    data() {
        return {
            navAry: [
                {
                    txt: 'HOME',
                    to: '/',
                    hasSub: false,
                },
                {
                    txt: 'SHOP',
                    to: '',
                    hasSub: false,
                },
                {
                    txt: 'PAGES',
                    to: '',
                    hasSub: true,
                    subMenu: [
                        {
                            txt: 'PRODUCT DETAILS',
                            to: '/details',
                        },
                        {
                            txt: 'FAVORITES ITEM',
                            to: '/favorites',
                        },
                    ],
                },
                {
                    txt: 'CONTACT',
                    to: '/contact',
                    hasSub: false,
                },
            ],
            pageSubShow: false,
            leftSubMenuShow: false,
        }
    },
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
    methods: {
        closeNav() {
            this.$store.dispatch('updateNavActive', false)
        },
        menuEnter(index) {
            if (index === 2) {
                this.pageSubShow = true
            }
        },
        menuLeave(index) {
            if (index === 2) {
                this.pageSubShow = false
            }
        },
        openSubMenu(index) {
            if (index === 2) {
                this.leftSubMenuShow = !this.leftSubMenuShow
            }
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/variable';
$pageSubMenuLength: 2;
nav {
    position: relative;
    display: flex;
    flex-basis: 70%;
    justify-content: space-between;
    align-items: center;
    color: #333;
    @include media(1024) {
        position: fixed;
        top: 0;
        left: -100%;
        width: 320px;
        height: 100vh;
        background-color: #f5f5f5;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 50px 0 0;
        box-sizing: border-box;
        transition: left 0.5s;
        z-index: 99;
        &.active {
            left: 0;
        }
    }
    .close-btn {
        display: none;
        width: 30px;
        height: 30px;
        cursor: pointer;
        @include media(1024) {
            display: block;
            position: absolute;
            top: 50px;
            right: 12px;
            cursor: pointer;
            &::before,
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 4px;
                background-color: map-get($color, main);
                position: absolute;
                top: 50%;
                left: 0;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(135deg);
            }
        }
    }
    .logo {
        display: none;
        @include media(1024) {
            display: flex;
            align-items: center;
            padding: 0 12px;
            margin-bottom: 48px;
        }
        svg {
            font-size: 4rem;
            margin-right: 4px;
            color: map-get($color, main);
        }
        font-size: 2.5rem;
        font-weight: 900;
    }
    ul {
        display: flex;
        padding: 0;
        margin: 0;
        @include media(1024) {
            width: 100%;
            flex-direction: column;
            order: 1;
        }
    }
    li {
        list-style: none;
        font-size: 1.6rem;
        font-weight: 600;
        margin-left: 12px;
        position: relative;
        display: flex;
        align-items: center;
        @include media(1024) {
            text-align: left;
            margin: 0;
            border-top: 1px solid #e1e1e1;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        &.login {
            display: none;
            @include media(1024) {
                display: block;
                color: map-get($color, main);
                border-bottom: 1px solid #e1e1e1;
            }
        }
        &:last-child {
            margin-left: 0;
        }
        .arrow {
            padding-left: 12px;
            transform: rotate(180deg);
        }
        a {
            padding: 12px;
            display: block;
            &:hover {
                color: map-get($color, main);
                & ~ .arrow {
                    color: map-get($color, main);
                }
            }
        }
        ul {
            position: absolute;
            top: 130%;
            left: 12px;
            margin: 0;
            padding: 12px;
            background-color: #fff;
            border-top: 2px solid map-get($color, main);
            width: 150%;
            flex-wrap: wrap;
            transition: opacity 0.5s, top 0.5s;
            opacity: 0;
            z-index: -9;
            @include media(1024) {
                display: none;
            }
            &.active {
                opacity: 1;
                top: 100%;
                z-index: 9;
            }
            &.leftSubMenu {
                display: none;
                @include media(1024) {
                    display: block;
                    opacity: 1;
                    position: relative;
                    top: 0;
                    left: 0;
                    background: transparent;
                    border-top: 0;
                    padding: 0 20px;
                    z-index: 1;
                    height: 0;
                    overflow: hidden;
                    transition: height 0.5s;
                    &.open {
                        height: calc(50 * $pageSubMenuLength) + px;
                    }
                }
            }
            li {
                flex-basis: 100%;
                list-style: none;
                margin: 0 0 12px;
                @include media(1024) {
                    margin: 0;
                    padding: 12px 0;
                }
                a {
                    width: 100%;
                    padding: 4px 0;
                    font-size: 1.4rem;
                }
            }
        }
    }
    .tips {
        display: flex;
        @include media(1024) {
            padding: 0 12px;
            margin-bottom: 24px;
            align-self: flex-end;
        }
        .heart,
        .cart,
        .price {
            font-size: 2rem;
            font-weight: 600;
            margin-right: 16px;
        }
        .price {
            margin-right: 0;
            font-size: 1.8rem;
        }
        .heart,
        .cart {
            position: relative;
            cursor: pointer;
            .number {
                display: inline-block;
                color: #fff;
                background-color: map-get($color, main);
                width: 16px;
                height: 16px;
                border-radius: 50%;
                line-height: 16px;
                text-align: center;
                font-size: 1rem;
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%);
            }
        }
    }
}
</style>

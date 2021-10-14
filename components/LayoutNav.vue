<template>
    <nav :class="{ active }">
        <div class="close-btn" @click="closeNav"></div>
        <div class="logo">
            <fa :icon="['fas', 'ice-cream']" />
            COLOMBO
        </div>
        <ul>
            <li>
                <a href="javascript:;">HOME</a>
            </li>
            <li>
                <a href="javascript:;">SHOP</a>
            </li>
            <li>
                <a href="javascript:;">PAGES</a>
            </li>
            <li>
                <a href="javascript:;">CONTACT</a>
            </li>
            <li class="login">
                <a href="javascript:;">LOG IN</a>
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
    computed: {
        active() {
            return this.$store.state.isNavActive
        },
    },
    methods: {
        closeNav() {
            this.$store.commit('toggleNav', false)
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/basic';
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
        font-size: 1.8rem;
        font-weight: 600;
        margin-left: 12px;
        @include media(1024) {
            text-align: left;
            margin: 0;
            border-top: 1px solid #e1e1e1;
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
        a {
            padding: 12px;
            display: block;
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

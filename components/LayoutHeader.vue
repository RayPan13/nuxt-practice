<template>
    <div id="header">
        <div class="info">
            <div class="container">
                <div class="left">
                    <div class="email">
                        <div class="icon">
                            <fa :icon="['far', 'envelope']" />
                        </div>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                    <div class="coupon">
                        <p>Free shipping for all order of $100</p>
                    </div>
                </div>
                <div class="right">
                    <div class="social">
                        <div class="fb icon">
                            <a href="javascript:;">fb</a>
                            <fa :icon="['fab', 'facebook-f']" />
                        </div>
                        <div class="twitter icon">
                            <a href="javascript:;">twitter</a>
                            <fa :icon="['fab', 'twitter']" />
                        </div>
                        <div class="ig icon">
                            <a href="javascript:;">ig</a>
                            <fa :icon="['fab', 'instagram']" />
                        </div>
                    </div>
                    <div class="login">
                        <a href="javascript:;">login</a>
                        <div class="icon">
                            <fa :icon="['far', 'user']" />
                        </div>
                        <span>Log In</span>
                    </div>
                </div>
            </div>
        </div>
        <header>
            <div class="container">
                <div class="logo">
                    <a href="javascript:;"></a>
                    <fa :icon="['fas', 'ice-cream']" />
                    COLOMBO
                </div>
                <layout-nav class="nav" />
                <div class="menu" @click="openNav">
                    <div class="line"></div>
                </div>
            </div>
            <layoutSecondHeader />
        </header>
    </div>
</template>

<script>
import layoutNav from '@/components/LayoutNav.vue'
import layoutSecondHeader from '@/components/LayoutSecondHeader.vue'

export default {
    name: 'LayoutHeader',
    components: {
        layoutNav,
        layoutSecondHeader,
    },
    methods: {
        openNav() {
            this.$store.commit('toggleNav', true)
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic';
.info {
    background-color: #f5f5f5;
    color: #333;
    padding: 12px 0;
    margin-bottom: 16px;
    @include media(640) {
        display: none;
    }
    .container {
        display: flex;
        justify-content: space-between;
    }
    .left {
        display: flex;
        .email {
            display: flex;
            align-items: center;
            color: #333;
            border-right: 1px solid #b2b2b2;
            padding-right: 12px;
            margin-right: 12px;
            .icon {
                margin-right: 4px;
                font-size: 1.4rem;
            }
            a {
                display: inline-block;
                font-size: 1.4rem;
                line-height: 1;
                font-weight: 300;
            }
        }
        .coupon {
            display: flex;
            align-items: center;
            p {
                margin: 0;
                font-size: 1.4rem;
                font-weight: 300;
            }
        }
    }
    .right {
        display: flex;
        a {
            font-size: 0;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .social {
            display: flex;
            border-right: 1px solid #b2b2b2;
            padding-right: 12px;
            margin-right: 12px;
            @include media(1020) {
                border-right: 0px;
                padding-right: 0;
                margin-right: 0;
            }
            .icon {
                position: relative;
                font-size: 1.6rem;
                padding: 4px 8px;
            }
        }
        .login {
            display: flex;
            align-items: center;
            position: relative;
            @include media(1020) {
                display: none;
            }
            .icon {
                font-size: 1.6rem;
                padding: 0 8px 0 0;
            }
            span {
                font-size: 1.4rem;
                font-weight: 300;
            }
        }
    }
}
header {
    margin-bottom: 8px;
    @include media(640) {
        margin-top: 16px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
    }
    .logo {
        display: flex;
        align-items: center;
        position: relative;
        font-size: 2.5rem;
        font-weight: 900;
        svg {
            font-size: 4rem;
            margin-right: 4px;
            color: map-get($color, main);
        }
        a {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
    .nav {
        display: flex;
        @include media(1024) {
            display: none;
        }
    }
    .menu {
        display: none;
        width: 24px;
        position: relative;
        cursor: pointer;
        @include media(1024) {
            display: block;
        }
        .line {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 100%;
            height: 4px;
            background-color: map-get($color, main);
            &::before,
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                background-color: map-get($color, main);
                position: absolute;
                left: 0;
            }
            &::before {
                top: 8px;
            }
            &::after {
                bottom: 8px;
            }
        }
    }
}
</style>

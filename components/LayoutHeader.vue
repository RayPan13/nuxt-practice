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
        <!-- <header>
            <div class="container">
                <div class="logo">
                    <fa :icon="['fas', 'ice-cream']" />
                    COLOMBO
                </div>
                <layout-nav />
            </div>
        </header> -->
    </div>
</template>

<script>
// import layoutNav from '@/components/LayoutNav.vue'

export default {
    name: 'LayoutHeader',
    // components: {
    //     layoutNav,
    // },
}
</script>

<style lang="scss" scoped>
@mixin media($max) {
    @media (max-width: $max + px) {
        @content;
    }
}
.info {
    background-color: #f5f5f5;
    color: #333;
    padding: 12px 0;
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
                color: inherit;
                text-decoration: none;
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
</style>

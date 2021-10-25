<template>
    <div class="container">
        <div class="product-details">
            <div class="images"></div>
            <div class="text">
                <div class="tips">IN STOCK</div>
                <h1>Chocolate</h1>
                <h2 class="price">30.00</h2>
                <p class="intro">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, quisquam. Eos quasi mollitia, ipsa
                    illo fugit sed natus corporis exercitationem facere a. Perspiciatis, soluta veritatis. Voluptatum
                    odit repudiandae porro illo?
                </p>
                <div class="control">
                    <div class="number">
                        <input type="number" placeholder="0" />
                        <button type="button" class="up">
                            <fa :icon="['fas', 'angle-up']" />
                        </button>
                        <button type="button" class="down">
                            <fa :icon="['fas', 'angle-down']" />
                        </button>
                    </div>
                    <button type="button" class="add-to-cart">
                        <fa :icon="['fas', 'shopping-cart']" />
                        <span>ADD TO CART</span>
                    </button>
                </div>
                <div class="note">
                    <div class="item">
                        <fa :icon="['fas', 'truck']" />
                        <span>Shipping all over the country</span>
                    </div>
                    <div class="item">
                        <fa :icon="['fas', 'shield-alt']" />
                        <span>Warranty</span>
                    </div>
                </div>
                <div class="socail">
                    <p>Share this product with your friends!</p>
                    <div class="box">
                        <div class="fb">
                            <a href="javascript:;">
                                <fa :icon="['fab', 'facebook-f']" />
                            </a>
                        </div>
                        <div class="twitter">
                            <a href="javascript:;">
                                <fa :icon="['fab', 'twitter']" />
                            </a>
                        </div>
                        <div class="whatsapp">
                            <a href="javascript:;">
                                <fa :icon="['fab', 'whatsapp']" />
                            </a>
                        </div>
                        <div class="link">
                            <a href="javascript:;">
                                <fa :icon="['fas', 'link']" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheProductDetails',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.product-details {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ddd;
    padding-bottom: 12px;
    margin-bottom: 24px;
    @include media(1024) {
        flex-wrap: wrap;
    }
    .images {
        flex-basis: 100%;
        @include media(1024) {
            margin-bottom: 24px;
        }
    }
    .text {
        flex-basis: 100%;
        padding-left: 24px;
        position: relative;
        @include media(1024) {
            padding-left: 0;
        }
    }
    .tips {
        background-color: map-get($color, aid);
        color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        right: 0;
        font-weight: 600;
    }
    h1 {
        font-size: 2.8rem;
        margin: 0 0 8px;
    }
    .price {
        font-size: 2rem;
        margin: 0 0 8px;
        color: map-get($color, main);
        &::before {
            content: '$';
            display: inline-block;
            padding-right: 4px;
        }
    }
    .intro {
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 1.5;
        margin: 0 0 16px;
    }
    .control {
        margin-bottom: 16px;
        display: flex;
        .number {
            width: 70px;
            position: relative;
            margin-right: 12px;
            input {
                border: 0;
                width: 100%;
                padding: 8px 0 8px 4px;
                font-size: 2rem;
                text-align: center;
                box-sizing: border-box;
                background-color: #ddd;
                outline: none;
            }
            button {
                position: absolute;
                right: 0;
                background-color: #ddd;
                color: map-get($color, main);
                border: 0;
                height: 50%;
                cursor: pointer;
                &.up {
                    top: 0;
                }
                &.down {
                    bottom: 0;
                }
            }
        }
        .add-to-cart {
            border: 0;
            border-radius: 4px;
            background-color: map-get($color, main);
            color: #fff;
            font-weight: 900;
            padding: 0 8px;
        }
    }
    .note {
        display: flex;
        margin-bottom: 16px;
        @include media(480) {
            flex-wrap: wrap;
        }
        svg {
            color: map-get($color, main);
            margin-right: 8px;
            font-size: 3rem;
        }
        span {
            font-size: 1.6rem;
            color: #555;
        }
        .item {
            margin-right: 12px;
            display: inline-flex;
            align-items: center;
            @include media(480) {
                flex-basis: 100%;
                margin-right: 0;
                margin-bottom: 12px;
            }
            &:last-child {
                margin-right: 0;
                margin-bottom: 0;
            }
        }
    }
    .socail {
        p {
            font-size: 1.4rem;
            margin: 0 0 4px;
            font-size: 1rem;
            color: #888;
        }
        .box {
            display: flex;
            div {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                background-color: map-get($color, main);
                margin-right: 8px;
                border-radius: 4px;
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
                font-size: 1.6rem;
            }
            .fb {
                background-color: #1877f2;
            }
            .twitter {
                background-color: #1da1f2;
            }
            .whatsapp {
                background-color: #25d366;
            }
        }
    }
}
</style>

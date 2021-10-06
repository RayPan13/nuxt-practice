<template>
    <nav>
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
}
</script>

<style lang="scss">
@import '@/assets/scss/basic';
nav {
    display: flex;
    flex-basis: 70%;
    justify-content: space-between;
    align-items: center;
    color: #333;
    ul {
        display: flex;
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
        font-size: 1.8rem;
        font-weight: 600;
        margin-left: 12px;
        &:last-child {
            margin-left: 0;
        }
        a {
            padding: 12px;
        }
    }
    .tips {
        display: flex;
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

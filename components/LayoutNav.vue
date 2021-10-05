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
            </div>
            <div class="cart">
                <fa :icon="['fas', 'shopping-cart']" />
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

<style></style>

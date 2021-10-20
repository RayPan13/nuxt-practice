<template>
    <div id="sentSuccessfully">
        <layout-header />
        <main>
            <div class="container">
                <h1>Message sent succesfully</h1>
                <div class="icon">
                    <fa :icon="['far', 'envelope']" />
                </div>
                <p>We will respond to you within 48 hours.</p>
                <p>Remember you have to be aware of the inbox or spam folder.</p>
                <button type="button">
                    <nuxt-link to="/">GO Back</nuxt-link>
                </button>
            </div>
        </main>
        <layout-footer />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
import layoutFooter from '@/components/LayoutFooter.vue'
export default {
    components: { layoutHeader, layoutFooter },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
#sentSuccessfully {
    .container {
        max-width: 500px;
        padding: 48px 24px;
    }
}
h1 {
    font-size: 2rem;
    margin: 0 0 24px;
}
.icon {
    width: 160px;
    height: 160px;
    background-color: map-get($color, main);
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8.5rem;
    margin: 0 auto 24px;
}
p {
    margin: 0 0 8px;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #757575;
}
button {
    border: 0;
    border-radius: 4px;
    padding: 12px 8px;
    margin: 24px auto 0;
    display: block;
    background-color: map-get($color, main);
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
}
</style>

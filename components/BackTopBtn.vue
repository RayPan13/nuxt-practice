<template>
    <div
        v-scroll-to="scrollToOption"
        class="back-top"
        :class="{ active: scrollTop > posittion }"
    >
        <fa :icon="['fas', 'chevron-up']" />
    </div>
</template>

<script>
export default {
    name: 'BackTopBtn',
    props: {
        scrollTop: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            scrollToOption: {
                el: '#app',
            },
            posittion: 500,
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/basic';
.back-top {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: map-get($color, main);
    color: #fff;
    font-size: 2rem;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    position: fixed;
    right: 20px;
    top: 100vh;
    z-index: 999;
    opacity: 0.9;
    transition: top 0.5s;
    &.active {
        top: 90vh;
    }
    &:hover {
        opacity: 1;
    }
}
</style>

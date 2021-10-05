<template>
    <div id="app">
        <layoutHeader />
    </div>
</template>

<script>
import layoutHeader from '@/components/LayoutHeader.vue'
export default {
    components: {
        layoutHeader,
    },
}
</script>

<style>
html {
    font-size: 10px;
    font-family: 'Noto Sans TC', sans-serif;
}
body {
    margin: 0;
    padding: 0;
}
main {
    display: block;
}
.container {
    width: 100%;
    padding: 0 10%;
    margin: 0 auto;
    max-width: 1200px;
    box-sizing: border-box;
    @include media(640) {
        padding: 0 5%;
    }
}
</style>

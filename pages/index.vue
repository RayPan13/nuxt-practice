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

<style lang="scss">
html {
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
}
body {
    margin: 0;
    padding: 0;
}
main {
    display: block;
}
a {
    color: inherit;
    text-decoration: none;
}
</style>

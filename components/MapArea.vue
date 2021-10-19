<template>
    <div class="container">
        <div class="map">
            <p>Google Map</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MapArea',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.map {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    width: 100%;
    height: 450px;
    margin-bottom: 24px;
    @include media(640) {
        height: 350px;
    }
    p {
        font-size: 1.8rem;
        color: #fff;
    }
}
</style>

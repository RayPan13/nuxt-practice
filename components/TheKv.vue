<template>
    <div class="kv">
        <div class="container">
            <CarouselFade />
            <div class="cards">
                <div class="card">
                    <img src="https://picsum.photos/379/180?random=4" alt="" />
                </div>
                <div class="card">
                    <img src="https://picsum.photos/379/180?random=5" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CarouselFade from '@/components/CarouselFade.vue'
export default {
    name: 'LayoutKv',
    components: {
        CarouselFade,
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.kv {
    width: 100%;
    margin-bottom: 24px;
    img {
        width: 100%;
        height: 100%;
    }
    .container {
        display: flex;
        @include media(1024) {
            flex-wrap: wrap;
        }
    }
    .cards {
        flex-basis: 30%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin: 0 12px 0 0;
        @include media(1024) {
            flex-basis: 100%;
            margin: 0 12px;
            flex-wrap: nowrap;
        }
        @include media(640) {
            flex-wrap: wrap;
        }
        .card {
            flex-basis: 100%;
            margin-bottom: 24px;
            @include media(1024) {
                margin-bottom: 0;
                margin-right: 24px;
            }
            @include media(640) {
                flex-basis: 100%;
                margin-right: 0;
                margin-bottom: 24px;
            }
            &:last-child {
                margin-bottom: 0;
                @include media(1024) {
                    margin-right: 0px;
                }
                @include media(640) {
                    margin-bottom: 0px;
                }
            }
        }
    }
}
</style>

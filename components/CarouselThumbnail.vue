<template>
    <div class="carousel">
        <div class="item">
            <div class="heart">
                <fa :icon="['far', 'heart']" />
            </div>
            <img src="https://picsum.photos/568/400?random=901" alt="" />
            <button class="prev">
                <fa :icon="['fas', 'angle-left']" />
            </button>
            <button class="next">
                <fa :icon="['fas', 'angle-right']" />
            </button>
        </div>
        <ul>
            <li v-for="obj of carousel" :key="obj.id">
                <img :src="obj.src" alt="" />
            </li>
        </ul>
    </div>
</template>
<script>
// const interval = 3000
export default {
    name: 'CarouselThumbnail',
    props: {
        carousel: {
            type: Array,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.carousel {
    width: 100%;
    position: relative;
    .item {
        position: relative;
        margin-bottom: 12px;
        &:hover {
            button {
                opacity: 1;
                &.prev {
                    left: 10px;
                }
                &.next {
                    right: 10px;
                }
            }
        }
        img {
            width: 100%;
        }
        button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 2rem;
            color: #fff;
            padding: 0;
            background: map-get($color, main);
            border: 0;
            border-radius: 8px;
            box-shadow: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            transition: opacity 1s, left 0.5s, right 0.5s;
            opacity: 0;
            @include media(640) {
                font-size: 1.5rem;
                width: 30px;
                height: 30px;
            }
            &.prev {
                left: -10%;
            }
            &.next {
                right: -10%;
            }
        }
        .heart {
            position: absolute;
            top: 8px;
            right: 8px;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
            z-index: 3;
            width: 30px;
            height: 30px;
            color: map-get($color, main);
            font-size: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg {
                transition: 0.5s;
            }
            &:hover {
                background-color: map-get($color, main);
                color: #fff;
                svg {
                    transform: rotate(360deg);
                }
            }
        }
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
    }
    li {
        list-style: none;
        flex-basis: 20%;
        margin: 0;
        padding: 0 12px 0 0;
        cursor: pointer;
        img {
            width: 100%;
        }
    }
}
</style>

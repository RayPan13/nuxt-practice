<template>
    <div class="carousel">
        <div class="view">
            <transition-group name="slide" tag="ul">
                <li v-for="obj of slideAry" :key="obj.id" class="item">
                    <img :src="carousel[obj.ref].src" />
                    <div class="txt">
                        <div class="button">{{ carousel[obj.ref].text }}</div>
                    </div>
                </li>
            </transition-group>
        </div>
        <button class="prev" @click="changeCarousel(-1)">
            <fa :icon="['fas', 'angle-left']" />
        </button>
        <button class="next" @click="changeCarousel(1)">
            <fa :icon="['fas', 'angle-right']" />
        </button>
    </div>
</template>

<script>
const interval = 3000
export default {
    name: 'CarouselSlide',
    data() {
        return {
            slideAry: [],
            carousel: [
                {
                    src: 'https://picsum.photos/200/200?random=6',
                    text: 'SPECIALS',
                },
                {
                    src: 'https://picsum.photos/200/200?random=7',
                    text: 'SHAKES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=8',
                    text: 'POPSICLES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=9',
                    text: 'CHOCOLATES',
                },
                {
                    src: 'https://picsum.photos/200/200?random=10',
                    text: 'CREAMS',
                },
                {
                    src: 'https://picsum.photos/200/200?random=11',
                    text: 'DULCE DE LECHE',
                },
                {
                    src: 'https://picsum.photos/200/200?random=12',
                    text: 'FRUIT',
                },
            ],
        }
    },
    mounted() {
        for (let i = 1; i < this.carousel.length * 2; i++) {
            const obj = {}
            obj.id = i
            obj.ref = i % this.carousel.length
            this.slideAry.push(obj)
        }
        setInterval(() => {
            this.changeCarousel(1)
        }, interval)
    },
    methods: {
        changeCarousel(direction) {
            if (direction > 0) {
                const temp = this.slideAry.shift()
                this.slideAry.push(temp)
            } else {
                const temp = this.slideAry.pop()
                this.slideAry.unshift(temp)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic.scss';
.carousel {
    flex-basis: 100%;
    position: relative;
    overflow: hidden;
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
    .view {
        overflow: hidden;
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        transform: translateX(-100%);
    }
    li {
        &:first-child,
        &:last-child {
            opacity: 0;
        }
    }
    .item {
        flex-basis: 23%;
        margin-right: 2%;
        flex-shrink: 0;
        border: 1px solid #d2d2d2;
        border-radius: 8px;
        overflow: hidden;
        @include media(1024) {
            flex-basis: 31%;
            margin-right: 2.3%;
        }
        @include media(640) {
            flex-basis: 48%;
            margin-right: 2%;
        }
        &:hover {
            border-color: map-get($color, main);
        }
        img {
            width: 100%;
        }
        .txt {
            padding: 12px;
            .button {
                background-color: map-get($color, main);
                color: #fff;
                font-size: 1.6rem;
                font-weight: 600;
                text-align: center;
                border: 0;
                border-radius: 8px;
                padding: 12px;
                width: 100%;
                box-sizing: border-box;
                cursor: pointer;
            }
        }
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
    .slide-move {
        transition: transform 0.8s;
    }
}
</style>

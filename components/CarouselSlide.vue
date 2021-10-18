<template>
    <div class="carousel">
        <div class="view">
            <transition-group name="slide" tag="ul">
                <li v-for="obj of slideAry" :key="obj.id">
                    <div class="box">
                        <img :src="carousel[obj.ref].src" />
                        <div class="txt">
                            <div class="button">
                                {{ carousel[obj.ref].text }}
                            </div>
                        </div>
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
            isDelay: false,
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
            if (!this.isDelay) {
                if (direction > 0) {
                    const temp = this.slideAry.shift()
                    this.slideAry.push(temp)
                } else {
                    const temp = this.slideAry.pop()
                    this.slideAry.unshift(temp)
                }
                this.isDelay = true
                setTimeout(() => {
                    this.isDelay = false
                }, 500)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.carousel {
    flex-basis: 100%;
    position: relative;
    overflow: hidden;
    &:hover {
        button {
            opacity: 1;
            &.prev {
                left: 24px;
            }
            &.next {
                right: 24px;
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
        align-items: center;
        transform: translateX(-100%);
        @include media(400) {
            transform: translateX(-300%);
        }
    }
    li {
        flex-basis: 25%;
        padding: 0 12px;
        flex-shrink: 0;
        box-sizing: border-box;
        overflow: hidden;
        @include media(1024) {
            flex-basis: 33.33%;
            padding: 0 12px;
        }
        @include media(640) {
            flex-basis: 50%;
            padding: 0 12px;
        }
        @include media(400) {
            flex-basis: 100%;
            padding: 0 12px;
        }
        &:hover {
            border-color: map-get($color, main);
        }
        &:first-child,
        &:last-child {
            opacity: 0;
        }
    }
    .box {
        border: 1px solid #e1e1e1;
        border-radius: 4px;
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
            padding: 12px 8px;
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
        }
    }
    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.6rem;
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

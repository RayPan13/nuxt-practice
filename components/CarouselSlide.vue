<template>
    <div class="carousel" @mouseenter="mEnter" @mouseleave="mLeave">
        <transition-group tag="div" :class="view" :name="transitionName">
            <div v-for="obj of carousel" :key="obj.id" class="item">
                <img :src="obj.src" />
                <div class="txt">
                    <div class="button">{{ obj.text }}</div>
                </div>
            </div>
        </transition-group>
        <button class="prev" @click="setShow(show - 1)">
            <fa :icon="['fas', 'angle-left']" />
        </button>
        <button class="next" @click="setShow(show + 1)">
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
            carousel: [
                {
                    id: 1,
                    src: 'https://picsum.photos/200/200?random=6',
                    text: 'SPECIALS',
                },
                {
                    id: 2,
                    src: 'https://picsum.photos/200/200?random=7',
                    text: 'SHAKES',
                },
                {
                    id: 3,
                    src: 'https://picsum.photos/200/200?random=8',
                    text: 'POPSICLES',
                },
                {
                    id: 4,
                    src: 'https://picsum.photos/200/200?random=9',
                    text: 'CHOCOLATES',
                },
                {
                    id: 5,
                    src: 'https://picsum.photos/200/200?random=10',
                    text: 'CREAMS',
                },
                {
                    id: 6,
                    src: 'https://picsum.photos/200/200?random=11',
                    text: 'DULCE DE LECHE',
                },
                {
                    id: 7,
                    src: 'https://picsum.photos/200/200?random=12',
                    text: 'FRUIT',
                },
            ],
            transitionName: 'right-in',
            show: 0,
            in: false,
            view: 'view',
        }
    },
    watch: {
        show(nVal) {
            const max = this.carousel.length - 1
            if (nVal < 0) {
                this.show = max
            }
            if (nVal > max) {
                this.show = 0
            }
        },
    },
    mounted() {
        setInterval(() => {
            this.nextShow()
        }, interval)
    },
    methods: {
        nextShow() {
            if (!this.in) {
                this.show++
            }
        },
        setShow(index) {
            this.show = index
        },
        mEnter() {
            this.in = true
        },
        mLeave() {
            this.in = false
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
        display: flex;
        overflow: hidden;
    }
    .item {
        flex-basis: 24%;
        margin-right: 1%;
        flex-shrink: 0;
        border: 1px solid #d2d2d2;
        border-radius: 8px;
        overflow: hidden;
        @include media(1024) {
            flex-basis: 32%;
            margin-right: 1.3%;
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
}
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 0.5s;
}
.fade-enter-to {
    opacity: 1;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-leave-to {
    opacity: 0;
}
</style>

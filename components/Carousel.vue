<template>
    <div class="carousel" @mouseenter="mEnter" @mouseleave="mLeave">
        <transition-group tag="div" name="fade">
            <div
                v-for="(obj, index) of carousel"
                v-show="index === show"
                :key="obj.id"
                class="item"
            >
                <img :src="obj.src" />
            </div>
        </transition-group>
        <button class="prev" @click="setShow(show - 1)">
            <fa :icon="['fas', 'angle-left']" />
        </button>
        <button class="next" @click="setShow(show + 1)">
            <fa :icon="['fas', 'angle-right']" />
        </button>
        <ul class="dots">
            <li
                v-for="(obj, index) of carousel"
                :key="obj.id"
                :class="{ active: index === show }"
                @click="setShow(index)"
            ></li>
        </ul>
    </div>
</template>

<script>
const interval = 3000
export default {
    name: 'Carousel',
    data() {
        return {
            carousel: [
                { id: 1, src: 'https://picsum.photos/379/180?random=1' },
                { id: 2, src: 'https://picsum.photos/379/180?random=2' },
                { id: 3, src: 'https://picsum.photos/379/180?random=3' },
                { id: 4, src: 'https://picsum.photos/379/180?random=4' },
            ],
            show: 0,
            in: false,
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
    flex-basis: 70%;
    margin-right: 24px;
    position: relative;
    overflow: hidden;
    @include media(1024) {
        flex-basis: 100%;
        padding-top: 47%;
        margin-right: 0;
        margin-bottom: 24px;
    }
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
    .item {
        position: absolute;
        width: 100%;
        top: 0;
        img {
            width: 100%;
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
    .dots {
        position: absolute;
        left: 0;
        bottom: 12px;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        li {
            list-style: none;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid map-get($color, main);
            margin: 0 4px;
            cursor: pointer;
            &.active {
                background-color: map-get($color, main);
            }
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

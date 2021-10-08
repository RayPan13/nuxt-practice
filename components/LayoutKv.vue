<template>
    <div class="kv">
        <div class="container">
            <div class="carousel" @mouseenter="mEnter" @mouseleave="mLeave">
                <transition-group tag="div" :name="transitionName">
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
const interval = 3000

export default {
    name: 'LayoutKv',
    data() {
        return {
            carousel: [
                { id: 1, src: 'https://picsum.photos/379/180?random=1' },
                { id: 2, src: 'https://picsum.photos/379/180?random=2' },
                { id: 3, src: 'https://picsum.photos/379/180?random=3' },
                { id: 4, src: 'https://picsum.photos/379/180?random=4' },
            ],
            show: 0,
            transitionName: 'left-in',
            in: false,
        }
    },
    watch: {
        show(nVal, oVal) {
            const max = this.carousel.length - 1
            if (nVal < 0) {
                this.transitionName = 'left-in'
                this.show = max
            }
            if (nVal > max) {
                this.transitionName = 'right-in'
                this.show = 0
            }
            if (oVal < 0) {
                this.transitionName = 'left-in'
            } else if (oVal > max) {
                this.transitionName = 'right-in'
            } else {
                this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
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
                left: -100%;
            }
            &.next {
                right: -100%;
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
    .cards {
        flex-basis: 30%;
        display: flex;
        flex-wrap: wrap;
        @include media(1024) {
            flex-basis: 100%;
            flex-wrap: nowrap;
        }
        @include media(640) {
            flex-wrap: wrap;
        }
        .card {
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
.right-in-enter {
    left: 100%;
}
.right-in-enter-active,
.right-in-leave-active,
.left-in-enter-active,
.left-in-leave-active {
    transition: left 0.5s;
}
.right-in-enter-to,
.right-in-leave {
    left: 0%;
}
.right-in-leave-to {
    left: -100%;
}

.left-in-enter {
    left: -100%;
}
.left-in-enter-to,
.left-in-leave {
    left: 0%;
}
.left-in-leave-to {
    left: 100%;
}
</style>

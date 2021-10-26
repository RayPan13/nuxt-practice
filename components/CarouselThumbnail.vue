<template>
    <div class="carousel">
        <div class="heart">
            <fa :icon="['far', 'heart']" />
        </div>
        <transition-group tag="div" :name="transitionName">
            <div v-for="(obj, index) of carousel" v-show="index === show" :key="obj.id" class="item">
                <img :src="obj.src" alt="" />
            </div>
        </transition-group>
        <button class="prev" :class="{ 'no-prev': show <= 0 }" @click="setShow(show - 1)">
            <fa :icon="['fas', 'angle-left']" />
        </button>
        <button class="next" :class="{ 'no-next': show >= carousel.length - 1 }" @click="setShow(show + 1)">
            <fa :icon="['fas', 'angle-right']" />
        </button>
        <ul>
            <li
                v-for="(obj, index) of carousel"
                :key="obj.id"
                :class="{ active: show === index }"
                @click="setShow(index)"
            >
                <img :src="obj.src" alt="" />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CarouselThumbnail',
    props: {
        carousel: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            show: 0,
            transitionName: 'left-in',
        }
    },
    watch: {
        show(nVal) {
            const max = this.carousel.length - 1
            if (nVal < 0) {
                this.show = 0
            }
            if (nVal > max) {
                this.show = max
            }
        },
    },
    methods: {
        setShow(index) {
            this.setTransition(index)
            this.show = index
        },
        setTransition(index) {
            if (index > this.show) {
                this.transitionName = 'left-in'
            } else {
                this.transitionName = 'right-in'
            }
        },
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.carousel {
    width: 100%;
    padding-top: 74%;
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
        overflow: hidden;
        @include media(640) {
            font-size: 1.5rem;
            width: 30px;
            height: 30px;
        }
        &.no-next,
        &.no-prev {
            cursor: auto;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(255, 255, 255, 0.3);
            }
        }
        &.prev {
            left: -10%;
        }
        &.next {
            right: -10%;
        }
    }
    .item {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        img {
            width: 100%;
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
        opacity: 0.4;
        &.active {
            opacity: 1;
        }
        img {
            width: 100%;
        }
    }
}
.left-in-enter {
    transform: translateX(100%);
}
.left-in-enter-active {
    transition: transform 0.5s;
}
.left-in-enter-to {
    transform: translateX(0);
}
.left-in-leave {
    transform: translateX(0);
}
.left-in-leave-active {
    transition: transform 0.5s;
}
.left-in-leave-to {
    transform: translateX(-100%);
}

.right-in-enter {
    transform: translateX(-100%);
}
.right-in-enter-active {
    transition: transform 0.5s;
}
.right-in-enter-to {
    transform: translateX(0);
}
.right-in-leave {
    transform: translateX(0);
}
.right-in-leave-active {
    transition: transform 0.5s;
}
.right-in-leave-to {
    transform: translateX(100%);
}
</style>

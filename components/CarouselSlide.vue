<template>
    <div class="carousel">
        <div class="view">
            <transition-group v-if="page === 'index'" name="slide" tag="ul" class="index">
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
            <transition-group v-if="page === 'detail'" name="slide" tag="ul" class="detail">
                <li v-for="obj of slideAry" :key="obj.id">
                    <div class="box">
                        <div class="heart">
                            <fa :icon="['far', 'heart']" />
                        </div>
                        <div class="pic">
                            <a href="javascript:;">{{ carousel[obj.ref].title }}</a>
                            <img :src="carousel[obj.ref].src" alt="" />
                        </div>
                        <div class="txt">
                            <h3>{{ carousel[obj.ref].title }}</h3>
                            <p class="price">{{ carousel[obj.ref].price }}</p>
                        </div>
                        <button type="button">
                            <fa :icon="['fas', 'shopping-cart']" />
                            <span>ADD TO CART</span>
                        </button>
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
    props: {
        carousel: {
            type: Array,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            slideAry: [],
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
    & > button {
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
.index {
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
}
.detail {
    .box {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding-bottom: 12px;
        position: relative;
        overflow: hidden;
        &:hover {
            border-color: map-get($color, main);
        }
    }
    .heart {
        position: absolute;
        top: 8px;
        right: 4px;
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
    .txt {
        padding: 0 5%;
    }
    .pic {
        margin-bottom: 8px;
        position: relative;
        a {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-size: 0;
        }
        img {
            width: 100%;
        }
    }
    h3 {
        margin: 0 0 8px;
        font-size: 1.6rem;
        font-weight: 300;
    }
    p {
        margin: 0 0 8px;
        font-size: 1.5rem;
        &::before {
            content: '$';
            display: inline-block;
        }
    }
    button {
        display: block;
        border: 0;
        border-radius: 4px;
        background-color: map-get($color, main);
        color: #fff;
        text-align: center;
        width: 90%;
        padding: 12px 0;
        margin: 0 auto;
        cursor: pointer;
        span {
            font-size: 1.4rem;
            font-weight: 600;
            padding-left: 4px;
        }
    }
}
</style>

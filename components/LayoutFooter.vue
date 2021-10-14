<template>
    <footer>
        <div class="container">
            <div class="item basic">
                <div class="logo">
                    <fa :icon="['fas', 'ice-cream']" />
                    COLOMBO
                </div>
                <ul>
                    <li>
                        <fa :icon="['fas', 'map-marker-alt']" />
                        Florida 888, CABA
                    </li>
                    <li>
                        <fa :icon="['fas', 'phone-alt']" />
                        +88 88.888.888
                    </li>
                    <li>
                        <fa :icon="['fas', 'envelope']" />
                        info@example.com
                    </li>
                </ul>
            </div>
            <div class="item links">
                <h4>Useful Links</h4>
                <div class="box">
                    <ul>
                        <li v-for="obj of links1" :key="obj.txt">
                            <fa :icon="['fas', 'long-arrow-alt-right']" />
                            <a :href="obj.url">{{ obj.txt }}</a>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="obj of links2" :key="obj.txt">
                            <fa :icon="['fas', 'long-arrow-alt-right']" />
                            <a :href="obj.url">{{ obj.txt }}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="item contact">
                <h4>Be the first to know it</h4>
                <p>
                    Subscribe to receive updates on our store and special offers
                </p>
                <div class="input-box">
                    <input type="text" placeholder="Enter your email" />
                    <button type="button">
                        <fa :icon="['fas', 'paper-plane']" />
                    </button>
                </div>
                <div class="social">
                    <div class="fb">
                        <a href="javascript:;">fb</a>
                        <fa :icon="['fab', 'facebook-f']" />
                    </div>
                    <div class="twitter">
                        <a href="javascript:;">twitter</a>
                        <fa :icon="['fab', 'twitter']" />
                    </div>
                    <div class="ig">
                        <a href="javascript:;">ig</a>
                        <fa :icon="['fab', 'instagram']" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'LayoutFooter',
    data() {
        return {
            links1: [
                { url: 'javascript:;', txt: 'Terms & Conditions' },
                { url: 'javascript:;', txt: 'New products' },
                { url: 'javascript:;', txt: 'Best sales' },
                { url: 'javascript:;', txt: 'Secure payment' },
                { url: 'javascript:;', txt: 'Services' },
                { url: 'javascript:;', txt: 'Delivery' },
            ],
            links2: [
                { url: 'javascript:;', txt: 'Legal Notice' },
                { url: 'javascript:;', txt: 'About us' },
                { url: 'javascript:;', txt: 'Contact us' },
                { url: 'javascript:;', txt: 'Stores' },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic.scss';
footer {
    background-color: #f5f5f5;
    padding: 72px 0;
    @include media(1024) {
        padding: 48px 0;
    }
    .container {
        display: flex;
        @include media(1024) {
            box-sizing: border-box;
            max-width: 700px;
            flex-wrap: wrap;
        }
        @include media(640) {
            max-width: 400px;
        }
    }
    .item {
        flex-basis: 100%;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        font-size: 1.4rem;
        margin-bottom: 8px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    h4 {
        font-size: 1.6rem;
        margin: 0 0 12px;
    }
    p {
        margin: 0 0 8px;
        font-size: 1.4rem;
        color: #333;
    }
    .basic {
        @include media(1024) {
            flex-basis: 50%;
            margin-bottom: 24px;
        }
        @include media(640) {
            flex-basis: 100%;
        }
        .logo {
            font-size: 3rem;
            font-weight: 600;
            margin-bottom: 12px;
            svg {
                color: map-get($color, main);
            }
        }
        li {
            font-size: 1.6rem;
            margin-bottom: 12px;
            padding-left: 8px;
            svg {
                padding-right: 4px;
            }
        }
    }
    .links {
        @include media(1024) {
            flex-basis: 50%;
            margin-bottom: 24px;
        }
        @include media(640) {
            flex-basis: 100%;
        }
        .box {
            display: flex;
            @include media(640) {
                margin-left: -20px;
            }
        }
        h4 {
            padding-left: 20px;
            @include media(640) {
                padding-left: 0;
            }
        }
        ul {
            margin-right: 12px;
        }
        li {
            font-weight: 400;
            &:hover {
                color: map-get($color, main);
                svg {
                    color: map-get($color, main);
                }
            }
            svg {
                padding-right: 4px;
                color: transparent;
            }
        }
    }
    .contact {
        .input-box {
            margin-bottom: 12px;
            display: flex;
        }
        input {
            border: 1px solid #ccc;
            padding: 8px 4px;
            font-size: 1.4rem;
            outline: none;
            flex-basis: calc(100% - 80px);
        }
        button {
            border: 0;
            background-color: map-get($color, main);
            font-size: 1.8rem;
            color: #fff;
            flex-basis: 80px;
            text-align: center;
            cursor: pointer;
        }
        .social {
            display: flex;
            a {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                font-size: 0;
            }
            div {
                position: relative;
                background-color: #fff;
                width: 50px;
                height: 50px;
                border: 1px solid #eee;
                border-radius: 50%;
                font-size: 2rem;
                text-align: center;
                line-height: 50px;
                margin-right: 8px;
                transition: background 0.5s;
                &:hover {
                    background-color: map-get($color, main);
                    color: #fff;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>

<template>
    <div class="container second">
        <div class="categories">
            <button type="button" @click="toogleCategories"></button>
            <fa :icon="['fas', 'bars']" />
            <span>CATEGORIES</span>
            <fa :icon="['fas', 'angle-up']" class="icon" />
            <ul>
                <li>
                    <button
                        :class="{ open: subMenu[0] }"
                        type="button"
                        @click="toogleSubMenu(0)"
                    ></button>
                    <div class="main">
                        <span>Chocolates</span>
                        <fa :icon="['fas', 'angle-up']" class="icon" />
                    </div>
                    <ul>
                        <li>Choculate</li>
                        <li>Chocolate with Raisins</li>
                    </ul>
                </li>
                <li>
                    <button
                        :class="{ open: subMenu[1] }"
                        type="button"
                        @click="toogleSubMenu(1)"
                    ></button>
                    <div class="main">
                        <span>Creams</span>
                        <fa :icon="['fas', 'angle-up']" class="icon" />
                    </div>
                    <ul>
                        <li>Swiss Cream</li>
                        <li>American Cream</li>
                    </ul>
                </li>
                <li>
                    <button
                        :class="{ open: subMenu[2] }"
                        type="button"
                        @click="toogleSubMenu(2)"
                    ></button>
                    <div class="main">
                        <span>Fruit</span>
                        <fa :icon="['fas', 'angle-up']" class="icon" />
                    </div>
                    <ul>
                        <li>Raspberry</li>
                        <li>Lemon</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="contact">
            <div class="icon">
                <fa :icon="['fas', 'phone-alt']" />
            </div>
            <div class="content">
                <p class="number">+88 88.888.888</p>
                <p class="support">support 24/7</p>
            </div>
        </div>
        <div class="search">
            <input type="text" placeholder="What do you need?" />
            <div class="icon">
                <fa :icon="['fas', 'search']" />
            </div>
            <button type="button">SEARCH</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutSecondHeader',
    data() {
        return {
            subMenu: [false, false, false],
        }
    },
    methods: {
        toogleCategories(e) {
            e.target.classList.toggle('open')
            this.closeSubMenu()
        },
        toogleSubMenu(idx) {
            this.closeSubMenu()
            this.subMenu[idx] = true
        },
        closeSubMenu() {
            this.subMenu = [false, false, false]
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/basic';
.second {
    @include media(1024) {
        flex-wrap: wrap;
    }
}
.categories {
    padding: 24px;
    border-radius: 4px;
    background-color: map-get($color, main);
    color: #fff;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    order: 1;
    position: relative;
    @include media(1024) {
        flex-basis: 50%;
    }
    @include media(640) {
        flex-basis: 100%;
    }
    button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        border: 0;
        cursor: pointer;
    }
    span {
        padding: 0 12px;
        font-weight: 500;
    }
    .icon {
        transform: rotate(180deg);
    }
    ul {
        margin: 0;
        padding: 0;
        position: absolute;
        left: 0;
        top: 200%;
        background-color: #fff;
        width: 100%;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: top 0.5s, opacity 0.5s;
        z-index: -9;
    }
    .open ~ ul {
        opacity: 1;
        top: 100%;
        z-index: 0;
    }
    li {
        list-style: none;
        color: #333;
        padding: 12px 12px 0;
        border-bottom: 1px solid #ececec;
        cursor: pointer;
        position: relative;
        button {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            border: 0;
            cursor: pointer;
            &:hover + .main {
                color: map-get($color, main);
            }
            &.open {
                & + .main .icon {
                    transform: rotate(0);
                }
                & ~ ul {
                    height: 88px;
                }
            }
        }
        .main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #333;
            padding-bottom: 12px;
            &:hover {
                color: map-get($color, main);
            }
            .icon {
                transition: transform 0.5s;
            }
            span {
                padding: 0;
            }
        }
        ul {
            position: relative;
            box-shadow: initial;
            margin-top: 0px;
            height: 0;
            overflow: hidden;
            transition: height 0.5s;
            li {
                margin: 0 -12px;
                padding-bottom: 12px;
                &:last-child {
                    border-bottom: 0;
                }
                &:hover {
                    color: map-get($color, main);
                }
            }
        }
    }
}
.search {
    flex: 2;
    display: flex;
    align-items: center;
    border: 1px solid #c2c2c2;
    border-radius: 8px;
    overflow: hidden;
    margin: 0 24px;
    order: 2;
    @include media(1024) {
        flex-basis: 100%;
        margin: 24px 0 0;
        order: 4;
    }
    .icon {
        font-size: 2.5rem;
        padding: 14px;
        order: -1;
    }
    input:focus ~ .icon {
        color: map-get($color, main);
    }
    input {
        width: calc(100% - 54px);
        font-size: 1.8rem;
        border: 0;
        outline: none;
        color: map-get($color, main);
    }
    button {
        color: #fff;
        background-color: map-get($color, main);
        padding: 24px 16px;
        border: 0;
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;
    }
}
.contact {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 3;
    @include media(640) {
        display: none;
    }
    .icon {
        background-color: #e5e5e5;
        border-radius: 50%;
        width: 52px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        svg {
            font-size: 1.8rem;
            color: map-get($color, main);
        }
    }
    .number {
        font-size: 1.6rem;
        font-weight: 900;
        color: #333;
        margin: 0 0 4px;
    }
    .support {
        margin: 0;
        font-size: 1.4rem;
        color: #a4a4a4;
    }
}
</style>

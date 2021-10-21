<template>
    <div class="favorites-list">
        <div class="control">
            <div class="options">
                <input id="selectAll" type="checkbox" />
                <span class="checkbox"></span>
                <label for="selectAll">Select All</label>
                <button type="button">DELETE</button>
            </div>
        </div>
        <ul>
            <li>
                <div class="item">
                    <div class="info">
                        <div class="checkbox">
                            <input type="checkbox" />
                        </div>
                        <div class="pic">
                            <img src="https://picsum.photos/140/140?random=201" alt="" />
                        </div>
                    </div>
                    <div class="box">
                        <div class="text">
                            <h3>Chocolate</h3>
                            <p class="price">10.00</p>
                            <p class="discount">
                                <fa :icon="['fas', 'fa-truck']"></fa>
                                <span>Free shipping</span>
                            </p>
                        </div>
                        <div class="list-control">
                            <button type="button" class="add">ADD TO CART</button>
                            <button type="button" class="checkout">ABUY NOW</button>
                            <button type="button" class="delete">
                                <fa :icon="['far', 'trash-alt']"></fa>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pages">
            <div class="prev">
                <fa :icon="['fas', 'angle-left']"></fa>
            </div>
            <div class="next">
                <fa :icon="['fas', 'angle-right']"></fa>
            </div>
            <ul>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutFavorites',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.favorites-list {
    width: 100%;
    margin-bottom: 24px;
    position: relative;
    .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid #aaa;
        .options {
            font-size: 1.6rem;
            display: flex;
            align-items: center;
            [type='checkbox'] {
                display: none;
                &:checked + span {
                    background-color: map-get($color, main);
                    border-color: map-get($color, main);
                    &::after {
                        content: '';
                        display: block;
                        width: 60%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 8px;
                        left: 7px;
                        transform: rotate(-45deg);
                    }
                    &::before {
                        content: '';
                        display: block;
                        width: 40%;
                        height: 3px;
                        background-color: #fff;
                        position: absolute;
                        top: 9px;
                        left: 3px;
                        transform: rotate(45deg);
                    }
                }
            }
            span {
                width: 20px;
                height: 20px;
                border: 1px solid #666;
                border-radius: 4px;
                display: inline-block;
                margin-right: 8px;
                position: relative;
            }
            label {
                color: #666;
                margin-right: 48px;
                user-select: none;
                cursor: pointer;
            }
            button {
                border: 0;
                border-radius: 4px;
                background-color: map-get($color, main);
                color: #fff;
                padding: 12px;
                font-weight: 600;
                font-size: 1.2rem;
                cursor: pointer;
            }
        }
    }
    .pages {
        display: inline-flex;
        position: absolute;
        top: 0;
        right: 0;
        @include media(640) {
            position: relative;
            right: -50%;
            transform: translateX(-50%);
        }
        ul {
            padding: 0 24px 0;
            margin: 0;
        }
        li {
            display: inline-block;
            list-style: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 4px;
            text-align: center;
            line-height: 30px;
            font-size: 1.4rem;
            user-select: none;
            cursor: pointer;
            color: map-get($color, main);
            &.active {
                color: #fff;
                background-color: map-get($color, main);
            }
        }
        .prev,
        .next {
            font-size: 1.8rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: map-get($color, main);
            cursor: pointer;
        }
        .prev {
            left: 0;
        }
        .next {
            right: 0;
        }
    }
}
</style>

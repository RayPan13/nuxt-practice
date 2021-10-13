<template>
    <div class="info">
        <div class="container">
            <div class="note">
                <div v-for="obj of data" :key="obj.id" class="item">
                    <div class="box">
                        <div class="icon">
                            <fa :icon="[obj.icon[0], obj.icon[1]]" />
                        </div>
                        <h4>{{ obj.title }}</h4>
                        <p>{{ obj.desc }}</p>
                    </div>
                </div>
            </div>
            <div class="banner">
                <img src="https://picsum.photos/1208/222?random=1001" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutInfo',
    data() {
        return {
            data: [
                {
                    id: 1,
                    icon: ['fas', 'truck'],
                    title: 'Free Shipping',
                    desc: 'For all order of $100',
                },
                {
                    id: 2,
                    icon: ['fas', 'money-bill-wave-alt'],
                    title: 'Money Back',
                    desc: 'Within 25 days',
                },
                {
                    id: 3,
                    icon: ['fas', 'shield-alt'],
                    title: 'Secure Payment',
                    desc: 'Secured payment',
                },
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/basic.scss';
.info {
    width: 100%;
    margin-bottom: 24px;
}
.note {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    @include media(640) {
        flex-wrap: wrap;
    }
    .item {
        flex-basis: 100%;
        padding: 0 12px;
        box-sizing: border-box;
        @include media(640) {
            padding: 0 0 24px;
            &:last-child {
                padding-bottom: 0;
            }
        }
        .box {
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            padding: 24px 0;
            text-align: center;
            cursor: pointer;
            &:hover {
                box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
            }
        }
        .icon {
            font-size: 4rem;
            color: map-get($color, main);
            margin-bottom: 8px;
            user-select: none;
        }
        h4 {
            font-size: 1.6rem;
            font-weight: 500;
            margin: 0 0 8px;
            user-select: none;
        }
        p {
            font-size: 1.4rem;
            margin: 0;
            user-select: none;
        }
    }
}
.banner {
    padding: 0 12px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    @include media(640) {
        display: none;
    }
    &::after {
        content: '';
        display: block;
        width: calc(100% - 24px);
        height: 4px;
        background-color: map-get($color, main);
        position: absolute;
        left: 12px;
        bottom: 0;
        border-radius: 0 0 4px 4px;
    }
    img {
        border-radius: 4px 4px 0 0;
        width: 100%;
    }
}
</style>

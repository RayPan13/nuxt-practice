<template>
    <div class="breadcrumb">
        <div class="container">
            <div class="box">
                <p>
                    <fa v-if="nowInfo.icon === 'contact'" :icon="['fas', 'mobile-alt']"></fa>
                    <fa v-if="nowInfo.icon === 'favorites'" :icon="['fas', 'heart']"></fa>
                    {{ nowInfo.txt }}
                </p>
                <ul>
                    <li v-for="obj of nowInfo.path" :key="obj.txt">
                        <nuxt-link :to="obj.to">
                            <fa v-if="obj.icon === 'home'" :icon="['fas', 'home']"></fa>
                            <span v-else>{{ obj.txt }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    props: {
        page: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            pages: {
                contact: {
                    icon: 'contact',
                    txt: 'contact',
                    path: [
                        {
                            to: '/',
                            icon: 'home',
                            txt: 'home',
                        },
                        {
                            to: '/contact',
                            icon: 'contact',
                            txt: 'contact',
                        },
                    ],
                },
                favorites: {
                    icon: 'favorites',
                    txt: 'favorites',
                    path: [
                        {
                            to: '/',
                            icon: 'home',
                            txt: 'home',
                        },
                        {
                            to: '/favorites',
                            icon: 'favorites',
                            txt: 'favorites',
                        },
                    ],
                },
            },
        }
    },
    computed: {
        nowInfo() {
            return this.pages[this.page]
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.breadcrumb {
    width: 100%;
    margin-bottom: 24px;
    .box {
        border-top: 2px solid map-get($color, main);
        background-color: #f5f5f5;
        text-align: center;
        padding: 12px 0;
    }
    p {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 0 0 8px;
        text-transform: capitalize;
        svg {
            padding-right: 4px;
            color: map-get($color, main);
        }
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    li {
        font-size: 1.4rem;
        list-style: none;
        margin-right: 0.5em;
        cursor: pointer;
        text-transform: capitalize;
        &:hover {
            color: map-get($color, main);
        }
        &::after {
            content: '>';
            display: inline-block;
            color: map-get($color, main);
            font-weight: 600;
            padding-left: 0.5em;
        }
        &:last-child {
            margin-right: 0;
            &::after {
                display: none;
            }
        }
    }
}
</style>

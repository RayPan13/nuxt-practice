<template>
    <div class="breadcrumb">
        <div class="container">
            <div class="box">
                <p>
                    <fa :icon="['fas', 'mobile-alt']"></fa>
                    Contact
                </p>
                <ul>
                    <li>
                        <fa :icon="['fas', 'home']"></fa>
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.breadcrumb {
    width: 100%;
    margin-bottom: 12px;
    .box {
        border-top: 2px solid map-get($color, main);
        background-color: #f5f5f5;
        text-align: center;
        padding: 8px 0;
    }
    p {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 0 0 8px;
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

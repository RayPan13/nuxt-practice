<template>
    <div class="container">
        <div class="info">
            <div class="item">
                <div class="icon">
                    <fa :icon="['fas', 'phone-alt']" />
                </div>
                <h3>Phone</h3>
                <p>+88-8-8888-8888</p>
            </div>
            <div class="item">
                <div class="icon">
                    <fa :icon="['fas', 'map-marker-alt']" />
                </div>
                <h3>Ubication</h3>
                <p>
                    Florida 537 Local 453 <br />
                    Buenos Aires
                </p>
            </div>
            <div class="item">
                <div class="icon">
                    <fa :icon="['far', 'clock']" />
                </div>
                <h3>Hours</h3>
                <p>
                    Monday to Friday <br />
                    10:00 to 23:00
                </p>
            </div>
            <div class="item">
                <div class="icon">
                    <fa :icon="['far', 'envelope']" />
                </div>
                <h3>Email Address</h3>
                <p>info@example.com</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutContact',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.info {
    display: flex;
    margin-bottom: 24px;
    @include media(960) {
        flex-wrap: wrap;
    }
}
.item {
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 12px;
    flex-basis: 100%;
    margin-right: 12px;
    box-sizing: border-box;
    &:last-child {
        margin-right: 0;
    }
    @include media(960) {
        flex-basis: calc(50% - 8px);
        margin: 0 12px 12px 0;
        &:nth-child(even) {
            margin-right: 0;
        }
    }
    @include media(480) {
        flex-basis: 100%;
        margin: 0 0 12px;
    }
    .icon {
        text-align: center;
        font-size: 6rem;
        color: map-get($color, main);
        margin: 0 0 8px;
    }
    h3 {
        text-align: center;
        margin: 0 0 8px;
        font-size: 1.8rem;
        font-weight: 600;
    }
    p {
        text-align: center;
        line-height: 1.5;
        font-size: 1.6rem;
        color: #9c9c9c;
        margin: 0;
    }
}
</style>

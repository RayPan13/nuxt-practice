<template>
    <div class="container">
        <div class="form">
            <h1>Leave A Message</h1>
            <form action="" method="post">
                <ul>
                    <li class="name">
                        <input type="text" name="name" placeholder="Your Name" />
                    </li>
                    <li class="email">
                        <input type="email" name="email" placeholder="Your Email Addres" />
                    </li>
                    <li class="big">
                        <textarea name="message" placeholder="Write your message here..."></textarea>
                    </li>
                    <li class="big">
                        <button type="button">SEND MESSAGE</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ContactForm',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable';
.form {
    text-align: center;
    h1 {
        font-size: 2.8rem;
        text-align: center;
        display: inline-block;
        margin: 0 auto;
        padding-bottom: 20px;
        &::after {
            content: '';
            display: block;
            width: 80%;
            height: 4px;
            margin: 12px auto 0;
            background-color: map-get($color, main);
        }
    }
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    }
    li {
        flex-basis: 50%;
        list-style: none;
        margin-bottom: 24px;
        @include media(768) {
            flex-basis: 100%;
        }
        &.name {
            text-align: left;
        }
        &.email {
            text-align: right;
        }
        &.big {
            flex-basis: 100%;
            text-align: center;
        }
        input,
        textarea {
            font-size: 1.6rem;
            padding: 8px;
            box-sizing: border-box;
            outline: none;
        }
        input {
            width: 98%;
            @include media(768) {
                width: 100%;
            }
        }
        textarea {
            width: 100%;
            height: 150px;
        }
        button {
            border: 0;
            border-radius: 4px;
            box-shadow: initial;
            color: #fff;
            font-size: 1.6rem;
            font-weight: 600;
            background-color: map-get($color, main);
            padding: 24px 32px;
            cursor: pointer;
        }
    }
}
</style>

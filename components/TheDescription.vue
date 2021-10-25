<template>
    <div class="container">
        <div class="description">
            <h2>Description</h2>
            <div class="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi blanditiis perferendis
                    laboriosam dolorem, aut mollitia alias. Libero debitis iste pariatur recusandae id, omnis dolore
                    explicabo inventore? Laboriosam, ullam voluptatem. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nihil, voluptatibus corporis aperiam vel inventore, dignissimos consectetur nulla
                    repellendus tenetur culpa ratione ipsam hic a illum. Mollitia libero expedita vero voluptatum!
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheDescription',
}
</script>
<style lang="scss" scoped>
.description {
    width: 100%;
    padding-bottom: 12px;
    margin-bottom: 24px;
    border-bottom: 1px solid #ddd;
    h2 {
        font-size: 2.5rem;
        margin: 0 0 12px;
    }
    p {
        margin: 0 0 8px;
        line-height: 1.5;
        font-size: 1.6rem;
        font-weight: 300;
    }
}
</style>

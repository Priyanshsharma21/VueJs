<template>
    <section class="nof">
        <h1>404 Not Found</h1>
        <p class="makemargin">Page Not Found Please Go Back To Home</p>
        <router-link to="/" class="makemargin">
            Home
        </router-link>
    </section>
</template>
<script>
export default {
    name : 'NotFound',
}
</script>
<style>
    .nof{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .makemargin{
        margin-top: 1rem;
    }
</style>
<template>
    <div class="loader">
        Loading...
    </div>
</template>



<script>
export default {
    name : 'Loader',
}
</script>



<style>
    .loader{
        display: flex;
        align-items: center;
        justify-content: center;
        color: coral;
        font-size: 3rem;
        font-family: 'Courier New', Courier, monospace;
        width: 100%;
        height: 60vh;
    }
</style>
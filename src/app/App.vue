<template>
    <div>
        <p>MiWay Insurance Ltd.</p>
        <counter></counter>
    </div>
</template>

<script>
    import Counter from './Counter.vue'
    export default {
        name: 'App',
        components: {
            Counter
        }
    }
</script>

<style lang="scss">
    @import './../assets/sass/app.scss'
</style>

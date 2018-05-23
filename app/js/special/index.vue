<template lang="html">
    <div>
        <nav-bar></nav-bar>
        <down></down>
    </div>
</template>

<script>
    import navBar from '../public/navbar.vue'
    import down from './download.vue'
export default {
        components: {
            navBar,
            down
        }
}
</script>

<style lang="scss">
</style>

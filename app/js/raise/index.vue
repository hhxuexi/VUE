<template lang="html">
    <div>
        <my-header></my-header>
        <w-slider></w-slider>
        <sign></sign>
        <In></In>
        <my-footer sClass="mfooter"></my-footer>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import myHeader from '../public/header.vue'
    import wSlider from './wSlider.vue'
    import sign from './sign.vue'
    import In from './in.vue'
    import myFooter from '../public/footer.vue'
    import navBar from '../public/navbar.vue'
export default {
        components: {
            myHeader,
            wSlider,
            sign,
            In,
            myFooter,
            navBar
        }
}
</script>

<style lang="scss">
.mfooter{
    margin-top: 0 !important;
    ul{
        li:first-child{
            display: none;
        }
    }
}
</style>

<template lang="html">
    <div>
        <my-header></my-header>
         <my-slider></my-slider>
         <finance></finance>
         <move1></move1>
        <my-footer sClass="mfooter"></my-footer>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import myHeader from '../public/header.vue'
    import mySlider from '../money/mSlider.vue'
    import finance from './finance.vue'
    import move1 from './move1.vue'
    import myFooter from '../public/footer.vue'
    import navBar from '../public/navbar.vue'
export default {
        components: {
            myHeader,
            mySlider,
            finance,
            move1,
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

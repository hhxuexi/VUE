<template lang="html">
    <div>
        <my-header></my-header>
         <my-slider></my-slider>
         <ada></ada>
         <money></money>
         <adb></adb>
         <finance></finance>
         <adc></adc>
        <my-footer sClass="mfooter"></my-footer>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import myHeader from '../public/header.vue'
    import mySlider from './mSlider.vue'
    import ada from './ada.vue'
    import money from './money.vue'
    import adb from './adb.vue'
    import finance from './finance.vue'
    import adc from './adc.vue'
    import myFooter from '../public/footer.vue'
    import navBar from '../public/navbar.vue'
export default {
        components: {
            myHeader,
            mySlider,
            ada,
            money,
            adb,
            finance,
            adc,
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

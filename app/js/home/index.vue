<template lang="html">
    <div>
        <my-header></my-header>
        <home-slider></home-slider>
        <my-new></my-new>
        <my-borrow></my-borrow>
        <my-money></my-money>
        <my-product></my-product>
        <Left></Left>
        <my-footer></my-footer>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
    import myHeader from '../public/header.vue'
    import homeSlider from './homeSlider.vue'
    import myNew from './new.vue'
    import myBorrow from './borrow.vue'
    import myMoney from './money.vue'
    import myProduct from './product.vue'
    import Left from './left.vue'
    import myFooter from '../public/footer.vue'
    import navBar from '../public/navbar.vue'
export default {
        components: {
            myHeader,
            homeSlider,
            myNew,
            myBorrow,
            myMoney,
            myProduct,
            Left,
            myFooter,
            navBar
        }
}
</script>

<style lang="scss">

</style>

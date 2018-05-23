<template lang="html">
   <section :class="[panelClass, pClass]">
        <h4>-{{ title }}-</h4>
        <slot></slot>
    </section>
</template>

<script>
export default {
    data() {
        return{
            panelClass: "panel"
        }
    },
    props: {
        pClass: {
            type: String,
            default: ""
        },
        title:{
            type: String,
            default: ""

        }
    }
}
</script>

<style lang="scss">
  @import '../../css/element.scss';
    .panel{
        @include panel;
        >h4{
            font-weight: 700;
        }
  }
</style>

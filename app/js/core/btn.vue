<template lang="html">
<div :class="[btnClass, bClass]">
    <slot></slot>
</div>
</template>

<script>
export default {
    data() {
        return {
            btnClass: "btn"
        }
    },
    props: {
        bClass: {
            type: String,
            default: ""
        }
    }

}
</script>

<style lang="scss">
@import "../../css/element.scss";
    .btn{
        @include btn;
    }
</style>

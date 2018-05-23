<template lang="html">
<panel title="广告b" :class="$style.panel">
    <section :class="$style.content">
          <img src="https://img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </section>
</panel>
</template>
<script>
    import panel from '../core/panel.vue'
    export default {
        components: {
            panel
        }
    }

</script>

<style lang="scss" module>
@import "../../css/element.scss";
    .panel{
        @include panel;
        margin-bottom: 0;
        >h4{
            display: none;
        }
        .content{
            img{
                display: block;
                width: 100%;
                height: 102px;

            }

        }
    }
</style>

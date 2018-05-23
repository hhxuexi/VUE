<template lang="html">
<panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
        <slider :items="items" :sClass="$style.slider"></slider>
    </section>
</panel>
</template>
<script>
    import panel from '../core/panel.vue'
    import slider from '../core/slider.vue'
    export default {
        components: {
            panel,
            slider
        },
        data() {
            return {
                items:[{
                    href: "home",
                    src: "https://img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
                }, {
                    href: "home",
                    src: "https://img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
                }]
            }
        }
    }

</script>

<style lang="scss" module>
@import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            display: none;
        }
        .content{
            .slider{
                margin-top: 100px;
                img {
                    width: 100%;
                }
            }

        }
    }
</style>

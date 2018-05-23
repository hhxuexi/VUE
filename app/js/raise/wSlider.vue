<template lang="html">
<panel title="滚动轮播" :class="$style.panel">
    <section :class="$style.content">
        <swiper :options="swiperOption">
            <swiper-slide>百万白条券免费送，速来领取！！<em>></em> </swiper-slide>
            <swiper-slide>签到领流量，1元500M！ <em>></em> </swiper-slide>
        </swiper>
    </section>
</panel>
</template>
<script>
    import panel from '../core/panel.vue'
    import {swiper, swiperSlide} from "vue-awesome-swiper"
    export default {
        components: {
            panel,
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true,
                    loop: true,
                    direction: 'vertical'
                }
            }
        }
    }

</script>
<style lang="scss">
    .swiper-container-vertical{
        height: 72px;
        overflow: hidden;
        .swiper-wrapper{
            height: 72px;
            line-height: 72px;
            .swiper-slide{
                font-family: PingFangSC-Medium;
                font-size: 26px;
                color: #666;
                em{
                    float: right;
                    color: #ddd;
                    margin-right: 20px;
                }
            }
        }
    }
</style>
<style lang="scss" module>
@import "../../css/element";
.panel{
    @include panel;
    >h4{
        display: none;
    }
    margin-top: 100px!important;
    .content{
        height: 72px;
        line-height: 72px;
        overflow: hidden;
        padding-left: 140px;
        background: url("https://m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png") left center no-repeat;
        background-size: 120px auto;
    }
}
</style>

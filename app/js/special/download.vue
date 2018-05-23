<template lang="html">
<panel title="每日签到" :class="$style.panel">
    <section :class="$style.content">
        <div></div>
        <p>立即下载</p>
        <span>copyright</span>
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
@import "../../css/element";
body, html{
    background: #ffffff;
}
.panel{
    @include panel;
    margin: 0;
    >h4{
        display: none;
    }
    .content{
        @include flex;
        justify-content: center;
        align-items: center;
        height: 1136px;
        width:100%;
        >div{
            background: url("https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png") center center no-repeat;
            width: 600px;
            height: 800px;
            background-size: 100% auto;
            margin-top: -100px;
        }
        >p{
            height: 100px;
            line-height: 100px;
            width: 471px;
            background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
            box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
            position: fixed;
            bottom: 130px;
            color: #ffffff;
            left:50%;
            text-align: center;
            margin-left: -235px;
            border-radius: 6px;
        }
        span{
            position: fixed;
            bottom: 16px;
            font-size: 24px;
            color: #eee;
            left:50%;
            text-align: center;
        }

    }
}
</style>

<template lang="html">
    <panel title="公司信息" :class="[$style.panel, sClass]">
        <ul :class="$style.content">
            <li>
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </li>
            <li>
                <div>
                    <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <p>客户端</p>
                </div>
                <div>
                     <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <p>触屏版</p>
                 </div>
                <div>
                     <img src="https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </panel>
</template>

<script>
    import panel from '../core/panel.vue'
export default {
    components: {
        panel
    },
    props: {
         sClass: {
             type: String,
             default: ""
         }
    }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
    .panel{
        @include panel;
        background: #f5f5f5;
        >h4{
            display: none;
        }
        .content{
            @include flex;
            padding-bottom: 100px;
            li{
                width:100%;
                >img{
                    width:100%;
                    height: 134px;
                }
                &:nth-child(2){
                    @include flex(row);
                    height: 186px;
                    box-sizing: border-box;
                    >div{
                        width: 33.333%;
                        text-align: center;
                        padding-top: 20px;
                        box-sizing: border-box;
                        img{
                            width:90px;
                            height:90px;
                        }
                        p{
                            font-size: 26px;
                            color: #999;
                            margin-top: 12px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                    }
                }
                &:nth-child(n+3){
                    text-align: center;
                    font-size: 24px;
                    color: #999;
                    height: 38px;
                    line-height: 38px;
                    border-top:1px solid #ddd;
                    padding:24px 0;
                }
            }

        }
    }
</style>

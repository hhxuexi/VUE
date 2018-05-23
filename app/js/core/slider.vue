<template lang="html">
    <section :class="sClass">
        <swiper :options="swiperOption" :not-next-tick="swiperOption.notNextTick">
            <swiper-slide v-for="item in items" :key="item.title">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
        components: {
            swiper,
            swiperSlide
        },
    props: {
        swiperOption: {
            type: Object,
            default() {
                return {
                    autoplay: {},
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    notNextTick: false,
                }
            }
        },
        sClass: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="scss">
  @import '~swiper/dist/css/swiper.css';
</style>

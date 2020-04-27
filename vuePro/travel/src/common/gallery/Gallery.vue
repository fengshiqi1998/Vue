<template>
    <div class="container">
        <div class="wrapper" @click="handleGalleryClick">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item, index) of imgs" :key="index">
                    <img class="gallery-img" :src="item" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallery-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>

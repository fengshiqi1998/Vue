<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-content">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      list: [{
        id: '001',
        imgUrl: '',
        desc: '景点门票'
      },
      {
        id: '002',
        imgUrl: '',
        desc: '滑雪季'
      },
      {
        id: '003',
        imgUrl: '',
        desc: '泡温泉'
      },
      {
        id: '004',
        imgUrl: '',
        desc: '动植园'
      },
      {
        id: '005',
        imgUrl: '',
        desc: '景点门票'
      },
      {
        id: '006',
        imgUrl: '',
        desc: '滑雪季'
      },
      {
        id: '007',
        imgUrl: '',
        desc: '泡温泉'
      },
      {
        id: '008',
        imgUrl: '',
        desc: '动植园'
      },
      {
        id: '009',
        imgUrl: '',
        desc: '一日游'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%
    .icons
        maring-top: .1rem
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%
            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: $darkTextColor
</style>

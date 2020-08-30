<template>
  <div>
    <!-- <el-row>
      <el-col :span="6">
        <el-button-group v-model="radioSelect">
          <el-button>新增章节</el-button>
          <el-button>批量导入</el-button>
        </el-button-group>
        <div class="infinite-list-wrapper" style="overflow:auto">
          <ul
            class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
            <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
          </ul>
          <p v-if="loading">加载中...</p>
          <p v-if="noMore">没有更多了</p>
        </div>
      </el-col>
      <el-col :span="18"></el-col>
    </el-row> -->
    <el-container>
      <el-header>
        <el-button-group v-model="radioSelect">
          <el-button>新增章节</el-button>
          <el-button>批量导入</el-button>
        </el-button-group>
      </el-header>
    </el-container>
    <el-container style="height: 500px">
      <el-aside width="210px">
        <el-menu v-for="(item, index) in menuList" :key="index">{{item}}</el-menu>
      </el-aside>
      <el-main>
        <el-form :model="form">
          <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="编写框">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <div style="width: 800px">
            <talk :talk-list="talkList"></talk>
          </div>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import talk from './talk'
export default {
  components: {
    talk
  },
  data () {
    return {
      radioSelect: 1,
      count: 10,
      loading: false,
      menuList: [],
      form: {
        title: '',
        content: ''
      },
      talkList: [
        {name: '11', content: '111', klass: 'left'},
        {name: '22', content: '222', klass: 'right'},
        {name: '33', content: '333', klass: 'left'},
        {name: '44', content: '444', klass: 'right'}
      ]
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  created () {
    for (let i = 0; i < 50; i++) {
      this.menuList.push(`${i}${i}${i}`)
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 1000)
    }
  }
}
</script>
<style scoped>

</style>

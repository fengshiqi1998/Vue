<template>
  <div>
    <el-radio-group v-model="radioVal">
      <el-radio-button label="work">作品设置</el-radio-button>
      <el-radio-button label="character">章节管理</el-radio-button>
    </el-radio-group>
    <component :is="radioVal"></component>
  </div>
</template>
<script>
import work from './work'
import character from './character'
export default {
  name: 'Home',
  components: {
    work,
    character
  },
  data () {
    return {
      radioVal: 'work'

    }
  }
}
</script>
<style scoped>

</style>

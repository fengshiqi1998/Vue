<template>
  <div class="navigator">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">我的案件</template>
        <router-link to="/FontPay">
          <el-menu-item index="1-1">提前入催案件</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">逾期案件</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">案件管理</template>
        <el-menu-item index="2-1">提前入催案件管理</el-menu-item>
        <el-menu-item index="2-2">逾期案件管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">统计管理</template>
        <el-menu-item index="3-1">提前入催绩效</el-menu-item>
        <el-menu-item index="3-2">逾期绩效</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">人员管理</el-menu-item>
      <el-submenu index="5">
        <template slot="title">配置管理</template>
        <el-menu-item index="5-1">详情页配置</el-menu-item>
        <el-menu-item index="5-2">短信模板配置</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Navigator',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>

</style>

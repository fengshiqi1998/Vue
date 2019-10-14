<template>
  <div>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        date1: '',
        date2: ''
      }
    }
  }
}
</script>
<style scoped>

</style>

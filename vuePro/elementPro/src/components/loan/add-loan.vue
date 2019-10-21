<template>
  <div v-loading="loading" class="handle-dialog">
    <el-form
    ref="addForm"
    label-width="80px"
    label-position="left"
    :rules="rules">
      <el-form label="支付类型" prop=""></el-form>
      <el-form label="" prop=""></el-form>
      <el-form label="" prop=""></el-form>
      <el-form label="" prop=""></el-form>
      <el-form label="" prop=""></el-form>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  }
}
</script>

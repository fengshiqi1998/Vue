<template>
  <div v-loading="loading" class="handle-dialog">
    <el-form
    ref="addForm"
    :model="form"
    label-width="120px"
    label-position="left"
    :rules="rules">
      <el-form-item label="支付渠道" prop="disburse_channel">
        <el-input v-model="form.disburse_channel" size="small"></el-input>
      </el-form-item>
      <el-form-item label="渠道状态" prop="channel_status">
        <el-select v-model="form.channel_status">
          <el-option key="0" value="0" label="开启"></el-option>
          <el-option key="1" value="1" label="关闭"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="支付渠道code" prop="code">
        <el-input v-model="form.code" size="small"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      rules: {
        disburse_channel: [{ required: true, message: '请输入支付渠道', trigger: 'blur' }],
        channel_status: [{ required: true, message: '请选择渠道状态', trigger: 'change' }],
        code: [{ required: true, message: '请输入code，格式为数字', trigger: 'blur' }]
      },
      form: {}
    }
  },
  methods: {
    resetForm () {

    }
  }
}
</script>

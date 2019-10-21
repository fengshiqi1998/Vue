<template>
  <el-form :inline="true" :model="formData" class="loan-switch-filter-wrap">
    <el-form-item label="支付方式">
      <el-select v-model="formData.loan_type" filterable size="small">
        <el-option value="" label="全部"></el-option>
        <el-option
        v-for="(item, key) in loanType"
        :key="key"
        :value="key"
        :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="支付状态">
      <el-select v-model="formData.loan_status" filterable size="small">
        <el-option value="" label="全部"></el-option>
        <el-option
        v-for="(item, key) in loanStatus"
        :key="key"
        :value="key"
        :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="支付渠道">
      <el-select v-model="formData.loan_channel" filterable size="small">
        <el-option value="" label="全部"></el-option>
        <el-option
        v-for="(item, key) in loanChannel"
        :key="key"
        :value="key"
        :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="渠道状态">
      <el-select v-model="formData.channel_status" filterable size="small">
        <el-option value="" label="全部"></el-option>
        <el-option
        v-for="(item, key) in channelStatus"
        :key="key"
        :value="key"
        :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" @click="$emit('searchForm')">查询</el-button>
      <el-button size="small" @click="$emit('addHandle')">新建</el-button>
      <el-button size="small" @click="$emit('modifyHandle')">修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    loanType: {},
    loanStatus: {},
    loanChannel: {},
    channelStatus: {}
  },
  data () {
    return {
      formData: {
        loan_type: '',
        loan_status: '',
        loan_channel: '',
        channel_status: ''
      }
    }
  },
  methods: {
    getFormData () {
      return this.formData
    },
    resetFields () {
      this.formData = {
        terminal_name: '',
        channel_type: '',
        status: '',
        operator: ''
      }
    }
  }
}
</script>
<style scoped>
  .el-input {
    width: 110px;
  }
  .el-select {
    width: 110px;
  }
</style>

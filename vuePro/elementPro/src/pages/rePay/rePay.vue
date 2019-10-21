<template>
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="银行" value="Bank"></el-option>
      <el-option label="商铺" value="Shop"></el-option>
    </el-select>
  </el-form-item>
  <component v-bind:is="form.region" ref="bank"></component>

  <!-- <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item> -->
  <!-- <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item> -->
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="active">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import Bank from './bank'
import Shop from './shop'
export default {
  name: 'RePay',
  components: {
    Bank,
    Shop
  },
  data () {
    return {
      currentCom: '',
      form: {
        name: '',
        region: 'Bank',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        active: [{required: true, message: 'input', trigger: 'blur'}]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.bank.func()
      console.log('submit!')
    },
    showMessageFromChild (data) {
      console.log(data)
    }
    // getFormData(data) {
    //   console.log(data);
    // }
  }
}
</script>
<style scoped>

</style>

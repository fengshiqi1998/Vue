<template>
  <el-form :rules="rules">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: ''
      },
      rules: {
        name: [{required: true, message: 'please input', trigger: 'blur'}]
      }
    }
  },
  methods: {
    // getFormData () {
    //   this.$emit('func',this.msg)
    // }
    func () {
      console.log('func')
    }
  }
}
</script>
<style scoped>

</style>

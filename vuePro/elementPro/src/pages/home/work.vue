<template>
  <div>

        <el-row>
          <el-col :span="6">
            <!-- 图片上传 -->
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :limit="1">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </el-col>
          <el-col :span="18">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="标签">
                <el-input v-model="inputTag"></el-input>
                <el-button>新增</el-button>
              </el-form-item>
              <el-form-item label="标签">
                <el-tag
                  :key="index"
                  v-for="(tag, index) in dynamicTags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(tag)">
                  {{tag}}
                </el-tag>
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
              </el-form-item>
          </el-form>
          </el-col>
        </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 图片上传
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      imgUrl: '', // 详情图片预览
      imgKey: '', // 上传图片的key
      // 表单
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      inputTag: '',
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    // 图片上传
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    // 上传成功后赋值
    uploadSuccess (res) {
      this.imgUrl = res.data.pic_url
      this.imgKey = res.data.pic_key
    },
    // 表单
    onSubmit () {
      console.log('submit!')
    },
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
<style scoped>
.el-select,
.el-input {
  width: 200px;
}
</style>

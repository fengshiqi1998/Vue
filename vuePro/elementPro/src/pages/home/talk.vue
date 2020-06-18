<template>
  <div class="content">
    <div :class="item.klass" v-for="(item, index) in talkList" :key="index">
      <span v-if="item.klass === 'left'">
        <el-image
          style="width: 50px; height: 50px"
          src="./pic1.jpg"
          fit="none"
          >
        </el-image>
        {{item.name}} {{item.content}}
        <el-popover>
          <el-button-group>
            <el-button>修改</el-button>
            <el-button :disabled="index === 0">上移</el-button>
            <el-button :disabled="index === talkList.length - 1">下移</el-button>
            <el-button>删除</el-button>
          </el-button-group>
          <el-button slot="reference">...</el-button>
        </el-popover>
      </span>
      <span v-else>
        <el-popover>
          <el-button-group>
            <el-button>修改</el-button>
            <el-button :disabled="index === 0">上移</el-button>
            <el-button :disabled="index === talkList.length - 1">下移</el-button>
            <el-button>删除</el-button>
          </el-button-group>
          <el-button slot="reference">...</el-button>
        </el-popover>
         {{item.content}} {{item.name}}
        <el-image
          style="width: 50px; height: 50px"
          src="./pic2.jpg"
          fit="none"
          >
        </el-image>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    talkList: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.content {
  width: 100%;
}
.left {
  width: 100%;
  float: left;
  text-align: left;
}
.right {
  width: 100%;
  float: right;
  text-align: right;
}
</style>

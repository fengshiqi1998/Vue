<template>
  <div class="common-filter-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FilterWrap'
};
</script>

<style lang="less" scoped>
.common-filter-wrap {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .item {
    display: flex;
    flex: 0 0 20%;
    margin: 0 10px 10px 0;
    .label {
      padding-right: 10px;
      line-height: 32px;
      flex-shrink: 0;
    }
  }
}
</style>

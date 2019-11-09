<template>
  <common-block class="loan-switch-app">
    <!-- 表单查询 -->
    <filter-wrap ref="filterWrap"
    :loan-type="loanType"
    :loan-status="loanStatus"
    :loan-channel="loanChannel"
    :channel-status="channelStatus"
    @searchForm="searchForm"
    @addChannel="addChannel"
    @modifyHandle="modifyHandle"></filter-wrap>
    <!-- 表格展示 -->
    <table-wrap></table-wrap>
    <!-- 翻页 -->
    <div class="pagination-mod">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentPage"
      >
      </el-pagination>
    </div>
    <el-dialog
      width="600px"
      :title="handleTitle"
      :visible="handleDialogShow"
      @close="closeHandleDiaolog"
    >
      <add-loan ref="handleRef"></add-loan>
    </el-dialog>
  </common-block>
</template>
<script>
import commonBlock from '@/components/common-block.vue'
import filterWrap from '@/components/loan/filter.vue'
import tableWrap from '@/components/loan/table.vue'
import addLoan from '@/components/loan/add-loan.vue'

export default {
  name: 'Loan',
  components: {
    commonBlock,
    filterWrap,
    tableWrap,
    addLoan
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 1,
      totalCount: 100,
      searchData: {},
      // modal
      handleType: '',
      handleTitle: '',
      handleDialogShow: false,
      modifyDialogShow: false,
      // fliter
      loanType: {1: 'skyPay', 2: 'dragonPay'},
      loanStatus: {1: '开启', 2: '关闭'},
      loanChannel: {1: 'sky', 2: 'dragon'},
      channelStatus: {1: '开启', 2: '关闭'}
      // table

    }
  },
  methods: {
    // 查询
    searchForm () {
      this.currentPage = 1
      this.searchData = this.$refs.filterWrap.getFormData()
      console.log(this.searchData)
      // this.getList()
    },
    handleSizeChange (val) {
      this.pageSize = val
      console.log(this.pageSize)
      // this.getList()
    },
    handleCurrentPage (val) {
      this.currentPage = val
      console.log(this.currentPage)
      // this.getList()
    },
    // 新建还款方式
    addChannel () {
      this.handleDialogShow = true
      this.handleType = 'add_channel'
      this.handleTitle = '新增渠道'
    },
    // 编辑还款方式
    editHandle (row) {
      this.handleDialogShow = true
      this.handleType = 'edit'
      this.handleTitle = 'Edit'
      this.selectRow = row
    },
    closeHandleDiaolog () {
      this.handleDialogShow = false
      this.$refs.handleRef.resetForm()
    },
    // 修改还款方式
    modifyHandle () {
      this.modifyDialogShow = true
    }
  }
}
</script>

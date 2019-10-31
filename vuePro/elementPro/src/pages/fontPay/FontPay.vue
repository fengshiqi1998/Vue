<template>
  <div class="fontPay">
    <div class="filters">
      <!-- <div class="filter-item">
        <label>订单编码</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>客户编码</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>手机号码</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>入库日期</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>调案日期</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>最后跟进时间</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>案件类型</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>是否到期</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>是否到到期前还款</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div>
      <div class="filter-item">
        <label>催收状态</label>
        <el-input placeholder="请输入内容" class="filter-input"></el-input>
      </div> -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clickFun">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <br />
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="type"
          label="产品类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="订单编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="期数">
        </el-table-column>
        <el-table-column
          prop="incomeDate"
          label="入库日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="客户姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="userNum"
          label="客户编码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号码"
          width="120">
        </el-table-column>
        <el-table-column
          prop="unpay"
          label="未还金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="案件状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="adjustStatus"
          label="调案状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="adjustDate"
          label="调案日期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="payStatus"
          label="催收状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="isTimeout"
          label="是否到期"
          width="120">
        </el-table-column>
        <el-table-column
          prop="payBeforeTime"
          label="是否到期前还款"
          width="120">
        </el-table-column>
        <el-table-column
          prop="lastConfirmTime"
          label="最后跟进时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="worker"
          label="催收员"
          width="120">
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
</template>
<script>
export default {
  name: 'FontPay',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        type: '',
        orderNum: '1234',
        date: '1/2',
        incomeDate: '20190101',
        userName: 'dasijo',
        userNum: '213123',
        phone: '12321',
        unpay: '100',
        status: '未还款',
        adjustStatus: '未调案',
        adjustDate: '20190101',
        payStatus: '承诺还款',
        isTimeout: '',
        payBeforeTime: '',
        lastConfirmTime: '20190101',
        worker: 'asdadad'
      },
      {
        type: '',
        orderNum: '1234',
        date: '1/2',
        incomeDate: '20190101',
        userName: 'dasijo',
        userNum: '213123',
        phone: '12321',
        unpay: '100',
        status: '未还款',
        adjustStatus: '未调案',
        adjustDate: '20190101',
        payStatus: '承诺还款',
        isTimeout: '',
        payBeforeTime: '',
        lastConfirmTime: '20190101',
        worker: 'asdadad'
      },
      {
        type: '',
        orderNum: '1234',
        date: '1/2',
        incomeDate: '20190101',
        userName: 'dasijo',
        userNum: '213123',
        phone: '12321',
        unpay: '100',
        status: '未还款',
        adjustStatus: '未调案',
        adjustDate: '20190101',
        payStatus: '承诺还款',
        isTimeout: '',
        payBeforeTime: '',
        lastConfirmTime: '20190101',
        worker: 'asdadad'
      },
      {
        type: '',
        orderNum: '1234',
        date: '1/2',
        incomeDate: '20190101',
        userName: 'dasijo',
        userNum: '213123',
        phone: '12321',
        unpay: '100',
        status: '未还款',
        adjustStatus: '未调案',
        adjustDate: '20190101',
        payStatus: '承诺还款',
        isTimeout: '',
        payBeforeTime: '',
        lastConfirmTime: '20190101',
        worker: 'asdadad'
      }]
    }
  },
  methods: {
    async clickFun () {
      let a = await this.$confirm('msg', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(() => 'err')
      console.log(a)
    }
  }
}
</script>
<style scoped>
  .filter-input {
    width: 100px;
    text-align: center;
  }
  .filter-item {
    float: left;
  }
</style>

//app.js
var base = require('./utils/basedata.js');
base.cityList();//城市列表
base.companyType(); // 公司性质
base.companySize(); // 公司规模
base.monthPay(); // 月薪
base.education();// 学历
base.workYear();// 工作经验
base.height();// 身高要求
base.demand();// 首页-要求
base.welfare();// 福利待遇
base.industry();//行业

const loginUrl = require('./config').loginUrl;
App({
  onLaunch: function () {
   
  },
  globalData: {
    token:'',
    role:0,
    company:null,//公司
    resume:null,//简历
    employee:null,//员工
   
  }
})
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

var socket = require('./socket.js');
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
    refreash:false,
    getHide:false
  },
  onShow: function (options) {
    if (!socket.getSocketStatus()){
      socket.init()
    }
    this.globalData.refreash = true;
    wx.reLaunch({
      url: '/page/tabBar/index/index',
    })

  },
  onHide: function (options){
    socket.close()
  },
})
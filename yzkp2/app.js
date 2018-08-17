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
    
   
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }  
      }
    })

    // 获取用户位置
    wx.getLocation({
      type: ' wgs84',   
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        //console.log(latitude, longitude)
        //将坐标传到后台 返回区域

      
      } 
    })
  },
  globalData: {
    token:'',
    role:0,
    resume:null,//简历
    employee:null,//员工
    userInfo: null//用户信息
  }
})
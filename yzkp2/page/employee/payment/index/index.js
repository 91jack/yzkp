// page/my/payment/index/index.js
// 员工查看薪酬
const payInformationUrl = require('../../../../config').payInformationUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    employee:null,
    payList:[],
    timeflag:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    this.payFn()
  },
  payFn:function(event){
    var _this = this;
    var timeflag = 0;
    if(event){
      timeflag = event.currentTarget.dataset.timeflag;
    }
    
    
    wx.request({//工资条
      url: payInformationUrl,
      data: {
        token: getApp().globalData.token,
        timeflag: timeflag
      },
      success: function (res) {
        if (res.data.status == 0) {
          _this.setData({
            payList: res.data.list,
            timeflag: timeflag,
            employee:res.data.obj
          })
        }
      }
    })
  }
})
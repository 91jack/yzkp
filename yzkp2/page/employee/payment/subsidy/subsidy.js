// page/my/payment/subsidy/subsidy.js
 // 补贴、扣除、奖励工资详情
const bonusOrdeductionUrl = require('../../../../config').bonusOrdeductionUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    payDetails:[],
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(options)
    if(options.type == 1){
      _this.setData({
        title:'补贴'
      })
    } else if (options.type == 2){
      _this.setData({
        title: '扣除'
      })
    }else{
      _this.setData({
        title: '奖励'
      })
    }
   
  
    wx.request({//工资详情
      url: bonusOrdeductionUrl,
      data: {
        token: getApp().globalData.token,
        type: options.type,
        payid: options.payid
      },
      success: function (res) {
        console.log(res.data.list)
        if (res.data.status == 0) {
          _this.setData({
            payDetails: res.data.list
          })

        }
      }
    })
  },


})
// page/common/noname/nomane.js
const praiseUrl = require('../../../config').praiseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    comment:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  getTextarea:function(e){
    this.setData({
      comment:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: praiseUrl,//匿名评价
      data: {
        id: _this.data.id,
        comment: _this.data.comment,
        token: getApp().globalData.token
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                })
              }, 1000)

            }
          })
        } else if (res.data.status == 1004) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  }
})
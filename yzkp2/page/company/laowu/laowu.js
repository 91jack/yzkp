// page/index/laowu/laowu.js
// 劳务派遣
const laowuUrl = require('../../../config').laowuUrl;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: laowuUrl,
      data: {
        token: getApp().globalData.token,
        id: options.id
      },
      success: function (res) {
       console.log(res)
       if(res.data.status==0){
        _this.setData({
          message:res.data.obj
        })
       }
      }
    })
  },
  /**拨打电话 */
  call:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.tel
    })
  }
})
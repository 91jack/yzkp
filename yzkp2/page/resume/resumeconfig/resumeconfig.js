// page/common/resume/resumeconfig/resumeconfig.js
const resumeOpenUrl = require('../../../config').resumeOpenUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  switch1Change:function(e){
    var open = e.detail.value?1:0;
    wx.request({
      url: resumeOpenUrl,
      data:{
        token: getApp().globalData.token,
        open: open
      },
      success:function(res){
        console.log(res)
        if(res.data.status == 0){
          wx.showToast({
            title: '设置成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  switch2Change: function (e) {
    var anonymous = e.detail.value ? 1 : 0;
    wx.request({
      url: resumeOpenUrl,
      data: {
        token: getApp().globalData.token,
        anonymous: anonymous
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: '设置成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
})
// pages/mine/opinion/opinion.js
//意见反馈
const suggestionAdd = require('../../../config').suggestionAdd;


Page({

  /**
   * 页面的初始数据
   */
  data: {
  content:''
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
  cancleBtn:function(){
    wx.navigateBack({
      delta: 2
    })
  },
  // 获取评价内容
  getTextarea:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  // 意见反馈
  submitBtn:function(){
    var _this = this;
    wx.request({
      url: suggestionAdd,//意见反馈
      data: {
        token: getApp().globalData.token,
        content:_this.data.content
      },
      success: function (res) {
       console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000,
            success:function(){
              setTimeout(function(){
                wx.navigateBack({
                  delta: 1
                })
              },1000)
             
            }
          })

        }else if(res.data.status == 1004){
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
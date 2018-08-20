// page/my/resume/jobexperience/jobexperience.js

const resumeUrl = require('../../../config').resumeUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumeId:'',
    work:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId:res.data
        })
        wx.request({
          url: resumeUrl,
          data: {
            token: getApp().globalData.token,
          },
          success: function (res) {
            console.log(res)
            that.setData({
              // baseInfo: res.data.obj.base,
              work: res.data.obj.work,
              // education: res.data.obj.education,
              // project: res.data.obj.project
            })
          }
        })
      },
    })
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
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
        resumeId: _this.data.resumeId
      },
      success: function (res) {
        console.log(res)
        // _this.setData({
        //   baseInfo: res.data.obj.base,
        //   work: res.data.obj.work,
        //   education: res.data.obj.education,
        //   project: res.data.obj.project
        // })
      }
    })
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
  
  }
})
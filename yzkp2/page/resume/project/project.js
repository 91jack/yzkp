// page/my/resume/project/project.js
const resumeUrl = require('../../../config').resumeUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project:[]
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
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          project: res.data.obj.project
        })
      }
    })
  },

  // 删除
  deleteItem: function (e) {
    console.log(e.currentTarget.dataset.idx)
  }
})
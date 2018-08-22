// page/my/resume/index/index.js
const resumeUrl = require('../../../config').resumeUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo: {},
    work: [],
    education: [],
    project: [],
    headImg: '',
    resumeName: '',
    resumeId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      resumeId:options.id
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
        _this.setData({
          baseInfo: res.data.obj.base,
          work: res.data.obj.work,
          education: res.data.obj.education,
          project: res.data.obj.project,
        })
      }
    })
  }
})
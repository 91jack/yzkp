// page/index/pages/newwork/joblist/joblist.js
const jobListUrl = require('../../../config').jobListUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: 1,//用户角色 1：求职者 2：员工 3：企业
    jobList: [],
    index: 0//选择的下拉列表下标
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 前往公司
  toCompanyDetail: function () {
    wx.navigateTo({
      url: '../jobdetails/jobdetails',
    })
  },
  onReady: function () {
    var _this = this;
    wx.request({
      url: jobListUrl,
      data: {
        openId: '1002'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值

      },
      success: function (res) {
        console.log(res.data.list)
        _this.setData({
          jobList: res.data.list
        })
      }
    })
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

  }
})
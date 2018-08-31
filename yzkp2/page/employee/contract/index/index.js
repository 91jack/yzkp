// page/employee/contract/index/index.js
const allInfoUrl = require('../../../../config').allInfoUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        wx.request({
          url: allInfoUrl,
          data: {
            token: getApp().globalData.token,
            id: res.data,
          },
          success: function (res) {
            var infoData = res.data.obj;
            if (res.data.status == 0) {
              that.setData({
                infoData: infoData
              })
            }
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

  },
  
})
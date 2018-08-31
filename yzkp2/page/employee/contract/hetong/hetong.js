// page/my/contract/step6/step6.js
const getContractUrl = require('../../../../config').getContractUrl;
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        wx.request({
          url: getContractUrl,
          data: {
            token: getApp().globalData.token,
            id: res.data
          },
          success: function (result) {
            if (result.data.status == 0) {
              _this.setData({
                content: result.data.obj.content
              })
              var aHrefHrefData = result.data.obj.content;
              WxParse.wxParse('aHrefHrefData', 'html', aHrefHrefData, _this);
            }
          }
        })

      },
    })

  },
  insertNodeTap: function (e) {
    var that = this;
    var insertData = '<div style="color:red;text-align:center;padding:20px;">我是一个被插入的元素</div>';
    WxParse.wxParse('insertData', 'html', insertData, that);
  },
  wxParseTagATap: function (e) {
    var href = e.currentTarget.dataset.src;
    //我们可以在这里进行一些路由处理
    if (href.indexOf(index) > 0) {
      // wx.redirectTo({
      //   url: '../index/index'
      // })

    }

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

  }
})
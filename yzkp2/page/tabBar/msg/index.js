// page/tabBar/msg/index.js
var socket = require('../../../socket.js');
const noticeUrl = require('../../../config').noticeUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatList:null,
    noticeList:null,
    chatSelected: true,
    noticeSelected: false
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
    var that = this
    setTimeout(function(){
      console.log(socket)
      if (socket.getChatList().list){
        that.setData({ chatList: socket.getChatList().list })
      }
    },500)    
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
    this.setData({ chatList: socket.getChatList().list }, function(){
      wx.stopPullDownRefresh();
    })  
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
  //
  switchChat: function(){
    this.setData({ chatSelected: true, noticeSelected: false, chatList: socket.getChatList().list})
  },

  switchNotice: function () {
    var _this = this;
    wx.request({
      url: noticeUrl,
      data: { token: getApp().globalData.token},
      success: function (res) {
        _this.setData({ chatSelected: false, noticeSelected: true, noticeList: res.data.list ? res.data.list : null })
      }
    })    
  }
})
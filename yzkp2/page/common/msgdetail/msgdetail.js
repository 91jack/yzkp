// page/common/msgdetail/msgdetail.js
const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;
var socket = require('../../../socket.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  
   

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
  getValue:function(e){
    console.log(e.detail.value)
    this.setData({
      input:e.detail.value
    })
  },
  sendBtn:function(){
    var data = {
      msgType: 2, 
      resumeId: 20, 
      companyId: 1, 
      content: this.data.input
    }
    socket.sendMessage(data);
  }
})
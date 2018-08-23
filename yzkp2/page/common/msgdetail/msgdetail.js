// page/common/msgdetail/msgdetail.js
const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;
var socket = require('../../../socket.js');

var msgList = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:'',
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var msg = {
      msgType: 2,
      resumeId: 24,
      companyId: 1,
      content: ''
    }
    socket.sendMessage(msg)
    socket.setFunc(this.getMsg)
    // this.setData({});
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
    var msg = {
      msgType: 0, 
      resumeId: 24, 
      companyId: 1, 
      content: this.data.input
    }
    socket.sendMessage(msg);
  },

  getMsg: function(data){
    var msg = JSON.parse(data);
    console.log(msg)

    if (msg.msgType==1){
      msgList = msg.list;
    }
    if(msg.msgType==2){
      msgList.push(msg.obj);  
    }

    this.setData({ list: msgList }, function(){
      wx.pageScrollTo({
        scrollTop: 99999999
      })
    })    
  }
})
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
   socket.init()


    //接收数据
    wx.onSocketMessage(function (res) {
      console.log(res)
      console.log(res.data)
      console.log(JSON.parse(res.data))
      wx.setStorage({
        key: 'chatList',
        data: JSON.parse(res.data),
      })
    })
    // 建立连接
    // wx.connectSocket({
    //   url: webSocketUrl + '?type=0&id=24',
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'GET',
    // })

    // //连接失败
    // wx.onSocketError(function () {
    //   console.log('websocket连接失败！');
    // })

    

    // var msg = {
    //   msgType: 2,
    //   resumeId: 24,
    //   companyId: 1,
    //   content:''
    // }
    // socket.sendMessage(msg)
   
  //  wx.getStorage({
  //    key: 'chatList',
  //    success: function(res) {
  //      console.log(res.data)
  //    },
  //  })

    // wx.onSocketMessage(function (res) {
    //   console.log(res)
    //   console.log(JSON.parse(res.data))
    // })
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
  }
})
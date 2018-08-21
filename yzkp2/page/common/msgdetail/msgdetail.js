// page/common/msgdetail/msgdetail.js
const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;
var socket = require('../../../socket.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
  
    socket.sendMessage();

    // // 建立连接
    // wx.connectSocket({
    //   url: webSocketUrl + '?type=0&id=20&head_img=1',
    //   data: {
    //     // type: 0,
    //     // id: 20
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'GET',
    // })

    // //接收数据
    // wx.onSocketMessage(function (res) {
    //   console.log(res)
    // })

    // //连接失败
    // wx.onSocketError(function () {
    //   console.log('websocket连接失败！');
    // })

    // wx.onSocketOpen(function () {
    //   console.log('WebSocket连接已打开！')
    //   console.log(options)
    //   var data = {
    //     msgType: 0, resumeId: 20, companyId: 1, content: '小程序就是渣渣'
    //   }

    //   wx.sendSocketMessage({data:JSON.stringify(data)})
    //   console.log(JSON.stringify(data))
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
  
  }
})
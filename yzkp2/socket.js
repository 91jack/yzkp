const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;

function init(){
  // 建立连接
  wx.connectSocket({
    url: webSocketUrl + '?type=0&id=24&head_img=2',
    data: {
      // type: 0,
      // id: 20
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
  })

  //接收数据
  wx.onSocketMessage(function (res) {
    console.log(res)
    wx.setStorage({
      key: 'chatList',
      data: res.data,
    })
  })

  //连接失败
  wx.onSocketError(function () {
    console.log('websocket连接失败！');
  })
}

function sendMessage(data){
 // wx.onSocketOpen(function () {
    // console.log('WebSocket连接已打开！')
    // console.log(options)
    // var data = {
    //   msgType: 0, resumeId: 20, companyId: 1, content: '小程序就是渣渣'
    // }

    wx.sendSocketMessage({ data: JSON.stringify(data) })
    console.log(JSON.stringify(data))
 // })
}

module.exports = {
  init:init,
  sendMessage: sendMessage
}
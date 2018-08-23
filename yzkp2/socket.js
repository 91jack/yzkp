const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;

// 
function init(){
  // 建立连接
  wx.connectSocket({
    url: webSocketUrl+'?type=0&id=24',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
  })



  //连接失败
  wx.onSocketError(function () {
    console.log('websocket连接失败！');
  })

  
}




function sendMessage(msg){
    wx.sendSocketMessage({data:JSON.stringify(msg)})
    console.log(msg)
}

module.exports = {
  init:init,
  sendMessage: sendMessage
}
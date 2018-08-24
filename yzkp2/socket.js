//线上
//const webSocketUrl = `wss://www.zgdrkj.cn/yzkp/websocket`;

const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;



var func = function(data){
};
// 
function init(){
  // 建立连接
  wx.getStorage({
    key: 'resumeId',
    success: function (res) {
      var resumeId = res.data;

      wx.connectSocket({
        url: webSocketUrl + '?type=0&id=' + resumeId,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'GET',
      })
      
    },
  })


  //接收数据
  wx.onSocketMessage(function (res) {
    func(res.data)
  })

  //连接失败
  wx.onSocketError(function () {
    console.log('websocket连接失败！');
  })
}

function setFunc(func_name){
  func = func_name;
}

function sendMessage(msg){
    wx.sendSocketMessage({data:JSON.stringify(msg)})
    console.log(msg)
}

module.exports = {
  init:init,
  sendMessage: sendMessage,
  setFunc: setFunc
}
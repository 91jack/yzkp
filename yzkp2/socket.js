//线上
//const webSocketUrl = `wss://www.zgdrkj.cn/yzkp/websocket`;

const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;



var func = function(data){
};
// 
function init(){
  wx.getStorage({
    key: 'role',
    success: function(res) {
      console.log(res)
      if(res.data == 0){
        // 建立连接
        wx.getStorage({
          key: 'resumeId',
          success: function (res) {
            var resumeId = res.data;
            console.log(resumeId)
            console.log('已连接')

            wx.connectSocket({
              url: webSocketUrl + '?type=0&id=' + resumeId,
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'GET',
            })

          },
        })
      }else if(res.data == 1){
        wx.getStorage({
          key: 'companyId',
          success: function (res) {
            var companyId = res.data;
            console.log(companyId)
            console.log('已连接')

            wx.connectSocket({
              url: webSocketUrl + '?type=0&id=' + companyId,
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'GET',
            })

          },
        })
      }
    }
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
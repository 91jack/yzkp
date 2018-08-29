//线上
//const webSocketUrl = `wss://www.zgdrkj.cn/yzkp/websocket`;

const webSocketUrl = `ws://192.168.0.107:8080/yzkp/websocket`;

var chatList;
var func;
var isConnect;
var noDida = true;
//  
function init(){
  console.log('socket init.....')
  wx.getStorage({
    key: 'role',
    success: function(result) {
      console.log(result)
      if (result.data == 0){
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
              success: function(){
                isConnect = true
                console.log('websocket已连接')
                if(noDida){
                  dida()
                }                
              }
            })
          },
        })
      } else if (result.data == 1){
        wx.getStorage({
          key: 'companyId',
          success: function (res) {
            var companyId = res.data;
            wx.connectSocket({
              url: webSocketUrl + '?type=1&id=' + companyId,
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'GET',
              success: function () {
                isConnect = true
                console.log('websocket已连接')
                if (noDida) {
                  dida()
                }   
              }
            })
          },
        })
      } else if (result.data == 2) {
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
              success: function () {
                isConnect = true
                console.log('websocket已连接')
                if (noDida) {
                  dida()
                }
              }
            })
          },
        })
      }
    }
  })


  //接收数据
  wx.onSocketMessage(function (res) {
    console.log(res);
    var data = JSON.parse(res.data)
    if (data.msgType==0){
      chatList = data;      
    }else{
      if(func){
        func(data)
      }      
    }
  })

  //连接失败
  wx.onSocketError(function () {
    isConnect = false;
    console.log('websocket连接失败！');
  })

  wx.onSocketClose(function(){
    isConnect = false;
    console.log('websocket已关闭')
  })
}

function setFunc(func_name){
  func = func_name;
}

function sendMessage(msg){
    wx.sendSocketMessage({data:JSON.stringify(msg)})
    console.log(msg)
}

function getChatList(){
  return chatList;
}

function getSocketStatus(){
  return isConnect;
}

function close(){
  wx.closeSocket()
}

//每隔20秒钟发送一次心跳，避免websocket连接因超时而自动断开
function dida(){
  noDida = false

  setInterval(function () { 
    if (isConnect){
      sendMessage({
        msgType: -1,
        resumeId: 0,
        companyId: 0,
        content: ''
      })
    }    
  }, 20000);
}

//检查登录用户是否有权限进行下一步操作
//比如：有简历才能聊天，才能投递
function checkRole(obj){
  wx.getStorage({
    key: 'role',
    success: function (res){
      if (res.data == 1 || res.data == 2) {  //求职者或者员工
        wx.getStorage({
          key: 'resumeId',
          fail: function (){ //没有简历
            wx.showModal({
              title:'温馨提示',
              content: '您还没有简历，请先创建简历',
              success: function (res) {
                if (res.confirm) {
                  wx.navigateTo({
                    url: '/page/resume/basicmsgedit/basicmsgedit'
                  })
                } else if (res.cancel) {
                  wx.switchTab({
                    url:'/page/tabBar/index/index'
                  })
                }
              }
            })
          }
        })
      } else {
        if(obj.success){
          obj.success()
        }
      }
    }
  })
}

module.exports = {
  init:init,
  sendMessage: sendMessage,
  setFunc: setFunc,
  getChatList: getChatList,
  getSocketStatus: getSocketStatus,
  close: close,
  checkRole: checkRole
}
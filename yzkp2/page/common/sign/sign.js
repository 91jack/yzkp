// page/common/sign/sign.js
// 上传图片
const uploadImgUrl = require('../../../config').uploadImgUrl;
// 签收工资
const signForWagesUrl = require('../../../config').signForWagesUrl;

// 确认合同信息
const signNameUrl = require('../../../config').signNameUrl;
// 登录
const loginUrl = require('../../../config').loginUrl;
var content = null;
var touchs = [];
var canvasw = 0;
var canvash = 0;

//获取系统信息
wx.getSystemInfo({
  success: function (res) {
    canvasw = res.windowWidth;
    canvash = canvasw * 9 / 6;
  },
}),

  Page({
    /**   
    * 页面的初始数据
    */
    data: {
      payid: '',
      id: ''//员工id
    },
    // 画布的触摸移动开始手势响应
    start: function (event) {
      let point = { x: event.changedTouches[0].x, y: event.changedTouches[0].y }
      touchs.push(point)
    },

    // 画布的触摸移动手势响应
    move: function (e) {
      let point = { x: e.touches[0].x, y: e.touches[0].y }
      touchs.push(point)
      if (touchs.length >= 2) {
        this.draw(touchs)
      }
    },

    // 画布的触摸移动结束手势响应
    end: function (e) {
      for (let i = 0; i < touchs.length; i++) {
        touchs.pop()
      }

    },

    // 画布的触摸取消响应
    cancel: function (e) {
      //console.log("触摸取消" + e)
    },

    // 画布的长按手势响应
    tap: function (e) {
      // console.log("长按手势" + e)
    },

    error: function (e) {
      // console.log("画布触摸错误" + e)
    },
    /**
    * 生命周期函数--监听页面加载
    */
    onLoad: function (options) {
      if (options.payid) {
        this.setData({
          payid: options.payid,
        })
      } else if (options.employeeId) {
        this.setData({
          id: options.employeeId
        })
      }


      //获得Canvas的上下文
      content = wx.createCanvasContext('firstCanvas')
      content.setFillStyle('#ccc')
      content.fillRect(0, 0, 705, 1090)
      content.draw()
      //设置线的颜色
      content.setStrokeStyle("#000")
      //设置线的宽度
      content.setLineWidth(3)
      //设置线两端端点样式更加圆润
      content.setLineCap('round')
      //设置两条线连接处更加圆润
      content.setLineJoin('round')
    },

    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {

    },

    //绘制
    draw: function (touchs) {
      let point1 = touchs[0]
      let point2 = touchs[1]
      touchs.shift()
      content.moveTo(point1.x, point1.y)
      content.lineTo(point2.x, point2.y)
      content.stroke()
      content.draw(true)
    },
    //清除操作
    clearClick: function () {
      //清除画布
      content.clearRect(0, 0, canvasw, canvash)
      content.draw(true)
    },
    //保存图片
    saveClick: function () {
      var _this = this
      wx.canvasToTempFilePath({
        canvasId: 'firstCanvas',

        success: function (res) {
          // console.log(res)
          wx.uploadFile({
            url: uploadImgUrl,
            filePath: res.tempFilePath,
            name: 'file',
            formData: {
              token: getApp().globalData.token,
              suffix: 'jpg'
            },
            success: function (res) {
              var imgUrl = JSON.parse(res.data).obj;
              if (_this.data.payid != '') {
                wx.request({
                  url: signForWagesUrl,
                  data: {
                    token: getApp().globalData.token,
                    payid: _this.data.payid,
                    sign_name: imgUrl
                  },
                  success: function (res) {
                    if (res.data.status == 0) {
                      wx.showToast({
                        title: '工资签收成功',
                        icon: 'success',
                        duration: 2000,
                        success: function () {
                          setTimeout(function () {
                            wx.navigateBack({
                              delta: 1
                            })
                          }, 2000)
                        }
                      })
                    }
                  }
                })
              } else if (_this.data.id != '') {
                wx.request({
                  url: signNameUrl,
                  data: {
                    token: getApp().globalData.token,
                    eid: _this.data.id,
                    sign_name: imgUrl
                  },
                  success: function (res) {
                    if (res.data.status == 0) {
                      wx.showToast({
                        title: '签字成功',
                        icon: 'success',
                        duration: 2000,
                        success: function () {
                          setTimeout(function () {
                            wx.switchTab({
                              url: '/page/tabBar/index/index',
                            })
                          }, 2000)
                          getApp().globalData.refreash = true;
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }
      })
    },
  })
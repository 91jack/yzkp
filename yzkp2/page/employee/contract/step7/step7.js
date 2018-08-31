// page/employee/contract/step7/step7.js
const allInfoUrl = require('../../../../config').allInfoUrl;

const phonecodeUrl = require('../../../../config').phonecodeUrl


// 获取验证码
const phoneCodeUrl = require('../../../../config').phoneCodeUrl;
// 验证码校验
const phoneCodeyzUrl = require('../../../../config').phoneCodeyzUrl;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:{},
    timer: '',
    timer: '',//定时器名字
    yzcode:'',
    incode:'',
    timerData:'获取验证码',
    countDownNum: 60,
    openInterVal:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        wx.request({
          url: allInfoUrl,
          data: {
            token: getApp().globalData.token,
            id: res.data,
          },
          success: function (res) {
            var infoData = res.data.obj;
            if(res.data.status==0){
              that.setData({
                infoData: infoData
              })
            }
          }
        })
      },
    })
    
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
  // 获取验证码
  getCode:function(event){
    var _this = this;
    wx.request({
      url: phoneCodeUrl,//获取验证码
      data:{
        phone:18502323596,
        token:getApp().globalData.token,
      },
      success:function(res){
        if(res.data.status == 0){
          _this.setData({
            yzcode:res.data.obj
          })

        }
      }
    })
    if (_this.data.openInterVal){
      this.setData({
        timerData: '5s',
      });
      var time = 5;
      var timer = setInterval(function () {
        time--;
        if (time > 0) {
          _this.setData({
            openInterVal: false,
            countDownNum: time,
            timerData: time + 's'
          })
        }
        if (time == 0) {
          clearInterval(timer);
          time = 60;
          _this.setData({
            openInterVal: true,
            timerData: '重新获取'
          })
        }
      }, 1000)
      timer;
    }
  },
  // 获取输入的验证码
  getIncode:function(e){
    this.setData({
      incode: e.detail.value
    })
  },
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: phoneCodeyzUrl,//验证验证码
      data: {
       token: getApp().globalData.token,
       phone:'18502323596',
       yzcode: _this.data.yzcode
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '信息验证成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '/page/common/sign/sign?employeeId=' + _this.data.infoData.id+'&id=',
                })
              }, 2000)
            }
          })
        }
      }
    })
  }
})
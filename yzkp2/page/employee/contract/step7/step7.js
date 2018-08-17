// page/employee/contract/step7/step7.js
const allInfoUrl = require('../../../../config').allInfoUrl;
const phonecodeUrl = require('../../../../config').phonecodeUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoData:{},
    timer: '',
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
            console.log(res)
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
    // 按钮倒计时
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


  submitBtn: function () {
    var _this = this;
    wx.request({
      url: regBankInfoUrl,
      data: {
        token: getApp().globalData.token,
        id: this.data.id,
        bank_account_no: this.data.bank_account_no,
        bank_no: this.data.bank_no,
        bank_name: this.data.bank_name
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: '信息提交成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '/page/employee/contract/step6/step6',
                })
              }, 2000)
            }
          })
        }
      }
    })
  }
})
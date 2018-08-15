// page/my/contract/step5/step5.js
const regBankInfoUrl = require('../../../../config').regBankInfoUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    bank_account_no:'',
    bank_no:'',
    bank_name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        that.setData({
          id: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  getValue:function(e){
    var i = e.currentTarget.dataset.idx;
    if(i=="0"){
      this.setData({
        bank_account_no:e.detail.value
      })
    } else if (i == "1") {
      this.setData({
        bank_no: e.detail.value
      })
    } else if (i == "2") {
      this.setData({
        bank_name: e.detail.value
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  submitBtn:function(){
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
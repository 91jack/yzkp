// page/my/contract/step4/step4.js
const regFiveRisksInfoUrl = require('../../../../config').regFiveRisksInfoUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    is_safe:'',
    safe_type:'',
    account_type:'',
    farmer_safe:'',
    is_fund:'',
    fund_no:'',
    fund_show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function(res) {
        that.setData({
          id:res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  fundShow:function(){
    this.setData({
      fund_show: false
    })
  },
  fundHide:function(){
    this.setData({
      fund_show: true
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  radioChange:function(e){
    var i = e.currentTarget.dataset.idx;
    if(i=='0'){
      if (e.detail.value=='是'){
        this.setData({
          is_safe:'1'
        })
      }else{
        this.setData({
          is_safe: '0'
        })
      }
    } else if (i == '1') {
      if (e.detail.value == '本地') {
        this.setData({
          safe_type: '1'
        })
      } else {
        this.setData({
          safe_type: '0'
        })
      }
    } else if (i == '2') {
      if (e.detail.value == '农村') {
        this.setData({
          account_type: '1'
        })
      } else {
        this.setData({
          account_type: '0'
        })
      }
    } else if (i == '3') {
      if (e.detail.value == '是') {
        this.setData({
          farmer_safe: '1'
        })
      } else {
        this.setData({
          farmer_safe: '0'
        })
      }
    } else if (i == '4') {
      if (e.detail.value == '是') {
        this.setData({
          is_fund: '1'
        })
      } else {
        this.setData({
          is_fund: '0'
        })
      }
    }
  },
  onShow: function () {
  
  },
  // 获取公积金卡号
  getNum:function(e){
    this.setData({
      fund_no:e.detail.value
    })
  },
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: regFiveRisksInfoUrl,
      data: {
        token: getApp().globalData.token,
        id: this.data.id,
        is_safe: this.data.is_safe,
        safe_type: this.data.safe_type,
        account_type: this.data.account_type,
        farmer_safe: this.data.farmer_safe,
        is_fund: this.data.is_fund,
        fund_no: this.data.fund_no,
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
                  url: '/page/employee/contract/step5/step5',
                })
              }, 2000)
            }
            
          })
        }
      }
    })
  }
})
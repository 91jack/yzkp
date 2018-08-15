// page/index/contract/step2/step2.js
// 员工基本信息填写
const regBaseInfoUrl = require('../../../config').regBaseInfoUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  submitBtn:function(){
    var _this = this;
    wx.request({
      url: regBaseInfoUrl,
      data: {
        token: getApp().globalData.token,
        name:'网米子',
        sex:'男',
        id_no:'5130291253658855555',
        education_level:'本科',
        mobile:'18502323596',
        link_mobile:'15023246443',
        address:'重庆市金开大道110号永固金鼎时代17楼4-6',
        department:'技术部',
        position:'程序员鼓励师',
        in_date:'2018-08-13'
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: '职位发布成功',
            icon: 'success',
            duration: 2000
          })
        
        }
      }
    })
  }





})
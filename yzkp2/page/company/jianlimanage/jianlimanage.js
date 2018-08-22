// page/job/jianlimanage/jianlimanage.js
// 企业简历管理
const companyResumeUrl = require('../../../config').companyResumeUrl;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['邀请面试','暂未接通','待定','不合适'],
    navShow:0,
    navBar:[false,true,true,true]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  zhiweimanage:function(){
    wx.navigateTo({
      url: '/page/company/jobmanage/jobmanage',
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
    var _this = this;
    wx.request({
      url: companyResumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)

      }
    })
  },
  chooseNav:function(e){
    console.log(e);
    var i = e.currentTarget.dataset.id;
    this.setData({
      navShow:i
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
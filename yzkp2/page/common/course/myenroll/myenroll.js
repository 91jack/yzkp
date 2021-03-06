// page/common/course/myenroll/myenroll.js
// 获取能力提升类型列表信息
const mycoursetUrl = require('../../../../config').mycoursetUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList:[],
    show:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: mycoursetUrl,//课程分类
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
       console.log(res)
        if (res.data.status == 0) {
          if(res.data.list.length>0){
            _this.setData({
              courseList: res.data.list,
              show:true
            })
          }else{
            _this.setData({
              show: false
            })

          }
        
        }

      }
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
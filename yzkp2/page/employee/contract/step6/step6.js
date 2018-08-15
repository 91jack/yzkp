// page/my/contract/step6/step6.js
const getContractUrl = require('../../../../config').getContractUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        wx.request({
          url: getContractUrl,
          data: {
            token: getApp().globalData.token,
            id: res.data
          },
          success: function (result) {
            if (result.data.status == 0) {
              _this.setData({
                content: result.data.obj.content
              })
              // wx.showToast({
              //   title: '信息提交成功',
              //   icon: 'success',
              //   duration: 2000,
              //   success: function () {
              //     setTimeout(function () {
              //       wx.navigateTo({
              //         url: '/page/employee/contract/step6/step6',
              //       })
              //     }, 2000)
              //   }
              // })
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
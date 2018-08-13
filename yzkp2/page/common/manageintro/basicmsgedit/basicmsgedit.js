// pages/mine/manageintro/basicmsgedit/basicmsgedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workexpressData:['无经验','一年'],
    workexpress:'',
    nowTypeData:['离职','在职','即将离职'],
    nowtype:'',
    pickerDefault:[false,false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 选择工作经验
  bindDateChangeExpress: function (e) {
    console.log(e);
    var i = e.detail.value;
    this.setData({
      workexpress: this.data.workexpressData[i],
      "pickerDefault[0]":true
    })
  },
  // 选择目前状态
  bindDateChangeType: function (e) {
    console.log(e);
    var i = e.detail.value;
    this.setData({
      nowtype: this.data.nowTypeData[i],
      "pickerDefault[1]": true      
    })
  },
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
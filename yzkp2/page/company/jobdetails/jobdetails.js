// page/job/newwork/jobdetails/jobdetails.js
const jobDetailsUrl = require('../../../config').jobDetailsUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobDetails:'',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],

    collectType: false,
    modalShow: true,
    modalData: [true, true, true]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var _this = this;

    wx.request({
      url: jobDetailsUrl,
      data: {
        token: getApp().globalData.token,
        id: options.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值

      },
      success: function (res) {
        console.log(res.data)
        _this.setData({
          jobDetails: res.data.obj
        })
      }
    })
  },
 
  //收藏
  collect: function () {
    console.log(this.data.collectType)
    wx.showToast({
      title: '已收藏',
      duration: 5000,
      mask: true

    })
    this.setData({
      collectType: true
    })
  },
  // 取消收藏
  collectYet: function () {
    var that = this;
    wx.showToast({
      title: '已取消',
      duration: 5000,
      mask: true
    })
    this.setData({
      collectType: false
    })
  },
  // 模态框显示与否
  call: function (e) {
    var i = Number(e.currentTarget.dataset.id)
    console.log(i);
    var show = "modalData[" + i + "]"
    this.setData({
      modalShow: false,
      [show]: false
    })
  },
  // 显示具体的模态框
  send: function (e) {
    var i = Number(e.currentTarget.dataset.id)
    console.log(i);
    var show = "modalData[" + i + "]"
    this.setData({
      modalShow: false,
      [show]: false
    })
  },
  // 隐藏模态框
  hidemodal: function () {
    console.log(11111111)
    for (var i = 0; i < this.data.modalData.length; i++) {
      var show = "modalData[" + i + "]";
      this.setData({
        [show]: true
      })
    }
    this.setData({
      modalShow: true
    })
  },
  //打电话
  callnumber: function () {
    wx.makePhoneCall({
      phoneNumber: '13110141797'
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
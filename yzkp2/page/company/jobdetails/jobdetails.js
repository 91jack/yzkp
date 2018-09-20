// page/job/newwork/jobdetails/jobdetails.js
const jobDetailsUrl = require('../../../config').jobDetailsUrl;

// 投递简历
const resumeDoudiUrl = require('../../../config').resumeDoudiUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobDetails: '',
    id: '',
    companyId: '',
    linkPhone: '',
    collectType: false,
    modalShow: true,
    modalData: [true, true, true],
    resumeId: '',
    footerShow:true,
    welfare:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
    var _this = this;
    if(options.id){
      this.setData({
        id: options.id
      })
    }

    if(options.type){
      if(options.type=='company'){
        this.setData({
          footerShow:false
        })
      }
     
    }

    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        _this.setData({
          resumeId: res.data
        })
      },
    })

    
  },

  // 模态框显示与否
  call: function(e) {
    console.log(e.currentTarget.dataset.phone);
    var i = Number(e.currentTarget.dataset.id)
    var j = Number(e.currentTarget.dataset.phone)
    if(j==1){
      var show = "modalData[" + i + "]"
      this.setData({
        modalShow: false,
        [show]: false
      })
    } else {
      wx.showToast({
        title: '请直接投递简历',
        icon: 'none',
        duration: 1500
      })
    }
  },

  // 显示具体的模态框
  send: function(e) {
    var _this = this;
    var i = Number(e.currentTarget.dataset.id)
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        _this.setData({
          resumeId:res.data
        })
      },
    })
    if (!this.data.resumeId) {
      wx.showModal({
        title: '温馨提示',
        content: '您还没有简历，请先创建简历',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/page/resume/index/index'
            })
          } else if (res.cancel) {
            if (getCurrentPages()[0].route == 'page/tabBar/msg/index') {
              wx.switchTab({
                url: '/page/tabBar/index/index'
              })
            } else {
              wx.navigateBack({
                delta: 1
              })
            }
          }
        }
      })
    }
    if (this.data.resumeId){
      wx.request({
        url: resumeDoudiUrl,
        data: {
          token: getApp().globalData.token,
          id: _this.data.id,
          companyId: _this.data.companyId
        },
        success: function (res) {
          if (res.data.status == 0) {
            wx.showToast({
              title: '简历投递成功',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
    }
  },
  // 隐藏模态框
  hidemodal: function() {
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
  callnumber: function(e) {
    wx.makePhoneCall({
      phoneNumber: this.data.linkPhone
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: jobDetailsUrl,
      data: {
        token: getApp().globalData.token,
        id: that.data.id
      },
      success: function (res) {
        if(res.data.status==0){
          var w = [];
          if (res.data.obj.welfare!=''){
            w = JSON.parse(res.data.obj.welfare)
          }
          console.log(res.data.obj.welfare)
          that.setData({
            jobDetails: res.data.obj,
            id: res.data.obj.id,
            companyId: res.data.obj.companyId,
            linkPhone: res.data.obj.linkPhone,
            welfare: w
          })
          console.log(that.data.welfare)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  chat: function() {
    var _this = this;
    wx.navigateTo({
      url: '/page/common/msgdetail/msgdetail?msgType=2&resumeId=' + _this.data.resumeId + '&companyId=' + _this.data.companyId,
    })
  }
})
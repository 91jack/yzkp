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
    resumeId: ''
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
    var i = Number(e.currentTarget.dataset.id)
    console.log(i);
    var show = "modalData[" + i + "]"
    this.setData({
      modalShow: false,
      [show]: false
    })
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
      var show = "modalData[" + i + "]"
      _this.setData({
        modalShow: false,
        [show]: false
      })
    }
    if (this.data.resumeId){
      wx.request({
        url: resumeDoudiUrl,
        data: {
          token: getApp().globalData.token,
          id: _this.data.resumeId,
          companyId: _this.data.companyId
        },
        success: function (res) {
          console.log(res)
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
  callnumber: function() {
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
        console.log(res.data)
        that.setData({
          jobDetails: res.data.obj,
          id: res.data.obj.id,
          companyId: res.data.obj.companyId,
          linkPhone: res.data.obj.linkPhone,
        })
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
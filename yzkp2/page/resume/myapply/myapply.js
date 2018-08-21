// page/common/resume/myapply/myapply.js
const resumeApplyUrl = require('../../../config').resumeApplyUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyList:null,
    headImg:'',
    resumeName:'',
    modalShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'headImg',
      success: function(res) {
        _this.setData({
          headImg:res.data
        })
      },
    })
    wx.getStorage({
      key: 'resumeName',
      success: function (res) {
        _this.setData({
          resumeName: res.data
        })
      },
    })
    wx.request({
      url: resumeApplyUrl,
      data: {
        token: getApp().globalData.token,
       
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          applyList:res.data.list
        })
      }
    })
  },
  //显示模态框
  callphone:function(){
    this.setData({
      modalShow: false,
    })
  }, 
  // 隐藏模态框
  hidemodal:function(){
    this.setData({
      modalShow: true,
    })
  },
  //打电话
  callnumber:function(e){
    console.log(e);
    wx.makePhoneCall({
      phoneNumber: String(e.currentTarget.dataset.number)
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
  
  }
})
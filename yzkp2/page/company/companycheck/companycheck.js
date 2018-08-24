// page/my/resume/index/index.js
const resumeUrl = require('../../../config').resumeUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo: {},
    work: [],
    education: [],
    project: [],
    headImg: '',
    resumeName: '',
    resumeId:'',
    companyId:'',
    modalShow:false,
    inviteShow:false,
    mobilShow:false,
    linkPhone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    _this.setData({
      resumeId:options.id
    });
    wx.getStorage({
      key: 'companyId',
      success: function(res) {
        _this.setData({
          companyId:res.data
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
    var _this = this;
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
        resumeId: _this.data.resumeId
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          baseInfo: res.data.obj.base,
          work: res.data.obj.work,
          education: res.data.obj.education,
          project: res.data.obj.project,
          linkPhone: res.data.obj.base.mobile
        })
      }
    })
  },
  call:function(){
    this.setData({
      modalShow: true,
      mobilShow:true
    })
  },
  callnumber:function(){
    wx.makePhoneCall({
      phoneNumber: this.data.linkPhone
    })
  },
  // 隐藏模态框
  hidemodal:function(){
    this.setData({
      modalShow:false,
      inviteShow:false,
      mobilShow:false
    })
  },
  // 邀请面试
  send:function(){
    this.setData({
      modalShow: true,
      inviteShow: true
    })
    var that =this;
    setTimeout(function(){
      that.setData({
        modalShow:false,
        inviteShow:false
      })
    },1000)
  },
  chat: function () {
    var _this = this;
    wx.navigateTo({
      url: '/page/common/msgdetail/msgdetail?msgType=2&resumeId=' + _this.data.resumeId + '&companyId=' + _this.data.companyId,
    })
  }
})
// page/my/resume/index/index.js
// 简历详情
const resumeUrl = require('../../../config').resumeUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo:{},
    work:[],
    education:[],
    project:[],
    headImg:'',
    resumeName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  noname:function(){
    wx.navigateTo({
      url: '/page/common/resume/cryptonym/cryptonym',
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
    var _this= this;
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)
        if (res.data.status==0){
          _this.setData({
            baseInfo: res.data.obj.base,
            work: res.data.obj.work,
            education: res.data.obj.education,
            project: res.data.obj.project,
          })
          wx.setStorage({
            key: 'resumeId',
            data: res.data.obj.base.id,
          })
          wx.setStorage({
            key: 'headImg',
            data: res.data.obj.base.headImg,
          })
          wx.setStorage({
            key: 'resumeName',
            data: res.data.obj.base.name,
          })
        }
      }
    })
  }
})
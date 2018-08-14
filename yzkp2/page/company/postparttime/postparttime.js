// page/job/postparttime/postparttime.js
// 发布兼职招聘
const addjobUrl = require('../../../config').addjobUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  postBtn: function () {
    var _this = this;
    wx.request({
      url: addjobUrl,
      data: {
        token: getApp().globalData.token,
        type: 1,
        name: '高级暖床师',
        num: 10,
        sex: '女',
        height: '170cm-185cm',
        pay: '15-20万',
        payType: '月结',
        linkMan: '找我啥事',
        linkPhone: 18502323596,
        attr: '招聘外包',
        beginDate:'08/09',
        endDate:'08/19',
        beginTime:'19:00',
        endTime:'24:00',
        city: '重庆',
        address: '重庆市金凯罗999号鬼门关',
        duty: '1、微信小程序菜单筛选;2、变量筛选程序源代码；3、小程序筛选功能开发qq号手机号筛选；4、微信筛选频繁短语的程序',
        tag: '本职位为Java高级开发工程师'

      },
      success: function (res) {
        console.log(res)

      }
    })
  }


})
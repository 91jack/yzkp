// page/job/postfulltime/postfulltime.js
// 发布全职招聘
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
  postBtn:function(){
    var _this = this;
    wx.request({
      url: addjobUrl,
      data: {
        token: getApp().globalData.token,
        type:0,
        name:'高级前端工程师',
        num:100,
        educationLevel:'博士',
        workYear:'15年',
        payType:'月结',
        pay: '1.5-2万',
        height:'170cm-185cm',
        sex:'性别不限',
        linkMan:'找我啥事',
        linkPhone:18502323596,
        attr:'普通职位',
        welfare:'五险一金,住房补贴,交通补贴',
        city:'重庆',
        address:'重庆市金凯罗999号鬼门关',
        duty: '1、微信小程序菜单筛选;2、变量筛选程序源代码；3、小程序筛选功能开发qq号手机号筛选；4、微信筛选频繁短语的程序',
        tag:'本职位为Java高级开发工程师'

      },
      success: function (res) {
        console.log(res)
       
      }
    })
  }

})
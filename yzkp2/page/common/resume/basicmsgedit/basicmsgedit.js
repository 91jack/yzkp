// page/my/resume/basicmsgedit/basicmsgedit.js
// 新增简历基本信息
addBasicUrl = require('../../../../config').addBasicUrl;

// 修改简历基本信息
editBasicUrl = require('../../../../config').editBasicUrl;

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
    console.log('-----------简历-------------')
    console.log(getApp().globalData.resume)
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
   * 新增简历基本信息
   */
  saveEdit:function(){
    wx.request({
      url: addBasicUrl,
      data: {
        token: getApp().globalData.token,
        name:'涛哥',
        sex:0,
        age:28,
        educationLevel:'本科',
        workYear:10,
        state:0,
        address:'渝北区',
        mobile:'18502323596',
        email:'2764132626@qq.com'
      },
      success: function (res) {
        console.log(res)
        
       
      }
    })
  }
})
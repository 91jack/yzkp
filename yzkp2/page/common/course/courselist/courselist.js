// page/index/course/courselist/courselist.js
//获取能力提升列表信息
const courseListUrl = require('../../../../config').courseListUrl;
// 获取能力提升类型列表信息
const courseTypeurl = require('../../../../config').courseTypeurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:1,
    search:'',
    courseType:null,
    courseList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: courseTypeurl,//课程分类
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res.data.list)
        if (res.data.status == 0) {
          _this.setData({
            courseType: res.data.list
          })
        }

      }
    })

    this.getCourseList();
    
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
  
  },
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
    this.getCourseList();
  },
  // 获取课程列表
  getCourseList:function(){
    var _this = this;
    wx.request({
      url: courseListUrl,//课程列表
      data: {
        token: getApp().globalData.token,
        type: _this.data.index,
        city: '重庆'
      },
      success: function (res) {
        if (res.data.status == 0) {
          _this.setData({
            courseList: res.data.list
          })
        }

      }
    })
  }
 
})
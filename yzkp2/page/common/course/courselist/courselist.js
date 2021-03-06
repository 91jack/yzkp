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
    index: 0,
    search: '',
    show: true,
    city: '',
    courseType: null,
    courseList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this;
    wx.getStorage({
      key: 'courseType',
      success: function(res) {
        _this.setData({
          courseType: res.data
        })
      },
    })
    wx.request({
      url: courseTypeurl,
      data:{
        token:getApp().globalData.token,
      },
      success:function(res){
        if(res.data.status==0){
        _this.setData({
            courseType:res.data.list
          })
        _this.getCourseList();
        }
      }
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
    if (this.data.courseType !=null){
      this.getCourseList()
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },
  toDetail:function(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    var isEnd = e.currentTarget.dataset.isend;
    if(isEnd!=1){
      wx.navigateTo({
        url: '/page/common/course/coursedetails/coursedetails?id='+id,
      })
    }else{
      wx.showToast({
        title: '报名已结束',
        icon:'none',
        duration:1000
      })
    }
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
    wx.setBackgroundTextStyle({
      textStyle: 'light', // 下拉背景字体、loading 图的样式为dark
    })
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
  getValue: function(e) {
    this.setData({
      search: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
    this.getCourseList();
  },
  // 获取课程列表
  getCourseList: function() {
    var _this = this;
    var courseType = _this.data.courseType;
    var index = _this.data.index;
    wx.request({
      url: courseListUrl, //课程列表
      data: {
        token: getApp().globalData.token,
        type: courseType[index].id,
        city: _this.data.city,
        search: _this.data.search,
        pageSize: 10,
        page: 1
      },
      success: function(res) {
        if (res.data.status == 0) {
          if (res.data.list.length > 0) {
            _this.setData({
              courseList: res.data.list,
              show: true
            })
          } else {
            _this.setData({
              show: false
            })
          }
        }
      }
    })
  }
})
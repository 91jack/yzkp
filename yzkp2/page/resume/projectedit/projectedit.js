// page/my/resume/projectedit/projectedit.js
const resumeUrl = require('../../../config').resumeUrl;
const addProjectUrl = require('../../../config').addProjectUrl;
const editProjectUrl = require('../../../config').editProjectUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getInDate: '请选择',
    inDate:'',
    inHide: false,
    getOutDate: '请选择',
    outDate:'',
    outHide: false,
    conpanyName: '',
    partment: '',
    job: '',
    resumeId: '',
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      this.setData({
        id: options.id
      })
    }
    var that = this;
    wx.getStorage({
      key: 'resumeId',
      success: function (res) {
        that.setData({
          resumeId: res.data
        })
      },
    });
    if (that.data.id == options.id) {
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          console.log(res)
          var bigData = res.data.obj.project;
          for (var i = 0; i < bigData.length; i++) {
            if (bigData[i].id == options.id) {
              that.setData({
                inDate: bigData[i].beginDate,
                outDate: bigData[i].endDate,
                conpanyName: bigData[i].name,
                partment: bigData[i].role,
                job: bigData[i].tag,
              })
            }
          }
        }
      })
    }
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
  bindDateChange:function(e){
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    if(i==0){   //项目开始时间
      this.setData({
        inDate:e.detail.value,
        inHide:true
      })
      console.log(this.data.inDate)
    }else if(i==1){
      this.setData({
        outDate:e.detail.value,
        outHide:true
      })
    }
  },
  getValue:function(e){
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    if(i==0){  //项目名称
      this.setData({
        conpanyName: e.detail.value
      })
    } else if (i == 1) {  //项目角色
      this.setData({
        partment: e.detail.value
      })
    } else if (i == 2) {  //项目介绍
      this.setData({
        job: e.detail.value
      })
    }
  },
  subBtn:function(){
    var _this = this;
    if (Boolean(_this.data.id)) {
      wx.request({
        url: editProjectUrl,
        data: {
          token: getApp().globalData.token,
          id: _this.data.id,
          beginDate: _this.data.inDate,
          endDate: _this.data.outDate,
          role: _this.data.partment,
          tag: _this.data.job,
          name: _this.data.conpanyName
        },
        success: function (res) {
          console.log(res)
          if (res.status == 0) {
            wx.navigateTo({
              url: '/page/resume/index/index',
            })
          }
        }
      })
    } else {
      wx.request({
        url: addProjectUrl,
        data: {
          token: getApp().globalData.token,
          resumeId: _this.data.resumeId,
          beginDate: _this.data.inDate,
          endDate: _this.data.outDate,
          role: _this.data.partment,
          tag: _this.data.job,
          name: _this.data.conpanyName
        },
        success: function (res) {
          console.log(res)
          if(res.status==0){
            wx.navigateTo({
              url: '/page/resume/index/index',
            })
          }
        }
      })
    }
  }
})
// page/my/resume/jobintensionedit/jobintensionedit.js
const editJobintensionUrl = require('../../../config').editJobintensionUrl;
const resumeUrl = require('../../../config').resumeUrl;
Page({
  /**
   * 页面的初始数据
   */
  params:{},
  data: {
    monthPayArr:[],
    monthPayIndex:0,
    monthPayHide:false,
    id:'',			
    workName:'',		
    workPay: ['请选择',''],							
    industry:'',
    city:'', 
    resumeId:'',
    oldPay:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    var that = this;
    wx.getStorage({
      key: 'monthPayArr',
      success: function(res) {
        that.setData({
          monthPayArr:res.data
        })
      },
    }),
    wx.getStorage({
      key: 'workName',
      success: function(res) {
        that.setData({
          workName:res.data
        })
      },
    })
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId: res.data
        })
      },
    });
    wx.getStorage({
      key: 'workPay',
      success: function(res) {
        that.setData({
          workPay:res.data
        })
      },
    })
    if(options.id){
      that.setData({
        id: options.id
      })
    }

    if (this.data.id) {
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          that.setData({
            city: res.data.obj.base.workAddress,
            industry: res.data.obj.base.industry,
            workName: res.data.obj.base.workName,
            oldPay: res.data.obj.base.workPay
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
// 获取期望薪资
  bindPicker:function(e){
    var that = this;
    var i = Number(e.detail.value)
    this.setData({
      "workPay[1]":i,
      monthPayIndex:i,
      monthPayHide:true,
      oldPay: that.data.monthPayArr[i]
    })
    wx.setStorage({
      key: 'workPay',
      data: [that.data.monthPayArr[i],i],
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    if (that.params.city){
      that.setData({
        city: that.params.city
      })
    }
    if (that.params.industry) {
      that.setData({
        industry: that.params.industry
      })
    }
  },
  // 期望职位
  getValue:function(e){
    this.setData({
      workName:e.detail.value
    })
    wx.setStorage({
      key: 'workName',
      data: e.detail.value,
    })
  },
  sunBtn:function(){
    var _this = this;
    wx.request({
      url: editJobintensionUrl,
      data: {
        token: getApp().globalData.token,
        id: _this.data.resumeId,			
        workName: _this.data.workName,			
        workPay: _this.data.workPay[1],			
        workAddress: _this.data.city,				
        industry: _this.data.industry
      },
      success: function (res) {
        wx.navigateBack({//返回
          delta: 1
        })
        wx.removeStorage({
          key: 'city',
          success: function (res) {
          },
        })
        wx.removeStorage({
          key: 'industry',
          success: function (res) {
          },
        })
      }
    })
  }
})
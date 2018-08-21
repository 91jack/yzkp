// page/my/resume/jobintensionedit/jobintensionedit.js
const editJobintensionUrl = require('../../../config').editJobintensionUrl;
const resumeUrl = require('../../../config').resumeUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monthPayArr:[],
    monthPayIndex:0,
    monthPayHide:false,
    id:'',			
    workName:'',		
    workPay:'',							
    industry:'',
    city:'',
    resumeId:'',
    oldPay:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.industry){
      wx.setStorage({
        key: 'industry',
        data: options.industry,
      })
      console.log(this.data.industry)
    };
    if (options.city){
      wx.setStorage({
        key: 'city',
        data: options.city.split(',')[0] + '-' + options.city.split(',')[1],
      })
      console.log(this.data.city)
    }
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
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId: res.data
        })
      },
    });
    if(options.id){
      that.setData({
        id: options.id
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
    console.log(e)
    var i = Number(e.detail.value)
    this.setData({
      workPay:i,
      monthPayIndex:i,
      monthPayHide:true
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'city',
      success: function(res) {
        that.setData({
          city:res.data
        })
      },
    });
    wx.getStorage({
      key: 'industry',
      success: function(res) {
        that.setData({
          industry:res.data
        })
      },
    })
    if(this.data.id){
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          console.log(res)
          that.setData({
            // baseInfo: res.data.obj.base,
            city: res.data.obj.base.workAddress,
            industry: res.data.obj.base.industry,
            workName: res.data.obj.base.workName,
            oldPay: res.data.obj.base.workPay
          })
        }
      })
    }
  },

  getValue:function(e){
    this.setData({
      workName:e.detail.value
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
        workPay: _this.data.workPay,			
        workAddress: _this.data.city,				
        industry: _this.data.industry
      },
      success: function (res) {
        console.log(res)
        wx.navigateTo({
          url: '/page/resume/index/index',
        })
        wx.removeStorage({
          key: 'city',
          success: function (res) {
            console.log(11111)
          },
        })
        wx.removeStorage({
          key: 'industry',
          success: function (res) {
            console.log(2222)
          },
        })
      }
    })
  }
})
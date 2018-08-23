// page/common/resume/myapply/myapply.js
const resumeApplyUrl = require('../../../config').resumeApplyUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyList:[],
    headImg:'',
    resumeName:'',
    modalShow:true,
    linkPhone:'',
    imgShow:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'headImg',
      success: function(res) {
        _this.setData({
          headImg:res.data
        })
      },
    })
    wx.getStorage({
      key: 'resumeName',
      success: function (res) {
        _this.setData({
          resumeName: res.data
        })
      },
    })
    try {
      var value = wx.getStorageSync('resumeId')
      if (value) {
        wx.request({
          url: resumeApplyUrl,
          data: {
            token: getApp().globalData.token,
          },
          success: function (res) {
            if (res.status == 0) {
              if (res.data.list.length != 0) {
                _this.setData({
                  imgShow: false
                })
              }
              _this.setData({
                applyList: res.data.list
              })
              console.log(_this.data.imgShow)
            }
          }
        })
      }else{
        _this.setData({
          imgShow: false
        })
        console.log(_this.data.imgShow)
      }
    } catch (e) {
      console.log(_this.data.imgShow)
    }
  },
  //显示模态框
  callphone:function(e){
    var i = e.currentTarget.dataset.id;
    for (var j = 0; j < this.data.applyList.length;j++){
      if(i==j){
        this.setData({
          linkPhone: this.data.applyList[j].linkPhone
        })
      }
    }
    this.setData({
      modalShow: false,
    })
  }, 
  // 隐藏模态框
  hidemodal:function(){
    this.setData({
      modalShow: true,
    })
  },
  //打电话
  callnumber:function(e){
    var that =this;
    console.log(e);
    wx.makePhoneCall({
      phoneNumber: String(that.data.linkPhone)
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
  
  }
})
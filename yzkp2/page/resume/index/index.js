// page/my/resume/index/index.js
// 简历详情
const resumeUrl = require('../../../config').resumeUrl;
const resumeOpenUrl = require('../../../config').resumeOpenUrl;
const browseMeUrl = require('../../../config').browseMeUrl;
const resumeApplyUrl = require('../../../config').resumeApplyUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navName: ['简历编辑', '简历设置', '谁看过我','我的申请'],
    navBarShow:[true,false,false,false],
    baseInfo:[],
    work:[],
    education:[],
    project:[],
    headImg:'',
    resumeName:'',
    inten:'',
    open: '',
    anonymous: '',
    browseList: null,
    modalShow: true,
    linkPhone: '',
    applyList: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      var i = 3
      var nowact = "navBarShow[" + i + "]";
      for (var j = 0; j < this.data.navBarShow.length; j++) {
        var oldact = "navBarShow[" + j + "]";
        this.setData({
          [oldact]: false
        })
      }
      this.setData({
        [nowact]: true
      })
    }
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
        if (res.data.status==0){
          _this.setData({
            baseInfo: res.data.obj.base,
            work: res.data.obj.work,
            education: res.data.obj.education,
            project: res.data.obj.project,
            inten: res.data.obj.base.workName + ' | ' + res.data.obj.base.workAddress + ' | ' + res.data.obj.base.workPay,
            open: res.data.obj.base.open,
            anonymous: res.data.obj.base.anonymous
          })
          wx.setStorage({
            key: 'resumeId',
            data: res.data.obj.base.id,
          })
          wx.request({
            url: browseMeUrl,
            data: {
              token: getApp().globalData.token,
            },
            success: function (res) {
              _this.setData({
                browseList: res.data.list
              })

            }
          })
          wx.request({
            url: resumeApplyUrl,
            data: {
              token: getApp().globalData.token,
            },
            success: function (res) {
              if (res.data.status == 0) {
                if (res.data.list.length != 0) {
                  _this.setData({
                    applyList: res.data.list
                  })
                }
              }
            }
          })
        }
      }
    })
    
  },
  // 切换tab
  beActive:function(e){
    var i = Number(e.currentTarget.dataset.id)
    var nowact = "navBarShow["+i+"]";
    for (var j = 0; j < this.data.navBarShow.length;j++){
      var oldact = "navBarShow[" + j + "]";
      this.setData({
        [oldact]:false
      })
    }
    this.setData({
      [nowact]:true
    })
  },
  // 简历设置
  switch1Change: function (e) {
    var open = e.detail.value ? 1 : 0;
    wx.request({
      url: resumeOpenUrl,
      data: {
        token: getApp().globalData.token,
        open: open
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '设置成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  switch2Change: function (e) {
    var anonymous = e.detail.value ? 1 : 0;
    wx.request({
      url: resumeOpenUrl,
      data: {
        token: getApp().globalData.token,
        anonymous: anonymous
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '设置成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  //显示模态框
  callphone: function (e) {
    var i = e.currentTarget.dataset.id;
    for (var j = 0; j < this.data.applyList.length; j++) {
      if (i == j) {
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
  hidemodal: function () {
    this.setData({
      modalShow: true,
    })
  },
  //打电话
  callnumber: function (e) {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: String(that.data.linkPhone)
    })
  },
})
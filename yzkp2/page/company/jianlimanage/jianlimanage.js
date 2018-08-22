// page/job/jianlimanage/jianlimanage.js
// 企业简历管理
const companyResumeUrl = require('../../../config').companyResumeUrl;
// 企业修改简历状态
const companyEditResumeUrl = require('../../../config').companyEditResumeUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['邀请面试','暂未接通','待定','不合适'],
    navShow:[false,true,true,true],
    navBar:2,
    pickerData: ['待定','不合适','邀请面试','暂未接通'],
    pickerIndex:[0,1,2,3],
    modalShow:true,
    manageData:[],
    linkPhone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  zhiweimanage:function(){
    wx.navigateTo({
      url: '/page/company/jobmanage/jobmanage',
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
    var that = this;
    wx.request({
      url: companyResumeUrl,
      data: {
        token: getApp().globalData.token,
        state:2
      },
      success: function (res) {
        console.log(res)
        if(res.data.status==0){
          that.setData({
            manageData:res.data.list
          })
        }
      }
    })
  },
  // tabBar的显示与隐藏
  chooseNav:function(e){
    console.log(e);
    var i = Number(e.currentTarget.dataset.id);
    if(i==0){ //显示面试邀请
      this.setData({
        navBar:2
      })
    }else if (i == 1) { //暂未接通
      this.setData({
        navBar: 3
      })
    } else if (i == 2) { //待定
      this.setData({
        navBar: 0
      })
    } else if (i == 3) { //不合适
      this.setData({
        navBar: 1
      })
    }
    // var nowType = "navBar["+i+"]";
    for (var j = 0; j < this.data.navShow.length;j++){
      var yetType = "navShow["+j+"]";
      this.setData({
        [yetType]:true
      })
    }
    var nowShow = "navShow["+i+"]"
    this.setData({
      // navShow:i,
      [nowShow]:false
    });

    var that = this;

    wx.request({
      url: companyResumeUrl,
      data: {
        token: getApp().globalData.token,
        state: that.data.navBar
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          that.setData({
            manageData: res.data.list
          })
        }
      }
    })
  },
  // picker获取内容
  getPicker:function(e){
    console.log(e);
    var that = this;
    var id = e.currentTarget.dataset.id;
    var applyId = Number(e.currentTarget.dataset.applyid);
    var state = e.detail.value;
    wx.request({
      url: companyEditResumeUrl,
      data: {
        token: getApp().globalData.token,
        id: applyId,
        state: state
      },
      success: function (res) {
        console.log(res);
        var picktype = "manageData[" + id +"].applyState"
        that.setData({
          [picktype]:e.detail.value
        })
      }
    })
  },
  // 打电话
  showModal:function(e){
    this.setData({
      modalShow:false,
      linkPhone:e.currentTarget.dataset.phone
    })
  },
  // 隐藏模态框
  hidemodal:function(){
    this.setData({
      modalShow:true
    })
  },
  // 打出电话
  callnumber:function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: String(that.data.linkPhone)
    })
  }
})
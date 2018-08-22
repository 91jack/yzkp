// page/job/jianlimanage/jianlimanage.js
// 企业简历管理
const companyResumeUrl = require('../../../config').companyResumeUrl;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:['邀请面试','暂未接通','待定','不合适'],
    navShow:0,
    navBar:2,
    pickerData: ['邀请面试', '暂未接通', '待定', '不合适'],
    pickerIndex:[0,1,2,3],
    modalShow:true,
    manageData:[],
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
    for (var j = 0; j < this.data.navBar.length;j++){
      var yetType = "navBar["+j+"]";
      this.setData({
        [yetType]:true
      })
    }
    this.setData({
      navShow:i
    })
  },
  // picker获取内容
  getPicker:function(e){
    console.log(e);
  },
  // 打电话
  showModal:function(){
    this.setData({
      modalShow:false
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
    // var that = this;
    wx.makePhoneCall({
      // phoneNumber: String(that.data.linkPhone)
      phoneNumber:'13110141797'
    })
  }
})
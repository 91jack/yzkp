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
    navBar:[false,true,true,true],
    pickerData: ['邀请面试', '暂未接通', '待定', '不合适'],
    pickerIndex:[0,1,2,3],
    modalShow:true
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
    var _this = this;
    wx.request({
      url: companyResumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)
      }
    })
  },
  // tabBar的显示与隐藏
  chooseNav:function(e){
    console.log(e);
    var i = e.currentTarget.dataset.id;
    var nowType = "navBar["+i+"]";
    for (var j = 0; j < this.data.navBar.length;j++){
      var yetType = "navBar["+j+"]";
      this.setData({
        [yetType]:true
      })
    }
    this.setData({
      navShow:i,
      [nowType]:false
    })
  },
  // picker获取内容
  getPicker:function(e){

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
  
  }
})
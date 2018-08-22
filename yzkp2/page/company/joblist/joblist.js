// page/index/pages/newwork/joblist/joblist.js
const jobListUrl = require('../../../config').jobListUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: 1,//用户角色 1：求职者 2：员工 3：企业
    jobList: [],
    index: 0,//选择的下拉列表下标
    isRecommon: [{ type: 0, name: '最新' }, { type: 1, name: '推荐' }],
    navBarData: [ '地区', '行业', '要求'],

    type:'',//类型（0最新，1推荐）
    search:'',//搜索条件
    region:'',//地区
    job:'',//职位
    education:'',//学历
    workYear:'',//工作年限
    monthPay:'',//月薪
    companyId:'',//公司id
    recruitType: '',//招聘类型（0：  全职   1：兼职）
    payType: '',//结算方式
    sex: '',//性别
    industry: '',//行业
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    console.log(options)
    var _this = this;
    if(options.type){
      _this.setData({
        type:options.type
      })
    } else if (options.recruitType){
      _this.setData({
        recruitType: options.recruitType
      })
    }else if(options.city){
      _this.setData({
        region:options.city
      })
    }else if(options.industry){
      _this.setData({
        industry: options.industry
      })
    }


    _this.getJobListFn();
    
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
    this.setData({
      index: e.detail.value,
      type: e.detail.value,
    })
    this.getJobListFn();
  },
  getValue: function (e) {
    console.log(e.detail.value)
    this.setData({
      search: e.detail.value
    })
  },
  getJobListFn:function(){
    var _this = this;
    wx.request({
      url: jobListUrl,
      data: {
        token: getApp().globalData.token,
        type: _this.data.type,//类型（0最新，1推荐）
        recruitType: _this.data.recruitType,//招聘类型（0：  全职   1：兼职）
        search: _this.data.search,//搜索条件
        region: _this.data.region,//地区
        job: '',//职位
        education: '',//学历
        workYear: '',//工作年限
        monthPay: '',//月薪
        companyId: '',//公司id
        payType: '',//结算方式
        sex: '',//性别
        industry: _this.data.industry,//行业
      },
      success: function (res) {
        _this.setData({
          jobList: res.data.list
        })
      }
    })
  }
})
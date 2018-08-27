// page/index/pages/newwork/joblist/joblist.js

const jobListUrl = require('../../../config').jobListUrl;

// 搜索简历
const searchResumeUrl = require('../../../config').searchResumeUrl;
// 获取简历列表
const getResumeListUrl = require('../../../config').getResumeListUrl;
Page({
  params: { token: getApp().globalData.token, page: 1, pageSize: 30},
  /**
   * 页面的初始数据
   */
  data: {
    role: 1,//用户角色 1：求职者 2：员工 3：企业
    jobList: [],
    jianliList:[],
    index: 0,//选择的下拉列表下标
    isRecommon: [{ type: 0, name: '最新' }, { type: 1, name: '推荐' }],
    navBarData: [ '地区', '行业', '要求'],
    id:'',
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
    page:'1',
    height1: '',
    height2: '',
    key:'',
    isRefresh: false
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    console.log(options)
    var _this = this;
    wx.getStorage({
      key: 'serachId',
      success: function (res) {
        _this.setData({
          id: res.data
        })
        if (options.type) {
          _this.setData({
            type: options.type
          })
        }
        if (options.recruitType) {
          _this.params.recruitType = options.recruitType
        }
        if (_this.data.id == "resume") {
          _this.jobListFn();
        } else if (_this.data.id == "company") {
          _this.jianliListFn();
        }
      },
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
    if (this.data.isRefresh) {
      this.params.page = 1
      if (this.data.id == "resume") {
        this.setData({ jobList: [] })
        this.jobListFn()
      } else if (this.data.id == "company") {
        this.setData({ jianliList: [] })
        this.jianliListFn()
      }
      this.data.isRefresh = false
    }   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.params = { token: getApp().globalData.token, page: 1, pageSize: 30 }
    if (this.data.id == "resume") {
      this.setData({ jobList: [] })
      this.jobListFn(function () {
        wx.stopPullDownRefresh();
      });
    } else if (this.data.id == "company") {
      this.setData({ jianliList: [] })
      this.jianliListFn(function () {
        wx.stopPullDownRefresh();
      });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.params.page = this.params.page + 1
    if (this.data.id == "resume") {
      this.jobListFn();
    } else if (this.data.id == "company") {
      this.jianliListFn();
    }
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
    if(this.data.id=='company'){
      this.jianliListFn();
    }else if(this.data.id='resume'){
      this.jobListFn();
    }
  },

  getValue: function (e) {
    console.log(e.detail.value)
    this.setData({
      key: e.detail.value
    })
  },
  search:function(e){
    if(this.data.id=='company'){
      this.getJianliListFn()
    } else if (this.data.id == 'resume'){
      this.getJobListFn()
    }
  },
  clearParams: function () {
    if (this.data.id == 'company'){
      if (this.params.monthPay) {
        this.params.monthPay = this.params.monthPay[0]
      }
      if (this.params.education) {
        this.params.educationLevel = this.params.education[0]
      }
      if (this.params.workYear) {
        this.params.workYear = this.params.workYear[0]
      }
    } else if (this.data.id == 'resume') {
      if (this.params.monthPay) {
        this.params.monthPay = this.params.monthPay[1]
      }
      if (this.params.education) {
        this.params.education = this.params.education[1]
      }
      if (this.params.workYear) {
        this.params.workYear = this.params.workYear[1]
      }
    }    
  },
  // 获取简历列表
  jianliListFn: function (callback) {
    var _this = this;
    this.clearParams()
    console.log(this.params)
    wx.request({
      url: searchResumeUrl,
      data: _this.params,
      success: function (res) {
        console.log(res);
        if(res.data.status==0){
          _this.setData({
            jianliList: _this.data.jianliList.concat(res.data.list)
          }, function () {
            if (callback) {
              callback();
            }
          })
        }
      }
    })
  },
  
  jobListFn: function (callback){
    var _this = this;
    this.clearParams()
    console.log(this.params)
    wx.request({
      url: jobListUrl,
      data: _this.params,
      success: function (res) {
        console.log(res);
        if(res.data.status==0){
          _this.setData({
            jobList: _this.data.jobList.concat(res.data.list)
          }, function () {
            if (callback) {
              callback();
            }
          })
        }
      }
    })
  },

})
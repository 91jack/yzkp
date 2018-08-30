// page/index/pages/newwork/joblist/joblist.js

const jobListUrl = require('../../../config').jobListUrl;

// 搜索简历
const searchResumeUrl = require('../../../config').searchResumeUrl;
// 获取简历列表
const getResumeListUrl = require('../../../config').getResumeListUrl;
Page({
  
  params: { token: getApp().globalData.token, page: 1, pageSize: 10},
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
    var that = this
    if (this.data.isRefresh) {
      this.params.page = 1
      this.data.isRefresh = false
      if (this.data.id == "resume") {
        this.setData({ jobList: [] }, function () {
          that.jobListFn()
        })

      } else if (this.data.id == "company") {
        this.setData({ jianliList: [] }, function () {
          that.jianliListFn()
        })
      }
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this
    this.params = { page: 1, pageSize: 10, token: getApp().globalData.token }
    if (this.data.id == "resume") {
      this.setData({ jobList: [] }, function () {
        that.jobListFn(function () {
          wx.stopPullDownRefresh();
        })
      })

    } else if (this.data.id == "company") {
      this.setData({ jianliList: [] }, function () {
        that.jianliListFn(function () {
          wx.stopPullDownRefresh();
        })
      })

    }
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    this.params.page = this.params.page + 1
    if (this.data.id == "resume") {
      this.jobListFn(function (end) {
        if (end) {
          wx.showToast({
            title: '到底啦~',
            duration: 2000
          })
          that.params.page = that.params.page - 1
        }
      });
    } else if (this.data.id == "company") {
      this.jianliListFn(function (end) {
        if (end) {
          wx.showToast({
            title: '到底啦~',
            duration: 2000
          })
          that.params.page = that.params.page - 1
        }
      });
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
  },

  getValue: function (e) {
    this.setData({
      key: e.detail.value
    })
  },
  search:function(e){
    var that = this
    this.params.page = 1;
    this.params.key = this.data.key

    if (this.data.id == "resume") {
      this.setData({ jobList: [] }, function () {
        that.jobListFn(function () {
          that.params.key = ''
        })
      })
    } else if (this.data.id == "company") {
      this.setData({ jianliList: [] }, function () {
        that.jianliListFn(function () {
          console.log(that.data.jianliList)
          that.params.key = ''
        })
      })
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
  // 获取简历列表
  jianliListFn: function (callback) {
    var _this = this;
    wx.request({
      url: searchResumeUrl,
      data: _this.params,
      success: function (res) {
        if(res.data.status==0){
          if (res.data.list != []) {
            for (var j = 0; j < res.data.list.length; j++) {
              _this.data.jianliList.push(res.data.list[j])
              wx.stopPullDownRefresh();
              _this.setData({
                jianliList: _this.data.jianliList
              })
            }
          } else {
            if (callback) {
              callback()
            }
            wx.showToast({
              title: '到底啦~',
              duration: 2000
            })
          }
        }
        // _this.params={};
      }
    })
  },
  // 获取职位列表
  jobListFn: function (callback) {
    var _this = this;
    wx.request({
      url: jobListUrl,
      data: _this.params,
      success: function (res) {
        if(res.data.status==0){
          if (res.data.list != []) {
            for (var j = 0; j < res.data.list.length; j++) {
              _this.data.jobList.push(res.data.list[j])
              wx.stopPullDownRefresh();
              _this.setData({
                jobList: _this.data.jobList
              })
            }
          } else {
            if (callback) {
              callback()
            }
            wx.showToast({
              title: '到底啦~',
              duration: 2000
            })
          }
        }
      }
    })
  }
})
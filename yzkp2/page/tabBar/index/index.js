// pages/index/index.js
// 登录
const loginUrl = require('../../../config').loginUrl;

// 职位列表
const jobListUrl = require('../../../config').jobListUrl;

// 搜索简历
const searchResumeUrl = require('../../../config').searchResumeUrl;


var socket = require('../../../socket.js');
Page({
  params: { page: 1, pageSize: 30},
   
  /**
   * 页面的初始数据
   */
  data: {
    role: -1,//用户角色 0：求职者  1：企业 2：员工
    jobList: [],
    jianliList:[],
    index: 0,//选择的下拉列表下标
    id:'',
    key:'',
    getHide: true,
    isRefresh: false, //onshow时是否刷新

    isRecommon: [{ type: 0, name: '最新' }, { type: 1, name: '推荐' }],
    navBarData: ['地区', '行业', '要求'],
    selectBar1: [//求职者
      {
        url:'/page/company/joblist/joblist?type=0&recruitType=0',
        src:'/image/index/office.png',
        text:'最新职位'
      },
      {
        url: '/page/company/joblist/joblist?type=1&recruitType=1',        
        src:'/image/index/datetime.png',
        text:'兼职职位'
      },
      {
        url: '/page/resume/index/index',  
        src:'/image/index/manageintro.png',
        text:'简历管理'
      },
      {
        url: '/page/resume/index/index?id=apply',        
        src:'/image/index/pro.png',
        text:'应聘进度'
      },
      {
        url: '/page/common/course/courselist/courselist',        
        src:'/image/index/train.png',
        text:'能力提升'
      }
    ], 
    selectBar2: [ //员工
      {
        url: '/page/company/joblist/joblist?type=0&recruitType=0',
        src: '/image/index/office.png',
        text: '最新职位'
      },
      {
        url: '/page/company/joblist/joblist?type=0&recruitType=1',
        src: '/image/index/datetime.png',
        text: '兼职职位'
      },
      {
        url: '/page/employee/contract/index/index',
        src: '/image/index/discuss.png',
        text: '合同管理'
      },
      {
        url: '/page/employee/payment/index/index',
        src: '/image/index/price.png',
        text: '薪酬管理'
      },
      {
        url: '/page/common/course/courselist/courselist',
        src: '/image/index/train.png',
        text: '能力提升'
      }
    ],
    selectBar3: [//企业
      {
        url: '/page/company/postfulltime/postfulltime',
        src: '/image/index/office.png',
        text: '全职发布'
      },
      {
        url: '/page/company/postparttime/postparttime',
        src: '/image/index/datetime.png',
        text: '兼职发布'
      },
      {
        url: '/page/company/jobmanage/jobmanage',
        src: '/image/index/serachintro.png',
        text: '职位管理'
      },
      {
        //url: '/page/company/renzheng/renzheng',
        url: '/page/company/laowu/laowu?id=1',
        src: '/image/index/other.png',
        text: '招聘外包'
      },
      {
        url: '/page/company/laowu/laowu?id=3',
        src: '/image/index/goout.png',
        text: '劳务派遣'
      },
      {
        url: '/page/company/laowu/laowu?id=2',
        src: '/image/index/change.png',
        text: '灵活用工'
      }
    ] 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSetting({
      success(res) {
        console.log(res.authSetting['scope.userInfo'])
        var hide = res.authSetting['scope.userInfo']
        that.setData({
          getHide: hide ? hide : false
        })
        that.onLoadFn();
         
        // if (res.authSetting['scope.userInfo']) {
        //   that.setData({
        //     getHide: res.authSetting['scope.userInfo']
        //   })
        // }else{
        //   that.setData({
        //     getHide: getApp().globalData.getHide
        //   })
        // }
      }
    })
  },
  // 获取用户信息
  bindGetUserInfo:function(e){
    console.log(e)
    if (e.detail.errMsg =="getUserInfo:ok"){
      getApp().globalData.getHide=true;
      this.setData({
        getHide:true
      })
      wx.showLoading({
        title: '加载中',
        success: function () {
          setTimeout(function () {
            wx.hideLoading()
          }, 1000)
        }
      })
      this.reloadFn();
    }
  },

  onLoadFn:function(){   
    var _this = this
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: loginUrl,
            data: {
              code: res.code
            },
            success: function (res) {
              getApp().globalData.token = res.data.obj.token;
              _this.params.token = res.data.obj.token;
              _this.setData({
                role: res.data.obj.type
              })
              wx.setStorage({
                key: 'role',
                data: res.data.obj.type
              })
              if (res.data.obj.type == 0) {  //求职者
                _this.jobListFn();
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "resume",
                })
                _this.setData({
                  id: 'resume'
                })
                if (res.data.obj.resume != null) {
                  wx.setStorage({
                    key: 'resumeId',// 简历id
                    data: res.data.obj.resume.id,
                    success: function () {
                      socket.init();
                    }
                  })
                }
              } else if (res.data.obj.type == 1) {//企业
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "company",
                })
                _this.jianliListFn()
                _this.setData({
                  id: 'company'
                })
                if (res.data.obj.company != null) {
                  wx.setStorage({
                    key: 'companyId',// 公司id
                    data: res.data.obj.company.id,
                    success: function () {
                      socket.init();
                    }
                  })
                }
              } else if (res.data.obj.type == 2) {//员工
                _this.jobListFn();
                wx.setStorage({
                  key: 'serachId',
                  data: "resume",
                })
                _this.setData({
                  id: 'resume'
                })
                if (res.data.obj.resume != null) {//员工也具有求职者身份
                  wx.setStorage({
                    key: 'resumeId',// 简历id
                    data: res.data.obj.resume.id,
                    success: function () {
                      socket.init();
                    }
                  })
                }
                if (res.data.obj.employee != null) {  //缓存员工id
                  if (res.data.obj.employee.id) {
                    wx.setStorage({
                      key: 'employeesId',
                      data: res.data.obj.employee.id,
                    })
                  }
                }
              }
              getApp().globalData.refreash=false;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }); 
  },

  // 重新登录
  reloadFn:function(){
    this.setData({
      jianliList:[],
      jobList:[]
    })  
    var _this = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: loginUrl,
            data: {
              code: res.code
            },
            success: function (res) {
              getApp().globalData.token = res.data.obj.token;
              _this.params.token = res.data.obj.token;
              _this.setData({
                role: res.data.obj.type
              })
              wx.setStorage({
                key: 'role',
                data: res.data.obj.type
              })
              if (res.data.obj.type == 0) {  //求职者
                _this.jobListFn();
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "resume",
                })
                _this.setData({
                  id: 'resume'
                })
                if (res.data.obj.resume != null) {
                  wx.setStorage({
                    key: 'resumeId',// 简历id
                    data: res.data.obj.resume.id
                  })
                }
              } else if (res.data.obj.type == 1) {//企业
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "company",
                })
                _this.jianliListFn()
                _this.setData({
                  id: 'company'
                })
                if (res.data.obj.company != null) {
                  wx.setStorage({
                    key: 'companyId',// 公司id
                    data: res.data.obj.company.id
                  })
                }
              } else if (res.data.obj.type == 2) {//员工
                _this.jobListFn();
                wx.setStorage({
                  key: 'serachId',
                  data: "resume",
                })
                _this.setData({
                  id: 'resume'
                })
                if (res.data.obj.resume != null) {//员工也具有求职者身份
                  wx.setStorage({
                    key: 'resumeId',// 简历id
                    data: res.data.obj.resume.id
                  })
                }
                if (res.data.obj.employee != null) {  //缓存员工id
                  if (res.data.obj.employee.id) {
                    wx.setStorage({
                      key: 'employeesId',
                      data: res.data.obj.employee.id,
                    })
                  }
                }
              }
              getApp().globalData.refreash = false;
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }); 
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

    if (getApp().globalData.refreash){ 
      _this.setData({
        jianliList: [],
        jobList: []
      },function(){
        _this.reloadFn()
      })
    }

    if (this.data.isRefresh) {
      this.params.page = 1
      this.data.isRefresh = false
      if (this.data.id == "resume") {
        this.setData({ jobList: [] }, function(){
          _this.jobListFn()          
        })
        
      } else if (this.data.id == "company") {
        this.setData({ jianliList: [] }, function () {
          _this.jianliListFn()
        })
      }
    }
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
    var that = this
    this.params = { page: 1, pageSize: 30, token: getApp().globalData.token }  
    if (this.data.id == "resume") {
      this.setData({ jobList: []}, function(){
        that.jobListFn(function () {
          wx.stopPullDownRefresh();
        })
      })
      
    } else if (this.data.id == "company") {
      this.setData({ jianliList: [] }, function(){
        that.jianliListFn(function () {
          wx.stopPullDownRefresh();
        })
      })
      
    }
  },
  bindPickerChange:function(e){
    console.log(e)
    this.setData({
      key: this.data.isRecommon[e.detail.value].type,
      index:e.detail.value
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this
    this.params.page = this.params.page + 1
    if (this.data.id == "resume") {
      this.jobListFn(function(end){
        if(end){
          wx.showToast({
            title: '到底啦~',
            duration: 2000,
            //icon:'none'
          })
          that.params.page = that.params.page - 1
        }
      });
    } else if (this.data.id == "company") {
      this.jianliListFn(function (end){
        if (end) {
          wx.showToast({
            title: '到底啦~',
            duration: 2000,
            //icon:'none'
          })
          that.params.page = that.params.page - 1
        }
      });
    }
  },
  // 获取输入内容
  getKey:function(e){
    this.setData({
      key:e.detail.value
    })
  },
  // 搜索功能
  goSearch:function(){
    var that = this
    this.params.page = 1;
    this.params.key = this.data.key    

    if (this.data.id =="resume"){
      this.setData({jobList:[]},function(){
        that.jobListFn(function () {
          that.params.key = ''
        })
      })      
    } else if (this.data.id =="company"){
      this.setData({ jianliList: [] }, function(){
        that.jianliListFn(function () {
          console.log(that.data.jianliList)
          that.params.key = ''
        })
      })      
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  clearParams: function(){
    if (this.data.id == "resume"){
     if (this.params.monthPay) {
       this.params.monthPay = this.params.monthPay[1]
     }
     if (this.params.education) {
       this.params.education = this.params.education[1]
     }
     if (this.params.workYear) {
       this.params.workYear = this.params.workYear[1]
     }
   }else{
      if (this.params.monthPay) {
        this.params.monthPay = this.params.monthPay[0]
      }
      if (this.params.education) {
        this.params.educationLevel = this.params.education[0]
      }
      if (this.params.workYear) {
        this.params.workYear = this.params.workYear[0]
      }
   }
  },
  // 获取简历列表
  jianliListFn: function (callback) {
    var _this = this;
    //this.clearParams();
    wx.request({
      url: searchResumeUrl,
      data: _this.params,
      success: function (res) {
        _this.setData({
          jianliList: _this.data.jianliList.concat(res.data.list)
        }, function () {
          if (callback) {
            callback(res.data.list.length == 0);
          }
        })
      }
    })
  },
  // 获取职位列表
  jobListFn: function (callback) {  
    var _this = this;
    //this.clearParams();
    wx.request({
      url: jobListUrl,
      data: _this.params,
      success: function (res) {
        _this.setData({
          jobList: _this.data.jobList.concat(res.data.list)
        }, function () {
          if (callback) {
            callback(res.data.list.length == 0);
          }
        })
        // _this.params = {};
      }
    })
  }
})
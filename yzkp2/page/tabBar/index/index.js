// pages/index/index.js
// 登录
const loginUrl = require('../../../config').loginUrl;

// 职位列表
const jobListUrl = require('../../../config').jobListUrl;

// 搜索简历
const searchResumeUrl = require('../../../config').searchResumeUrl;

// 获取能力提升类型列表信息
const courseTypeurl = require('../../../config').courseTypeurl;

var socket = require('../../../socket.js');
Page({
  params: { page: 1, pageSize: 30},
  
  /**
   * 页面的初始数据
   */
  data: {
    role: 0,//用户角色 0：求职者  1：企业 2：员工
    jobList: [],
    jianliList:[],
    index: 0,//选择的下拉列表下标
    id:'',
    key:'',
    isRefresh: false, //onshow时是否刷新
    isRecommon: [{ type: 0, name: '最新' }, { type: 1, name: '推荐' }],
    navBarData: ['地区', '行业', '要求'],
    selectBar1: [//求职者
      {
        url:'/page/company/joblist/joblist?type=0',
        src:'/image/index/office.png',
        text:'最新职位'
      },
      {
        url: '/page/company/joblist/joblist?recruitType=1',        
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
        url: '/page/company/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '最新职位'
      },
      {
        url: '/page/company/joblist/joblist?recruitType=1',
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
    var _this = this;
    // 登录
    wx.login({
      success: function (res) {
        if (res.code) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          //发起网络请求
          wx.request({
            url: loginUrl,
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res)
              getApp().globalData.token = res.data.obj.token;
              _this.params.token = res.data.obj.token;

              wx.request({
                url: courseTypeurl,//课程分类
                data: {
                  token: getApp().globalData.token,
                },
                success: function (res) {
                  console.log(res)
                  wx.setStorage({
                    key: 'courseType',
                    data: res.data.list,
                  })
                }
              })

              _this.setData({
                role: res.data.obj.type
              })
              wx.setStorage({
                key: 'role',
                data: res.data.obj.type
              })
              if (res.data.obj.company != null){
                wx.setStorage({
                  key: 'companyId',// 公司id
                  data: res.data.obj.company.id,
                  success:function(){
                    console.log(11111111111)
                    socket.init();
                  }
                })
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "company",
                })
                _this.jianliListFn()
                _this.setData({
                  id: 'company'
                })
              } else if (res.data.obj.resume != null) {
                wx.setStorage({
                  key: 'resumeId',// 简历id
                  data: res.data.obj.resume.id,
                  success: function () {
                    console.log(22222222222222)
                    socket.init();
                  }
                })
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "resume",
                })
                _this.jobListFn();
                _this.setData({
                  id: 'resume'
                })
              } else{
                wx.setStorage({
                  key: 'serachId',// 公司id
                  data: "resume",
                })
                _this.jobListFn();
              }              
              if (res.data.obj.employee.id){
                wx.setStorage({
                  key: 'employeesId',
                  data: res.data.obj.employee.id,
                })
              }
              
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
    console.log(this.params)
    if (this.data.isRefresh) {
      this.params.page = 1
      if (this.data.id == "company") {
        this.setData({ jianliList: [] })
        this.jianliListFn()
      } else {
        this.setData({ jobList: [] })
        this.jobListFn()
      }
      this.data.isRefresh = false
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
    wx.setBackgroundTextStyle({
      textStyle: 'light', // 下拉背景字体、loading 图的样式为dark
    })
    this.setData({
      key:''
    })
    this.params = { token: getApp().globalData.token, page: 1, pageSize: 30 }
    if (this.data.id == "company") {
      this.setData({ jianliList: [] })
      this.jianliListFn(function () {
        wx.stopPullDownRefresh();
      })
    } else {
      this.setData({ jobList: [] })
      this.jobListFn(function () {
        wx.stopPullDownRefresh();
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
    this.params.page = this.params.page + 1
    if (this.data.id == "resume") {
      var oldList = this.data.jobList;
      this.jobListFn();
      this.setData({
        jobList:oldList.concat(this.data.jobList)
      })
    } else if (this.data.id == "company") {
      var oldList = this.data.jianliList;
      this.jianliListFn();
      this.setData({
        jianliList:oldList.concat(this.data.jianliList)
      })
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
    this.setData({
      params: { token: getApp().globalData.token }
    })
     if (this.data.id =="company"){
      this.jianliListFn()
     } else{
       this.jobListFn()
     }
    this.setData({
      key:''
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  clearParams: function(){
    if (this.data.id == "company"){
      if (this.params.monthPay) {
        this.params.workPay = this.params.monthPay
      }
      if (this.params.education) {
        this.params.educationLevel = this.params.education
      }
      if (this.params.sex) {
        this.params.sex = this.params.sex-1
      }
      console.log(this.params)      
   }else{
      console.log(this.params)
   }
  },
  // 获取简历列表
  jianliListFn: function (callback){
    var _this = this;
    this.params.key = _this.data.key
    this.clearParams();
    console.log(this.params)
    wx.request({
      url: searchResumeUrl,
      data: _this.params,
      success: function (res) {
        if(res.data.status==0){
          _this.setData({
            jianliList: res.data.list
          }, function () {
            if (callback) {
              callback();
            }
          })
        }
      }
    })
  },
  // 获取职位列表
  jobListFn: function (callback){
    var _this = this;
    this.params.key = _this.data.key
    this.clearParams();
    console.log(this.params)
    wx.request({
      url: jobListUrl,
      data: _this.params,
      success: function (res) {
        if(res.data.status==0){
          console.log(res)
          _this.setData({
            jobList: res.data.list
          }, function () {
            if (callback) {
              callback();
            }
          })
        }
      }
    })
  }
})
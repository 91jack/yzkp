// pages/index/index.js
var base = require('../../../utils/basedata.js');
base.cityList();//城市列表
base.companyType(); // 公司性质
base.companySize(); // 公司规模
base.monthPay(); // 月薪
base.education();// 学历
base.workYear();// 工作经验
base.height();// 身高要求
base.demand();// 首页-要求
base.welfare();// 福利待遇
base.industry();//行业

const testLoginUrl = require('../../../config').testLoginUrl;
const jobListUrl = require('../../../config').jobListUrl;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    role:1,//用户角色 1：求职者 2：员工 3：企业
    jobList: [],
    index: 0,//选择的下拉列表下标，
    navBarData: ['推荐','地区', '行业', '要求'],
    selectBar1:[
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
        url: '/page/common/resume/index/index',  
             
        src:'/image/index/manageintro.png',
        text:'简历管理'
      },
      {
        url: '/page/common/resume/apply/apply',        
        src:'/image/index/pro.png',
        text:'应聘进度'
      },
      {
        url: '/page/common/course/courselist/courselist',        
        src:'/image/index/train.png',
        text:'能力提升'
      }
    ], //求职者
    selectBar2: [
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
        //url: '/page/common/sign/sign',  
        url: '/page/employee/contract/step7/step7',
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
    ], //员工
    selectBar3: [
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
    ] //企业
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 点击下拉列表

  onLoad: function (options) {
  
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var _this = this;
    wx.request({
      url: testLoginUrl,
      data: {
       openId:'1002'
      },
     
      success: function (res) {
        getApp().globalData.token = res.data.obj.token;// 用户token
        getApp().globalData.resume = res.data.obj.resume;// 求职者，员工简历
        getApp().globalData.employee = res.data.obj.employee;// 求职者，员工简历
        wx.request({
          url: jobListUrl,
          data: {
            token: res.data.obj.token,
            // type: options.type ? 0 : 1,//最新0推荐1
            // recruitType: options.recruitType ? 0 : 1//全职0兼职1
          },
          success: function (res) {
           
            _this.setData({
              jobList: res.data.list
            })
          }
        })

      }
    })

   
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

})
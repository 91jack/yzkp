// page/tabBar/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resume: getApp().globalData.resume,
    //求职者列表
    jobSeekerList:[
      {
        url: '/page/common/resume/index/index',
        src: '/image/index/office.png',
        text: '我的简历'
     },
     {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '我的收藏'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '我的申请'
      },
      {
        url: '/page/common/course/myenroll/myenroll',
        src: '/image/index/office.png',
        text: '我的报名'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '我要招聘'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '成为员工'
      }
    ],
    // 员工列表
    employeeList:[
      {
        url: '/page/common/resume/index/index',
        src: '/image/index/office.png',
        text: '我的简历'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '我的收藏'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '我的申请'
      },
      {
        url: '/page/common/course/myenroll/myenroll',
        src: '/image/index/office.png',
        text: '我的报名'
      },
      {
        url: '/page/employee/contract/',
        src: '/image/index/office.png',
        text: '我的合同'
      },
      {
        url: '/page/employee/payment/index/index',
        src: '/image/index/office.png',
        text: '我的薪酬'
      }
    ],
    // 企业列表
    companyList:[
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '招聘进度'
      },
      {
        url: '/page/job/joblist/joblist?type=0',
        src: '/image/index/office.png',
        text: '职位管理'
      }


    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.resume)
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
  
  }
})
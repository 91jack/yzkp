// page/tabBar/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resume: getApp().globalData.resume,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentList: [],
    //求职者列表
    jobSeekerList: [
      {
        url: '/page/resume/index/index',
        src: '/image/index/office.png',
        text: '我的简历'
      },
      {
        url: '/page/resume/myapply/myapply',
        src: '/image/index/office.png',
        text: '我的申请'
      },
      {
        url: '/page/common/course/myenroll/myenroll',
        src: '/image/index/office.png',
        text: '我的报名'
      },
      {
        url: '/page/company/renzheng/renzheng',
        src: '/image/index/office.png',
        text: '我要招聘'
      },
      {
        url: '/page/employee/contract/step1/step1',
        src: '/image/index/office.png',
        text: '成为员工'
      }
    ],
    // 员工列表
    employeeList: [
      {
        url: '/page/resume/index/index',
        src: '/image/index/office.png',
        text: '我的简历'
      },
      {
        url: '/page/resume/myapply/myapply',
        src: '/image/index/office.png',
        text: '我的申请'
      },
      {
        url: '/page/common/course/myenroll/myenroll',
        src: '/image/index/office.png',
        text: '我的报名'
      },
      {
        url: '/page/employee/contract/index/index',
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
    companyList: [{
      url: '/page/company/jobmanage/jobmanage',
      src: '/image/index/office.png',
      text: '职位管理'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var _this = this;
    wx.getStorage({
      key: 'role',
      success: function(res) {
        var role = res.data;
        console.log(role);
        if (role == 0) {
          _this.setData({
            currentList: _this.data.jobSeekerList
          })
        } else if (role == 1) {
          _this.setData({
            currentList: _this.data.companyList
          })
        } else if (role == 2) {
          _this.setData({
            currentList: _this.data.employeeList
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  }
})
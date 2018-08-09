// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: [true, true, true, true],//控制nav-bar的显示
    index: 0,//选择的下拉列表下标，
    selectBar1:[
      {
        url:'/page/job/joblist/joblist',
        src:'/image/index/zhiwei.png',
        text:'最新职位'
      },
      {
        url: '/page/job/joblist/joblist',        
        src:'/image/index/time.png',
        text:'兼职职位'
      },
      {
        url: '/page/my/resume/index/index',        
        src:'/image/index/resume.png',
        text:'简历管理'
      },
      {
        url: 'prog/prog',        
        src:'/image/index/pro.png',
        text:'应聘进度'
      },
      {
        url: '/page/index/course/courselist/courselist',        
        src:'/image/index/train.png',
        text:'能力提升'
      }
    ], //求职者
    selectBar2: [
      {
        url: '/page/job/postfulltime/postfulltime',
        src: '/image/index/zhiwei.png',
        text: '全职发布'
      },
      {
        url: '/page/job/postparttime/postparttime',
        src: '/image/index/time.png',
        text: '兼职发布'
      },
      {
        url: '/page/my/contract/step1/step1',
        src: '/image/index/resume.png',
        text: '合同管理'
      },
      {
        url: '/page/my/payment/index/index',
        src: '/image/index/pro.png',
        text: '薪酬管理'
      },
      {
        url: '/page/index/linghuo/linghuo',
        src: '/image/index/train.png',
        text: '灵活用工'
      }
    ], //员工
    selectBar3: [
      {
        url: '/page/job/postfulltime/postfulltime',
        src: '/image/index/zhiwei.png',
        text: '全职发布'
      },
      {
        url: '/page/job/postparttime/postparttime',
        src: '/image/index/time.png',
        text: '兼职发布'
      },
      {
        url: '/page/job/jobmanage/jobmanage',
        src: '/image/index/resume.png',
        text: '职位管理'
      },
      {
        url: '/page/index/waibao/waibao',
        src: '/image/index/pro.png',
        text: '招聘外包'
      },
      {
        url: '/page/index/laowu/laowu',
        src: '/image/index/train.png',
        text: '劳务派遣'
      },
      {
        url: '/page/index/linghuo/linghuo',
        src: '/image/index/train.png',
        text: '灵活用工'
      }
    ], //企业
    navBarData:['推荐','地区','职位','要求'],
    navbarShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 点击下拉列表

  onLoad: function (options) {
  
  },
  // 搜索职位
  serachoffices:function(){
    wx.showToast({
      title: '111111',
    })
  },
// navbar的展开
  navbarTap: function (e) {
    var i = e.currentTarget.dataset.idx;
    var index = this.data.currentTab[i];
    var hid = "currentTab[" + i + "]";
    console.log(index);
    for (var j = 0; j < this.data.currentTab.length; j++) {
      var act = "currentTab[" + j + "]"
      this.setData({
        [act]: true
      })
    }
    if (index) {
      this.setData({
        [hid]: false
      })
    } else {
      this.setData({
        [hid]: true
      })
    }
  },
// navbar的收起
  hideBar: function (e) {
    var i = Number(e.currentTarget.dataset.idx);
    console.log(typeof i)
    var index = this.data.currentTab[i];
    var hid = "currentTab[" + i + "]";
    this.setData({
      [hid]: true
    })
  },

  //招聘信息页面跳转
  toCompanyDetail: function(e){
    wx.navigateTo({
      url: '/page/job/jobdetails/jobdetails',
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
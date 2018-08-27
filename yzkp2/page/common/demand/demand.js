// page/common/demand/demand.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    workData: ['全职', '兼职'],
    payData: ['日结', '周结', '月结', '完工结算'],
    monthPayArr: [],
    educationArr: [],
    workYearArr: [],
    sexData: ['不限', '男', '女'],
    workDataActive: null,
    payDataActive: null,
    monthPayArrActive: null,
    educationArrActive: null,
    workYearArrActive: null,
    sexActive: null,
    heightActive:false,
    id:'',
    searchData:{
      recruitType:'', //全职0 兼职1
      payType:'',     //结算方式
      sex:'',
      monthPay:['',''],    //月薪
      education:['',''],  //学历
      workYear:['',''],   //工作经验  
      height1:'',
      height2:''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'monthPayArr',
      success: function (res) {
        that.setData({
          monthPayArr: res.data
        })
      },
    });
    wx.getStorage({
      key: 'educationArr',
      success: function (res) {
        that.setData({
          educationArr: res.data
        })
      },
    });
    wx.getStorage({
      key: 'workYearArr',
      success: function (res) {
        that.setData({
          workYearArr: res.data
        })
      },
    });
    wx.getStorage({
      key: 'serachId',
      success: function(res) {
        that.setData({
          id:res.data
        })
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

  },
  // 获取身高
  getHeight:function(e){
    if(e.currentTarget.dataset.type=='lower'){
      var height1 = 'searchData.height1'
      this.setData({
        [height1]: e.detail.value
      })
    } else if(e.currentTarget.dataset.type == 'higher'){
      var height2 = 'searchData.height2'
      this.setData({
        [height2]: e.detail.value
      })
    }
  },
  // 取消高亮
  setActive:function(){
    this.setData({
      heightActive: false
    })
  },
  choose: function (e) {
    var attr = e.currentTarget.dataset.type;
    var i = Number(e.currentTarget.dataset.idx);
    if (attr == 'zhibie') { //选择职别
      var recruitType = 'searchData.recruitType'
      this.setData({
        workDataActive: i,
        [recruitType]:i
      })
    } else if (attr == 'style') { //结算方式
      var payType = "searchData.payType"
      this.setData({
        payDataActive: i,
        [payType]: this.data.payData[i]
      })
    } else if (attr == 'monthpay') { //月薪
      var monthPay0 = 'searchData.monthPay[0]';
      var monthPay1 = 'searchData.monthPay[1]';
      this.setData({
        monthPayArrActive: i,
        [monthPay0]: i,
        [monthPay1]: this.data.monthPayArr[i]
      })
    } else if (attr == 'sex') { //性别
      var sex = 'searchData.sex'
      this.setData({
        sexActive: i,
        [sex]: i
      })
    } else if (attr == 'xueli') { //学历
      var education0 = 'searchData.education[0]';
      var education1 = 'searchData.education[1]'
      this.setData({
        educationArrActive: i,
        [education0]: i,
        [education1]: this.data.educationArr[i]
      })
    } else if (attr == 'workexercise') { //工作经验
      var workYear0 = 'searchData.workYear[0]';
      var workYear1 ='searchData.workYear[1]';
      this.setData({
        workYearArrActive: i,
        [workYear0]: i,
        [workYear1]: this.data.workYearArr[i]
      })
    } else if (attr == 'height') { //height
      this.setData({
        heightActive: true
      })
    }
  },
  returnBack:function(){
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    for (var key in this.data.searchData) {
      if (this.data.searchData.hasOwnProperty(key) === true) {
        prevPage.params[key] = this.data.searchData[key];
      }
    }
    prevPage.setData({ isRefresh: true })
    wx.navigateBack({//返回
      delta: 1
    })
    return

    // var serach = JSON.stringify(this.data.searchData)
    // wx.navigateTo({
    //   url: '/page/company/joblist/joblist?demand=' + serach
    // })
  },
  returnCancel:function(){
    wx.navigateBack({//返回
      delta: 1
    })
  }
})
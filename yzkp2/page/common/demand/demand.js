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
    searchData:{
      recruitType:'', //全职0 兼职1
      payType:'',     //结算方式
      sex:'',
      monthPay:'',    //月薪
      education:'',  //学历
      workYear:''   //工作经验  
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
  choose: function (e) {
    var attr = e.currentTarget.dataset.type;
    var i = Number(e.currentTarget.dataset.idx);
    if (attr == 'zhibie') { //选择职别
      this.setData({
        workDataActive: i,
        recruitType:i
      })
    } else if (attr == 'style') { //结算方式
      this.setData({
        payDataActive: i,
        payType: this.data.payData[i]
      })
    } else if (attr == 'monthpay') { //月薪
      this.setData({
        monthPayArrActive: i,
        monthPay: this.data.monthPayArr[i]
      })
    } else if (attr == 'sex') { //性别
      this.setData({
        sexActive: i,
        sex: this.data.sexData[i]
      })
    } else if (attr == 'xueli') { //学历
      this.setData({
        educationArrActive: i,
        education: this.data.educationArr[i]
      })
    } else if (attr == 'workexercise') { //工作经验
      this.setData({
        workYearArrActive: i,
        workYear: this.data.workYearArr[i]
      })
    }
  }
})
// page/job/postparttime/postparttime.js
// 发布兼职招聘
const addjobUrl = require('../../../config').addjobUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    num: '',
    sex: '',
    height: '',
    pay: '',
    payUnit:'时',
    payType: '',
    linkMan: '',
    linkPhone: '',
    attr: '',
    tm:'',
    city: '选择城市',
    address: '',
    duty: '',
    tag: '',
    sexData: ["男", "女"],
    sexHide: false,
    sexIndex: 0,
    payStyle: ['日结', '周结', '月结','完工结算'],
    styleHide: false,
    styleIndex: 0,
    heightData: [],
    heightHide: false,
    heightIndex: 0,
    payData: ['时','日','月'],
    payHide: false,
    payIndex: 0,
    // 职位属性控制
    attrData: [false, false, false],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 获取缓存数据
  onLoad: function (options) {
    var that = this;
    if(options.city){
      that.setData({
        city: options.city
      })
    }
    wx.getStorage({
      key: 'heightArr',
      success: function (res) {
        that.setData({
          heightData: res.data
        })
      },
    })
  },
  // picker相关
  bindPickerChange: function (e) {
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    if (i == 0) { //性别要求
      this.setData({
        sexIndex: e.detail.value,
        sexHide: true,
        sex: this.data.sexData[e.detail.value]
      })
    } else if (i == 1) { //身高要求
      this.setData({
        heightIndex: e.detail.value,
        heightHide: true,
        height: this.data.heightData[e.detail.value]
      })
    } else if (i == 2) { //薪资
      this.setData({
        payIndex: e.detail.value,
        payHide: true,
        payUnit: this.data.payData[e.detail.value]
      })
    } else if (i == 3) { //结算方式
      this.setData({
        styleIndex: e.detail.value,
        styleHide: true,
        payType: this.data.payStyle[e.detail.value]
      })
    } 
  },
  // 职位属性
  chooseStyle: function (e) {
    console.log(e)
    var i = Number(e.currentTarget.dataset.idx);
    var nowAttr = "attrData[" + i + "]";
    console.log(nowAttr)
    for (var j = 0; j <= 3; j++) {
      var changeAttr = "attrData[" + j + "]";
      this.setData({
        [changeAttr]: false
      });
    }
    this.setData({
      [nowAttr]: true
    })
    if (i == 0) {
      this.setData({
        attr: "普通职位",
      })
    } else if (i == 1) {
      this.setData({
        attr: "招聘外包"
      })
    } else if (i == 2) {
      this.setData({
        attr: "劳务派遣"
      })
    }
  },
  // 获取input框的值
  getValue: function (e) {
    var i = Number(e.currentTarget.dataset.idx);
    console.log(e);
    if (i == 0) { //职位名称
      this.setData({
        name: e.detail.value
      })
    } else if (i == 1) { //招聘人数
      this.setData({
        num: e.detail.value
      })
    } else if (i == 2) { //招聘人姓名
      this.setData({
        linkMan: e.detail.value
      })
    } else if (i == 3) { //招聘人联系电话
      this.setData({
        linkPhone: e.detail.value
      })
    } else if (i == 4) { //详细时间
      this.setData({
        tm:e.detail.value
      })
      console.log(this.data.tm)      
    } else if (i == 5) { //详细地址
      this.setData({
        address: e.detail.value
      })
    } else if (i == 6) { //岗位职责
      this.setData({
        duty: e.detail.value
      })
    } else if (i == 7) { //薪资
      this.setData({
        pay: e.detail.value
      })
    } else if (i == 8) { //职位要求
      this.setData({
        tag: e.detail.value
      })
    } 
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

  postBtn: function () {
    console.log(this.data.tm)
    var _this = this;
    wx.request({
      url: addjobUrl,
      data: {
        token: getApp().globalData.token,
        type: 1,
        name: _this.data.name,
        num: _this.data.num,
        sex: _this.data.sex,
        height: _this.data.height,
        pay: _this.data.pay,
        payUnit: _this.data.payUnit,
        payType: _this.data.payType,
        linkMan: _this.data.linkMan,
        linkPhone: _this.data.linkPhone,
        attr: _this.data.attr,
        tm: _this.data.tm,
        city: _this.data.city,
        address: _this.data.address,
        duty: _this.data.duty,
        tag: _this.data.tag

      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '职位发布成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateTo({
            url: '/page/company/jobmanage/jobmanage'
          })
        }
      }
    })
  }
})
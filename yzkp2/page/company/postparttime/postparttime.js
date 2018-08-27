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
    sex: '性别要求',
    height: '身高要求',
    pay: '',
    payUnit:'时',
    payType: '薪资结算方式',
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
      wx.setStorage({
        key: 'city',
        data: options.city,
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
    wx.getStorage({
      key: 'sex',
      success: function(res) {
        that.setData({
          sex:res.data
        })
      },
    })
    wx.getStorage({
      key: 'city',
      success: function (res) {
        that.setData({
          city: res.data
        })
      },
    })
    wx.getStorage({
      key: 'height',
      success: function (res) {
        that.setData({
          height: res.data
        })
      },
    })
    wx.getStorage({
      key: 'payUnit',
      success: function (res) {
        that.setData({
          payUnit: res.data
        })
      },
    })
    wx.getStorage({
      key: 'payType',
      success: function (res) {
        that.setData({
          payType: res.data
        })
      },
    })
    wx.getStorage({
      key: 'name',
      success: function (res) {
        that.setData({
          name: res.data
        })
      },
    })
    wx.getStorage({
      key: 'num',
      success: function (res) {
        that.setData({
          num: res.data
        })
      },
    })
    wx.getStorage({
      key: 'linkMan',
      success: function (res) {
        that.setData({
          linkMan: res.data
        })
      },
    })
    wx.getStorage({
      key: 'linkPhone',
      success: function (res) {
        that.setData({
          linkPhone: res.data
        })
      },
    })
    wx.getStorage({
      key: 'address',
      success: function (res) {
        that.setData({
          address: res.data
        })
      },
    })
    wx.getStorage({
      key: 'tm',
      success: function (res) {
        that.setData({
          tm: res.data
        })
      },
    })
    wx.getStorage({
      key: 'duty',
      success: function (res) {
        that.setData({
          duty: res.data
        })
      },
    })
    wx.getStorage({
      key: 'pay',
      success: function (res) {
        that.setData({
          pay: res.data
        })
      },
    })
    wx.getStorage({
      key: 'tag',
      success: function (res) {
        that.setData({
          tag: res.data
        })
      },
    })
    wx.getStorage({
      key: 'attr',
      success: function (res) {
        console.log(res.data[1])
        var attr = "attrData[" + res.data[1] + "]";
        that.setData({
          [attr]: res.data[0]
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
      wx.setStorage({
        key: 'sex',
        data: this.data.sexData[e.detail.value],
      })
    } else if (i == 1) { //身高要求
      this.setData({
        heightIndex: e.detail.value,
        heightHide: true,
        height: this.data.heightData[e.detail.value]
      })
      wx.setStorage({
        key: 'height',
        data: this.data.heightData[e.detail.value],
      })
    } else if (i == 2) { //薪资
      this.setData({
        payIndex: e.detail.value,
        payHide: true,
        payUnit: this.data.payData[e.detail.value]
      })
      wx.setStorage({
        key: 'payUnit',
        data: this.data.payData[e.detail.value],
      })
    } else if (i == 3) { //结算方式
      this.setData({
        styleIndex: e.detail.value,
        styleHide: true,
        payType: this.data.payStyle[e.detail.value]
      })
      wx.setStorage({
        key: 'payType',
        data: this.data.payStyle[e.detail.value]
      })
    } 
  },
  // 职位属性
  chooseStyle: function (e) {
    console.log(e)
    var that = this;
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
    wx.setStorage({
      key: 'attr',
      data: [that.data.attrData[i], i],
    })
  },
  // 获取input框的值
  getValue: function (e) {
    var i = Number(e.currentTarget.dataset.idx);
    console.log(e);
    if (i == 0) { //职位名称
      this.setData({
        name: e.detail.value
      })
      wx.setStorage({
        key: 'name',
        data: e.detail.value,
      })
    } else if (i == 1) { //招聘人数
      this.setData({
        num: e.detail.value
      })
      wx.setStorage({
        key: 'num',
        data: e.detail.value,
      })
    } else if (i == 2) { //招聘人姓名
      this.setData({
        linkMan: e.detail.value
      })
      wx.setStorage({
        key: 'linkMan',
        data: e.detail.value,
      })
    } else if (i == 3) { //招聘人联系电话
      this.setData({
        linkPhone: e.detail.value
      })
      wx.setStorage({
        key: 'linkPhone',
        data: e.detail.value,
      })
    } else if (i == 4) { //详细时间
      this.setData({
        tm:e.detail.value
      })
      wx.setStorage({
        key: 'tm',
        data: e.detail.value,
      })     
    } else if (i == 5) { //详细地址
      this.setData({
        address: e.detail.value
      })
      wx.setStorage({
        key: 'address',
        data: e.detail.value,
      })
    } else if (i == 6) { //岗位职责
      this.setData({
        duty: e.detail.value
      })
      wx.setStorage({
        key: 'duty',
        data: e.detail.value,
      })
    } else if (i == 7) { //薪资
      this.setData({
        pay: e.detail.value
      })
      wx.setStorage({
        key: 'pay',
        data: e.detail.value,
      })
    } else if (i == 8) { //职位要求
      this.setData({
        tag: e.detail.value
      })
      wx.setStorage({
        key: 'tag',
        data: e.detail.value,
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
        attr: _this.data.attr[0],
        tm: _this.data.tm,
        city: _this.data.city,
        address: _this.data.address,
        duty: _this.data.duty,
        tag: _this.data.tag

      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: '职位发布成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              setTimeout(function(){
                wx.navigateBack({
                  delta: 1
                })
              },2000)
            }
          })
          wx.removeStorage({
            key: 'sex',
            success: function(res) {},
          })
          wx.removeStorage({
            key: 'address',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'name',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'num',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'linkMan',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'linkPhone',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'duty',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'tag',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'workYear',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'payType',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'pay',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'payUnit',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'tm',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'attr',
            success: function(res) {},
          })
          wx.removeStorage({
            key: 'city',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'height',
            success: function (res) { },
          })
        }
      }
    })
  }
})
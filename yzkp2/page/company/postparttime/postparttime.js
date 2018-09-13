// page/job/postparttime/postparttime.js
// 发布兼职招聘
const addjobUrl = require('../../../config').addjobUrl;
// 获取职位列表
const jobListUrl = require('../../../config').jobListUrl;
// 编辑岗位
const editjobUrl = require('../../../config').editjobUrl;
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
    city: '',
    address: '',
    industry:"",
    duty: '',
    tag: '',
    id:'',
    sexData: ['不限', "男", "女"],
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
    if (options.id) {
      var _this = this;
      var companyId = '';
      wx.getStorage({
        key: 'companyId',
        success: function (res) {
          companyId = res.data;
          wx.request({
            url: jobListUrl,
            data: {
              token: getApp().globalData.token,
              companyId: companyId
            },
            success: function (res) {
              console.log(res)
              if (res.data.status == 0) {
                for (var i = 0; i < res.data.list.length; i++) {
                  if (options.id == res.data.list[i].id) {
                    _this.setData({
                      name: res.data.list[i].name,
                      num: res.data.list[i].num,
                      payType: res.data.list[i].payType,
                      pay: res.data.list[i].pay,
                      payUnit:res.data.list[i].payUnit,
                      height: res.data.list[i].height,
                      sex: res.data.list[i].sex,
                      linkMan: res.data.list[i].linkMan,
                      linkPhone: res.data.list[i].linkPhone,
                      attr:res.data.list[i].attr,
                      tm: res.data.list[i].beginTime,
                      city: res.data.list[i].city,
                      address: res.data.list[i].address,
                      duty: res.data.list[i].duty,
                      tag: res.data.list[i].tag,
                      industry: res.data.list[i].industry,
                      id: res.data.list[i].id,
                    })
                    if (res.data.list[i].attr == '普通职位') {
                      var attr = 'attrData[0]';
                      _this.setData({
                        [attr]: true
                      })
                    } else if (res.data.list[i].attr == '招聘外包') {
                      var attr = 'attrData[1]';
                      _this.setData({
                        [attr]: true
                      })
                    } else if (res.data.list[i].attr == '劳务派遣') {
                      var attr = 'attrData[2]';
                      _this.setData({
                        [attr]: true
                      })
                    }
                  }
                }
              }
            }
          })
        },
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
      key: 'industry',
      success: function (res) {
        that.setData({
          industry: res.data
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
    console.log(this.data.attr)
    
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
    var that = this;
    wx.setStorage({
      key: 'industry',
      data: that.data.industry,
    })
  },

  postBtn: function () {
    var _this = this;
    if(this.data.id!=''){
      wx.request({
        url: editjobUrl,
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
          tag: _this.data.tag,
          industry: _this.data.industry,
          id:_this.data.id
        },
        success: function (res) {
          console.log(res)
          if (res.data.status == 0) {
            wx.showToast({
              title: '职位修改成功',
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  wx.navigateBack({
                    delta: 1
                  })
                }, 2000)
              }
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          }
        }
      })
    }else{
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
          tag: _this.data.tag,
          industry: _this.data.industry
        },
        success: function (res) {
          console.log(res)
          if (res.data.status == 0) {
            wx.showToast({
              title: '职位发布成功',
              icon: 'success',
              duration: 2000,
              success: function () {
                setTimeout(function () {
                  wx.navigateBack({
                    delta: 1
                  })
                }, 2000)
              }
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1000
            })
          }
        }
      })
    }
  }
})
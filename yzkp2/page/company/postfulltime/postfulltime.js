// page/job/postfulltime/postfulltime.js
// 发布全职招聘
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
    educationLevel: '',
    workYear: '',
    payType: '',
    pay: '',
    height: '',
    sex: '',
    linkMan: '',
    linkPhone: '',
    attr: '',
    welfare: '',
    city: '',
    address: '',
    industry:'',
    duty: '',
    tag: '',
    id:'',
    // 职位属性控制
    attrData:[false,false,false],
    // 福利
    eduData:[],
    eduIndex:0,
    eduHide:false,
    payData:[],
    payHide:false,
    payIndex:0,
    sexData: ['不限',"男","女"],
    sexHide:false,
    sexIndex:0,
    payStyle:['日结','周结','月结'],
    styleHide:false,
    styleIndex:0,
    heightData:[],
    heightHide:false,
    heightIndex:0,
    exerciseData:[],
    exerciseHide:false,
    exerciseIndex:0,
    welfareData: [],
    welfare: [],
    welfarr:[]
  },
  bindPickerChange:function(e){
    var i = Number(e.currentTarget.dataset.idx);
    if(i==0){ //学历要求
      this.setData({
        eduIndex:e.detail.value,
        eduHide: true,
        educationLevel: this.data.eduData[e.detail.value]
      })
      wx.setStorage({
        key: 'educationLevel',
        data: this.data.eduData[e.detail.value]
      })
    } else if (i == 1){ //经验要求
      this.setData({
        exerciseIndex: e.detail.value,
        exerciseHide: true,
        workYear: this.data.exerciseData[e.detail.value]
      })
      wx.setStorage({
        key: 'workYear',
        data: this.data.exerciseData[e.detail.value],
      })
    } else if (i == 2) { //薪资结算方式
      this.setData({
        styleIndex: e.detail.value,
        styleHide: true,
        payType: this.data.payStyle[e.detail.value]
      })
      wx.setStorage({
        key: 'payType',
        data: this.data.payStyle[e.detail.value]
      })
    } else if (i == 3) { //薪资范围
      this.setData({
        payIndex: e.detail.value,
        payHide: true,
        pay: this.data.payData[e.detail.value]
      })
      wx.setStorage({
        key: 'pay',
        data: this.data.payData[e.detail.value]
      })
    } else if (i == 4) { //身高要求
      this.setData({
        heightIndex: e.detail.value,
        heightHide: true,
        height: this.data.heightData[e.detail.value]
      })
      wx.setStorage({
        key: 'height',
        data: this.data.heightData[e.detail.value]
      })
    } else if (i == 5) { //性别要求
      this.setData({
        sexIndex: e.detail.value,
        sexHide: true,
        sex: this.data.sexData[e.detail.value]
      })
      wx.setStorage({
        key: 'sex',
        data: this.data.sexData[e.detail.value]
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 获取缓存数据
  onLoad: function (options) {
    console.log(options)
    if(options.id){
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
                for(var i=0;i<res.data.list.length;i++){
                  if(options.id==res.data.list[i].id){
                    _this.setData({
                      name: res.data.list[i].name,
                      num: res.data.list[i].num,
                      educationLevel: res.data.list[i].educationLevel,
                      workYear: res.data.list[i].workYear,
                      payType: res.data.list[i].payType,
                      pay: res.data.list[i].pay,
                      height: res.data.list[i].height,
                      sex: res.data.list[i].sex,
                      linkMan: res.data.list[i].linkMan,
                      linkPhone: res.data.list[i].linkPhone,
                      welfare: res.data.list[i].welfare,
                      city: res.data.list[i].city,
                      address: res.data.list[i].address,
                      duty: res.data.list[i].duty,
                      tag: res.data.list[i].tag,
                      industry: res.data.list[i].industry,
                      id: res.data.list[i].id,
                      attr: res.data.list[i].attr
                    })
                    // 设置checkbox的checked
                    var newWelfare = JSON.parse(_this.data.welfare);
                    var welfarr = _this.data.welfarr;
                    for (var z = 0; z < _this.data.welfareData.length;z++){
                      welfarr.push(false)
                      for (var k = 0; k < newWelfare.length;k++){
                        if (_this.data.welfareData[z] == newWelfare[k]){
                          welfarr[z]=true;
                        }
                      }
                    }
                    _this.setData({
                      welfarr: welfarr
                    })
                    if (res.data.list[i].attr=='普通职位'){
                      var attr = 'attrData[0]';
                      _this.setData({
                        [attr]:true
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

    var that = this;
    if (options.city){
      that.setData({
        city: options.city
      })
    }
    wx.getStorage({
      key: 'educationArr',
      success: function(res) {
        that.setData({
          eduData:res.data
        })
      },
    })
    wx.getStorage({
      key: 'monthPayArr',
      success: function(res) {
        that.setData({
          payData:res.data
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
      key: 'heightArr',
      success: function (res) {
        that.setData({
          heightData: res.data
        })
      },
    })
    wx.getStorage({
      key: 'workYearArr',
      success: function (res) {
        that.setData({
          exerciseData: res.data
        })
      },
    })
    wx.getStorage({
      key: 'name',
      success: function(res) {
        that.setData({
          name:res.data
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
      key: 'duty',
      success: function (res) {
        that.setData({
          duty: res.data
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
      key: 'educationLevel',
      success: function (res) {
        that.setData({
          educationLevel: res.data
        })
      },
    })
    wx.getStorage({
      key: 'workYear',
      success: function (res) {
        that.setData({
          workYear: res.data
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
      key: 'payType',
      success: function (res) {
        that.setData({
          payType: res.data
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
      key: 'sex',
      success: function (res) {
        that.setData({
          sex: res.data
        })
      },
    })
    wx.getStorage({
      key: 'attr',
      success: function (res) {
        console.log(res.data[1])
        var attr = "attrData[" + res.data[1]+"]";
        that.setData({
          [attr]: res.data[0]
        })
      },
    })

    wx.getStorage({
      key: 'welfareArr',
      success: function (res) {
        that.setData({
          welfareData: res.data
        })
      },
    })
  },
  // checkbox选择
  checkboxChange: function (e) {
    this.setData({
      welfare: e.detail.value
    })
  },
  // 职位属性
  chooseStyle:function(e){
    console.log(e)
    var that = this;
    var i = Number(e.currentTarget.dataset.idx);
    var nowAttr = "attrData["+i+"]";
    console.log(nowAttr)
    for(var j = 0;j<=3;j++){
      var changeAttr = "attrData[" + j + "]";
      this.setData({
        [changeAttr]:false
      });
    }
    this.setData({
      [nowAttr]:true
    })
    if(i==0){
      this.setData({
        attr:"普通职位",
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
      data: [that.data.attrData[i],i],
    })
  },
  // 获取input框的值
  getValue:function(e){
    var i = Number(e.currentTarget.dataset.idx);
    console.log(e);
    if(i==0){ //职位名称
      this.setData({
        name:e.detail.value
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
    } else if (i == 4) { //详细地址
      this.setData({ 
        address: e.detail.value
      })
      wx.setStorage({
        key: 'address',
        data: e.detail.value,
      })
    } else if (i == 5) { //岗位职责
      this.setData({
        duty: e.detail.value
      })
      wx.setStorage({
        key: 'duty',
        data: e.detail.value,
      })
    } else if (i == 6) { //职位要求
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
  postBtn:function(){
    var _this = this;
    if(_this.data.id!=''){
      wx.request({
        url: editjobUrl,
        data: {
          token: getApp().globalData.token,
          type: 0,
          name: _this.data.name,
          num: _this.data.num,
          educationLevel: _this.data.educationLevel,
          workYear: _this.data.workYear,
          payType: _this.data.payType,
          pay: _this.data.pay,
          height: _this.data.height,
          sex: _this.data.sex,
          linkMan: _this.data.linkMan,
          linkPhone: _this.data.linkPhone,
          attr: _this.data.attr,
          welfare: _this.data.welfare,
          city: _this.data.city,
          address: _this.data.address,
          duty: _this.data.duty,
          tag: _this.data.tag,
          industry: _this.data.industry,
          id:_this.data.id
        },
        success: function (res) {
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
          type: 0,
          name: _this.data.name,
          num: _this.data.num,
          educationLevel: _this.data.educationLevel,
          workYear: _this.data.workYear,
          payType: _this.data.payType,
          pay: _this.data.pay,
          height: _this.data.height,
          sex: _this.data.sex,
          linkMan: _this.data.linkMan,
          linkPhone: _this.data.linkPhone,
          attr: _this.data.attr,
          welfare: _this.data.welfare,
          city: _this.data.city,
          address: _this.data.address,
          duty: _this.data.duty,
          tag: _this.data.tag,
          industry: _this.data.industry
        },
        success: function (res) {
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
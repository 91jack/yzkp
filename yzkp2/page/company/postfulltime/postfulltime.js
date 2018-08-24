// page/job/postfulltime/postfulltime.js
// 发布全职招聘
const addjobUrl = require('../../../config').addjobUrl;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    num: '',
    educationLevel: '学历要求',
    workYear: '经验要求',
    payType: '薪资结算方式',
    pay: '薪资范围',
    height: '身高要求',
    sex: '性别要求',
    linkMan: '',
    linkPhone: '',
    attr: '普通职位',
    welfare: '',
    city: '选择城市',
    address: '',
    duty: '',
    tag: '',
    // 职位属性控制
    attrData:[false,false,false],
    // 福利
    eduData:[],
    eduIndex:0,
    eduHide:false,
    payData:[],
    payHide:false,
    payIndex:0,
    sexData:["男","女"],
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
    exerciseIndex:0
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
  
  },
  postBtn:function(){
    var _this = this;
    wx.request({
      url: addjobUrl,
      data: {
        token: getApp().globalData.token,
        type:0,
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
        tag: _this.data.tag

      },
      success: function (res) {
        console.log(res)
        if(res.data.status==0){
          wx.showToast({
            title: '职位发布成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateTo({
            url: '/page/company/jobmanage/jobmanage'
          })
          wx.showToast({
            title: '职位发布成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateTo({
            url: '/page/company/jobmanage/jobmanage'
          })
          wx.removeStorage({
            key: 'sex',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'adreess',
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
            key: 'educationLevel',
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
            key: 'city',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'pay',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'attr',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'height',
            success: function (res) { },
          })
          wx.removeStorage({
            key: 'address',
            success: function (res) { },
          })
        }
      }
    })
  }
})
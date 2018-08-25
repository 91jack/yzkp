// page/index/contract/step1/step1.js
// 员工基本信息填写
const regBaseInfoUrl = require('../../../../config').regBaseInfoUrl;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    sex:'',
    id_no:'',
    education_level:'',
    mobile:'',
    link_mobile:'',
    address:'',
    department:'',
    position:'',
    in_date:'',
    pickerSel:["男","女"],
    sexIndex:0,
    sexHide:false,
    educationSel:[],
    educationIndex:0,
    educationHide:false,
    modalShow:false,
    indate:'',   //入职时间
    inHide:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var That = this;
    wx.getStorage({
      key: 'educationArr',
      success: function(res) {
        That.setData({
          educationSel:res.data
        })
      },
    })
  },
  // 获取input值
  getValue:function(e){
    var i = e.currentTarget.dataset.inx;
    if(i=="0"){           //姓名
      this.setData({
        name: e.detail.value
      })   
    } else if (i == "1") {// 获取身份证号码
      this.setData({
        id_no: e.detail.value
      })
    } else if (i == "2") {// 获取电话号码
      this.setData({
        mobile: e.detail.value
      })    
    } else if (i == "3") {// 获取紧急联系电话
      this.setData({
        link_mobile: e.detail.value
      })    
    } else if (i == "4") {// 获取地址
      this.setData({
        address: e.detail.value
      })   
    } else if (i == "5") {// 获取部门
      this.setData({
        department: e.detail.value
      })      
    } else if (i == "6") {// 获取职位
      this.setData({
        position: e.detail.value
      })     
    } else if (i == "7") {// 获取入职时间
      this.setData({
        in_date: e.detail.value
      })    
    }
  },
  
  
  // picker
  bindPickerChange: function (e){
    var i = e.currentTarget.dataset.idx;
    if(i=="0"){
      this.setData({
        sexIndex: e.detail.value,
        sexHide:true,
        sex: this.data.pickerSel[e.detail.value]
      })
      wx.setStorage({
        key: 'sex',
        data: this.data.pickerSel[e.detail.value],
      })
    }else if(i=="1"){
      this.setData({
        educationIndex: e.detail.value,
        educationHide: true,
        education_level: this.data.educationSel[e.detail.value]
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
  submitBtn:function(){
    var _this = this;
    wx.request({
      url: regBaseInfoUrl,
      data: {
        token: getApp().globalData.token,
        name:this.data.name,
        sex: this.data.sex,
        id_no: this.data.id_no,
        education_level: this.data.education_level,
        mobile: this.data.mobile,
        link_mobile: this.data.link_mobile,
        address: this.data.address,
        department: this.data.department,
        position: this.data.position,
        in_date: this.data.indate
      },
      success: function (res) {
        console.log(res);
        if (res.data.status == 0) {
          wx.showToast({
            title: '信息提交成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '/page/employee/contract/step2/step2',              
                })
              }, 1000)
            }
          })
          wx.setStorage({
            key: 'employeesId',
            data: res.data.obj.id,
          })
          wx.setStorage({
            key: 'employeesName',
            data: _this.data.name,
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:'none',
            duration: 2000
          })
        }
      }
    })
  },
  // 继续填写
  writeContinue:function(){
    this.setData({
      modalShow:true
    })
  },
  // 暂时放弃
  returnTab:function(){
    console.log(1111)
    wx.navigateBack({
      delta: 2
    })
  },
  // 选择入职时间
  bindDateChange:function(e){
    var value = e.detail.value;
    console.log(value)
    this.setData({
      indate:value,
      inHide:true
    })
  }
})
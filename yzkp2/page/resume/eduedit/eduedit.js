// page/my/resume/eduedit/eduedit.js
const addEduexperienceUrl = require('../../../config').addEduexperienceUrl;
const resumeUrl = require('../../../config').resumeUrl;
const editEduexperienceUrl = require('../../../config').editEduexperienceUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school:'',
    educationArr:[],
    eduIndex:0,
    eduHide:false,
    level:'',
    inDate:'',
    inHide:false,
    outDate:'',
    outHide:false,
    profession:'',
    resumeId:'',
    id:'',
    getIn: "请选择",
    getOut:"请选择",
    getLevel:'请选择',
    education:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'educationArr',
      success: function(res) {
        that.setData({
          educationArr:res.data
        })
      },
    })
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId:res.data
        })
      },
    })
    if(options.id){
      that.setData({
        id: options.id
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
    if(this.data.id){
      var _this = this;
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          console.log(res)
          for (var i = 0; i < res.data.obj.education.length; i++) {
            if (res.data.obj.education[i].id == _this.data.id) {
              _this.setData({
                education: res.data.obj.education[i],
                school: res.data.obj.education[i].schoolName,
                level: res.data.obj.education[i].level,
                inDate: res.data.obj.education[i].beginDate,	
                outDate: res.data.obj.education[i].endDate,		
                profession: res.data.obj.education[i].profession
              })
            }
          }
        }
      })
    }
  },
  //学历选择
  bindLevelSelect:function(e){
    console.log(e);
    var i = Number(e.detail.value);
    this.setData({
      eduIndex:i,
      level: this.data.educationArr[i],
      eduHide:true
    })
  },
  // 日期选择
  bindDateChange:function(e){
    var i =Number(e.currentTarget.dataset.idx);
    if(i==0){ //入学时间 
      this.setData({
        inDate:e.detail.value,
        inHide:true
      })
    } else if (i == 1) { //毕业时间 
      this.setData({
        outDate: e.detail.value,
        outHide: true
      })
    }
  },
  // 获取输入框的值
  getValue:function(e){
    var value = e.detail.value;
    var  i = Number(e.currentTarget.dataset.idx);
    if(i==0){  //学校名称
      this.setData({
        school: value
      })
    } else if (i == 1) {  //专业名称
      this.setData({
        profession: value
      })
    }
  },
  // 添加教育经验
  addEdu:function(){
    var _this = this;
    if(_this.data.id){
      wx.request({
        url: editEduexperienceUrl,
        data: {
          token: getApp().globalData.token,
          id:_this.data.id,
          resumeId: _this.data.resumeId,
          schoolName: _this.data.school,
          level: _this.data.level,
          beginDate: _this.data.inDate,
          endDate: _this.data.outDate,
          profession: _this.data.profession
        },
        success: function (res) {
          console.log(res)
          if (res.data.status == 0) {
            wx.navigateBack({
              delta: 1
            })  
          }
        }
      })
    }else{
      wx.request({
        url: addEduexperienceUrl,
        data: {
          token: getApp().globalData.token,
          resumeId: _this.data.resumeId,
          schoolName: _this.data.school,
          level: _this.data.level,
          beginDate: _this.data.inDate,
          endDate: _this.data.outDate,
          profession: _this.data.profession
        },
        success: function (res) {
          console.log(res)
          if (res.data.status == 0) {
            wx.navigateBack({
              delta: 1
            }) 
          }
        }
      })
    }
  }
})
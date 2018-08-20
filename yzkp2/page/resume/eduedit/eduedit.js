// page/my/resume/eduedit/eduedit.js
const addEduexperienceUrl = require('../../../config').addEduexperienceUrl;
Page({

  // /**
  //  * 页面的初始数据
  //  */
  // data: {
  //   school:'',
  //   educationArr:[],
  //   eduIndex:0,
  //   eduHide:false,
  //   level:'',
  //   inDate:'',
  //   inHide:false,
  //   outDate:[],
  //   outHide:false,
  //   profession:'',
  // },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  //   var that = this;
  //   wx.getStorage({
  //     key: 'educationArr',
  //     success: function(res) {
  //       that.setData({
  //         educationArr:res.data
  //       })
  //     },
  //   })
  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {
  
  // },
  // //学历选择
  // bindLevelSelect:function(e){
  //   console.log(e);
  //   var i = Number(e.detail.value);
  //   this.setData({
  //     eduIndex:i,
  //     level: this.data.educationArr[i],
  //     eduHide:true
  //   })
  // },
  // // 日期选择
  // bindDateChange:function(e){
  //   var i =Number(e.currentTarget.dataset.idx);
  //   if(i==0){ //入学时间 
  //     this.setData({
  //       inDate:e.detail.value,
  //       inHide:true
  //     })
  //   } else if (i == 1) { //毕业时间 
  //     this.setData({
  //       outDate: e.detail.value,
  //       outHide: true
  //     })
  //   }
  // },
  // // 获取输入框的值
  // getValue:function(e){
  //   var value = e.detail.value,
  //   if(i==0){  //学校名称
  //     this.setData({
  //       school: value
  //     })
  //   } else if (i == 1) {  //专业名称
  //     this.setData({
  //       profession: value
  //     })
  //   }
  // },
  // // 添加教育经验
  // addEdu:function(){
  //   var _this = this;
  //   wx.request({
  //     url: addEduexperienceUrl,
  //     data: {
  //       token: getApp().globalData.token,
  //       resumeId: _this.data.resumeId,
  //       schoolName: _this.data.school,
  //       level: _this.data.level,
  //       beginDate: _this.data.inDate,
  //       endDate: _this.data.outDate,
  //       profession: _this.data.profession
  //     },
  //     success: function (res) {
  //       console.log(res)
  //       // _this.setData({
  //       //   baseInfo: res.data.obj.base,
  //       //   work: res.data.obj.work,
  //       //   education: res.data.obj.education,
  //       //   project: res.data.obj.project
  //       // })
  //     }
  //   })
  // }
})
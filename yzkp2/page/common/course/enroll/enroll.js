// page/index/course/enroll/enroll.js
//能力提升报名
const courseenrolltUrl = require('../../../../config').courseenrolltUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
    webchat:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     id:options.id
   })
  },
  getValue:function(e){
    var name = e.currentTarget.dataset.name;
   
    if(name=='name'){
      this.setData({
        name: e.detail.value
      })
    }else if(name=="phone"){
      this.setData({
        phone: e.detail.value
      })
     
    }else{
      this.setData({
        webchat: e.detail.value
      })
      
    }
  },
  submitBtn:function(){
    var _this = this;
    wx.request({
      url: courseenrolltUrl,
      data: {
        token: getApp().globalData.token,
        id: _this.data.id,
        name: _this.data.name,
        phone: _this.data.phone,
        webchat: _this.data.webchat
      },
      success: function (res) {
       console.log(res)
       if(res.data.status == 0){
         wx.showToast({
           title: '您的课程报名已成功',
           icon: 'success',
           duration: 2000,
           success:function(){
             setTimeout(function(){
               wx.navigateBack({
                 delta: 2
               })
              //  wx.navigateTo({
              //    url: '/page/common/course/courselist/courselist',
              //  })
             },1000)
            
          }
         })
       }else{
         wx.showToast({
           title: '报名成功',
           icon: 'fail',
           duration: 2000,
           success: function () {
             setTimeout(function () {
               wx.navigateBack({
                 delta: 2
               })
              //  wx.navigateTo({
              //    url: '/page/common/course/courselist/courselist',
              //  })
             }, 1000)

           }
         })
       }
      }
    })
  }


})
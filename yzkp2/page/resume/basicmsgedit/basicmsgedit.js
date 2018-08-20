// page/my/resume/basicmsgedit/basicmsgedit.js
// 新增简历基本信息
addBasicUrl = require('../../../config').addBasicUrl;

// 修改简历基本信息
editBasicUrl = require('../../../config').editBasicUrl;
const resumeUrl = require('../../../config').resumeUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workExerciseData:[],
    workExerciseHide:false,
    workExerciseIndex:0,
    nowType: ['目前再找工作', '观望有好机会会考虑','我不想换工作'],
    nowTypeHide:false,
    nowTypeIndex:0,
    sexData:["男","女"],
    sexHide:false,
    sexIndex:0,
    educationLevel:'',
    name: '',
    sex: '请选择',
    age: '',
    workYear: '',
    state: '请选择',
    address: '渝北区',
    mobile: '18502323596',
    email: '2764132626@qq.com',
    height:'',
    resumeId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('-----------简历-------------')
    var that = this;
    // console.log(getApp().globalData.resume)
    wx.getStorage({
      key: 'workYearArr',
      success: function(res) {
        console.log(res)
        that.setData({
          workExerciseData:res.data
        })
      },
    });
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId: res.data
        });
        console.log(that.data.resumeId)
        if (that.data.resumeId) {
          wx.request({
            url: resumeUrl,
            data: {
              token: getApp().globalData.token,
            },
            success: function (res) {
              console.log(res)
              var bsData = res.data.obj.base;
              that.setData({
                name: bsData.name,
                sex: bsData.sex,
                age: bsData.age,
                workYear: bsData.workYear,
                state: bsData.state,
                address: bsData.address,
                mobile: bsData.mobile,
                email: bsData.email,
                height: bsData.height
              })
            }
          })
        }
      },
    });
  },
// 获取picker的item
  bindChange:function(e){
    var that = this;
    var i = Number(e.currentTarget.dataset.idx)
    if(i==0){ //性别的选取
      that.setData({
        sexIndex:e.detail.value,
        sex: e.detail.value,
        sexHide:true
      })
    } else if (i == 2) { //目前状态
      that.setData({
        nowTypeIndex: e.detail.value,
        state: e.detail.value,
        nowTypeHide: true
      })
    }
  },
  // 获取输入框内容
  getValue:function(e){
    var that = this;
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    if (i == 0) { //姓名
      that.setData({
        name:e.detail.value
      })
    } else if (i == 1) { //年龄
      that.setData({
        age: e.detail.value
      })
    } else if (i == 2) { //现居住地址
      that.setData({
        address: e.detail.value
      })
    } else if (i == 3) { //联系电话
      that.setData({
        mobile: e.detail.value
      })
    } else if (i == 4) { //邮箱
      that.setData({
        email: e.detail.value
      })
    } else if (i == 5) { //工作年限
      that.setData({
        workYear: e.detail.value
      })
    } else if (i == 6) { //身高
      that.setData({
        height: e.detail.value
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
  /**
   * 新增简历基本信息
   */
  saveEdit:function(){
    var that = this.data;
    if (this.data.resumeId){
      wx.request({
        url: editBasicUrl,
        data: {
          token: getApp().globalData.token,
          id: that.resumeId,
          name: that.name,
          sex: Number(that.sex),
          age: Number(that.age),
          educationLevel: that.educationLevel,
          workYear: that.workYear,
          state: Number(that.state),
          address: that.address,
          mobile: that.mobile,
          email: that.email,
          educationLevel: '11',
          height: that.height
        },
        success: function (res) {
          console.log(res)
          if (res.data.status == 0) {
            wx.navigateTo({
              url: '/page/common/resume/index/index',
            })
          }
        }
      })
    }else{
      wx.request({
        url: addBasicUrl,
        data: {
          token: getApp().globalData.token,
          name: that.name,
          sex: Number(that.sex),
          age: Number(that.age),
          educationLevel: that.educationLevel,
          workYear: that.workYear,
          state: Number(that.state),
          address: that.address,
          mobile: that.mobile,
          email: that.email,
          educationLevel: '11',
          height: that.height
        },
        success: function (res) {
          console.log(res)
          wx.setStorage({
            key: 'resumeId',
            data: res.data.obj.id,
          })
          if (res.data.status == 0) {
            wx.navigateTo({
              url: '/page/common/resume/index/index',
            })
          }
        }
      })
      
    }
    
  }
})
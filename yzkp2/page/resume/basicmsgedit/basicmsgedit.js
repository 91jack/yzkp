// page/my/resume/basicmsgedit/basicmsgedit.js
// 新增简历基本信息
addBasicUrl = require('../../../config').addBasicUrl;

// 修改简历基本信息
editBasicUrl = require('../../../config').editBasicUrl;
const resumeUrl = require('../../../config').resumeUrl;
// 上传图片
const uploadImgUrl = require('../../../config').uploadImgUrl;
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
    getSex: '请选择',
    sex:'',
    age: '',
    workYear: '',
    getstate:'请选择',
    state: '',
    address: '',
    mobile: '',
    email: '',
    height:'',
    resumeId:'',
    headImg:''  //头像
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
              if (bsData.sex=='男'){
                that.setData({
                  sex:0
                })
              } else if (bsData.sex=='女'){
                that.setData({
                  sex: 1
                })
              }
              for (var i = 0; i < that.data.nowType.length;i++){
                if (that.data.nowType[i] == bsData.state){
                  that.setData({
                    state:i
                  })
                }
              }
              that.setData({
                name: bsData.name,
                getSex: bsData.sex,
                age: bsData.age,
                workYear: bsData.workYear,
                getstate: bsData.state,
                address: bsData.address,
                mobile: bsData.mobile,
                email: bsData.email,
                height: bsData.height,
                headImg: bsData.headImg
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
    if (this.data.sex=='男'){
      this.setData({
        sex:'0'
      })
    }else if(this.data.sex=='女'){
      this.setData({
        sex:'1'
      })
    }
    console.log(this.data.sex)
  },
  // 上传头像
  uploadheadPic:function(){
    var that = this;
    wx.chooseImage({
      success: function (res) {
        console.log(res);
        that.setData({
          headImg: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: uploadImgUrl,
          filePath: res.tempFilePaths[0],
          name: 'file',
          formData: {
            token: getApp().globalData.token,
            suffix: 'png'
          },
          success: function (result) {
            console.log(JSON.parse(result.data))
            var imgData = JSON.parse(result.data);
            if (imgData.status == 0) {
              console.log(imgData.obj)
              that.setData({
                headImg: imgData.obj
              })
            }
          }
        })
      }
    })
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
          headImg: that.headImg,//头像上传
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
              url: '/page/resume/index/index',
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
              url: '/page/resume/index/index',
            })
          }
        }
      })
      
    }
    
  }
})
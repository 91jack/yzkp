// page/index/contract/step3/step3.js
// 员工证明材料填写
const regImgInfoUrl = require('../../../../config').regImgInfoUrl;
const uploadImgUrl = require('../../../../config').uploadImgUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlData: ['', '', '', '', '', '', '', '',''],
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        that.setData({
          id: Number(res.data)
        })
      },
    })
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
  // 上传照片
  uploadPic:function(e){
    var that = this;
    var i = Number(e.currentTarget.dataset.idx);
    var currentUrl = "urlData[" + i +"]";
    wx.chooseImage({
      success: function (res) {      
        var tempFilePaths = res.tempFilePaths[0];
        that.setData({
          [currentUrl]: tempFilePaths
        })
        wx.uploadFile({
          url: uploadImgUrl, 
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            token: getApp().globalData.token,
            suffix:'png'
          },
          success: function (result) {
            var imgData = JSON.parse(result.data);
            if (imgData.status==0){
              that.setData({
                [currentUrl]: imgData.obj
              })
            }
          }
        })
      
      }
    })
  },
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: regImgInfoUrl,
      data: {
        token: getApp().globalData.token,
        id: this.data.id,
        head_img: this.data.urlData[0],
        id_no_img1: this.data.urlData[1],
        id_no_img2: this.data.urlData[2],
        account_img1: this.data.urlData[3],
        account_img2: this.data.urlData[4],
        account_img3: this.data.urlData[5],
        education_img: this.data.urlData[6],
        leave_img: this.data.urlData[7],
        other_img: this.data.urlData[8]
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '材料提交成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '/page/employee/contract/step4/step4',
                })
              }, 2000)
            }            
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon:'none',
            duration: 2000,
          })
        }
      }
    })
  }
})
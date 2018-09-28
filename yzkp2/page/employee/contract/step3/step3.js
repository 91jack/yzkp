// page/index/contract/step3/step3.js
// 员工证明材料填写
const regImgInfoUrl = require('../../../../config').regImgInfoUrl;
const uploadImgUrl = require('../../../../config').uploadImgUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id_no_img1: '',
    id_no_img2: '',
    head_img: '',
    account_img1: '',
    account_img2: '',
    account_img3: '',
    leave_img: '',
    education_img: '',
    other_img: '',
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
    var i = e.currentTarget.dataset.idx;

    getApp().globalData.reLogin = false;
    wx.chooseImage({
      success: function (res) {      
        getApp().globalData.reLogin = true;
        var tempFilePaths = res.tempFilePaths[0];

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
              if (i == 'head_img') {
                that.setData({
                  head_img: imgData.obj
                })
              } else if (i == 'id_no_img1') {
                that.setData({
                  id_no_img1: imgData.obj
                })
              } else if (i == 'id_no_img2') {
                that.setData({
                  id_no_img2: imgData.obj
                })
              } else if (i == 'account_img1') {
                that.setData({
                  account_img1: imgData.obj
                })
              } else if (i == 'account_img2') {
                that.setData({
                  account_img2: imgData.obj
                })
              } else if (i == 'account_img3') {
                that.setData({
                  account_img3: imgData.obj
                })
              } else if (i == 'leave_img') {
                that.setData({
                  leave_img: imgData.obj
                })
              } else if (i == 'education_img') {
                that.setData({
                  education_img: imgData.obj
                })
              } else if (i == 'other_img') {
                that.setData({
                  other_img: imgData.obj
                })
              }
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
        head_img: this.data.head_img,
        id_no_img1: this.data.id_no_img1,
        id_no_img2: this.data.id_no_img2,
        account_img1: this.data.account_img1,
        account_img2: this.data.account_img2,
        account_img3: this.data.account_img3,
        education_img: this.data.education_img,
        leave_img: this.data.leave_img,
        other_img: this.data.other_img
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
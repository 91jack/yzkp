// page/index/contract/step3/step3.js
// 员工证明材料填写
const regImgInfoUrl = require('../../../../config').regImgInfoUrl;
const uploadImgUrl = require('../../../../config').uploadImgUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlData: ['', '', '', '', '', '', '', '','']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: regBaseInfoUrl,
      data: {
        token: getApp().globalData.token,
        name: '小张',
        sex: '男',
        id_no: '500000000000000000',
        education_level: '本科',
        mobile: '18500000000',
        link_mobile: '13113113111',
        address: '重庆市金开大道110号永固金鼎时代17楼4-6',
        department: '技术部',
        position: '程序员鼓励师',
        in_date: '2018-08-13'
      },
      success: function (res) {
        console.log(res)
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
          }, {
              key: 'employeesName',
              data: _this.data.name
            })
        }
      }
    })
  }




 

 
})
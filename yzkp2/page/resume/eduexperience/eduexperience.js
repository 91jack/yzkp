// page/my/resume/eduexperience/eduexperience.js
// 获取简历详情
const resumeUrl = require('../../../config').resumeUrl;

// 删除教育经历
const delEduexperienceUrl = require('../../../config').delEduexperienceUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    education:[]
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
    var _this = this;
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          education: res.data.obj.education,
        })
      }
    })
  },
  delBtn: function (e) {
    console.log(e)
    wx.showModal({
      title: '温馨提示',
      content: '您确定要删除该数据吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: delEduexperienceUrl,
            data: {
              token: getApp().globalData.token,
              id: e.currentTarget.dataset.id
            },
            success: function (res) {
              if (res.data.status == 0) {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 2000
                })
              }

            }
          })
        } else if (res.cancel) {

        }
      }
    })

  }
})
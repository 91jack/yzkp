// page/my/resume/project/project.js
// 获取简历详情
const resumeUrl = require('../../../config').resumeUrl;

// 删除项目经历
const delProjectUrlmeUrl = require('../../../config').delProjectUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    project:[]
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
    this.refresh()
  },
  refresh: function () {
    var _this = this;
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        console.log(res)
        _this.setData({
          project: res.data.obj.project
        })
      }
    })
  },
  // 删除
  delBtn: function (e) {
    var that = this
    wx.showModal({
      title: '温馨提示',
      content: '您确定要删除该数据吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: delProjectUrlmeUrl,
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
                that.refresh()
              }

            }
          })
        } else if (res.cancel) {

        }
      }
    })

  }
})
// page/job/jobmanage/jobmanage.js
// 企业职位管理
const jobListUrl = require('../../../config').jobListUrl;
// 刷新职位
const refreshJobUrl = require('../../../config').refreshJobUrl;

// 删除职位
const delJobUrl = require('../../../config').delJobUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jianlimanage: function () {
    wx.navigateTo({
      url: '/page/company/jianlimanage/jianlimanage',
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
    this.jobList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 删除职位
   */
  delJob: function (event) {
    var _this = this;
    wx.showModal({
      title: '温馨提示',
      content: '你确定要删除该职位吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: delJobUrl,
            data: {
              token: getApp().globalData.token,
              id: event.currentTarget.dataset.jobid
            },
            success: function (res) {
              if (res.data.status == 0) {
                wx.showToast({
                  title: '职位删除成功',
                  icon: 'success',
                  duration: 2000
                })
                _this.jobList()
              }


            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },
  /**
   * 刷新职位
   */
  refreshJob: function (event) {
    var _this = this;
    wx.request({
      url: refreshJobUrl,
      data: {
        token: getApp().globalData.token,
        id: event.currentTarget.dataset.jobid
      },
      success: function (res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: '职位刷新成功',
            icon: 'success',
            duration: 2000
          })
          _this.jobList()
        }
      }
    })
  },
  jobList: function () {
    var _this = this;
    var companyId = '';
    wx.getStorage({
      key: 'companyId',
      success: function(res) {
        companyId = res.data;
      },
    })

    wx.request({
      url: jobListUrl,
      data: {
        token: getApp().globalData.token,
        companyId: companyId
      },
      success: function (res) {
        if (res.data.status == 0) {

          _this.setData({
            jobList: res.data.list
          })
        }

      }
    })
  }

})
// page/my/resume/jobexperience/jobexperience.js
// 获取简历详情
const resumeUrl = require('../../../config').resumeUrl;

// 删除工作经验
const delJobexperienceUrl = require('../../../config').delJobexperienceUrl;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    resumeId:'',
    work:{},
    refresh: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId:res.data
        })
        that.refresh();
        that.data.refresh = true
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
    this.refresh()   
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
  refresh: function(){
    var that = this
    wx.request({
      url: resumeUrl,
      data: {
        token: getApp().globalData.token,
      },
      success: function (res) {
        if(res.data.status==0){
          that.setData({
            work: res.data.obj.work,
          })
        }
      }
    })
  },
  delBtn:function(e){
    var that = this;
    wx.showModal({
      title: '温馨提示',
      content: '您确定要删除该数据吗',
      success: function (res) {
        if (res.confirm) {
          wx.request({
      url: delJobexperienceUrl,
      data:{
        token: getApp().globalData.token,
        id:e.currentTarget.dataset.id
      },
      success:function(res){
        if(res.data.status == 0){
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
          that.refresh();
        }
      }
    })
        } else if (res.cancel) {
         
        }
      }
    })
  }
})
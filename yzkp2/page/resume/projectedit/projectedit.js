// page/my/resume/projectedit/projectedit.js
const resumeUrl = require('../../../config').resumeUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inDate: '请选择',
    inHide: false,
    outDate: '请选择',
    outHide: false,
    conpanyName: '',
    partment: '',
    job: '',
    resumeId: '',
    id: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      id: options.id
    })
    var that = this;
    wx.getStorage({
      key: 'resumeId',
      success: function (res) {
        that.setData({
          resumeId: res.data
        })
      },
    });
    if (that.data.id == options.id) {
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          console.log(res)
          var bigData = res.data.obj.project;
          for (var i = 0; i < bigData.length; i++) {
            if (bigData[i].id == options.id) {
              that.setData({
                inData: bigData[i].beginDate,
                outData: bigData[i].endDate,
                conpanyName: bigData[i].name,
                partment: bigData[i].role,
                job: bigData[i].tag,
              })
            }
          }
        }
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
  bindDateChange:function(e){
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    // if(i==0){   //项目开始时间

    // }
  },
  
})
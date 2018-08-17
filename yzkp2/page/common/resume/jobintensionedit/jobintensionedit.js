// page/my/resume/jobintensionedit/jobintensionedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monthPayArr:[],
    monthPayIndex:0,
    monthPayHide:false,
    id:'',			
    workName:'',		
    workPay:'',				
    workAddress:'',				
    industry:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'monthPayArr',
      success: function(res) {
        that.setData({
          monthPayArr:res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
// 获取期望薪资
  bindPicker:function(e){
    this.setData({
      workPay:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  }
})
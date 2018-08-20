// page/my/resume/eduedit/eduedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school:'',
    educationArr:[],
    eduIndex:0,
    level:'',
    inDate:'',
    inHide:false,
    outDate:[],
    outHide:'',
    profession:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'educationArr',
      success: function(res) {
        that.setData({
          educationArr:res.data
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
  //学历选择
  bindLevelSelect:function(e){
    var i = e.detail.value;
    this.setData({
      eduIndex:i,
      level: that.data.educationArr[i]
    })
  },
})
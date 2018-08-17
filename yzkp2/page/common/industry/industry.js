// page/common/industry/industry.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    industry: null,
    currentSelect: null,
    profession:'',
    _industrynav: '',
    _profession: '',
    _job: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getStorage({
      key: 'industryArr',
      success: function (res) {
        console.log(res)
        _this.setData({
          industry: res.data,
          currentSelect:res.data[0].list
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
  // 城市一级筛选
  clickLevel1: function (e) {
    var _this = this;
    console.log(e.currentTarget.dataset.industrynav)
    var industrynav = e.currentTarget.dataset.industrynav;
    console.log(_this.data.industry[industrynav])
    this.setData({
      _industrynav: industrynav,
      currentSelect: _this.data.industry[industrynav].list
    })
  },
  // 城市二级筛选
  clickLevel2: function (e) {
    var _this = this;
    var professionIndex = e.currentTarget.dataset.profession
    console.log(_this.data.currentSelect[professionIndex].list)
   _this.setData({
     _profession: professionIndex,
     profession: _this.data.currentSelect[professionIndex].list
   })
  },
  // 区县城市选择
  clickLevel3: function (e) {
    var _this = this;
    console.log(e)
    var jobIndex = e.currentTarget.dataset.job
   
    this.setData({
      _job: jobIndex,
      job: _this.data.profession[jobIndex].name
    })
    console.log(this.data.job)
  },
})
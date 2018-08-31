Page({

  /**
   * 页面的初始数据
   */
  data: {
    industry: null,
    currentSelect: null,
    profession: '',
    _industrynav: '',
    _profession: '',
    _job: '',
    type: '',
    returnIndustryData: '',
    locNav:'计算机/互联网/通信/电子'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.type) {
      this.setData({
        type: options.type
      })
    }


    var _this = this;
    wx.getStorage({
      key: 'industryArr',
      success: function(res) {
        _this.setData({
          industry: res.data,
          currentSelect: res.data[0].list
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  // 行业一级筛选
  clickLevel1: function(e) {
    var _this = this;
    var industrynav = e.currentTarget.dataset.industrynav;
    this.setData({
      _industrynav: industrynav,
      currentSelect: _this.data.industry[industrynav].list,
      locNav: _this.data.industry[industrynav].name
    })
  },
  // 行业二级筛选
  clickLevel2: function(e) {
    var _this = this;
    var professionIndex = e.currentTarget.dataset.profession
    _this.setData({
      _profession: professionIndex,
      profession: _this.data.currentSelect[professionIndex].list,
      returnIndustryData: e.currentTarget.dataset.value
    })
    var industry =  _this.data.returnIndustryData
    
  },
  // 行业3级选择
  clickLevel3: function(e) {
    var _this = this;
    var type = this.data.type;
    var jobIndex = e.currentTarget.dataset.job

    this.setData({
      _job: jobIndex,
      job: _this.data.profession[jobIndex].name
    })
    var job = this.data.job;

    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    if (type == 'industry') {
      prevPage.params.industry= job;     
      prevPage.setData({ isRefresh: true })
      wx.navigateBack({//返回
        delta: 1
      })
      return
    }
    if (type == 'intension') {
      prevPage.setData({ industry: job })
      wx.navigateBack({//返回
        delta: 1
      })
      return
    }
    if (type == 'postfulltime') {
      prevPage.setData({ industry: job })
      wx.navigateBack({//返回
        delta: 1
      })
      return
    }
    if (type == 'postparttime') {
      prevPage.setData({ industry: job })
      wx.navigateBack({//返回
        delta: 1
      })
      return
    }
  },
})
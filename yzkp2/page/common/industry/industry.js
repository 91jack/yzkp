// page/common/industry/industry.js

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
    console.log(e.currentTarget.dataset.industrynav)
    // console.log(e.currentTarget.dataset.value)
    var industrynav = e.currentTarget.dataset.industrynav;
    console.log(_this.data.industry[industrynav].name);
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
    console.log(e.currentTarget.dataset.value)
    _this.setData({
      _profession: professionIndex,
      profession: _this.data.currentSelect[professionIndex].list,
      returnIndustryData: e.currentTarget.dataset.value
    })
    var industry =  _this.data.returnIndustryData
    console.log(industry)
    // var industry = _this.data.locNav + '-' + _this.data.returnIndustryData

    // var url = '';
    // var type = this.data.type;
    // console.log(type)
    // let pages = getCurrentPages();//当前页面
    // let prevPage = pages[pages.length - 2];//上一页面
    // if (type == 'industry') {
    //   prevPage.params.industry= industry;     
    //   prevPage.setData({ isRefresh: true })
    //   wx.navigateBack({//返回
    //     delta: 1
    //   })
    //   return
    // }
    // if (type == 'intension') {
    //   prevPage.setData({ industry: industry })
    //   wx.navigateBack({//返回
    //     delta: 1
    //   })
    //   return
    // }

    // console.log(type)
    // switch (type) {
    //   case 'intension': //求职意向
    //     url = '/page/resume/jobintensionedit/jobintensionedit?industry=' + industry;
    //     break;
    //   case 'industry': // 职位列表
    //     url = '/page/company/joblist/joblist?industry=' + industry;
    //     break;
    // }
    // console.log(url)
    // wx.navigateTo({
    //   url: url
    // })
  },
  // 行业3级选择
  clickLevel3: function(e) {
    var _this = this;
    var type = this.data.type;
    console.log(e)
    var jobIndex = e.currentTarget.dataset.job

    this.setData({
      _job: jobIndex,
      job: _this.data.profession[jobIndex].name
    })
    var job = this.data.job;
    console.log(this.data.job)

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
  },
})
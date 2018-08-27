// page/common/city/city.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cities:null,
    currentSelect:null,
    country:null,
    _citynav:'热门城市',
    _city:'重庆',
    _country:'所有',
    type:'',
    selectCity:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type)
    if (options.type){
      this.setData({
        type: options.type
      })
    }

    var _this = this;
    wx.getStorage({
      key: 'cityArr',
      success: function(res) {
        console.log(res)
        _this.setData({
          cities:res.data,
          currentSelect:res.data['热门城市'],
          country: res.data['热门城市']['重庆']
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
  clickLevel1:function(e){
    var _this = this;
    var citynav = e.currentTarget.dataset.citynav;
    _this.setData({
      _citynav: citynav,
      currentSelect: _this.data.cities[citynav],
      country:[]
    })
  },
// 城市二级筛选
  clickLevel2:function(e) {
    var _this = this;
    var city = e.currentTarget.dataset.city
    var country = _this.data.currentSelect[city];
    this.setData({
      _city:city,
      country: country,
      selectCity: city
    })

    if (country.length==0){
      var url = '';
      var type = this.data.type;
      switch(type){
        case 'intension':// 求职意向
          url = '/page/resume/jobintensionedit/jobintensionedit?city='+city;
          break;
        case 'courselist':// 能力提升
          url = '/page/common/course/courselist/courselist?city=' + city;
          break;  
        case 'postfulltime':// 发布全职
          url = '/page/company/postfulltime/postfulltime?city=' + city;
          break;
        case 'postparttime':// 发布兼职
          url = '/page/company/postparttime/postparttime?city=' + city;
          break;  
        case 'jobList':// 职位列表
          url = '/page/company/joblist/joblist?city=' + city;
          break;  
      }
      // console.log(url);
      wx.navigateTo({
        url: url
      })
    }

  },
  // 区县城市选择
  clickLevel3: function (e) {
    var _this = this;
    var city = e.currentTarget.dataset.country
    if(city=='所有'){
      city = '';
      _this.setData({
        _country: city,
        selectCity: _this.data._city 
      })
    }else{
      _this.setData({
        _country: city,
        selectCity: _this.data._city + '-' + city
      })
    }
   
    var url = '';
    var type = this.data.type;
    console.log(type)
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面

    if (type == 'jobList') {// 职位列表 
      prevPage.params.region = _this.data.selectCity;
      prevPage.params.workAddress = _this.data.selectCity;
      wx.navigateBack({
        delta: 1
      })
      return
      // wx.navigateTo({
        // url: '/page/company/joblist/joblist?city=' + _this.data.selectCity
        // success: function(res) {},
        // fail: function(res) {},
        // complete: function(res) {},
      // })
    }
    if (type == 'intension') {//求职意向
      prevPage.setData({ city: _this.data.selectCity })
      wx.navigateBack({
        delta: 1
      })
      return
    }
    if (type == 'courselist') {//能力提升
      prevPage.setData({ city: _this.data.selectCity })
      wx.navigateBack({
        delta: 1
      })
      return
    }
    if ( type =='postfulltime'){
      prevPage.setData({ city: _this.data.selectCity })
      wx.navigateBack({
        delta: 1
      })
      return
    }
    if (type == 'postparttime') {
      prevPage.setData({ city: _this.data.selectCity })
      wx.navigateBack({
        delta: 1
      })
      return
    }

    // switch (type) {
    //   case 'intension'://求职意向
    //     url = '/page/resume/jobintensionedit/jobintensionedit?city=' + _this.data.selectCity;
    //     break;
    //   case 'courselist'://能力提升
    //     url = '/page/common/course/courselist/courselist?city=' + _this.data.selectCity;
    //     break;
    //   case 'postfulltime':// 发布全职
    //     url = '/page/company/postfulltime/postfulltime?city=' + _this.data.selectCity;
    //     break;
    //   case 'postparttime':// 发布兼职
    //     url = '/page/company/postparttime/postparttime?city=' + _this.data.selectCity;
    //     break;
    //   case 'jobList':// 职位列表
    //     url = '/page/company/joblist/joblist?city=' +  _this.data.selectCity;
    //     break;  
    // }
    
    // wx.navigateTo({
    //   url: url
    // })
  },
})
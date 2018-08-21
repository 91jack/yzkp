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
    id:'',
    city:['重庆','']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    if (options.id){
      this.setData({
        id: options.id
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
      country: country
    })
    console.log(city)
    console.log(country)
<<<<<<< HEAD
=======
    console.log(_this.data.id)
    if (country.length==0){
      if (_this.data.id == 'intension') {
        wx.navigateTo({
          url: '/page/resume/jobintensionedit/jobintensionedit?city=' + city + '',
        })
      }
    }else{
      _this.setData({
        "city[0]": city
      })
    }
>>>>>>> 6f5cbc8b2a27970fc4178ebae845e96e88cb2e3a
  },
  // 区县城市选择
  clickLevel3: function (e) {
    var _this = this;
    var city = e.currentTarget.dataset.country
    console.log(city)
    this.setData({
      _country:city,
      "city[1]":city
    })
    if (_this.data.id == 'intension') {
      wx.navigateTo({
        url: '/page/resume/jobintensionedit/jobintensionedit?city='+_this.data.city+'',
      })
    }
  },
})
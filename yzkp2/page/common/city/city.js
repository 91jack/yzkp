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
    _country:'所有'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  },
  // 区县城市选择
  clickLevel3: function (e) {
    var _this = this;
    var city = e.currentTarget.dataset.country
    console.log(city)
    this.setData({
      _country:city
    })
  },
})
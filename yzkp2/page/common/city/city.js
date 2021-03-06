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
    selectCity:'',
    id:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type){
      this.setData({
        type: options.type
      })
    }

    var _this = this;
    wx.getStorage({
      key: 'cityArr',
      success: function(res) {
        _this.setData({
          cities:res.data,
          currentSelect:res.data['热门城市'],
          country: res.data['热门城市']['重庆']
        })
      },
    })
    wx.getStorage({
      key: 'serachId',
      success: function(res) {
        _this.setData({
          id:res.data
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
    var type = this.data.type;
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面
    console.log(country)
    if (_this.data.country.length==0){
      if (type == 'jobList') {// 职位列表 
        if (_this.data.id == 'company') {
          prevPage.params.workAddress = _this.data.selectCity;
          prevPage.setData({ workAddress: _this.data.selectCity })
          prevPage.setData({ isRefresh: true })
        } else {
          prevPage.params.region = _this.data.selectCity;
          prevPage.setData({ region: _this.data.selectCity })
          prevPage.setData({ isRefresh: true })
        }
        wx.navigateBack({
          delta: 1
        })
        return
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
      if (type == 'postfulltime') {
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
    let pages = getCurrentPages();//当前页面
    let prevPage = pages[pages.length - 2];//上一页面

    if (type == 'jobList') {// 职位列表 
      if(_this.data.id=='company'){
        prevPage.params.workAddress = _this.data.selectCity;
        prevPage.setData({ workAddress: _this.data.selectCity })        
        prevPage.setData({ isRefresh: true })
      } else {
        prevPage.params.region = _this.data.selectCity;
        prevPage.setData({ region: _this.data.selectCity })
        prevPage.setData({ isRefresh: true })
      } 
      wx.navigateBack({
        delta: 1
      })
      return
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
  },
})
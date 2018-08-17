// page/common/city/city.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city:null,
    currentSelect:null,
    hotCity:null,
    ABC:null,
    DEFG:null,
    HI:null,
    JK:null,
    LMN:null,
    OPQR:null,
    STU:null,
    VWX:null,
    YZ:null
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
          city:res.data,
          hotCity: res.data['热门城市'],
          ABC: res.data['A B C'],
          DEFG: res.data['D E F G'],
          HI: res.data['H I'],
          JK: res.data['J K'],
          LMN: res.data['L M N'],
          OPQR: res.data['O P Q R'],
          STU: res.data['S T U'],
          VWX: res.data['V W X'],
          YZ: res.data['Y Z']
        })
        console.log(res.data['热门城市'])
        console.log(res.data['A B C'])
        
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
  clickLevel1:function(e){
    var _this = this;
    console.log(e.currentTarget.dataset.citynav)
    var citynav = e.currentTarget.dataset.citynav;

    this.setData({
   
      currentSelect:_this.data.city[citynav]
    })
  }

})
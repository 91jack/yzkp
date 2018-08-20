// page/company/renzheng/renzheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rzType:['个人','企业','其他'],
    rzIndex:null,
    postName:"",
    postShortName:'',
    postCard:'',
    postPhone:'',
    postEmail:'',
    postIntro:'',
    companyNature:'',
    companyScale:'',
    companyIndustry:'',
    industryArr:[],   
    industryIndex:0,
    industryHide:false,
    companySizeArr:[],
    companySizeIndex:0,
    companySizeHide:false,
    companyTypeArr:[],
    companyTypeIndex:0,
    companyTypeHide:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'industryArr',
      success: function(res) {
        for (var i = 0; i < res.data.length; i++) {
          that.data.industryArr.push(res.data[i].name)
        }
        console.log(that.data.industryArr);

        that.setData({
          industryArr: that.data.industryArr
        })

      },
    })
    wx.getStorage({
      key: 'companySizeArr',
      success: function (res) {
        that.setData({
          companySizeArr: res.data
        })
      },
    })
    wx.getStorage({
      key: 'companyTypeArr',
      success: function (res) {
        that.setData({
          companyTypeArr: res.data
        })
      },
    })
    console.log(this.data.industryArr)
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
  // 选择发布者类型
  changeType:function(e){
    // console.log(this.data.industryArr)
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    this.setData({
      rzIndex:i
    })
  },
  // 获取输入框值
  getValue:function(e){
    console.log(e);
    var i = Number(e.currentTarget.dataset.idx);
    if(i==0){    //发布者/企业名称
      this.setData({
        postName:e.detail.value
      })
    } else if (i == 1) {    //发布者/企业简称
      this.setData({
        postShortName: e.detail.value
      })
    } else if (i == 2) {    //发布者证件号码
      this.setData({
        postCard: e.detail.value
      })
    } else if (i == 3) {    //发布者联系方式
      this.setData({
        postPhone: e.detail.value
      })
    } else if (i == 3) {    //发布者邮箱
      this.setData({
        postEmail: e.detail.value
      })
    } else if (i == 4) {    //个人或者企业介绍
      this.setData({
        postIntro: e.detail.value
      })
    }
  },
  // picker选择器
  bindPicker:function(e){
    var i = Number(e.currentTarget.dataset.idx)
    if(i==0){//选择公司性质
      this.setData({
        companyTypeIndex: e.detail.value,
        companyTypeHide:true,
        companyNature: this.data.companyTypeArr[e.detail.value]
      })
    } else if (i == 1) {//选择公司规模
      this.setData({
        companySizeIndex: e.detail.value,
        companySizeHide: true,
        companyScale: this.data.companySizeArr[e.detail.value]
      })
    } else if (i == 2) {//选择公司行业
      this.setData({
        industryIndex: e.detail.value,
        industryHide: true,
        companyIndustry: this.data.companySizeArr[e.detail.value]
      })
    }
  }
})
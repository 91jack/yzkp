// page/company/renzheng/renzheng.js
const addCompanyInfoUrl = require('../../../config').addCompanyInfoUrl;
// 登录
const loginUrl = require('../../../config').loginUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welfareData:[],
    welfare: [],
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
    pickIndustryArr:[],
    industryIndex:[11,0],
    industryHide:false,
    companySizeArr:[],
    companySizeIndex:0,
    companySizeHide:false,
    companyTypeArr:[],
    companyTypeIndex:0,
    companyTypeHide:false,
    ind:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'industryArr',
      success: function(res) {
        console.log(res);
        var tit = [];
        for (var i = 0; i < res.data.length; i++) {
          tit.push(res.data[i].name)
          var list = [];
          for( var j=0;j<res.data[i].list.length;j++){
            list.push(res.data[i].list[j].name)
          }
          that.data.industryArr.push(list)
        }  
        that.data.industryArr.push(tit);
        that.setData({
          industryArr: that.data.industryArr
        })
        var pickIndustryArr0 = "pickIndustryArr[0]";   
        var pickIndustryArr1 = "pickIndustryArr[1]";   
        that.setData({
          [pickIndustryArr0]: that.data.industryArr[11],
          [pickIndustryArr1]:that.data.industryArr[0],
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
    wx.getStorage({
      key: 'welfareArr',
      success: function (res) {
        that.setData({
          welfareData: res.data
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
  // checkbox选择
  checkboxChange: function (e) {
    this.setData({
      welfare: e.detail.value
    })
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
    } else if (i == 4) {    //发布者邮箱
      this.setData({
        postEmail: e.detail.value
      })
    } else if (i == 5) {    //个人或者企业介绍
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
        companyIndustry:''
      })
      console.log(e);
      var ind0 = e.detail.value[0];
      var ind1 = e.detail.value[1];
      var pic0 = this.data.pickIndustryArr[0];
      var pic1 = this.data.pickIndustryArr[1];
      // var ind1 = this.data.pickIndustryArr[1];
      this.setData({
        // industryIndex: e.detail.value,
        industryHide: true,
        companyIndustry: pic0[ind0] + '-' + pic1[ind1],
        ind: pic1[ind1]
      })
      console.log(this.data.companyIndustry)
    }
  },
  // 多列选择器
  bindMultiPickerColumnChange:function(e){
    console.log(e);
    var value = Number(e.detail.value);
    var column = Number(e.detail.column);
    var data = {
      pickIndustryArr: this.data.pickIndustryArr,
      industryIndex: this.data.industryIndex
    };
    data.industryIndex[column] = value;
    if (column==0){
      data.pickIndustryArr[1] = this.data.industryArr[value];
      data.industryIndex[0] = value;
      data.industryIndex[1] = 0;
    } else if(column==1){
      data.industryIndex[1] = value;
    }
    console.log(this.data.industryIndex)
    console.log(data.industryIndex)
    this.setData(data)
  },
  // 立即认证
  nowRz:function(){
    var _this = this;
    wx.request({
      url: addCompanyInfoUrl,
      data: {
        token: getApp().globalData.token,
        type: _this.data.rzIndex,
        name: _this.data.postName,
        simpleName: _this.data.postShortName,
        idNo: _this.data.postCard,
        linkPhone: _this.data.postPhone,
        email: _this.data.postEmail,
        attr: _this.data.companyNature,
        size: _this.data.companyScale,
        industry: _this.data.ind,
        tag: _this.data.postIntro,
        welfare: _this.data.welfare
      },
      success: function (res) {
        console.log(res)
        if(res.data.status==0){
          wx.showToast({
            title: '认证成功',
            icon: 'success',
            duration: 2000,
            success:function(){
              setTimeout(function(){
                wx.reLaunch({
                  url: '/page/tabBar/index/index',
                })
              },1000)
            }
          })
          // wx.login({
          //   success: function (result) {
          //     if (result.code) {
          //       wx.request({
          //         url: loginUrl,
          //         data: {
          //           code: result.code
          //         },
          //         success: function (resD) {
          //           if(resD.data.status==0){
          //             wx.setStorage({
          //               key: 'companyId',
          //               data: resD.data.obj.id,
          //             })
          //           }
          //         }
          //       })
          //     }
          //   }
          // })
        }
      }
    })
  },
  onUnload:function(){
    getApp().globalData.refreash = true;
  }
})
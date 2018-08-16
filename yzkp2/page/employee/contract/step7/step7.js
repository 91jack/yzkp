// page/employee/contract/step7/step7.js
const allInfoUrl = require('../../../../config').allInfoUrl;

// 获取验证码
const phoneCodeUrl = require('../../../../config').phoneCodeUrl;
// 验证码校验
const phoneCodeyzUrl = require('../../../../config').phoneCodeyzUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // account_img1:'',
    // account_img2:'',
    // account_img3:'',
    // account_type:'',
    // address:'',
    // bank_account_no:'',
    // bank_name:'',
    // bank_no:'',
    // contract_id:'',
    // department:'',
    // education_img:'',
    // education_level:'',
    // farmer_safe:'',
    // fund_no:'',
    // head_img:'',
    // id_no:'',
    // id_no_img1:'',
    // id_no_img2:'',
    // in_date:'',
    // is_fund:'',
    // is_safe:'',
    // leave_img:'',
    // link_man:'',
    // link_mobile:'',
    // mobile:'',
    // name:'',
    // other_img:'',
    // position:'',
    // safe_type:'',
    // sex:'',
    // state:'',//审核状态
    infoData:{},
    timer: '',//定时器名字
    yzcode:'',
    incode:'',
    timerData:'获取验证码',
    countDownNum: 60,
    openInterVal:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'employeesId',
      success: function (res) {
        wx.request({
          url: allInfoUrl,
          data: {
            token: getApp().globalData.token,
            id: res.data,
          },
          success: function (res) {
            console.log(res)
            var infoData = res.data.obj;
            if(res.data.status==0){
              that.setData({
                infoData: infoData
                // account_img1: infoData.account_img1,
                // account_img2: infoData.account_img2,
                // account_img3: infoData.account_img3,
                // account_type: infoData.account_type,
                // address: infoData.address,
                // bank_account_no: infoData.bank_account_no,
                // bank_name: infoData.bank_name,
                // bank_no: infoData.bank_no,
                // contract_id: infoData.contract_id,
                // department: infoData.department,
                // education_img: infoData.education_img,
                // education_level: infoData.education_level,
                // farmer_safe: infoData.farmer_safe,
                // fund_no: infoData.fund_no,
                // head_img: infoData.head_img,
                // id_no: infoData.id_no,
                // id_no_img1: infoData.id_no_img1,
                // id_no_img2: infoData.id_no_img2,
                // in_date: infoData.in_date,
                // is_fund: infoData.is_fund,
                // is_safe: infoData.is_safe,
                // leave_img: infoData.leave_img,
                // link_man: infoData.link_man,
                // link_mobile: infoData.link_mobile,
                // mobile: infoData.mobile,
                // name: infoData.name,
                // other_img: infoData.other_img,
                // position: infoData.position,
                // safe_type: infoData.safe_type,
                // sex: infoData.sex,
                // state: infoData.state//审核状态
              })
            }
          }
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
  // 获取验证码
  getCode:function(event){
    var _this = this;
    wx.request({
      url: phoneCodeUrl,//获取验证码
      data:{
        phone:18502323596,
        token:getApp().globalData.token,
      },
      success:function(res){
        console.log(res)
        if(res.data.status == 0){
          // _this.setData({
          //   yzcode:res.data.obj
          // })

        }
      }
    })
    if (_this.data.openInterVal){
      this.setData({
        timerData: '5s',
      });
      var time = 5;
      var timer = setInterval(function () {
        time--;
        if (time > 0) {
          _this.setData({
            openInterVal: false,
            countDownNum: time,
            timerData: time + 's'
          })
        }
        if (time == 0) {
          clearInterval(timer);
          time = 60;
          _this.setData({
            openInterVal: true,
            timerData: '重新获取'
          })
        }
      }, 1000)
      timer;
    }
  },
  // 获取输入的验证码
  getIncode:function(e){
    this.setData({
      incode: e.detail.value
    })
    console.log(e.detail.value)
  },
  submitBtn: function () {
    var _this = this;
    wx.request({
      url: phoneCodeyzUrl,//验证验证码
      data: {
        token: getApp().globalData.token,
       phone:'18502323596',
       yzcode:_this.data.incode
      },
      success: function (res) {
        console.log(res)
        if (res.data.status == 0) {
          wx.showToast({
            title: '信息验证成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.navigateTo({
                  url: '/page/common/sign/sign?contractId=' + _this.data.infoData.id,
                })
              }, 2000)
            }
          })
        }
      }
    })
  }
})
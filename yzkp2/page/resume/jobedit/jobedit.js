// page/my/resume/jobedit/jobedit.js
const addJobexperienceUrl = require('../../../config').addJobexperienceUrl;
const resumeUrl = require('../../../config').resumeUrl;
const editJobexperienceUrl = require('../../../config').editJobexperienceUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inData:'请选择',
    inHide:false,
    outData:'请选择',
    outHide:false,
    conpanyName:'',
    partment:'',
    job:'',
    resumeId:'',
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id
    })
    var that = this;
    wx.getStorage({
      key: 'resumeId',
      success: function(res) {
        that.setData({
          resumeId:res.data
        })
      },
    });
    if (that.data.id == options.id){
      wx.request({
        url: resumeUrl,
        data: {
          token: getApp().globalData.token,
        },
        success: function (res) {
          console.log(res)
          var bigData = res.data.obj.work;
          for (var i = 0; i < bigData.length;i++){
            if (bigData[i].id == options.id){
              that.setData({
                inData: bigData[i].beginDate,
                outData: bigData[i].endDate,
                conpanyName: bigData[i].company,
                partment: bigData[i].department,
                job: bigData[i].position,
              })
            }
          }
        }
      })
    }
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
  bindDateChange: function (e) {
    console.log(e)
    var i = Number(e.currentTarget.dataset.idx)
    if(i==0){   //入职时间
      this.setData({
        inData: e.detail.value,
        inHide:true
      })
    } else if (i == 1) {   //离职时间
      this.setData({
        outData: e.detail.value,
        outHide: true
      })
    }
  },
  //获取输入框的值
  getValue:function(e){
    var i = Number(e.currentTarget.dataset.idx);
    if(i==0){    //公司名称
      this.setData({
        conpanyName:e.detail.value
      })
    } else if (i == 1) {    //部门名称
      this.setData({
        partment: e.detail.value
      })
    } else if (i == 2) {    //职位名称
      this.setData({
        job: e.detail.value
      })
    }
  },
  //调教信息
  submitBtn:function(){
    var _this = this;
    if (Boolean(_this.data.id)){
      wx.request({
        url: editJobexperienceUrl,
        data: {
          token: getApp().globalData.token,
          id: _this.data.id,
          beginDate: _this.data.inData,
          endDate: _this.data.outData,
          company: _this.data.conpanyName,
          department: _this.data.partment,
          position: _this.data.job
        },
        success: function (res) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }else{
      wx.request({
        url: addJobexperienceUrl,
        data: {
          token: getApp().globalData.token,
          resumeId: _this.data.resumeId,
          beginDate: _this.data.inData,
          endDate: _this.data.outData,
          company: _this.data.conpanyName,
          department: _this.data.partment,
          position: _this.data.job
        },
        success: function (res) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
  }
})
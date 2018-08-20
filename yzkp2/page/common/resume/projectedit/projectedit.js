// page/my/resume/projectedit/projectedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumeId:'',
    name:'',
    beginDate:'',
    inHide:false,
    endDate:'',
    outHide:false,
    role:'',
    tag:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  // 日期选择
  getPicker: function(e){
    console.log(e);
    console.log(11111111111)
    // var i = Number(e.curentTarget.dataset.idx);
    // if(i==0){    //项目开始时间
    //   this.setData({
    //     beginDate:e.detail.value,
    //     inHide:true
    //   })
    // } else if (i == 1) {    //项目结束时间
    //   this.setData({
    //     endDate: e.detail.value,
    //     outHide: true
    //   })
    // }
  }
})
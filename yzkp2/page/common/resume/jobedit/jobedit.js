// page/my/resume/jobedit/jobedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inData:'',
    inHide:false,
    outData:'',
    outHide:false
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
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    var i = Number(e.currentTarget.dataset.idx)
    if(i==0){ //入职时间
      this.setData({
        inDate: e.detail.value,
        inHide:true
      })
    } else if (i == 1) { //离职时间
      this.setData({
        outDate: e.detail.value,
        outHide: true
      })
    }
  },
})
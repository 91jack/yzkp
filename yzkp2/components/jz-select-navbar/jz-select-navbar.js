// page/common/jz-select-navbar/jz-select-navbar.js
var base = require('../../utils/basedata.js');
// base.cityList(); //城市列表
// base.companyType(); // 公司性质
// base.companySize(); // 公司规模
// base.monthPay(); // 月薪
// base.education(); // 学历
// base.workYear(); // 工作经验
// base.height(); // 身高要求
// base.demand(); // 首页-要求
// base.uploadImg(); // 上传图片
// base.welfare(); // 福利待遇

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    
    sexArray: [ '男', '女' ],//性别
    currentTab: [true, true, true], //控制nav-bar的显示
    navBarData: ['地区', '行业', '要求'],
    navbarShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
    navbarTap: function(e) {
      var i = e.currentTarget.dataset.idx;
      var index = this.data.currentTab[i];
      var hid = "currentTab[" + i + "]";
     
      for (var j = 0; j < this.data.currentTab.length; j++) {
        var act = "currentTab[" + j + "]"
        this.setData({
          [act]: true
        })
      }
      if (index) {
        this.setData({
          [hid]: false
        })
      } else {
        this.setData({
          [hid]: true
        })
      }
    },
    // navbar的收起
    hideBar: function(e) {
      var i = Number(e.currentTarget.dataset.idx);
    
      var index = this.data.currentTab[i];
      var hid = "currentTab[" + i + "]";
      this.setData({
        [hid]: true
      })
    }
  }
})
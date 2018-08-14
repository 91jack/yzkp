// page/common/jz-select-navbar/jz-select-navbar.js
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
    currentTab: [true, true, true],//控制nav-bar的显示
    navBarData: ['推荐','地区', '行业', '要求'],
    navbarShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navbarTap: function (e) {
      var i = e.currentTarget.dataset.idx;
      var index = this.data.currentTab[i];
      var hid = "currentTab[" + i + "]";
      console.log(index);
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
    hideBar: function (e) {
      var i = Number(e.currentTarget.dataset.idx);
      console.log(typeof i)
      var index = this.data.currentTab[i];
      var hid = "currentTab[" + i + "]";
      this.setData({
        [hid]: true
      })
    }
  }
})

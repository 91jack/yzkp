/** 基础数据 */
// 本地
//var host = "https://www.jiansou-cn.com/yzkp/app/";
// 线上
var host = "http://192.168.1.123:8080/yzkp/app/";
// 城市列表
const cityUrl = `${host}common/cities.json`;

// 公司性质
const companyTypeUrl = `${host}common/company_type.json`;

// 公司规模
const companySizeUrl = `${host}common/company_size.json`;

// 月薪
const monthPayUrl = `${host}common/month_pay.json`;
// 学历
const educationUrl = `${host}common/education.json`;
// 工作经验
const workYearUrl = `${host}common/work_year.json`;
// 身高要求
const heightUrl = `${host}common/height.json`;
// 首页-要求
const demandUrl = `${host}common/demand.json`;
// 上传图片
const uploadImgUrl = `${host}image/upload.json`;
// 福利待遇
const welfareUrl = `${host}common/welfare.json`;


// 城市列表
function cityList() {
  wx.request({
    url: cityUrl, 
    success: function(res) {
      console.log(res)
      if (res.data.status == 0) {
        wx.setStorage({
          key: "cityArr",
          data: res.data.obj
        })
      }
    }
  })
}
// 公司性质
function companyType() {
  wx.request({
    url: companyTypeUrl,
    success: function (res) {
      if (res.data.status == 0) {
        wx.setStorage({
          key: "companyTypeArr",
          data: res.data.list
        })
      }
    }
  })
}
// 公司规模
function companySize() {
  wx.request({
    url: companySizeUrl,
    success: function (res) {
      console.log(res)
      if (res.data.status == 0) {
        wx.setStorage({
          key: "companySizeArr",
          data: res.data.list
        })
      }
    }
  })
}

// 月薪
function monthPay() {
  wx.request({
    url: monthPayUrl,
    success: function (res) {
      if (res.data.status == 0) {
        wx.setStorage({
          key: "monthPayArr",
          data: res.data.list
        })
      }
    }
  })
}
// 学历
function education() {
  wx.request({
    url: educationUrl,
    success: function (res) {
      if(res.data.status == 0){
        wx.setStorage({
          key: "educationArr",
          data: res.data.list
        })
      }
    }
  })
  
}
// 工作经验
function workYear() {
  wx.request({
    url: workYearUrl,
    success: function (res) {
      if (res.data.status == 0) {
        wx.setStorage({
          key: "workYearArr",
          data: res.data.list
        })
      }
    }
  })
}
// 身高要求
function height() {
  wx.request({
    url: heightUrl,
    success: function (res) {
      if (res.data.status == 0) {
        wx.setStorage({
          key: "heightArr",
          data: res.data.list
        })
      }
    }
  })
}
// 首页-要求
function demand() {
  wx.request({
    url: demandUrl,
    success: function (res) {
      console.log(res.data)
    }
  })
}
// 上传图片
function uploadImg() {
  wx.request({
    url: uploadImgUrl,
    success: function (res) {
      console.log(res.data)
    }
  })
}
// 福利待遇
function welfare() {
  wx.request({
    url: welfareUrl,
    success: function (res) {
      console.log(res.data)
      if (res.data.status == 0) {
        wx.setStorage({
          key: "welfareArr",
          data: res.data.list
        })
      }
    }
  })
}

module.exports = {
  cityList: cityList,//城市列表
  companyType: companyType, // 公司性质
  companySize: companySize, // 公司规模
  monthPay: monthPay, // 月薪
  education: education,// 学历
  workYear: workYear,// 工作经验
  height: height,// 身高要求
  demand: demand,// 首页-要求
  uploadImg: uploadImg,  // 上传图片
  welfare: welfare,// 福利待遇
}
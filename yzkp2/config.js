// 本地
//var host = "https://www.jiansou-cn.com/yzkp/app/";
// 线上
var host = "http://192.168.1.123:8080/yzkp/app/";


var config = {
  // 下面的地址配合云端 Server 工作
  host,

  // 模拟登陆
  testLoginUrl:`${host}test/login.json`,
  

  /*求职者模块*/
  // 新增简历基本信息
  addBasicUrl: `${host}resume/info/addBase.json`,
  
  // 修改简历基本信息
  editBasicUrl: `${host}resume/info/editBase.json`,

  // 修改求职意向
  editJobintensionUrl: `${host}resume/info/editDemand.json`,

  // 新增工作经验
  addJobexperienceUrl: `${host}resume/work/add.json`,
  // 修改工作经验
  editJobexperienceUrl: `${host}resume/work/edit.json`,

  // 新增教育经历
  addEduexperienceUrl: `${host}resume/education/add.json`,

  // 修改教育经历
  editEduexperienceUrl: `${host}resume/education/edit.json`,

  // 新增项目经历
  addProjectUrl: `${host}resume/project/add.json`,

  // 修改项目经历
  editProjectUrl: `${host}resume/project/edit.json`,
 

  // 获取招聘列表信息
  jobListUrl: `${host}recruit/notice/list.json`,

  // 获取招聘详情
  jobDetailsUrl: `${host}recruit/notice/info.json`,

  // 简历详情
  resumeUrl: `${host}resume/get.json`,
  // 收藏与取消收藏
  // 投递简历
  // 简历是否公开，是否匿名
  

  /*员工模块*/
  // 




  /*企业模块*/
  // 发布全职招聘
  addjobUrl: `${host}recruit/notice/add.json`,

  // 发布兼职招聘
 // addPartjobUrl: `${host}recruit/notice/info.json`,

  // 企业介绍
  companyIntroUrl: `${host}company/get.json`,

  // 在招职位
  recruitListUrl: `${host}company/notice/get.json`,

  // 企业职位管理
  jobListUrl: `${host}recruit/notice/list.json`,

  // 刷新职位
  refreshJobUrl: `${host}recruit/notice/refresh.json`,

  // 删除职位
  delJobUrl: `${host}recruit/notice/delete.json`,
  
  // 企业简历管理
  // 添加企业信息
  // 修改企业信息
  // 搜索简历
  // 企业查看简历
  


};

module.exports = config


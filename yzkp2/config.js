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
  // 新增简历
  // 修改简历

  // 新增求职意向
  // 修改求职意向

  // 新增教育经历
  // 修改教育经历

  // 新增项目经历
  // 修改项目经历

 

  // 获取招聘列表信息
  jobListUrl: `${host}recruit/notice/list.json`,

  // 获取招聘详情
  jobDetailsUrl: `${host}recruit/notice/info.json`,


  /*员工模块*/
  // 




  /*企业模块*/
  // 发布全职招聘
  addFulljobUrl: `${host}recruit/notice/add.json`,

  // 发布兼职招聘
  addPartjobUrl: `${host}recruit/notice/info.json`,

  // 企业介绍
  companyIntroUrl: `${host}company/get.json`,

  // 在招职位
  recruitListUrl: `${host}company/notice/get.json`,

  // 企业职位管理
  
  // 刷新职位


  // 删除职位
  // 企业简历管理
  // 添加企业信息
  // 修改企业信息
  // 搜索简历
  // 企业查看简历
  


};

module.exports = config


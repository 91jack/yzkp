// 本地
//var host = "https://www.jiansou-cn.com/yzkp/app/";
// 线上
var host = "http://192.168.1.123:8080/yzkp/app/";


var config = {
  // 下面的地址配合云端 Server 工作
  host,

  // 模拟登陆
  testLoginUrl: `${host}test/login.json`,


  /* --求职者模块-- */
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

  //获取能力提升列表信息
  courseListUrl: `${host}capaciypromotion/getbytype.json`,

  //获取能力提升详情
  courseDetailtUrl: `${host}capaciypromotion/get.json`,
  
  //能力提升报名
  courseenrolltUrl: `${host}capaciypromotion/enroll/add.json`,

  //获取我报名的课程列表信息
  mycoursetUrl: `${host}capaciypromotion/enroll/getbyuid.json`,

  // 获取能力提升类型列表信息
  courseTypeurl: `${host}capaciypromotion/type/get.json`,

  // 意见反馈
  suggestionAdd: `${host}suggestion/add.json`,

  /* --员工模块-- */
  // 查看薪酬
  payInformationUrl: `${host}employee/payInformation.json`,

  // 签收工资
  signForWagesUrl: `${host}employee/signForWages.json`,

  // 补贴、扣除、奖励工资详情
  bonusOrdeductionUrl: `${host}employee/bonusOrdeduction.json`,

  // 查看合同
  getContractUrl: `${host}employee/getContract.json`,
  // 基本信息填写
  regBaseInfoUrl: `${host}employee/regBaseInfo.json`,
  // 证明材料填写
  regImgInfoUrl: `${host}employee/regImgInfo.json`,
  // 查看所有信息
  allInfoUrl: `${host}employee/allInfo.json`,
  // 五险一金信息填写
  regFiveRisksInfoUrl: `${host}employee/regFiveRisksInfo.json`,

  // 工资卡信息填写
  regBankInfoUrl: `${host}employee/regBankInfo.json`,

  // 获取验证码
  phoneCodeUrl: `${host}employee/phonecode/get.json`,

  // 验证码校验
  phoneCodeyzUrl: `${host}employee/phonecode/yz.json`,

  /* --企业模块-- */
  // 发布全职招聘 发布兼职招聘
  addjobUrl: `${host}recruit/notice/add.json`,

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
  companyResumeUrl: `${host}resume/apply/list.json`,

  // 添加企业信息
  addCompanyInfoUrl: `${host}company/add.json`,

  // 修改企业信息
  editCompanyInfoUrl: `${host}company/edit.json`,

  // 搜索简历
  searchResumeUrl: `${host}resume/list.json`,

  /** 基础数据 */
  // 城市列表
  // cityUrl: `${host}common/cities.json`,

  // // 公司性质
  // companyTypeUrl: `${host}common/company_type.json`,

  // // 公司规模
  // companySizeUrl: `${host}common/company_size.json`,

  // // 月薪
  // monthPayUrl: `${host}common/month_pay.json`,
  // // 学历
  // educationUrl: `${host}common/education.json`,
  // // 工作经验
  // workYearUrl: `${host}common/work_year.json`,
  // // 身高要求
  // heightUrl: `${host}common/height.json`,
  // // 首页-要求
  // demandUrl: `${host}common/demand.json`,
  // 上传图片
  uploadImgUrl: `${host}image/upload.json`,
  // // 福利待遇
  // welfareUrl: `${host}common/welfare.json`,

};

module.exports = config
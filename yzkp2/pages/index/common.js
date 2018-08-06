var work_year = ["无经验", "1-3年", "3-5年", "5-10年", "10年以上"];

var work_type = ["全职", "兼职"];

var company_size = ["少于50人", "50-150人", "150-500人", "500-1000人", "1000-5000人", "5000-10000人", "10000人以上"];

var education = ["初中及以下", "高中/中技/中专", "大专", "本科", "硕士", "博士"];

var month_pay = ["2千以下", "2-3千", "3-4.5千", "4.5-6千", "6-8千", "0.8-1万", "1-1.5万", "1.5-2万", "2-3万", "3-4万", "4-5万", "5万以上"];

var region = [
    {
        "spell": "B",
        "code": "110000",
        "name": "北京市",
        "list": [
            {
                "spell": "S",
                "code": "110100",
                "name": "市辖区",
                "list": [
                    {
                        "spell": "D",
                        "code": "110101",
                        "name": "东城区"
                    },
                    {
                        "spell": "X",
                        "code": "110102",
                        "name": "西城区"
                    },
                    {
                        "spell": "C",
                        "code": "110105",
                        "name": "朝阳区"
                    },
                    {
                        "spell": "F",
                        "code": "110106",
                        "name": "丰台区"
                    },
                    {
                        "spell": "S",
                        "code": "110107",
                        "name": "石景山区"
                    },
                    {
                        "spell": "H",
                        "code": "110108",
                        "name": "海淀区"
                    },
                    {
                        "spell": "M",
                        "code": "110109",
                        "name": "门头沟区"
                    },
                    {
                        "spell": "F",
                        "code": "110111",
                        "name": "房山区"
                    },
                    {
                        "spell": "T",
                        "code": "110112",
                        "name": "通州区"
                    },
                    {
                        "spell": "S",
                        "code": "110113",
                        "name": "顺义区"
                    },
                    {
                        "spell": "C",
                        "code": "110114",
                        "name": "昌平区"
                    },
                    {
                        "spell": "D",
                        "code": "110115",
                        "name": "大兴区"
                    },
                    {
                        "spell": "H",
                        "code": "110116",
                        "name": "怀柔区"
                    },
                    {
                        "spell": "P",
                        "code": "110117",
                        "name": "平谷区"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "110200",
                "name": "县",
                "list": [
                    {
                        "spell": "M",
                        "code": "110228",
                        "name": "密云县"
                    },
                    {
                        "spell": "Y",
                        "code": "110229",
                        "name": "延庆县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "T",
        "code": "120000",
        "name": "天津市",
        "list": [
            {
                "spell": "S",
                "code": "120100",
                "name": "市辖区",
                "list": [
                    {
                        "spell": "H",
                        "code": "120101",
                        "name": "和平区"
                    },
                    {
                        "spell": "H",
                        "code": "120102",
                        "name": "河东区"
                    },
                    {
                        "spell": "H",
                        "code": "120103",
                        "name": "河西区"
                    },
                    {
                        "spell": "N",
                        "code": "120104",
                        "name": "南开区"
                    },
                    {
                        "spell": "H",
                        "code": "120105",
                        "name": "河北区"
                    },
                    {
                        "spell": "H",
                        "code": "120106",
                        "name": "红桥区"
                    },
                    {
                        "spell": "D",
                        "code": "120116",
                        "name": "滨海新区"
                    },
                    {
                        "spell": "D",
                        "code": "120110",
                        "name": "东丽区"
                    },
                    {
                        "spell": "X",
                        "code": "120111",
                        "name": "西青区"
                    },
                    {
                        "spell": "J",
                        "code": "120112",
                        "name": "津南区"
                    },
                    {
                        "spell": "B",
                        "code": "120113",
                        "name": "北辰区"
                    },
                    {
                        "spell": "W",
                        "code": "120114",
                        "name": "武清区"
                    },
                    {
                        "spell": "B",
                        "code": "120115",
                        "name": "宝坻区"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "120200",
                "name": "县",
                "list": [
                    {
                        "spell": "N",
                        "code": "120221",
                        "name": "宁河县"
                    },
                    {
                        "spell": "J",
                        "code": "120223",
                        "name": "静海县"
                    },
                    {
                        "spell": "J",
                        "code": "120225",
                        "name": "蓟县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "130000",
        "name": "河北省",
        "list": [
            {
                "spell": "S",
                "code": "130100",
                "name": "石家庄市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "130102",
                        "name": "长安区"
                    },
                    {
                        "spell": "Q",
                        "code": "130103",
                        "name": "桥东区"
                    },
                    {
                        "spell": "Q",
                        "code": "130104",
                        "name": "桥西区"
                    },
                    {
                        "spell": "X",
                        "code": "130105",
                        "name": "新华区"
                    },
                    {
                        "spell": "J",
                        "code": "130107",
                        "name": "井陉矿区"
                    },
                    {
                        "spell": "Y",
                        "code": "130108",
                        "name": "裕华区"
                    },
                    {
                        "spell": "J",
                        "code": "130121",
                        "name": "井陉县"
                    },
                    {
                        "spell": "Z",
                        "code": "130123",
                        "name": "正定县"
                    },
                    {
                        "spell": "L",
                        "code": "130124",
                        "name": "栾城县"
                    },
                    {
                        "spell": "X",
                        "code": "130125",
                        "name": "行唐县"
                    },
                    {
                        "spell": "L",
                        "code": "130126",
                        "name": "灵寿县"
                    },
                    {
                        "spell": "G",
                        "code": "130127",
                        "name": "高邑县"
                    },
                    {
                        "spell": "S",
                        "code": "130128",
                        "name": "深泽县"
                    },
                    {
                        "spell": "Z",
                        "code": "130129",
                        "name": "赞皇县"
                    },
                    {
                        "spell": "W",
                        "code": "130130",
                        "name": "无极县"
                    },
                    {
                        "spell": "P",
                        "code": "130131",
                        "name": "平山县"
                    },
                    {
                        "spell": "Y",
                        "code": "130132",
                        "name": "元氏县"
                    },
                    {
                        "spell": "Z",
                        "code": "130133",
                        "name": "赵县"
                    },
                    {
                        "spell": "X",
                        "code": "130181",
                        "name": "辛集市"
                    },
                    {
                        "spell": "G",
                        "code": "130182",
                        "name": "藁城市"
                    },
                    {
                        "spell": "J",
                        "code": "130183",
                        "name": "晋州市"
                    },
                    {
                        "spell": "X",
                        "code": "130184",
                        "name": "新乐市"
                    },
                    {
                        "spell": "L",
                        "code": "130185",
                        "name": "鹿泉市"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "130200",
                "name": "唐山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "130202",
                        "name": "路南区"
                    },
                    {
                        "spell": "L",
                        "code": "130203",
                        "name": "路北区"
                    },
                    {
                        "spell": "G",
                        "code": "130204",
                        "name": "古冶区"
                    },
                    {
                        "spell": "K",
                        "code": "130205",
                        "name": "开平区"
                    },
                    {
                        "spell": "F",
                        "code": "130207",
                        "name": "丰南区"
                    },
                    {
                        "spell": "F",
                        "code": "130208",
                        "name": "丰润区"
                    },
                    {
                        "spell": "L",
                        "code": "130223",
                        "name": "滦县"
                    },
                    {
                        "spell": "L",
                        "code": "130224",
                        "name": "滦南县"
                    },
                    {
                        "spell": "L",
                        "code": "130225",
                        "name": "乐亭县"
                    },
                    {
                        "spell": "Q",
                        "code": "130227",
                        "name": "迁西县"
                    },
                    {
                        "spell": "Y",
                        "code": "130229",
                        "name": "玉田县"
                    },
                    {
                        "spell": "T",
                        "code": "130230",
                        "name": "唐海县"
                    },
                    {
                        "spell": "Z",
                        "code": "130281",
                        "name": "遵化市"
                    },
                    {
                        "spell": "Q",
                        "code": "130283",
                        "name": "迁安市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "130300",
                "name": "秦皇岛市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "130302",
                        "name": "海港区"
                    },
                    {
                        "spell": "S",
                        "code": "130303",
                        "name": "山海关区"
                    },
                    {
                        "spell": "B",
                        "code": "130304",
                        "name": "北戴河区"
                    },
                    {
                        "spell": "Q",
                        "code": "130321",
                        "name": "青龙满族自治县"
                    },
                    {
                        "spell": "C",
                        "code": "130322",
                        "name": "昌黎县"
                    },
                    {
                        "spell": "F",
                        "code": "130323",
                        "name": "抚宁县"
                    },
                    {
                        "spell": "L",
                        "code": "130324",
                        "name": "卢龙县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "130400",
                "name": "邯郸市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "130402",
                        "name": "邯山区"
                    },
                    {
                        "spell": "C",
                        "code": "130403",
                        "name": "丛台区"
                    },
                    {
                        "spell": "F",
                        "code": "130404",
                        "name": "复兴区"
                    },
                    {
                        "spell": "F",
                        "code": "130406",
                        "name": "峰峰矿区"
                    },
                    {
                        "spell": "H",
                        "code": "130421",
                        "name": "邯郸县"
                    },
                    {
                        "spell": "L",
                        "code": "130423",
                        "name": "临漳县"
                    },
                    {
                        "spell": "C",
                        "code": "130424",
                        "name": "成安县"
                    },
                    {
                        "spell": "D",
                        "code": "130425",
                        "name": "大名县"
                    },
                    {
                        "spell": "S",
                        "code": "130426",
                        "name": "涉县"
                    },
                    {
                        "spell": "C",
                        "code": "130427",
                        "name": "磁县"
                    },
                    {
                        "spell": "F",
                        "code": "130428",
                        "name": "肥乡县"
                    },
                    {
                        "spell": "Y",
                        "code": "130429",
                        "name": "永年县"
                    },
                    {
                        "spell": "Q",
                        "code": "130430",
                        "name": "邱县"
                    },
                    {
                        "spell": "J",
                        "code": "130431",
                        "name": "鸡泽县"
                    },
                    {
                        "spell": "G",
                        "code": "130432",
                        "name": "广平县"
                    },
                    {
                        "spell": "G",
                        "code": "130433",
                        "name": "馆陶县"
                    },
                    {
                        "spell": "W",
                        "code": "130434",
                        "name": "魏县"
                    },
                    {
                        "spell": "Q",
                        "code": "130435",
                        "name": "曲周县"
                    },
                    {
                        "spell": "W",
                        "code": "130481",
                        "name": "武安市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "130500",
                "name": "邢台市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "130502",
                        "name": "桥东区"
                    },
                    {
                        "spell": "Q",
                        "code": "130503",
                        "name": "桥西区"
                    },
                    {
                        "spell": "X",
                        "code": "130521",
                        "name": "邢台县"
                    },
                    {
                        "spell": "L",
                        "code": "130522",
                        "name": "临城县"
                    },
                    {
                        "spell": "N",
                        "code": "130523",
                        "name": "内丘县"
                    },
                    {
                        "spell": "B",
                        "code": "130524",
                        "name": "柏乡县"
                    },
                    {
                        "spell": "L",
                        "code": "130525",
                        "name": "隆尧县"
                    },
                    {
                        "spell": "R",
                        "code": "130526",
                        "name": "任县"
                    },
                    {
                        "spell": "N",
                        "code": "130527",
                        "name": "南和县"
                    },
                    {
                        "spell": "N",
                        "code": "130528",
                        "name": "宁晋县"
                    },
                    {
                        "spell": "J",
                        "code": "130529",
                        "name": "巨鹿县"
                    },
                    {
                        "spell": "X",
                        "code": "130530",
                        "name": "新河县"
                    },
                    {
                        "spell": "G",
                        "code": "130531",
                        "name": "广宗县"
                    },
                    {
                        "spell": "P",
                        "code": "130532",
                        "name": "平乡县"
                    },
                    {
                        "spell": "W",
                        "code": "130533",
                        "name": "威县"
                    },
                    {
                        "spell": "Q",
                        "code": "130534",
                        "name": "清河县"
                    },
                    {
                        "spell": "L",
                        "code": "130535",
                        "name": "临西县"
                    },
                    {
                        "spell": "N",
                        "code": "130581",
                        "name": "南宫市"
                    },
                    {
                        "spell": "S",
                        "code": "130582",
                        "name": "沙河市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "130600",
                "name": "保定市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "130600",
                        "name": "新市区"
                    },
                    {
                        "spell": "B",
                        "code": "130603",
                        "name": "北市区"
                    },
                    {
                        "spell": "N",
                        "code": "130604",
                        "name": "南市区"
                    },
                    {
                        "spell": "M",
                        "code": "130621",
                        "name": "满城县"
                    },
                    {
                        "spell": "Q",
                        "code": "130622",
                        "name": "清苑县"
                    },
                    {
                        "spell": "L",
                        "code": "130623",
                        "name": "涞水县"
                    },
                    {
                        "spell": "F",
                        "code": "130624",
                        "name": "阜平县"
                    },
                    {
                        "spell": "X",
                        "code": "130625",
                        "name": "徐水县"
                    },
                    {
                        "spell": "D",
                        "code": "130626",
                        "name": "定兴县"
                    },
                    {
                        "spell": "T",
                        "code": "130627",
                        "name": "唐县"
                    },
                    {
                        "spell": "G",
                        "code": "130628",
                        "name": "高阳县"
                    },
                    {
                        "spell": "R",
                        "code": "130629",
                        "name": "容城县"
                    },
                    {
                        "spell": "L",
                        "code": "130630",
                        "name": "涞源县"
                    },
                    {
                        "spell": "W",
                        "code": "130631",
                        "name": "望都县"
                    },
                    {
                        "spell": "A",
                        "code": "130632",
                        "name": "安新县"
                    },
                    {
                        "spell": "Y",
                        "code": "130633",
                        "name": "易县"
                    },
                    {
                        "spell": "Q",
                        "code": "130634",
                        "name": "曲阳县"
                    },
                    {
                        "spell": "L",
                        "code": "130635",
                        "name": "蠡县"
                    },
                    {
                        "spell": "S",
                        "code": "130636",
                        "name": "顺平县"
                    },
                    {
                        "spell": "B",
                        "code": "130637",
                        "name": "博野县"
                    },
                    {
                        "spell": "X",
                        "code": "130638",
                        "name": "雄县"
                    },
                    {
                        "spell": "Z",
                        "code": "130681",
                        "name": "涿州市"
                    },
                    {
                        "spell": "D",
                        "code": "130682",
                        "name": "定州市"
                    },
                    {
                        "spell": "A",
                        "code": "130683",
                        "name": "安国市"
                    },
                    {
                        "spell": "G",
                        "code": "130684",
                        "name": "高碑店市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "130700",
                "name": "张家口市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "130702",
                        "name": "桥东区"
                    },
                    {
                        "spell": "Q",
                        "code": "130703",
                        "name": "桥西区"
                    },
                    {
                        "spell": "X",
                        "code": "130705",
                        "name": "宣化区"
                    },
                    {
                        "spell": "X",
                        "code": "130706",
                        "name": "下花园区"
                    },
                    {
                        "spell": "X",
                        "code": "130721",
                        "name": "宣化县"
                    },
                    {
                        "spell": "Z",
                        "code": "130722",
                        "name": "张北县"
                    },
                    {
                        "spell": "K",
                        "code": "130723",
                        "name": "康保县"
                    },
                    {
                        "spell": "G",
                        "code": "130724",
                        "name": "沽源县"
                    },
                    {
                        "spell": "S",
                        "code": "130725",
                        "name": "尚义县"
                    },
                    {
                        "spell": "Y",
                        "code": "130726",
                        "name": "蔚县"
                    },
                    {
                        "spell": "Y",
                        "code": "130727",
                        "name": "阳原县"
                    },
                    {
                        "spell": "H",
                        "code": "130728",
                        "name": "怀安县"
                    },
                    {
                        "spell": "W",
                        "code": "130729",
                        "name": "万全县"
                    },
                    {
                        "spell": "H",
                        "code": "130730",
                        "name": "怀来县"
                    },
                    {
                        "spell": "Z",
                        "code": "130731",
                        "name": "涿鹿县"
                    },
                    {
                        "spell": "C",
                        "code": "130732",
                        "name": "赤城县"
                    },
                    {
                        "spell": "C",
                        "code": "130733",
                        "name": "崇礼县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "130800",
                "name": "承德市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "130802",
                        "name": "双桥区"
                    },
                    {
                        "spell": "S",
                        "code": "130803",
                        "name": "双滦区"
                    },
                    {
                        "spell": "Y",
                        "code": "130804",
                        "name": "鹰手营子矿区"
                    },
                    {
                        "spell": "C",
                        "code": "130821",
                        "name": "承德县"
                    },
                    {
                        "spell": "X",
                        "code": "130822",
                        "name": "兴隆县"
                    },
                    {
                        "spell": "P",
                        "code": "130823",
                        "name": "平泉县"
                    },
                    {
                        "spell": "L",
                        "code": "130824",
                        "name": "滦平县"
                    },
                    {
                        "spell": "L",
                        "code": "130825",
                        "name": "隆化县"
                    },
                    {
                        "spell": "F",
                        "code": "130826",
                        "name": "丰宁满族自治县"
                    },
                    {
                        "spell": "K",
                        "code": "130827",
                        "name": "宽城满族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "130828",
                        "name": "围场满族蒙古族自治县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "130900",
                "name": "沧州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "130901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "130902",
                        "name": "新华区"
                    },
                    {
                        "spell": "Y",
                        "code": "130903",
                        "name": "运河区"
                    },
                    {
                        "spell": "C",
                        "code": "130921",
                        "name": "沧县"
                    },
                    {
                        "spell": "Q",
                        "code": "130922",
                        "name": "青县"
                    },
                    {
                        "spell": "D",
                        "code": "130923",
                        "name": "东光县"
                    },
                    {
                        "spell": "H",
                        "code": "130924",
                        "name": "海兴县"
                    },
                    {
                        "spell": "Y",
                        "code": "130925",
                        "name": "盐山县"
                    },
                    {
                        "spell": "S",
                        "code": "130926",
                        "name": "肃宁县"
                    },
                    {
                        "spell": "N",
                        "code": "130927",
                        "name": "南皮县"
                    },
                    {
                        "spell": "W",
                        "code": "130928",
                        "name": "吴桥县"
                    },
                    {
                        "spell": "X",
                        "code": "130929",
                        "name": "献县"
                    },
                    {
                        "spell": "M",
                        "code": "130930",
                        "name": "孟村回族自治县"
                    },
                    {
                        "spell": "B",
                        "code": "130981",
                        "name": "泊头市"
                    },
                    {
                        "spell": "R",
                        "code": "130982",
                        "name": "任丘市"
                    },
                    {
                        "spell": "H",
                        "code": "130983",
                        "name": "黄骅市"
                    },
                    {
                        "spell": "H",
                        "code": "130984",
                        "name": "河间市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "131000",
                "name": "廊坊市",
                "list": [
                    {
                        "spell": "S",
                        "code": "131001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "A",
                        "code": "131002",
                        "name": "安次区"
                    },
                    {
                        "spell": "G",
                        "code": "131003",
                        "name": "广阳区"
                    },
                    {
                        "spell": "G",
                        "code": "131022",
                        "name": "固安县"
                    },
                    {
                        "spell": "Y",
                        "code": "131023",
                        "name": "永清县"
                    },
                    {
                        "spell": "X",
                        "code": "131024",
                        "name": "香河县"
                    },
                    {
                        "spell": "D",
                        "code": "131025",
                        "name": "大城县"
                    },
                    {
                        "spell": "W",
                        "code": "131026",
                        "name": "文安县"
                    },
                    {
                        "spell": "D",
                        "code": "131028",
                        "name": "大厂回族自治县"
                    },
                    {
                        "spell": "B",
                        "code": "131081",
                        "name": "霸州市"
                    },
                    {
                        "spell": "S",
                        "code": "131082",
                        "name": "三河市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "131100",
                "name": "衡水市",
                "list": [
                    {
                        "spell": "S",
                        "code": "131101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "131102",
                        "name": "桃城区"
                    },
                    {
                        "spell": "Z",
                        "code": "131121",
                        "name": "枣强县"
                    },
                    {
                        "spell": "W",
                        "code": "131122",
                        "name": "武邑县"
                    },
                    {
                        "spell": "W",
                        "code": "131123",
                        "name": "武强县"
                    },
                    {
                        "spell": "R",
                        "code": "131124",
                        "name": "饶阳县"
                    },
                    {
                        "spell": "A",
                        "code": "131125",
                        "name": "安平县"
                    },
                    {
                        "spell": "G",
                        "code": "131126",
                        "name": "故城县"
                    },
                    {
                        "spell": "J",
                        "code": "131127",
                        "name": "景县"
                    },
                    {
                        "spell": "F",
                        "code": "131128",
                        "name": "阜城县"
                    },
                    {
                        "spell": "J",
                        "code": "131181",
                        "name": "冀州市"
                    },
                    {
                        "spell": "S",
                        "code": "131182",
                        "name": "深州市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "S",
        "code": "140000",
        "name": "山西省",
        "list": [
            {
                "spell": "T",
                "code": "140100",
                "name": "太原市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "140105",
                        "name": "小店区"
                    },
                    {
                        "spell": "Y",
                        "code": "140106",
                        "name": "迎泽区"
                    },
                    {
                        "spell": "X",
                        "code": "140107",
                        "name": "杏花岭区"
                    },
                    {
                        "spell": "J",
                        "code": "140108",
                        "name": "尖草坪区"
                    },
                    {
                        "spell": "W",
                        "code": "140109",
                        "name": "万柏林区"
                    },
                    {
                        "spell": "J",
                        "code": "140110",
                        "name": "晋源区"
                    },
                    {
                        "spell": "Q",
                        "code": "140121",
                        "name": "清徐县"
                    },
                    {
                        "spell": "Y",
                        "code": "140122",
                        "name": "阳曲县"
                    },
                    {
                        "spell": "L",
                        "code": "140123",
                        "name": "娄烦县"
                    },
                    {
                        "spell": "G",
                        "code": "140181",
                        "name": "古交市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "140200",
                "name": "大同市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "140202",
                        "name": "城区"
                    },
                    {
                        "spell": "K",
                        "code": "140203",
                        "name": "矿区"
                    },
                    {
                        "spell": "N",
                        "code": "140211",
                        "name": "南郊区"
                    },
                    {
                        "spell": "X",
                        "code": "140212",
                        "name": "新荣区"
                    },
                    {
                        "spell": "Y",
                        "code": "140221",
                        "name": "阳高县"
                    },
                    {
                        "spell": "T",
                        "code": "140222",
                        "name": "天镇县"
                    },
                    {
                        "spell": "G",
                        "code": "140223",
                        "name": "广灵县"
                    },
                    {
                        "spell": "L",
                        "code": "140224",
                        "name": "灵丘县"
                    },
                    {
                        "spell": "H",
                        "code": "140225",
                        "name": "浑源县"
                    },
                    {
                        "spell": "Z",
                        "code": "140226",
                        "name": "左云县"
                    },
                    {
                        "spell": "D",
                        "code": "140227",
                        "name": "大同县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "140300",
                "name": "阳泉市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "140302",
                        "name": "城区"
                    },
                    {
                        "spell": "K",
                        "code": "140303",
                        "name": "矿区"
                    },
                    {
                        "spell": "J",
                        "code": "140311",
                        "name": "郊区"
                    },
                    {
                        "spell": "P",
                        "code": "140321",
                        "name": "平定县"
                    },
                    {
                        "spell": "Y",
                        "code": "140322",
                        "name": "盂县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "140400",
                "name": "长治市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "140402",
                        "name": "城区"
                    },
                    {
                        "spell": "J",
                        "code": "140411",
                        "name": "郊区"
                    },
                    {
                        "spell": "C",
                        "code": "140421",
                        "name": "长治县"
                    },
                    {
                        "spell": "X",
                        "code": "140423",
                        "name": "襄垣县"
                    },
                    {
                        "spell": "T",
                        "code": "140424",
                        "name": "屯留县"
                    },
                    {
                        "spell": "P",
                        "code": "140425",
                        "name": "平顺县"
                    },
                    {
                        "spell": "L",
                        "code": "140426",
                        "name": "黎城县"
                    },
                    {
                        "spell": "H",
                        "code": "140427",
                        "name": "壶关县"
                    },
                    {
                        "spell": "Z",
                        "code": "140428",
                        "name": "长子县"
                    },
                    {
                        "spell": "W",
                        "code": "140429",
                        "name": "武乡县"
                    },
                    {
                        "spell": "Q",
                        "code": "140430",
                        "name": "沁县"
                    },
                    {
                        "spell": "Q",
                        "code": "140431",
                        "name": "沁源县"
                    },
                    {
                        "spell": "L",
                        "code": "140481",
                        "name": "潞城市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "140500",
                "name": "晋城市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "140502",
                        "name": "城区"
                    },
                    {
                        "spell": "Q",
                        "code": "140521",
                        "name": "沁水县"
                    },
                    {
                        "spell": "Y",
                        "code": "140522",
                        "name": "阳城县"
                    },
                    {
                        "spell": "L",
                        "code": "140524",
                        "name": "陵川县"
                    },
                    {
                        "spell": "Z",
                        "code": "140525",
                        "name": "泽州县"
                    },
                    {
                        "spell": "G",
                        "code": "140581",
                        "name": "高平市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "140600",
                "name": "朔州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "140601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "140602",
                        "name": "朔城区"
                    },
                    {
                        "spell": "P",
                        "code": "140603",
                        "name": "平鲁区"
                    },
                    {
                        "spell": "S",
                        "code": "140621",
                        "name": "山阴县"
                    },
                    {
                        "spell": "Y",
                        "code": "140622",
                        "name": "应县"
                    },
                    {
                        "spell": "Y",
                        "code": "140623",
                        "name": "右玉县"
                    },
                    {
                        "spell": "H",
                        "code": "140624",
                        "name": "怀仁县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "140700",
                "name": "晋中市",
                "list": [
                    {
                        "spell": "1",
                        "code": "140701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "140702",
                        "name": "榆次区"
                    },
                    {
                        "spell": "Y",
                        "code": "140721",
                        "name": "榆社县"
                    },
                    {
                        "spell": "Z",
                        "code": "140722",
                        "name": "左权县"
                    },
                    {
                        "spell": "H",
                        "code": "140723",
                        "name": "和顺县"
                    },
                    {
                        "spell": "X",
                        "code": "140724",
                        "name": "昔阳县"
                    },
                    {
                        "spell": "S",
                        "code": "140725",
                        "name": "寿阳县"
                    },
                    {
                        "spell": "T",
                        "code": "140726",
                        "name": "太谷县"
                    },
                    {
                        "spell": "Q",
                        "code": "140727",
                        "name": "祁县"
                    },
                    {
                        "spell": "P",
                        "code": "140728",
                        "name": "平遥县"
                    },
                    {
                        "spell": "L",
                        "code": "140729",
                        "name": "灵石县"
                    },
                    {
                        "spell": "J",
                        "code": "140781",
                        "name": "介休市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "140800",
                "name": "运城市",
                "list": [
                    {
                        "spell": "1",
                        "code": "140801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "140802",
                        "name": "盐湖区"
                    },
                    {
                        "spell": "L",
                        "code": "140821",
                        "name": "临猗县"
                    },
                    {
                        "spell": "W",
                        "code": "140822",
                        "name": "万荣县"
                    },
                    {
                        "spell": "W",
                        "code": "140823",
                        "name": "闻喜县"
                    },
                    {
                        "spell": "J",
                        "code": "140824",
                        "name": "稷山县"
                    },
                    {
                        "spell": "X",
                        "code": "140825",
                        "name": "新绛县"
                    },
                    {
                        "spell": "J",
                        "code": "140826",
                        "name": "绛县"
                    },
                    {
                        "spell": "Y",
                        "code": "140827",
                        "name": "垣曲县"
                    },
                    {
                        "spell": "X",
                        "code": "140828",
                        "name": "夏县"
                    },
                    {
                        "spell": "P",
                        "code": "140829",
                        "name": "平陆县"
                    },
                    {
                        "spell": "R",
                        "code": "140830",
                        "name": "芮城县"
                    },
                    {
                        "spell": "Y",
                        "code": "140881",
                        "name": "永济市"
                    },
                    {
                        "spell": "H",
                        "code": "140882",
                        "name": "河津市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "140900",
                "name": "忻州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "140901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "140902",
                        "name": "忻府区"
                    },
                    {
                        "spell": "D",
                        "code": "140921",
                        "name": "定襄县"
                    },
                    {
                        "spell": "W",
                        "code": "140922",
                        "name": "五台县"
                    },
                    {
                        "spell": "D",
                        "code": "140923",
                        "name": "代县"
                    },
                    {
                        "spell": "F",
                        "code": "140924",
                        "name": "繁峙县"
                    },
                    {
                        "spell": "N",
                        "code": "140925",
                        "name": "宁武县"
                    },
                    {
                        "spell": "J",
                        "code": "140926",
                        "name": "静乐县"
                    },
                    {
                        "spell": "S",
                        "code": "140927",
                        "name": "神池县"
                    },
                    {
                        "spell": "W",
                        "code": "140928",
                        "name": "五寨县"
                    },
                    {
                        "spell": "K",
                        "code": "140929",
                        "name": "岢岚县"
                    },
                    {
                        "spell": "H",
                        "code": "140930",
                        "name": "河曲县"
                    },
                    {
                        "spell": "B",
                        "code": "140931",
                        "name": "保德县"
                    },
                    {
                        "spell": "P",
                        "code": "140932",
                        "name": "偏关县"
                    },
                    {
                        "spell": "Y",
                        "code": "140981",
                        "name": "原平市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "141000",
                "name": "临汾市",
                "list": [
                    {
                        "spell": "1",
                        "code": "141001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "141002",
                        "name": "尧都区"
                    },
                    {
                        "spell": "Q",
                        "code": "141021",
                        "name": "曲沃县"
                    },
                    {
                        "spell": "Y",
                        "code": "141022",
                        "name": "翼城县"
                    },
                    {
                        "spell": "X",
                        "code": "141023",
                        "name": "襄汾县"
                    },
                    {
                        "spell": "H",
                        "code": "141024",
                        "name": "洪洞县"
                    },
                    {
                        "spell": "G",
                        "code": "141025",
                        "name": "古县"
                    },
                    {
                        "spell": "A",
                        "code": "141026",
                        "name": "安泽县"
                    },
                    {
                        "spell": "F",
                        "code": "141027",
                        "name": "浮山县"
                    },
                    {
                        "spell": "J",
                        "code": "141028",
                        "name": "吉县"
                    },
                    {
                        "spell": "X",
                        "code": "141029",
                        "name": "乡宁县"
                    },
                    {
                        "spell": "D",
                        "code": "141030",
                        "name": "大宁县"
                    },
                    {
                        "spell": "X",
                        "code": "141031",
                        "name": "隰县"
                    },
                    {
                        "spell": "Y",
                        "code": "141032",
                        "name": "永和县"
                    },
                    {
                        "spell": "P",
                        "code": "141033",
                        "name": "蒲县"
                    },
                    {
                        "spell": "F",
                        "code": "141034",
                        "name": "汾西县"
                    },
                    {
                        "spell": "H",
                        "code": "141081",
                        "name": "侯马市"
                    },
                    {
                        "spell": "H",
                        "code": "141082",
                        "name": "霍州市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "141100",
                "name": "吕梁市",
                "list": [
                    {
                        "spell": "1",
                        "code": "141101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "141102",
                        "name": "离石区"
                    },
                    {
                        "spell": "W",
                        "code": "141121",
                        "name": "文水县"
                    },
                    {
                        "spell": "J",
                        "code": "141122",
                        "name": "交城县"
                    },
                    {
                        "spell": "X",
                        "code": "141123",
                        "name": "兴县"
                    },
                    {
                        "spell": "L",
                        "code": "141124",
                        "name": "临县"
                    },
                    {
                        "spell": "L",
                        "code": "141125",
                        "name": "柳林县"
                    },
                    {
                        "spell": "S",
                        "code": "141126",
                        "name": "石楼县"
                    },
                    {
                        "spell": "L",
                        "code": "141127",
                        "name": "岚县"
                    },
                    {
                        "spell": "F",
                        "code": "141128",
                        "name": "方山县"
                    },
                    {
                        "spell": "Z",
                        "code": "141129",
                        "name": "中阳县"
                    },
                    {
                        "spell": "J",
                        "code": "141130",
                        "name": "交口县"
                    },
                    {
                        "spell": "X",
                        "code": "141181",
                        "name": "孝义市"
                    },
                    {
                        "spell": "F",
                        "code": "141182",
                        "name": "汾阳市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "N",
        "code": "150000",
        "name": "内蒙古自治区",
        "list": [
            {
                "spell": "H",
                "code": "150100",
                "name": "呼和浩特市",
                "list": [
                    {
                        "spell": "S",
                        "code": "150101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "150102",
                        "name": "新城区"
                    },
                    {
                        "spell": "H",
                        "code": "150103",
                        "name": "回民区"
                    },
                    {
                        "spell": "Y",
                        "code": "150104",
                        "name": "玉泉区"
                    },
                    {
                        "spell": "S",
                        "code": "150105",
                        "name": "赛罕区"
                    },
                    {
                        "spell": "T",
                        "code": "150121",
                        "name": "土默特左旗"
                    },
                    {
                        "spell": "T",
                        "code": "150122",
                        "name": "托克托县"
                    },
                    {
                        "spell": "H",
                        "code": "150123",
                        "name": "和林格尔县"
                    },
                    {
                        "spell": "Q",
                        "code": "150124",
                        "name": "清水河县"
                    },
                    {
                        "spell": "W",
                        "code": "150125",
                        "name": "武川县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "150200",
                "name": "包头市",
                "list": [
                    {
                        "spell": "S",
                        "code": "150201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "150202",
                        "name": "东河区"
                    },
                    {
                        "spell": "K",
                        "code": "150203",
                        "name": "昆都仑区"
                    },
                    {
                        "spell": "Q",
                        "code": "150204",
                        "name": "青山区"
                    },
                    {
                        "spell": "S",
                        "code": "150205",
                        "name": "石拐区"
                    },
                    {
                        "spell": "B",
                        "code": "150206",
                        "name": "白云鄂博矿区"
                    },
                    {
                        "spell": "J",
                        "code": "150207",
                        "name": "九原区"
                    },
                    {
                        "spell": "T",
                        "code": "150221",
                        "name": "土默特右旗"
                    },
                    {
                        "spell": "G",
                        "code": "150222",
                        "name": "固阳县"
                    },
                    {
                        "spell": "D",
                        "code": "150223",
                        "name": "达尔罕茂明安联合旗"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "150300",
                "name": "乌海市",
                "list": [
                    {
                        "spell": "S",
                        "code": "150301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "150302",
                        "name": "海勃湾区"
                    },
                    {
                        "spell": "H",
                        "code": "150303",
                        "name": "海南区"
                    },
                    {
                        "spell": "U",
                        "code": "150304",
                        "name": "乌达区"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "150400",
                "name": "赤峰市",
                "list": [
                    {
                        "spell": "S",
                        "code": "150401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "150402",
                        "name": "红山区"
                    },
                    {
                        "spell": "Y",
                        "code": "150403",
                        "name": "元宝山区"
                    },
                    {
                        "spell": "S",
                        "code": "150404",
                        "name": "松山区"
                    },
                    {
                        "spell": "A",
                        "code": "150421",
                        "name": "阿鲁科尔沁旗"
                    },
                    {
                        "spell": "B",
                        "code": "150422",
                        "name": "巴林左旗"
                    },
                    {
                        "spell": "B",
                        "code": "150423",
                        "name": "巴林右旗"
                    },
                    {
                        "spell": "L",
                        "code": "150424",
                        "name": "林西县"
                    },
                    {
                        "spell": "H",
                        "code": "150425",
                        "name": "克什克腾旗"
                    },
                    {
                        "spell": "O",
                        "code": "150426",
                        "name": "翁牛特旗"
                    },
                    {
                        "spell": "H",
                        "code": "150428",
                        "name": "喀喇沁旗"
                    },
                    {
                        "spell": "N",
                        "code": "150429",
                        "name": "宁城县"
                    },
                    {
                        "spell": "A",
                        "code": "150430",
                        "name": "敖汉旗"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "150500",
                "name": "通辽市",
                "list": [
                    {
                        "spell": "1",
                        "code": "150501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "K",
                        "code": "150502",
                        "name": "科尔沁区"
                    },
                    {
                        "spell": "H",
                        "code": "150521",
                        "name": "科尔沁左翼中旗"
                    },
                    {
                        "spell": "H",
                        "code": "150522",
                        "name": "科尔沁左翼后旗"
                    },
                    {
                        "spell": "K",
                        "code": "150523",
                        "name": "开鲁县"
                    },
                    {
                        "spell": "H",
                        "code": "150524",
                        "name": "库伦旗"
                    },
                    {
                        "spell": "N",
                        "code": "150525",
                        "name": "奈曼旗"
                    },
                    {
                        "spell": "J",
                        "code": "150526",
                        "name": "扎鲁特旗"
                    },
                    {
                        "spell": "H",
                        "code": "150581",
                        "name": "霍林郭勒市"
                    }
                ]
            },
            {
                "spell": "E",
                "code": "150600",
                "name": "鄂尔多斯市",
                "list": [
                    {
                        "spell": "D",
                        "code": "150602",
                        "name": "东胜区"
                    },
                    {
                        "spell": "D",
                        "code": "150621",
                        "name": "达拉特旗"
                    },
                    {
                        "spell": "J",
                        "code": "150622",
                        "name": "准格尔旗"
                    },
                    {
                        "spell": "O",
                        "code": "150623",
                        "name": "鄂托克前旗"
                    },
                    {
                        "spell": "O",
                        "code": "150624",
                        "name": "鄂托克旗"
                    },
                    {
                        "spell": "H",
                        "code": "150625",
                        "name": "杭锦旗"
                    },
                    {
                        "spell": "U",
                        "code": "150626",
                        "name": "乌审旗"
                    },
                    {
                        "spell": "E",
                        "code": "150627",
                        "name": "伊金霍洛旗"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "150700",
                "name": "呼伦贝尔市",
                "list": [
                    {
                        "spell": "1",
                        "code": "150701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "150702",
                        "name": "海拉尔区"
                    },
                    {
                        "spell": "A",
                        "code": "150721",
                        "name": "阿荣旗"
                    },
                    {
                        "spell": "M",
                        "code": "150722",
                        "name": "莫力达瓦达斡尔族自治旗"
                    },
                    {
                        "spell": "O",
                        "code": "150723",
                        "name": "鄂伦春自治旗"
                    },
                    {
                        "spell": "E",
                        "code": "150724",
                        "name": "鄂温克族自治旗"
                    },
                    {
                        "spell": "C",
                        "code": "150725",
                        "name": "陈巴尔虎旗"
                    },
                    {
                        "spell": "X",
                        "code": "150726",
                        "name": "新巴尔虎左旗"
                    },
                    {
                        "spell": "X",
                        "code": "150727",
                        "name": "新巴尔虎右旗"
                    },
                    {
                        "spell": "M",
                        "code": "150781",
                        "name": "满洲里市"
                    },
                    {
                        "spell": "Y",
                        "code": "150782",
                        "name": "牙克石市"
                    },
                    {
                        "spell": "Z",
                        "code": "150783",
                        "name": "扎兰屯市"
                    },
                    {
                        "spell": "E",
                        "code": "150784",
                        "name": "额尔古纳市"
                    },
                    {
                        "spell": "G",
                        "code": "150785",
                        "name": "根河市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "150800",
                "name": "巴彦淖尔市",
                "list": [
                    {
                        "spell": "1",
                        "code": "150801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "150802",
                        "name": "临河区"
                    },
                    {
                        "spell": "W",
                        "code": "150821",
                        "name": "五原县"
                    },
                    {
                        "spell": "D",
                        "code": "150822",
                        "name": "磴口县"
                    },
                    {
                        "spell": "U",
                        "code": "150823",
                        "name": "乌拉特前旗"
                    },
                    {
                        "spell": "U",
                        "code": "150824",
                        "name": "乌拉特中旗"
                    },
                    {
                        "spell": "U",
                        "code": "150825",
                        "name": "乌拉特后旗"
                    },
                    {
                        "spell": "H",
                        "code": "150826",
                        "name": "杭锦后旗"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "150900",
                "name": "乌兰察布市",
                "list": [
                    {
                        "spell": "1",
                        "code": "150901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "150902",
                        "name": "集宁区"
                    },
                    {
                        "spell": "Z",
                        "code": "150921",
                        "name": "卓资县"
                    },
                    {
                        "spell": "H",
                        "code": "150922",
                        "name": "化德县"
                    },
                    {
                        "spell": "S",
                        "code": "150923",
                        "name": "商都县"
                    },
                    {
                        "spell": "X",
                        "code": "150924",
                        "name": "兴和县"
                    },
                    {
                        "spell": "L",
                        "code": "150925",
                        "name": "凉城县"
                    },
                    {
                        "spell": "Q",
                        "code": "150926",
                        "name": "察哈尔右翼前旗"
                    },
                    {
                        "spell": "Q",
                        "code": "150927",
                        "name": "察哈尔右翼中旗"
                    },
                    {
                        "spell": "Q",
                        "code": "150928",
                        "name": "察哈尔右翼后旗"
                    },
                    {
                        "spell": "D",
                        "code": "150929",
                        "name": "四子王旗"
                    },
                    {
                        "spell": "F",
                        "code": "150981",
                        "name": "丰镇市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "152200",
                "name": "兴安盟",
                "list": [
                    {
                        "spell": "U",
                        "code": "152201",
                        "name": "乌兰浩特市"
                    },
                    {
                        "spell": "A",
                        "code": "152202",
                        "name": "阿尔山市"
                    },
                    {
                        "spell": "H",
                        "code": "152221",
                        "name": "科尔沁右翼前旗"
                    },
                    {
                        "spell": "H",
                        "code": "152222",
                        "name": "科尔沁右翼中旗"
                    },
                    {
                        "spell": "J",
                        "code": "152223",
                        "name": "扎赉特旗"
                    },
                    {
                        "spell": "T",
                        "code": "152224",
                        "name": "突泉县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "152500",
                "name": "锡林郭勒盟",
                "list": [
                    {
                        "spell": "E",
                        "code": "152501",
                        "name": "二连浩特市"
                    },
                    {
                        "spell": "X",
                        "code": "152502",
                        "name": "锡林浩特市"
                    },
                    {
                        "spell": "A",
                        "code": "152522",
                        "name": "阿巴嘎旗"
                    },
                    {
                        "spell": "S",
                        "code": "152523",
                        "name": "苏尼特左旗"
                    },
                    {
                        "spell": "S",
                        "code": "152524",
                        "name": "苏尼特右旗"
                    },
                    {
                        "spell": "D",
                        "code": "152525",
                        "name": "东乌珠穆沁旗"
                    },
                    {
                        "spell": "X",
                        "code": "152526",
                        "name": "西乌珠穆沁旗"
                    },
                    {
                        "spell": "T",
                        "code": "152527",
                        "name": "太仆寺旗"
                    },
                    {
                        "spell": "X",
                        "code": "152528",
                        "name": "镶黄旗"
                    },
                    {
                        "spell": "Z",
                        "code": "152529",
                        "name": "正镶白旗"
                    },
                    {
                        "spell": "Z",
                        "code": "152530",
                        "name": "正蓝旗"
                    },
                    {
                        "spell": "D",
                        "code": "152531",
                        "name": "多伦县"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "152900",
                "name": "阿拉善盟",
                "list": [
                    {
                        "spell": "A",
                        "code": "152921",
                        "name": "阿拉善左旗"
                    },
                    {
                        "spell": "A",
                        "code": "152922",
                        "name": "阿拉善右旗"
                    },
                    {
                        "spell": "E",
                        "code": "152923",
                        "name": "额济纳旗"
                    }
                ]
            }
        ]
    },
    {
        "spell": "L",
        "code": "210000",
        "name": "辽宁省",
        "list": [
            {
                "spell": "S",
                "code": "210100",
                "name": "沈阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "210102",
                        "name": "和平区"
                    },
                    {
                        "spell": "S",
                        "code": "210103",
                        "name": "沈河区"
                    },
                    {
                        "spell": "D",
                        "code": "210104",
                        "name": "大东区"
                    },
                    {
                        "spell": "H",
                        "code": "210105",
                        "name": "皇姑区"
                    },
                    {
                        "spell": "T",
                        "code": "210106",
                        "name": "铁西区"
                    },
                    {
                        "spell": "S",
                        "code": "210111",
                        "name": "苏家屯区"
                    },
                    {
                        "spell": "D",
                        "code": "210112",
                        "name": "东陵区"
                    },
                    {
                        "spell": "X",
                        "code": "210113",
                        "name": "沈北新区"
                    },
                    {
                        "spell": "Y",
                        "code": "210114",
                        "name": "于洪区"
                    },
                    {
                        "spell": "L",
                        "code": "210122",
                        "name": "辽中县"
                    },
                    {
                        "spell": "K",
                        "code": "210123",
                        "name": "康平县"
                    },
                    {
                        "spell": "F",
                        "code": "210124",
                        "name": "法库县"
                    },
                    {
                        "spell": "X",
                        "code": "210181",
                        "name": "新民市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "210200",
                "name": "大连市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "210202",
                        "name": "中山区"
                    },
                    {
                        "spell": "X",
                        "code": "210203",
                        "name": "西岗区"
                    },
                    {
                        "spell": "S",
                        "code": "210204",
                        "name": "沙河口区"
                    },
                    {
                        "spell": "G",
                        "code": "210211",
                        "name": "甘井子区"
                    },
                    {
                        "spell": "L",
                        "code": "210212",
                        "name": "旅顺口区"
                    },
                    {
                        "spell": "J",
                        "code": "210213",
                        "name": "金州区"
                    },
                    {
                        "spell": "C",
                        "code": "210224",
                        "name": "长海县"
                    },
                    {
                        "spell": "W",
                        "code": "210281",
                        "name": "瓦房店市"
                    },
                    {
                        "spell": "P",
                        "code": "210282",
                        "name": "普兰店市"
                    },
                    {
                        "spell": "Z",
                        "code": "210283",
                        "name": "庄河市"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "210300",
                "name": "鞍山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "210302",
                        "name": "铁东区"
                    },
                    {
                        "spell": "T",
                        "code": "210303",
                        "name": "铁西区"
                    },
                    {
                        "spell": "L",
                        "code": "210304",
                        "name": "立山区"
                    },
                    {
                        "spell": "Q",
                        "code": "210311",
                        "name": "千山区"
                    },
                    {
                        "spell": "T",
                        "code": "210321",
                        "name": "台安县"
                    },
                    {
                        "spell": "X",
                        "code": "210323",
                        "name": "岫岩满族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "210381",
                        "name": "海城市"
                    }
                ]
            },
            {
                "spell": "F",
                "code": "210400",
                "name": "抚顺市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "210402",
                        "name": "新抚区"
                    },
                    {
                        "spell": "D",
                        "code": "210403",
                        "name": "东洲区"
                    },
                    {
                        "spell": "W",
                        "code": "210404",
                        "name": "望花区"
                    },
                    {
                        "spell": "S",
                        "code": "210411",
                        "name": "顺城区"
                    },
                    {
                        "spell": "F",
                        "code": "210421",
                        "name": "抚顺县"
                    },
                    {
                        "spell": "X",
                        "code": "210422",
                        "name": "新宾满族自治县"
                    },
                    {
                        "spell": "Q",
                        "code": "210423",
                        "name": "清原满族自治县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "210500",
                "name": "本溪市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "P",
                        "code": "210502",
                        "name": "平山区"
                    },
                    {
                        "spell": "X",
                        "code": "210503",
                        "name": "溪湖区"
                    },
                    {
                        "spell": "M",
                        "code": "210504",
                        "name": "明山区"
                    },
                    {
                        "spell": "N",
                        "code": "210505",
                        "name": "南芬区"
                    },
                    {
                        "spell": "B",
                        "code": "210521",
                        "name": "本溪满族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "210522",
                        "name": "桓仁满族自治县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "210600",
                "name": "丹东市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "210602",
                        "name": "元宝区"
                    },
                    {
                        "spell": "Z",
                        "code": "210603",
                        "name": "振兴区"
                    },
                    {
                        "spell": "Z",
                        "code": "210604",
                        "name": "振安区"
                    },
                    {
                        "spell": "K",
                        "code": "210624",
                        "name": "宽甸满族自治县"
                    },
                    {
                        "spell": "D",
                        "code": "210681",
                        "name": "东港市"
                    },
                    {
                        "spell": "F",
                        "code": "210682",
                        "name": "凤城市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "210700",
                "name": "锦州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "210702",
                        "name": "古塔区"
                    },
                    {
                        "spell": "L",
                        "code": "210703",
                        "name": "凌河区"
                    },
                    {
                        "spell": "T",
                        "code": "210711",
                        "name": "太和区"
                    },
                    {
                        "spell": "H",
                        "code": "210726",
                        "name": "黑山县"
                    },
                    {
                        "spell": "Y",
                        "code": "210727",
                        "name": "义县"
                    },
                    {
                        "spell": "L",
                        "code": "210781",
                        "name": "凌海市"
                    },
                    {
                        "spell": "B",
                        "code": "210782",
                        "name": "北镇市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "210800",
                "name": "营口市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "210802",
                        "name": "站前区"
                    },
                    {
                        "spell": "X",
                        "code": "210803",
                        "name": "西市区"
                    },
                    {
                        "spell": "B",
                        "code": "210804",
                        "name": "鲅鱼圈区"
                    },
                    {
                        "spell": "L",
                        "code": "210811",
                        "name": "老边区"
                    },
                    {
                        "spell": "G",
                        "code": "210881",
                        "name": "盖州市"
                    },
                    {
                        "spell": "D",
                        "code": "210882",
                        "name": "大石桥市"
                    }
                ]
            },
            {
                "spell": "F",
                "code": "210900",
                "name": "阜新市",
                "list": [
                    {
                        "spell": "S",
                        "code": "210901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "210902",
                        "name": "海州区"
                    },
                    {
                        "spell": "X",
                        "code": "210903",
                        "name": "新邱区"
                    },
                    {
                        "spell": "T",
                        "code": "210904",
                        "name": "太平区"
                    },
                    {
                        "spell": "Q",
                        "code": "210905",
                        "name": "清河门区"
                    },
                    {
                        "spell": "X",
                        "code": "210911",
                        "name": "细河区"
                    },
                    {
                        "spell": "F",
                        "code": "210921",
                        "name": "阜新蒙古族自治县"
                    },
                    {
                        "spell": "Z",
                        "code": "210922",
                        "name": "彰武县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "211000",
                "name": "辽阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "211001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "211002",
                        "name": "白塔区"
                    },
                    {
                        "spell": "W",
                        "code": "211003",
                        "name": "文圣区"
                    },
                    {
                        "spell": "H",
                        "code": "211004",
                        "name": "宏伟区"
                    },
                    {
                        "spell": "G",
                        "code": "211005",
                        "name": "弓长岭区"
                    },
                    {
                        "spell": "T",
                        "code": "211011",
                        "name": "太子河区"
                    },
                    {
                        "spell": "L",
                        "code": "211021",
                        "name": "辽阳县"
                    },
                    {
                        "spell": "D",
                        "code": "211081",
                        "name": "灯塔市"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "211100",
                "name": "盘锦市",
                "list": [
                    {
                        "spell": "S",
                        "code": "211101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "211102",
                        "name": "双台子区"
                    },
                    {
                        "spell": "X",
                        "code": "211103",
                        "name": "兴隆台区"
                    },
                    {
                        "spell": "D",
                        "code": "211121",
                        "name": "大洼县"
                    },
                    {
                        "spell": "P",
                        "code": "211122",
                        "name": "盘山县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "211200",
                "name": "铁岭市",
                "list": [
                    {
                        "spell": "S",
                        "code": "211201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "211202",
                        "name": "银州区"
                    },
                    {
                        "spell": "Q",
                        "code": "211204",
                        "name": "清河区"
                    },
                    {
                        "spell": "T",
                        "code": "211221",
                        "name": "铁岭县"
                    },
                    {
                        "spell": "X",
                        "code": "211223",
                        "name": "西丰县"
                    },
                    {
                        "spell": "C",
                        "code": "211224",
                        "name": "昌图县"
                    },
                    {
                        "spell": "D",
                        "code": "211281",
                        "name": "调兵山市"
                    },
                    {
                        "spell": "K",
                        "code": "211282",
                        "name": "开原市"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "211300",
                "name": "朝阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "211301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "211302",
                        "name": "双塔区"
                    },
                    {
                        "spell": "L",
                        "code": "211303",
                        "name": "龙城区"
                    },
                    {
                        "spell": "C",
                        "code": "211321",
                        "name": "朝阳县"
                    },
                    {
                        "spell": "J",
                        "code": "211322",
                        "name": "建平县"
                    },
                    {
                        "spell": "H",
                        "code": "211324",
                        "name": "喀喇沁左翼蒙古族自治县"
                    },
                    {
                        "spell": "B",
                        "code": "211381",
                        "name": "北票市"
                    },
                    {
                        "spell": "L",
                        "code": "211382",
                        "name": "凌源市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "211400",
                "name": "葫芦岛市",
                "list": [
                    {
                        "spell": "S",
                        "code": "211401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "211402",
                        "name": "连山区"
                    },
                    {
                        "spell": "L",
                        "code": "211403",
                        "name": "龙港区"
                    },
                    {
                        "spell": "N",
                        "code": "211404",
                        "name": "南票区"
                    },
                    {
                        "spell": "S",
                        "code": "211421",
                        "name": "绥中县"
                    },
                    {
                        "spell": "J",
                        "code": "211422",
                        "name": "建昌县"
                    },
                    {
                        "spell": "X",
                        "code": "211481",
                        "name": "兴城市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "J",
        "code": "220000",
        "name": "吉林省",
        "list": [
            {
                "spell": "C",
                "code": "220100",
                "name": "长春市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "N",
                        "code": "220102",
                        "name": "南关区"
                    },
                    {
                        "spell": "K",
                        "code": "220103",
                        "name": "宽城区"
                    },
                    {
                        "spell": "C",
                        "code": "220104",
                        "name": "朝阳区"
                    },
                    {
                        "spell": "E",
                        "code": "220105",
                        "name": "二道区"
                    },
                    {
                        "spell": "L",
                        "code": "220106",
                        "name": "绿园区"
                    },
                    {
                        "spell": "S",
                        "code": "220112",
                        "name": "双阳区"
                    },
                    {
                        "spell": "N",
                        "code": "220122",
                        "name": "农安县"
                    },
                    {
                        "spell": "J",
                        "code": "220181",
                        "name": "九台市"
                    },
                    {
                        "spell": "Y",
                        "code": "220182",
                        "name": "榆树市"
                    },
                    {
                        "spell": "D",
                        "code": "220183",
                        "name": "德惠市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "220200",
                "name": "吉林市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "220202",
                        "name": "昌邑区"
                    },
                    {
                        "spell": "L",
                        "code": "220203",
                        "name": "龙潭区"
                    },
                    {
                        "spell": "C",
                        "code": "220204",
                        "name": "船营区"
                    },
                    {
                        "spell": "F",
                        "code": "220211",
                        "name": "丰满区"
                    },
                    {
                        "spell": "Y",
                        "code": "220221",
                        "name": "永吉县"
                    },
                    {
                        "spell": "J",
                        "code": "220281",
                        "name": "蛟河市"
                    },
                    {
                        "spell": "H",
                        "code": "220282",
                        "name": "桦甸市"
                    },
                    {
                        "spell": "S",
                        "code": "220283",
                        "name": "舒兰市"
                    },
                    {
                        "spell": "P",
                        "code": "220284",
                        "name": "磐石市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "220300",
                "name": "四平市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "220302",
                        "name": "铁西区"
                    },
                    {
                        "spell": "T",
                        "code": "220303",
                        "name": "铁东区"
                    },
                    {
                        "spell": "L",
                        "code": "220322",
                        "name": "梨树县"
                    },
                    {
                        "spell": "Y",
                        "code": "220323",
                        "name": "伊通满族自治县"
                    },
                    {
                        "spell": "G",
                        "code": "220381",
                        "name": "公主岭市"
                    },
                    {
                        "spell": "S",
                        "code": "220382",
                        "name": "双辽市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "220400",
                "name": "辽源市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "220402",
                        "name": "龙山区"
                    },
                    {
                        "spell": "X",
                        "code": "220403",
                        "name": "西安区"
                    },
                    {
                        "spell": "D",
                        "code": "220421",
                        "name": "东丰县"
                    },
                    {
                        "spell": "D",
                        "code": "220422",
                        "name": "东辽县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "220500",
                "name": "通化市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "220502",
                        "name": "东昌区"
                    },
                    {
                        "spell": "E",
                        "code": "220503",
                        "name": "二道江区"
                    },
                    {
                        "spell": "T",
                        "code": "220521",
                        "name": "通化县"
                    },
                    {
                        "spell": "H",
                        "code": "220523",
                        "name": "辉南县"
                    },
                    {
                        "spell": "L",
                        "code": "220524",
                        "name": "柳河县"
                    },
                    {
                        "spell": "M",
                        "code": "220581",
                        "name": "梅河口市"
                    },
                    {
                        "spell": "J",
                        "code": "220582",
                        "name": "集安市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "220600",
                "name": "白山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "220602",
                        "name": "八道江区"
                    },
                    {
                        "spell": "F",
                        "code": "220621",
                        "name": "抚松县"
                    },
                    {
                        "spell": "J",
                        "code": "220622",
                        "name": "靖宇县"
                    },
                    {
                        "spell": "C",
                        "code": "220623",
                        "name": "长白朝鲜族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "220605",
                        "name": "江源区"
                    },
                    {
                        "spell": "L",
                        "code": "220681",
                        "name": "临江市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "220700",
                "name": "松原市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "N",
                        "code": "220702",
                        "name": "宁江区"
                    },
                    {
                        "spell": "Q",
                        "code": "220721",
                        "name": "前郭尔罗斯蒙古族自治县"
                    },
                    {
                        "spell": "C",
                        "code": "220722",
                        "name": "长岭县"
                    },
                    {
                        "spell": "Q",
                        "code": "220723",
                        "name": "乾安县"
                    },
                    {
                        "spell": "F",
                        "code": "220724",
                        "name": "扶余县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "220800",
                "name": "白城市",
                "list": [
                    {
                        "spell": "S",
                        "code": "220801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "220802",
                        "name": "洮北区"
                    },
                    {
                        "spell": "Z",
                        "code": "220821",
                        "name": "镇赉县"
                    },
                    {
                        "spell": "T",
                        "code": "220822",
                        "name": "通榆县"
                    },
                    {
                        "spell": "T",
                        "code": "220881",
                        "name": "洮南市"
                    },
                    {
                        "spell": "D",
                        "code": "220882",
                        "name": "大安市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "222400",
                "name": "延边朝鲜族自治州",
                "list": [
                    {
                        "spell": "Y",
                        "code": "222401",
                        "name": "延吉市"
                    },
                    {
                        "spell": "T",
                        "code": "222402",
                        "name": "图们市"
                    },
                    {
                        "spell": "D",
                        "code": "222403",
                        "name": "敦化市"
                    },
                    {
                        "spell": "H",
                        "code": "222404",
                        "name": "珲春市"
                    },
                    {
                        "spell": "L",
                        "code": "222405",
                        "name": "龙井市"
                    },
                    {
                        "spell": "H",
                        "code": "222406",
                        "name": "和龙市"
                    },
                    {
                        "spell": "W",
                        "code": "222424",
                        "name": "汪清县"
                    },
                    {
                        "spell": "A",
                        "code": "222426",
                        "name": "安图县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "230000",
        "name": "黑龙江省",
        "list": [
            {
                "spell": "H",
                "code": "230100",
                "name": "哈尔滨市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "230102",
                        "name": "道里区"
                    },
                    {
                        "spell": "N",
                        "code": "230103",
                        "name": "南岗区"
                    },
                    {
                        "spell": "D",
                        "code": "230104",
                        "name": "道外区"
                    },
                    {
                        "spell": "X",
                        "code": "230110",
                        "name": "香坊区"
                    },
                    {
                        "spell": "P",
                        "code": "230108",
                        "name": "平房区"
                    },
                    {
                        "spell": "S",
                        "code": "230109",
                        "name": "松北区"
                    },
                    {
                        "spell": "H",
                        "code": "230111",
                        "name": "呼兰区"
                    },
                    {
                        "spell": "Y",
                        "code": "230123",
                        "name": "依兰县"
                    },
                    {
                        "spell": "F",
                        "code": "230124",
                        "name": "方正县"
                    },
                    {
                        "spell": "B",
                        "code": "230125",
                        "name": "宾县"
                    },
                    {
                        "spell": "B",
                        "code": "230126",
                        "name": "巴彦县"
                    },
                    {
                        "spell": "M",
                        "code": "230127",
                        "name": "木兰县"
                    },
                    {
                        "spell": "T",
                        "code": "230128",
                        "name": "通河县"
                    },
                    {
                        "spell": "Y",
                        "code": "230129",
                        "name": "延寿县"
                    },
                    {
                        "spell": "A",
                        "code": "230112",
                        "name": "阿城区"
                    },
                    {
                        "spell": "S",
                        "code": "230182",
                        "name": "双城市"
                    },
                    {
                        "spell": "S",
                        "code": "230183",
                        "name": "尚志市"
                    },
                    {
                        "spell": "W",
                        "code": "230184",
                        "name": "五常市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "230200",
                "name": "齐齐哈尔市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "230202",
                        "name": "龙沙区"
                    },
                    {
                        "spell": "J",
                        "code": "230203",
                        "name": "建华区"
                    },
                    {
                        "spell": "T",
                        "code": "230204",
                        "name": "铁锋区"
                    },
                    {
                        "spell": "A",
                        "code": "230205",
                        "name": "昂昂溪区"
                    },
                    {
                        "spell": "H",
                        "code": "230206",
                        "name": "富拉尔基区"
                    },
                    {
                        "spell": "N",
                        "code": "230207",
                        "name": "碾子山区"
                    },
                    {
                        "spell": "M",
                        "code": "230208",
                        "name": "梅里斯达斡尔族区"
                    },
                    {
                        "spell": "L",
                        "code": "230221",
                        "name": "龙江县"
                    },
                    {
                        "spell": "Y",
                        "code": "230223",
                        "name": "依安县"
                    },
                    {
                        "spell": "T",
                        "code": "230224",
                        "name": "泰来县"
                    },
                    {
                        "spell": "G",
                        "code": "230225",
                        "name": "甘南县"
                    },
                    {
                        "spell": "F",
                        "code": "230227",
                        "name": "富裕县"
                    },
                    {
                        "spell": "K",
                        "code": "230229",
                        "name": "克山县"
                    },
                    {
                        "spell": "K",
                        "code": "230230",
                        "name": "克东县"
                    },
                    {
                        "spell": "B",
                        "code": "230231",
                        "name": "拜泉县"
                    },
                    {
                        "spell": "N",
                        "code": "230281",
                        "name": "讷河市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "230300",
                "name": "鸡西市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "230302",
                        "name": "鸡冠区"
                    },
                    {
                        "spell": "H",
                        "code": "230303",
                        "name": "恒山区"
                    },
                    {
                        "spell": "D",
                        "code": "230304",
                        "name": "滴道区"
                    },
                    {
                        "spell": "L",
                        "code": "230305",
                        "name": "梨树区"
                    },
                    {
                        "spell": "C",
                        "code": "230306",
                        "name": "城子河区"
                    },
                    {
                        "spell": "M",
                        "code": "230307",
                        "name": "麻山区"
                    },
                    {
                        "spell": "J",
                        "code": "230321",
                        "name": "鸡东县"
                    },
                    {
                        "spell": "H",
                        "code": "230381",
                        "name": "虎林市"
                    },
                    {
                        "spell": "M",
                        "code": "230382",
                        "name": "密山市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "230400",
                "name": "鹤岗市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "230402",
                        "name": "向阳区"
                    },
                    {
                        "spell": "G",
                        "code": "230403",
                        "name": "工农区"
                    },
                    {
                        "spell": "N",
                        "code": "230404",
                        "name": "南山区"
                    },
                    {
                        "spell": "X",
                        "code": "230405",
                        "name": "兴安区"
                    },
                    {
                        "spell": "D",
                        "code": "230406",
                        "name": "东山区"
                    },
                    {
                        "spell": "X",
                        "code": "230407",
                        "name": "兴山区"
                    },
                    {
                        "spell": "L",
                        "code": "230421",
                        "name": "萝北县"
                    },
                    {
                        "spell": "S",
                        "code": "230422",
                        "name": "绥滨县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "230500",
                "name": "双鸭山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "230502",
                        "name": "尖山区"
                    },
                    {
                        "spell": "L",
                        "code": "230503",
                        "name": "岭东区"
                    },
                    {
                        "spell": "S",
                        "code": "230505",
                        "name": "四方台区"
                    },
                    {
                        "spell": "B",
                        "code": "230506",
                        "name": "宝山区"
                    },
                    {
                        "spell": "J",
                        "code": "230521",
                        "name": "集贤县"
                    },
                    {
                        "spell": "Y",
                        "code": "230522",
                        "name": "友谊县"
                    },
                    {
                        "spell": "B",
                        "code": "230523",
                        "name": "宝清县"
                    },
                    {
                        "spell": "R",
                        "code": "230524",
                        "name": "饶河县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "230600",
                "name": "大庆市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "230602",
                        "name": "萨尔图区"
                    },
                    {
                        "spell": "L",
                        "code": "230603",
                        "name": "龙凤区"
                    },
                    {
                        "spell": "R",
                        "code": "230604",
                        "name": "让胡路区"
                    },
                    {
                        "spell": "H",
                        "code": "230605",
                        "name": "红岗区"
                    },
                    {
                        "spell": "D",
                        "code": "230606",
                        "name": "大同区"
                    },
                    {
                        "spell": "Z",
                        "code": "230621",
                        "name": "肇州县"
                    },
                    {
                        "spell": "Z",
                        "code": "230622",
                        "name": "肇源县"
                    },
                    {
                        "spell": "L",
                        "code": "230623",
                        "name": "林甸县"
                    },
                    {
                        "spell": "D",
                        "code": "230624",
                        "name": "杜尔伯特蒙古族自治县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "230700",
                "name": "伊春市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "230702",
                        "name": "伊春区"
                    },
                    {
                        "spell": "N",
                        "code": "230703",
                        "name": "南岔区"
                    },
                    {
                        "spell": "Y",
                        "code": "230704",
                        "name": "友好区"
                    },
                    {
                        "spell": "X",
                        "code": "230705",
                        "name": "西林区"
                    },
                    {
                        "spell": "C",
                        "code": "230706",
                        "name": "翠峦区"
                    },
                    {
                        "spell": "X",
                        "code": "230707",
                        "name": "新青区"
                    },
                    {
                        "spell": "M",
                        "code": "230708",
                        "name": "美溪区"
                    },
                    {
                        "spell": "J",
                        "code": "230709",
                        "name": "金山屯区"
                    },
                    {
                        "spell": "W",
                        "code": "230710",
                        "name": "五营区"
                    },
                    {
                        "spell": "W",
                        "code": "230711",
                        "name": "乌马河区"
                    },
                    {
                        "spell": "T",
                        "code": "230712",
                        "name": "汤旺河区"
                    },
                    {
                        "spell": "D",
                        "code": "230713",
                        "name": "带岭区"
                    },
                    {
                        "spell": "W",
                        "code": "230714",
                        "name": "乌伊岭区"
                    },
                    {
                        "spell": "H",
                        "code": "230715",
                        "name": "红星区"
                    },
                    {
                        "spell": "S",
                        "code": "230716",
                        "name": "上甘岭区"
                    },
                    {
                        "spell": "J",
                        "code": "230722",
                        "name": "嘉荫县"
                    },
                    {
                        "spell": "T",
                        "code": "230781",
                        "name": "铁力市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "230800",
                "name": "佳木斯市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "230803",
                        "name": "向阳区"
                    },
                    {
                        "spell": "Q",
                        "code": "230804",
                        "name": "前进区"
                    },
                    {
                        "spell": "D",
                        "code": "230805",
                        "name": "东风区"
                    },
                    {
                        "spell": "J",
                        "code": "230811",
                        "name": "郊区"
                    },
                    {
                        "spell": "H",
                        "code": "230822",
                        "name": "桦南县"
                    },
                    {
                        "spell": "H",
                        "code": "230826",
                        "name": "桦川县"
                    },
                    {
                        "spell": "T",
                        "code": "230828",
                        "name": "汤原县"
                    },
                    {
                        "spell": "F",
                        "code": "230833",
                        "name": "抚远县"
                    },
                    {
                        "spell": "T",
                        "code": "230881",
                        "name": "同江市"
                    },
                    {
                        "spell": "F",
                        "code": "230882",
                        "name": "富锦市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "230900",
                "name": "七台河市",
                "list": [
                    {
                        "spell": "S",
                        "code": "230901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "230902",
                        "name": "新兴区"
                    },
                    {
                        "spell": "T",
                        "code": "230903",
                        "name": "桃山区"
                    },
                    {
                        "spell": "Q",
                        "code": "230904",
                        "name": "茄子河区"
                    },
                    {
                        "spell": "B",
                        "code": "230921",
                        "name": "勃利县"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "231000",
                "name": "牡丹江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "231001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "231002",
                        "name": "东安区"
                    },
                    {
                        "spell": "Y",
                        "code": "231003",
                        "name": "阳明区"
                    },
                    {
                        "spell": "A",
                        "code": "231004",
                        "name": "爱民区"
                    },
                    {
                        "spell": "X",
                        "code": "231005",
                        "name": "西安区"
                    },
                    {
                        "spell": "D",
                        "code": "231024",
                        "name": "东宁县"
                    },
                    {
                        "spell": "L",
                        "code": "231025",
                        "name": "林口县"
                    },
                    {
                        "spell": "S",
                        "code": "231081",
                        "name": "绥芬河市"
                    },
                    {
                        "spell": "H",
                        "code": "231083",
                        "name": "海林市"
                    },
                    {
                        "spell": "N",
                        "code": "231084",
                        "name": "宁安市"
                    },
                    {
                        "spell": "M",
                        "code": "231085",
                        "name": "穆棱市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "231100",
                "name": "黑河市",
                "list": [
                    {
                        "spell": "S",
                        "code": "231101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "A",
                        "code": "231102",
                        "name": "爱辉区"
                    },
                    {
                        "spell": "N",
                        "code": "231121",
                        "name": "嫩江县"
                    },
                    {
                        "spell": "X",
                        "code": "231123",
                        "name": "逊克县"
                    },
                    {
                        "spell": "S",
                        "code": "231124",
                        "name": "孙吴县"
                    },
                    {
                        "spell": "B",
                        "code": "231181",
                        "name": "北安市"
                    },
                    {
                        "spell": "W",
                        "code": "231182",
                        "name": "五大连池市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "231200",
                "name": "绥化市",
                "list": [
                    {
                        "spell": "1",
                        "code": "231201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "231202",
                        "name": "北林区"
                    },
                    {
                        "spell": "W",
                        "code": "231221",
                        "name": "望奎县"
                    },
                    {
                        "spell": "L",
                        "code": "231222",
                        "name": "兰西县"
                    },
                    {
                        "spell": "Q",
                        "code": "231223",
                        "name": "青冈县"
                    },
                    {
                        "spell": "Q",
                        "code": "231224",
                        "name": "庆安县"
                    },
                    {
                        "spell": "M",
                        "code": "231225",
                        "name": "明水县"
                    },
                    {
                        "spell": "S",
                        "code": "231226",
                        "name": "绥棱县"
                    },
                    {
                        "spell": "A",
                        "code": "231281",
                        "name": "安达市"
                    },
                    {
                        "spell": "Z",
                        "code": "231282",
                        "name": "肇东市"
                    },
                    {
                        "spell": "H",
                        "code": "231283",
                        "name": "海伦市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "232700",
                "name": "大兴安岭地区",
                "list": [
                    {
                        "spell": "H",
                        "code": "232721",
                        "name": "呼玛县"
                    },
                    {
                        "spell": "T",
                        "code": "232722",
                        "name": "塔河县"
                    },
                    {
                        "spell": "M",
                        "code": "232723",
                        "name": "漠河县"
                    },
                    {
                        "spell": "J",
                        "code": "232701",
                        "name": "加格达奇区"
                    },
                    {
                        "spell": "S",
                        "code": "232702",
                        "name": "松岭区"
                    },
                    {
                        "spell": "X",
                        "code": "232703",
                        "name": "新林区"
                    },
                    {
                        "spell": "H",
                        "code": "232704",
                        "name": "呼中区"
                    }
                ]
            }
        ]
    },
    {
        "spell": "S",
        "code": "310000",
        "name": "上海市",
        "list": [
            {
                "spell": "S",
                "code": "310100",
                "name": "市辖区",
                "list": [
                    {
                        "spell": "H",
                        "code": "310101",
                        "name": "黄浦区"
                    },
                    {
                        "spell": "L",
                        "code": "310103",
                        "name": "卢湾区"
                    },
                    {
                        "spell": "X",
                        "code": "310104",
                        "name": "徐汇区"
                    },
                    {
                        "spell": "C",
                        "code": "310105",
                        "name": "长宁区"
                    },
                    {
                        "spell": "J",
                        "code": "310106",
                        "name": "静安区"
                    },
                    {
                        "spell": "P",
                        "code": "310107",
                        "name": "普陀区"
                    },
                    {
                        "spell": "Z",
                        "code": "310108",
                        "name": "闸北区"
                    },
                    {
                        "spell": "H",
                        "code": "310109",
                        "name": "虹口区"
                    },
                    {
                        "spell": "Y",
                        "code": "310110",
                        "name": "杨浦区"
                    },
                    {
                        "spell": "M",
                        "code": "310112",
                        "name": "闵行区"
                    },
                    {
                        "spell": "B",
                        "code": "310113",
                        "name": "宝山区"
                    },
                    {
                        "spell": "J",
                        "code": "310114",
                        "name": "嘉定区"
                    },
                    {
                        "spell": "P",
                        "code": "310115",
                        "name": "浦东新区"
                    },
                    {
                        "spell": "J",
                        "code": "310116",
                        "name": "金山区"
                    },
                    {
                        "spell": "S",
                        "code": "310117",
                        "name": "松江区"
                    },
                    {
                        "spell": "Q",
                        "code": "310118",
                        "name": "青浦区"
                    },
                    {
                        "spell": "F",
                        "code": "310120",
                        "name": "奉贤区"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "310200",
                "name": "县",
                "list": [
                    {
                        "spell": "C",
                        "code": "310230",
                        "name": "崇明县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "J",
        "code": "320000",
        "name": "江苏省",
        "list": [
            {
                "spell": "N",
                "code": "320100",
                "name": "南京市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "320102",
                        "name": "玄武区"
                    },
                    {
                        "spell": "B",
                        "code": "320103",
                        "name": "白下区"
                    },
                    {
                        "spell": "Q",
                        "code": "320104",
                        "name": "秦淮区"
                    },
                    {
                        "spell": "J",
                        "code": "320105",
                        "name": "建邺区"
                    },
                    {
                        "spell": "G",
                        "code": "320106",
                        "name": "鼓楼区"
                    },
                    {
                        "spell": "X",
                        "code": "320107",
                        "name": "下关区"
                    },
                    {
                        "spell": "P",
                        "code": "320111",
                        "name": "浦口区"
                    },
                    {
                        "spell": "Q",
                        "code": "320113",
                        "name": "栖霞区"
                    },
                    {
                        "spell": "Y",
                        "code": "320114",
                        "name": "雨花台区"
                    },
                    {
                        "spell": "J",
                        "code": "320115",
                        "name": "江宁区"
                    },
                    {
                        "spell": "L",
                        "code": "320116",
                        "name": "六合区"
                    },
                    {
                        "spell": "L",
                        "code": "320124",
                        "name": "溧水县"
                    },
                    {
                        "spell": "G",
                        "code": "320125",
                        "name": "高淳县"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "320200",
                "name": "无锡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "320202",
                        "name": "崇安区"
                    },
                    {
                        "spell": "N",
                        "code": "320203",
                        "name": "南长区"
                    },
                    {
                        "spell": "B",
                        "code": "320204",
                        "name": "北塘区"
                    },
                    {
                        "spell": "X",
                        "code": "320205",
                        "name": "锡山区"
                    },
                    {
                        "spell": "H",
                        "code": "320206",
                        "name": "惠山区"
                    },
                    {
                        "spell": "B",
                        "code": "320211",
                        "name": "滨湖区"
                    },
                    {
                        "spell": "J",
                        "code": "320281",
                        "name": "江阴市"
                    },
                    {
                        "spell": "Y",
                        "code": "320282",
                        "name": "宜兴市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "320300",
                "name": "徐州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "320302",
                        "name": "鼓楼区"
                    },
                    {
                        "spell": "Y",
                        "code": "320303",
                        "name": "云龙区"
                    },
                    {
                        "spell": "J",
                        "code": "320305",
                        "name": "贾汪区"
                    },
                    {
                        "spell": "Q",
                        "code": "320311",
                        "name": "泉山区"
                    },
                    {
                        "spell": "F",
                        "code": "320321",
                        "name": "丰县"
                    },
                    {
                        "spell": "P",
                        "code": "320322",
                        "name": "沛县"
                    },
                    {
                        "spell": "T",
                        "code": "320312",
                        "name": "铜山区"
                    },
                    {
                        "spell": "S",
                        "code": "320324",
                        "name": "睢宁县"
                    },
                    {
                        "spell": "X",
                        "code": "320381",
                        "name": "新沂市"
                    },
                    {
                        "spell": "P",
                        "code": "320382",
                        "name": "邳州市"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "320400",
                "name": "常州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "320402",
                        "name": "天宁区"
                    },
                    {
                        "spell": "Z",
                        "code": "320404",
                        "name": "钟楼区"
                    },
                    {
                        "spell": "Q",
                        "code": "320405",
                        "name": "戚墅堰区"
                    },
                    {
                        "spell": "X",
                        "code": "320411",
                        "name": "新北区"
                    },
                    {
                        "spell": "W",
                        "code": "320412",
                        "name": "武进区"
                    },
                    {
                        "spell": "L",
                        "code": "320481",
                        "name": "溧阳市"
                    },
                    {
                        "spell": "J",
                        "code": "320482",
                        "name": "金坛市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "320500",
                "name": "苏州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "320502",
                        "name": "沧浪区"
                    },
                    {
                        "spell": "P",
                        "code": "320503",
                        "name": "平江区"
                    },
                    {
                        "spell": "J",
                        "code": "320504",
                        "name": "金阊区"
                    },
                    {
                        "spell": "H",
                        "code": "320505",
                        "name": "虎丘区"
                    },
                    {
                        "spell": "W",
                        "code": "320506",
                        "name": "吴中区"
                    },
                    {
                        "spell": "X",
                        "code": "320507",
                        "name": "相城区"
                    },
                    {
                        "spell": "C",
                        "code": "320581",
                        "name": "常熟市"
                    },
                    {
                        "spell": "Z",
                        "code": "320582",
                        "name": "张家港市"
                    },
                    {
                        "spell": "K",
                        "code": "320583",
                        "name": "昆山市"
                    },
                    {
                        "spell": "W",
                        "code": "320584",
                        "name": "吴江市"
                    },
                    {
                        "spell": "T",
                        "code": "320585",
                        "name": "太仓市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "320600",
                "name": "南通市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "320602",
                        "name": "崇川区"
                    },
                    {
                        "spell": "G",
                        "code": "320611",
                        "name": "港闸区"
                    },
                    {
                        "spell": "H",
                        "code": "320621",
                        "name": "海安县"
                    },
                    {
                        "spell": "R",
                        "code": "320623",
                        "name": "如东县"
                    },
                    {
                        "spell": "Q",
                        "code": "320681",
                        "name": "启东市"
                    },
                    {
                        "spell": "R",
                        "code": "320682",
                        "name": "如皋市"
                    },
                    {
                        "spell": "T",
                        "code": "320612",
                        "name": "通州区"
                    },
                    {
                        "spell": "H",
                        "code": "320684",
                        "name": "海门市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "320700",
                "name": "连云港市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "320703",
                        "name": "连云区"
                    },
                    {
                        "spell": "X",
                        "code": "320705",
                        "name": "新浦区"
                    },
                    {
                        "spell": "H",
                        "code": "320706",
                        "name": "海州区"
                    },
                    {
                        "spell": "G",
                        "code": "320721",
                        "name": "赣榆县"
                    },
                    {
                        "spell": "D",
                        "code": "320722",
                        "name": "东海县"
                    },
                    {
                        "spell": "G",
                        "code": "320723",
                        "name": "灌云县"
                    },
                    {
                        "spell": "G",
                        "code": "320724",
                        "name": "灌南县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "320800",
                "name": "淮安市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "320802",
                        "name": "清河区"
                    },
                    {
                        "spell": "C",
                        "code": "320803",
                        "name": "楚州区"
                    },
                    {
                        "spell": "H",
                        "code": "320804",
                        "name": "淮阴区"
                    },
                    {
                        "spell": "Q",
                        "code": "320811",
                        "name": "清浦区"
                    },
                    {
                        "spell": "L",
                        "code": "320826",
                        "name": "涟水县"
                    },
                    {
                        "spell": "H",
                        "code": "320829",
                        "name": "洪泽县"
                    },
                    {
                        "spell": "X",
                        "code": "320830",
                        "name": "盱眙县"
                    },
                    {
                        "spell": "J",
                        "code": "320831",
                        "name": "金湖县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "320900",
                "name": "盐城市",
                "list": [
                    {
                        "spell": "S",
                        "code": "320901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "320902",
                        "name": "亭湖区"
                    },
                    {
                        "spell": "Y",
                        "code": "320903",
                        "name": "盐都区"
                    },
                    {
                        "spell": "X",
                        "code": "320921",
                        "name": "响水县"
                    },
                    {
                        "spell": "B",
                        "code": "320922",
                        "name": "滨海县"
                    },
                    {
                        "spell": "F",
                        "code": "320923",
                        "name": "阜宁县"
                    },
                    {
                        "spell": "S",
                        "code": "320924",
                        "name": "射阳县"
                    },
                    {
                        "spell": "J",
                        "code": "320925",
                        "name": "建湖县"
                    },
                    {
                        "spell": "D",
                        "code": "320981",
                        "name": "东台市"
                    },
                    {
                        "spell": "D",
                        "code": "320982",
                        "name": "大丰市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "321000",
                "name": "扬州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "321001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "321002",
                        "name": "广陵区"
                    },
                    {
                        "spell": "H",
                        "code": "321003",
                        "name": "邗江区"
                    },
                    {
                        "spell": "W",
                        "code": "321011",
                        "name": "维扬区"
                    },
                    {
                        "spell": "B",
                        "code": "321023",
                        "name": "宝应县"
                    },
                    {
                        "spell": "Y",
                        "code": "321081",
                        "name": "仪征市"
                    },
                    {
                        "spell": "G",
                        "code": "321084",
                        "name": "高邮市"
                    },
                    {
                        "spell": "J",
                        "code": "321088",
                        "name": "江都市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "321100",
                "name": "镇江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "321101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "321102",
                        "name": "京口区"
                    },
                    {
                        "spell": "R",
                        "code": "321111",
                        "name": "润州区"
                    },
                    {
                        "spell": "D",
                        "code": "321112",
                        "name": "丹徒区"
                    },
                    {
                        "spell": "D",
                        "code": "321181",
                        "name": "丹阳市"
                    },
                    {
                        "spell": "Y",
                        "code": "321182",
                        "name": "扬中市"
                    },
                    {
                        "spell": "J",
                        "code": "321183",
                        "name": "句容市"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "321200",
                "name": "泰州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "321201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "321202",
                        "name": "海陵区"
                    },
                    {
                        "spell": "G",
                        "code": "321203",
                        "name": "高港区"
                    },
                    {
                        "spell": "X",
                        "code": "321281",
                        "name": "兴化市"
                    },
                    {
                        "spell": "J",
                        "code": "321282",
                        "name": "靖江市"
                    },
                    {
                        "spell": "T",
                        "code": "321283",
                        "name": "泰兴市"
                    },
                    {
                        "spell": "J",
                        "code": "321284",
                        "name": "姜堰市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "321300",
                "name": "宿迁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "321301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "321302",
                        "name": "宿城区"
                    },
                    {
                        "spell": "S",
                        "code": "321311",
                        "name": "宿豫区"
                    },
                    {
                        "spell": "S",
                        "code": "321322",
                        "name": "沭阳县"
                    },
                    {
                        "spell": "S",
                        "code": "321323",
                        "name": "泗阳县"
                    },
                    {
                        "spell": "S",
                        "code": "321324",
                        "name": "泗洪县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "Z",
        "code": "330000",
        "name": "浙江省",
        "list": [
            {
                "spell": "H",
                "code": "330100",
                "name": "杭州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "330102",
                        "name": "上城区"
                    },
                    {
                        "spell": "X",
                        "code": "330103",
                        "name": "下城区"
                    },
                    {
                        "spell": "J",
                        "code": "330104",
                        "name": "江干区"
                    },
                    {
                        "spell": "G",
                        "code": "330105",
                        "name": "拱墅区"
                    },
                    {
                        "spell": "X",
                        "code": "330106",
                        "name": "西湖区"
                    },
                    {
                        "spell": "B",
                        "code": "330108",
                        "name": "滨江区"
                    },
                    {
                        "spell": "X",
                        "code": "330109",
                        "name": "萧山区"
                    },
                    {
                        "spell": "Y",
                        "code": "330110",
                        "name": "余杭区"
                    },
                    {
                        "spell": "T",
                        "code": "330122",
                        "name": "桐庐县"
                    },
                    {
                        "spell": "C",
                        "code": "330127",
                        "name": "淳安县"
                    },
                    {
                        "spell": "J",
                        "code": "330182",
                        "name": "建德市"
                    },
                    {
                        "spell": "F",
                        "code": "330183",
                        "name": "富阳市"
                    },
                    {
                        "spell": "L",
                        "code": "330185",
                        "name": "临安市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "330200",
                "name": "宁波市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "330203",
                        "name": "海曙区"
                    },
                    {
                        "spell": "J",
                        "code": "330204",
                        "name": "江东区"
                    },
                    {
                        "spell": "J",
                        "code": "330205",
                        "name": "江北区"
                    },
                    {
                        "spell": "B",
                        "code": "330206",
                        "name": "北仑区"
                    },
                    {
                        "spell": "Z",
                        "code": "330211",
                        "name": "镇海区"
                    },
                    {
                        "spell": "Y",
                        "code": "330212",
                        "name": "鄞州区"
                    },
                    {
                        "spell": "X",
                        "code": "330225",
                        "name": "象山县"
                    },
                    {
                        "spell": "N",
                        "code": "330226",
                        "name": "宁海县"
                    },
                    {
                        "spell": "Y",
                        "code": "330281",
                        "name": "余姚市"
                    },
                    {
                        "spell": "C",
                        "code": "330282",
                        "name": "慈溪市"
                    },
                    {
                        "spell": "F",
                        "code": "330283",
                        "name": "奉化市"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "330300",
                "name": "温州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "330302",
                        "name": "鹿城区"
                    },
                    {
                        "spell": "L",
                        "code": "330303",
                        "name": "龙湾区"
                    },
                    {
                        "spell": "O",
                        "code": "330304",
                        "name": "瓯海区"
                    },
                    {
                        "spell": "D",
                        "code": "330322",
                        "name": "洞头县"
                    },
                    {
                        "spell": "Y",
                        "code": "330324",
                        "name": "永嘉县"
                    },
                    {
                        "spell": "P",
                        "code": "330326",
                        "name": "平阳县"
                    },
                    {
                        "spell": "C",
                        "code": "330327",
                        "name": "苍南县"
                    },
                    {
                        "spell": "W",
                        "code": "330328",
                        "name": "文成县"
                    },
                    {
                        "spell": "T",
                        "code": "330329",
                        "name": "泰顺县"
                    },
                    {
                        "spell": "R",
                        "code": "330381",
                        "name": "瑞安市"
                    },
                    {
                        "spell": "Y",
                        "code": "330382",
                        "name": "乐清市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "330400",
                "name": "嘉兴市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "330411",
                        "name": "秀洲区"
                    },
                    {
                        "spell": "J",
                        "code": "330421",
                        "name": "嘉善县"
                    },
                    {
                        "spell": "H",
                        "code": "330424",
                        "name": "海盐县"
                    },
                    {
                        "spell": "H",
                        "code": "330481",
                        "name": "海宁市"
                    },
                    {
                        "spell": "P",
                        "code": "330482",
                        "name": "平湖市"
                    },
                    {
                        "spell": "T",
                        "code": "330483",
                        "name": "桐乡市"
                    },
                    {
                        "spell": "N",
                        "code": "330402",
                        "name": "南湖区"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "330500",
                "name": "湖州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "330502",
                        "name": "吴兴区"
                    },
                    {
                        "spell": "N",
                        "code": "330503",
                        "name": "南浔区"
                    },
                    {
                        "spell": "D",
                        "code": "330521",
                        "name": "德清县"
                    },
                    {
                        "spell": "C",
                        "code": "330522",
                        "name": "长兴县"
                    },
                    {
                        "spell": "A",
                        "code": "330523",
                        "name": "安吉县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "330600",
                "name": "绍兴市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "330602",
                        "name": "越城区"
                    },
                    {
                        "spell": "S",
                        "code": "330621",
                        "name": "绍兴县"
                    },
                    {
                        "spell": "X",
                        "code": "330624",
                        "name": "新昌县"
                    },
                    {
                        "spell": "Z",
                        "code": "330681",
                        "name": "诸暨市"
                    },
                    {
                        "spell": "S",
                        "code": "330682",
                        "name": "上虞市"
                    },
                    {
                        "spell": "S",
                        "code": "330683",
                        "name": "嵊州市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "330700",
                "name": "金华市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "330702",
                        "name": "婺城区"
                    },
                    {
                        "spell": "J",
                        "code": "330703",
                        "name": "金东区"
                    },
                    {
                        "spell": "W",
                        "code": "330723",
                        "name": "武义县"
                    },
                    {
                        "spell": "P",
                        "code": "330726",
                        "name": "浦江县"
                    },
                    {
                        "spell": "P",
                        "code": "330727",
                        "name": "磐安县"
                    },
                    {
                        "spell": "L",
                        "code": "330781",
                        "name": "兰溪市"
                    },
                    {
                        "spell": "Y",
                        "code": "330782",
                        "name": "义乌市"
                    },
                    {
                        "spell": "D",
                        "code": "330783",
                        "name": "东阳市"
                    },
                    {
                        "spell": "Y",
                        "code": "330784",
                        "name": "永康市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "330800",
                "name": "衢州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "K",
                        "code": "330802",
                        "name": "柯城区"
                    },
                    {
                        "spell": "Q",
                        "code": "330803",
                        "name": "衢江区"
                    },
                    {
                        "spell": "C",
                        "code": "330822",
                        "name": "常山县"
                    },
                    {
                        "spell": "K",
                        "code": "330824",
                        "name": "开化县"
                    },
                    {
                        "spell": "L",
                        "code": "330825",
                        "name": "龙游县"
                    },
                    {
                        "spell": "J",
                        "code": "330881",
                        "name": "江山市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "330900",
                "name": "舟山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "330901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "330902",
                        "name": "定海区"
                    },
                    {
                        "spell": "P",
                        "code": "330903",
                        "name": "普陀区"
                    },
                    {
                        "spell": "D",
                        "code": "330921",
                        "name": "岱山县"
                    },
                    {
                        "spell": "S",
                        "code": "330922",
                        "name": "嵊泗县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "331000",
                "name": "台州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "331001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "331002",
                        "name": "椒江区"
                    },
                    {
                        "spell": "H",
                        "code": "331003",
                        "name": "黄岩区"
                    },
                    {
                        "spell": "L",
                        "code": "331004",
                        "name": "路桥区"
                    },
                    {
                        "spell": "Y",
                        "code": "331021",
                        "name": "玉环县"
                    },
                    {
                        "spell": "S",
                        "code": "331022",
                        "name": "三门县"
                    },
                    {
                        "spell": "T",
                        "code": "331023",
                        "name": "天台县"
                    },
                    {
                        "spell": "X",
                        "code": "331024",
                        "name": "仙居县"
                    },
                    {
                        "spell": "W",
                        "code": "331081",
                        "name": "温岭市"
                    },
                    {
                        "spell": "L",
                        "code": "331082",
                        "name": "临海市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "331100",
                "name": "丽水市",
                "list": [
                    {
                        "spell": "1",
                        "code": "331101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "331102",
                        "name": "莲都区"
                    },
                    {
                        "spell": "Q",
                        "code": "331121",
                        "name": "青田县"
                    },
                    {
                        "spell": "J",
                        "code": "331122",
                        "name": "缙云县"
                    },
                    {
                        "spell": "S",
                        "code": "331123",
                        "name": "遂昌县"
                    },
                    {
                        "spell": "S",
                        "code": "331124",
                        "name": "松阳县"
                    },
                    {
                        "spell": "Y",
                        "code": "331125",
                        "name": "云和县"
                    },
                    {
                        "spell": "Q",
                        "code": "331126",
                        "name": "庆元县"
                    },
                    {
                        "spell": "J",
                        "code": "331127",
                        "name": "景宁畲族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "331181",
                        "name": "龙泉市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "A",
        "code": "340000",
        "name": "安徽省",
        "list": [
            {
                "spell": "H",
                "code": "340100",
                "name": "合肥市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "340102",
                        "name": "瑶海区"
                    },
                    {
                        "spell": "L",
                        "code": "340103",
                        "name": "庐阳区"
                    },
                    {
                        "spell": "S",
                        "code": "340104",
                        "name": "蜀山区"
                    },
                    {
                        "spell": "B",
                        "code": "340111",
                        "name": "包河区"
                    },
                    {
                        "spell": "C",
                        "code": "340121",
                        "name": "长丰县"
                    },
                    {
                        "spell": "F",
                        "code": "340122",
                        "name": "肥东县"
                    },
                    {
                        "spell": "F",
                        "code": "340123",
                        "name": "肥西县"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "340200",
                "name": "芜湖市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "340202",
                        "name": "镜湖区"
                    },
                    {
                        "spell": "M",
                        "code": "340208",
                        "name": "三山区"
                    },
                    {
                        "spell": "X",
                        "code": "340203",
                        "name": "弋江区"
                    },
                    {
                        "spell": "J",
                        "code": "340207",
                        "name": "鸠江区"
                    },
                    {
                        "spell": "F",
                        "code": "340222",
                        "name": "繁昌县"
                    },
                    {
                        "spell": "N",
                        "code": "340223",
                        "name": "南陵县"
                    },
                    {
                        "spell": "W",
                        "code": "340221",
                        "name": "芜湖县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "340300",
                "name": "蚌埠市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "340302",
                        "name": "龙子湖区"
                    },
                    {
                        "spell": "B",
                        "code": "340303",
                        "name": "蚌山区"
                    },
                    {
                        "spell": "Y",
                        "code": "340304",
                        "name": "禹会区"
                    },
                    {
                        "spell": "H",
                        "code": "340311",
                        "name": "淮上区"
                    },
                    {
                        "spell": "H",
                        "code": "340321",
                        "name": "怀远县"
                    },
                    {
                        "spell": "W",
                        "code": "340322",
                        "name": "五河县"
                    },
                    {
                        "spell": "G",
                        "code": "340323",
                        "name": "固镇县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "340400",
                "name": "淮南市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "340402",
                        "name": "大通区"
                    },
                    {
                        "spell": "T",
                        "code": "340403",
                        "name": "田家庵区"
                    },
                    {
                        "spell": "X",
                        "code": "340404",
                        "name": "谢家集区"
                    },
                    {
                        "spell": "B",
                        "code": "340405",
                        "name": "八公山区"
                    },
                    {
                        "spell": "P",
                        "code": "340406",
                        "name": "潘集区"
                    },
                    {
                        "spell": "F",
                        "code": "340421",
                        "name": "凤台县"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "340500",
                "name": "马鞍山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "340502",
                        "name": "金家庄区"
                    },
                    {
                        "spell": "H",
                        "code": "340503",
                        "name": "花山区"
                    },
                    {
                        "spell": "Y",
                        "code": "340504",
                        "name": "雨山区"
                    },
                    {
                        "spell": "D",
                        "code": "340521",
                        "name": "当涂县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "340600",
                "name": "淮北市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "340602",
                        "name": "杜集区"
                    },
                    {
                        "spell": "X",
                        "code": "340603",
                        "name": "相山区"
                    },
                    {
                        "spell": "L",
                        "code": "340604",
                        "name": "烈山区"
                    },
                    {
                        "spell": "S",
                        "code": "340621",
                        "name": "濉溪县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "340700",
                "name": "铜陵市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "340702",
                        "name": "铜官山区"
                    },
                    {
                        "spell": "S",
                        "code": "340703",
                        "name": "狮子山区"
                    },
                    {
                        "spell": "J",
                        "code": "340711",
                        "name": "郊区"
                    },
                    {
                        "spell": "T",
                        "code": "340721",
                        "name": "铜陵县"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "340800",
                "name": "安庆市",
                "list": [
                    {
                        "spell": "S",
                        "code": "340801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "340802",
                        "name": "迎江区"
                    },
                    {
                        "spell": "D",
                        "code": "340803",
                        "name": "大观区"
                    },
                    {
                        "spell": "Y",
                        "code": "340811",
                        "name": "宜秀区"
                    },
                    {
                        "spell": "H",
                        "code": "340822",
                        "name": "怀宁县"
                    },
                    {
                        "spell": "Z",
                        "code": "340823",
                        "name": "枞阳县"
                    },
                    {
                        "spell": "Q",
                        "code": "340824",
                        "name": "潜山县"
                    },
                    {
                        "spell": "T",
                        "code": "340825",
                        "name": "太湖县"
                    },
                    {
                        "spell": "S",
                        "code": "340826",
                        "name": "宿松县"
                    },
                    {
                        "spell": "W",
                        "code": "340827",
                        "name": "望江县"
                    },
                    {
                        "spell": "Y",
                        "code": "340828",
                        "name": "岳西县"
                    },
                    {
                        "spell": "T",
                        "code": "340881",
                        "name": "桐城市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "341000",
                "name": "黄山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "341001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "341002",
                        "name": "屯溪区"
                    },
                    {
                        "spell": "H",
                        "code": "341003",
                        "name": "黄山区"
                    },
                    {
                        "spell": "H",
                        "code": "341004",
                        "name": "徽州区"
                    },
                    {
                        "spell": "S",
                        "code": "341021",
                        "name": "歙县"
                    },
                    {
                        "spell": "X",
                        "code": "341022",
                        "name": "休宁县"
                    },
                    {
                        "spell": "Y",
                        "code": "341023",
                        "name": "黟县"
                    },
                    {
                        "spell": "Q",
                        "code": "341024",
                        "name": "祁门县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "341100",
                "name": "滁州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "341101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "341102",
                        "name": "琅琊区"
                    },
                    {
                        "spell": "N",
                        "code": "341103",
                        "name": "南谯区"
                    },
                    {
                        "spell": "L",
                        "code": "341122",
                        "name": "来安县"
                    },
                    {
                        "spell": "Q",
                        "code": "341124",
                        "name": "全椒县"
                    },
                    {
                        "spell": "D",
                        "code": "341125",
                        "name": "定远县"
                    },
                    {
                        "spell": "F",
                        "code": "341126",
                        "name": "凤阳县"
                    },
                    {
                        "spell": "T",
                        "code": "341181",
                        "name": "天长市"
                    },
                    {
                        "spell": "M",
                        "code": "341182",
                        "name": "明光市"
                    }
                ]
            },
            {
                "spell": "F",
                "code": "341200",
                "name": "阜阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "341201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "341202",
                        "name": "颍州区"
                    },
                    {
                        "spell": "Y",
                        "code": "341203",
                        "name": "颍东区"
                    },
                    {
                        "spell": "Y",
                        "code": "341204",
                        "name": "颍泉区"
                    },
                    {
                        "spell": "L",
                        "code": "341221",
                        "name": "临泉县"
                    },
                    {
                        "spell": "T",
                        "code": "341222",
                        "name": "太和县"
                    },
                    {
                        "spell": "F",
                        "code": "341225",
                        "name": "阜南县"
                    },
                    {
                        "spell": "Y",
                        "code": "341226",
                        "name": "颍上县"
                    },
                    {
                        "spell": "J",
                        "code": "341282",
                        "name": "界首市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "341300",
                "name": "宿州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "341301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "341302",
                        "name": "埇桥区"
                    },
                    {
                        "spell": "D",
                        "code": "341321",
                        "name": "砀山县"
                    },
                    {
                        "spell": "X",
                        "code": "341322",
                        "name": "萧县"
                    },
                    {
                        "spell": "L",
                        "code": "341323",
                        "name": "灵璧县"
                    },
                    {
                        "spell": "S",
                        "code": "341324",
                        "name": "泗县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "341400",
                "name": "巢湖市",
                "list": [
                    {
                        "spell": "1",
                        "code": "341401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "341402",
                        "name": "居巢区"
                    },
                    {
                        "spell": "L",
                        "code": "341421",
                        "name": "庐江县"
                    },
                    {
                        "spell": "W",
                        "code": "341422",
                        "name": "无为县"
                    },
                    {
                        "spell": "H",
                        "code": "341423",
                        "name": "含山县"
                    },
                    {
                        "spell": "H",
                        "code": "341424",
                        "name": "和县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "341500",
                "name": "六安市",
                "list": [
                    {
                        "spell": "1",
                        "code": "341501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "341502",
                        "name": "金安区"
                    },
                    {
                        "spell": "Y",
                        "code": "341503",
                        "name": "裕安区"
                    },
                    {
                        "spell": "S",
                        "code": "341521",
                        "name": "寿县"
                    },
                    {
                        "spell": "H",
                        "code": "341522",
                        "name": "霍邱县"
                    },
                    {
                        "spell": "S",
                        "code": "341523",
                        "name": "舒城县"
                    },
                    {
                        "spell": "J",
                        "code": "341524",
                        "name": "金寨县"
                    },
                    {
                        "spell": "H",
                        "code": "341525",
                        "name": "霍山县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "341600",
                "name": "亳州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "341601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "341602",
                        "name": "谯城区"
                    },
                    {
                        "spell": "G",
                        "code": "341621",
                        "name": "涡阳县"
                    },
                    {
                        "spell": "M",
                        "code": "341622",
                        "name": "蒙城县"
                    },
                    {
                        "spell": "L",
                        "code": "341623",
                        "name": "利辛县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "341700",
                "name": "池州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "341701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "341702",
                        "name": "贵池区"
                    },
                    {
                        "spell": "D",
                        "code": "341721",
                        "name": "东至县"
                    },
                    {
                        "spell": "S",
                        "code": "341722",
                        "name": "石台县"
                    },
                    {
                        "spell": "Q",
                        "code": "341723",
                        "name": "青阳县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "341800",
                "name": "宣城市",
                "list": [
                    {
                        "spell": "1",
                        "code": "341801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "341802",
                        "name": "宣州区"
                    },
                    {
                        "spell": "L",
                        "code": "341821",
                        "name": "郎溪县"
                    },
                    {
                        "spell": "G",
                        "code": "341822",
                        "name": "广德县"
                    },
                    {
                        "spell": "J",
                        "code": "341823",
                        "name": "泾县"
                    },
                    {
                        "spell": "J",
                        "code": "341824",
                        "name": "绩溪县"
                    },
                    {
                        "spell": "J",
                        "code": "341825",
                        "name": "旌德县"
                    },
                    {
                        "spell": "N",
                        "code": "341881",
                        "name": "宁国市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "F",
        "code": "350000",
        "name": "福建省",
        "list": [
            {
                "spell": "F",
                "code": "350100",
                "name": "福州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "350102",
                        "name": "鼓楼区"
                    },
                    {
                        "spell": "T",
                        "code": "350103",
                        "name": "台江区"
                    },
                    {
                        "spell": "C",
                        "code": "350104",
                        "name": "仓山区"
                    },
                    {
                        "spell": "M",
                        "code": "350105",
                        "name": "马尾区"
                    },
                    {
                        "spell": "J",
                        "code": "350111",
                        "name": "晋安区"
                    },
                    {
                        "spell": "M",
                        "code": "350121",
                        "name": "闽侯县"
                    },
                    {
                        "spell": "L",
                        "code": "350122",
                        "name": "连江县"
                    },
                    {
                        "spell": "L",
                        "code": "350123",
                        "name": "罗源县"
                    },
                    {
                        "spell": "M",
                        "code": "350124",
                        "name": "闽清县"
                    },
                    {
                        "spell": "Y",
                        "code": "350125",
                        "name": "永泰县"
                    },
                    {
                        "spell": "P",
                        "code": "350128",
                        "name": "平潭县"
                    },
                    {
                        "spell": "F",
                        "code": "350181",
                        "name": "福清市"
                    },
                    {
                        "spell": "C",
                        "code": "350182",
                        "name": "长乐市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "350200",
                "name": "厦门市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "350203",
                        "name": "思明区"
                    },
                    {
                        "spell": "H",
                        "code": "350205",
                        "name": "海沧区"
                    },
                    {
                        "spell": "H",
                        "code": "350206",
                        "name": "湖里区"
                    },
                    {
                        "spell": "J",
                        "code": "350211",
                        "name": "集美区"
                    },
                    {
                        "spell": "T",
                        "code": "350212",
                        "name": "同安区"
                    },
                    {
                        "spell": "X",
                        "code": "350213",
                        "name": "翔安区"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "350300",
                "name": "莆田市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "350302",
                        "name": "城厢区"
                    },
                    {
                        "spell": "H",
                        "code": "350303",
                        "name": "涵江区"
                    },
                    {
                        "spell": "L",
                        "code": "350304",
                        "name": "荔城区"
                    },
                    {
                        "spell": "X",
                        "code": "350305",
                        "name": "秀屿区"
                    },
                    {
                        "spell": "X",
                        "code": "350322",
                        "name": "仙游县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "350400",
                "name": "三明市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "M",
                        "code": "350402",
                        "name": "梅列区"
                    },
                    {
                        "spell": "S",
                        "code": "350403",
                        "name": "三元区"
                    },
                    {
                        "spell": "M",
                        "code": "350421",
                        "name": "明溪县"
                    },
                    {
                        "spell": "Q",
                        "code": "350423",
                        "name": "清流县"
                    },
                    {
                        "spell": "N",
                        "code": "350424",
                        "name": "宁化县"
                    },
                    {
                        "spell": "D",
                        "code": "350425",
                        "name": "大田县"
                    },
                    {
                        "spell": "Y",
                        "code": "350426",
                        "name": "尤溪县"
                    },
                    {
                        "spell": "S",
                        "code": "350427",
                        "name": "沙县"
                    },
                    {
                        "spell": "J",
                        "code": "350428",
                        "name": "将乐县"
                    },
                    {
                        "spell": "T",
                        "code": "350429",
                        "name": "泰宁县"
                    },
                    {
                        "spell": "J",
                        "code": "350430",
                        "name": "建宁县"
                    },
                    {
                        "spell": "Y",
                        "code": "350481",
                        "name": "永安市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "350500",
                "name": "泉州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "350502",
                        "name": "鲤城区"
                    },
                    {
                        "spell": "F",
                        "code": "350503",
                        "name": "丰泽区"
                    },
                    {
                        "spell": "L",
                        "code": "350504",
                        "name": "洛江区"
                    },
                    {
                        "spell": "Q",
                        "code": "350505",
                        "name": "泉港区"
                    },
                    {
                        "spell": "H",
                        "code": "350521",
                        "name": "惠安县"
                    },
                    {
                        "spell": "A",
                        "code": "350524",
                        "name": "安溪县"
                    },
                    {
                        "spell": "Y",
                        "code": "350525",
                        "name": "永春县"
                    },
                    {
                        "spell": "D",
                        "code": "350526",
                        "name": "德化县"
                    },
                    {
                        "spell": "J",
                        "code": "350527",
                        "name": "金门县"
                    },
                    {
                        "spell": "S",
                        "code": "350581",
                        "name": "石狮市"
                    },
                    {
                        "spell": "J",
                        "code": "350582",
                        "name": "晋江市"
                    },
                    {
                        "spell": "N",
                        "code": "350583",
                        "name": "南安市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "350600",
                "name": "漳州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "350602",
                        "name": "芗城区"
                    },
                    {
                        "spell": "L",
                        "code": "350603",
                        "name": "龙文区"
                    },
                    {
                        "spell": "Y",
                        "code": "350622",
                        "name": "云霄县"
                    },
                    {
                        "spell": "Z",
                        "code": "350623",
                        "name": "漳浦县"
                    },
                    {
                        "spell": "Z",
                        "code": "350624",
                        "name": "诏安县"
                    },
                    {
                        "spell": "C",
                        "code": "350625",
                        "name": "长泰县"
                    },
                    {
                        "spell": "D",
                        "code": "350626",
                        "name": "东山县"
                    },
                    {
                        "spell": "N",
                        "code": "350627",
                        "name": "南靖县"
                    },
                    {
                        "spell": "P",
                        "code": "350628",
                        "name": "平和县"
                    },
                    {
                        "spell": "H",
                        "code": "350629",
                        "name": "华安县"
                    },
                    {
                        "spell": "L",
                        "code": "350681",
                        "name": "龙海市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "350700",
                "name": "南平市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "350702",
                        "name": "延平区"
                    },
                    {
                        "spell": "S",
                        "code": "350721",
                        "name": "顺昌县"
                    },
                    {
                        "spell": "P",
                        "code": "350722",
                        "name": "浦城县"
                    },
                    {
                        "spell": "G",
                        "code": "350723",
                        "name": "光泽县"
                    },
                    {
                        "spell": "S",
                        "code": "350724",
                        "name": "松溪县"
                    },
                    {
                        "spell": "Z",
                        "code": "350725",
                        "name": "政和县"
                    },
                    {
                        "spell": "S",
                        "code": "350781",
                        "name": "邵武市"
                    },
                    {
                        "spell": "W",
                        "code": "350782",
                        "name": "武夷山市"
                    },
                    {
                        "spell": "J",
                        "code": "350783",
                        "name": "建瓯市"
                    },
                    {
                        "spell": "J",
                        "code": "350784",
                        "name": "建阳市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "350800",
                "name": "龙岩市",
                "list": [
                    {
                        "spell": "S",
                        "code": "350801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "350802",
                        "name": "新罗区"
                    },
                    {
                        "spell": "C",
                        "code": "350821",
                        "name": "长汀县"
                    },
                    {
                        "spell": "Y",
                        "code": "350822",
                        "name": "永定县"
                    },
                    {
                        "spell": "S",
                        "code": "350823",
                        "name": "上杭县"
                    },
                    {
                        "spell": "W",
                        "code": "350824",
                        "name": "武平县"
                    },
                    {
                        "spell": "L",
                        "code": "350825",
                        "name": "连城县"
                    },
                    {
                        "spell": "Z",
                        "code": "350881",
                        "name": "漳平市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "350900",
                "name": "宁德市",
                "list": [
                    {
                        "spell": "1",
                        "code": "350901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "350902",
                        "name": "蕉城区"
                    },
                    {
                        "spell": "X",
                        "code": "350921",
                        "name": "霞浦县"
                    },
                    {
                        "spell": "G",
                        "code": "350922",
                        "name": "古田县"
                    },
                    {
                        "spell": "P",
                        "code": "350923",
                        "name": "屏南县"
                    },
                    {
                        "spell": "S",
                        "code": "350924",
                        "name": "寿宁县"
                    },
                    {
                        "spell": "Z",
                        "code": "350925",
                        "name": "周宁县"
                    },
                    {
                        "spell": "Z",
                        "code": "350926",
                        "name": "柘荣县"
                    },
                    {
                        "spell": "F",
                        "code": "350981",
                        "name": "福安市"
                    },
                    {
                        "spell": "F",
                        "code": "350982",
                        "name": "福鼎市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "J",
        "code": "360000",
        "name": "江西省",
        "list": [
            {
                "spell": "N",
                "code": "360100",
                "name": "南昌市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "360102",
                        "name": "东湖区"
                    },
                    {
                        "spell": "X",
                        "code": "360103",
                        "name": "西湖区"
                    },
                    {
                        "spell": "Q",
                        "code": "360104",
                        "name": "青云谱区"
                    },
                    {
                        "spell": "W",
                        "code": "360105",
                        "name": "湾里区"
                    },
                    {
                        "spell": "Q",
                        "code": "360111",
                        "name": "青山湖区"
                    },
                    {
                        "spell": "N",
                        "code": "360121",
                        "name": "南昌县"
                    },
                    {
                        "spell": "X",
                        "code": "360122",
                        "name": "新建县"
                    },
                    {
                        "spell": "A",
                        "code": "360123",
                        "name": "安义县"
                    },
                    {
                        "spell": "J",
                        "code": "360124",
                        "name": "进贤县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "360200",
                "name": "景德镇市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "360202",
                        "name": "昌江区"
                    },
                    {
                        "spell": "Z",
                        "code": "360203",
                        "name": "珠山区"
                    },
                    {
                        "spell": "F",
                        "code": "360222",
                        "name": "浮梁县"
                    },
                    {
                        "spell": "L",
                        "code": "360281",
                        "name": "乐平市"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "360300",
                "name": "萍乡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "A",
                        "code": "360302",
                        "name": "安源区"
                    },
                    {
                        "spell": "X",
                        "code": "360313",
                        "name": "湘东区"
                    },
                    {
                        "spell": "L",
                        "code": "360321",
                        "name": "莲花县"
                    },
                    {
                        "spell": "S",
                        "code": "360322",
                        "name": "上栗县"
                    },
                    {
                        "spell": "L",
                        "code": "360323",
                        "name": "芦溪县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "360400",
                "name": "九江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "360402",
                        "name": "庐山区"
                    },
                    {
                        "spell": "X",
                        "code": "360403",
                        "name": "浔阳区"
                    },
                    {
                        "spell": "J",
                        "code": "360421",
                        "name": "九江县"
                    },
                    {
                        "spell": "W",
                        "code": "360423",
                        "name": "武宁县"
                    },
                    {
                        "spell": "X",
                        "code": "360424",
                        "name": "修水县"
                    },
                    {
                        "spell": "Y",
                        "code": "360425",
                        "name": "永修县"
                    },
                    {
                        "spell": "D",
                        "code": "360426",
                        "name": "德安县"
                    },
                    {
                        "spell": "X",
                        "code": "360427",
                        "name": "星子县"
                    },
                    {
                        "spell": "D",
                        "code": "360428",
                        "name": "都昌县"
                    },
                    {
                        "spell": "H",
                        "code": "360429",
                        "name": "湖口县"
                    },
                    {
                        "spell": "P",
                        "code": "360430",
                        "name": "彭泽县"
                    },
                    {
                        "spell": "R",
                        "code": "360481",
                        "name": "瑞昌市"
                    },
                    {
                        "spell": "G",
                        "code": "360482",
                        "name": "共青城市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "360500",
                "name": "新余市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "360502",
                        "name": "渝水区"
                    },
                    {
                        "spell": "F",
                        "code": "360521",
                        "name": "分宜县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "360600",
                "name": "鹰潭市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "360602",
                        "name": "月湖区"
                    },
                    {
                        "spell": "Y",
                        "code": "360622",
                        "name": "余江县"
                    },
                    {
                        "spell": "G",
                        "code": "360681",
                        "name": "贵溪市"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "360700",
                "name": "赣州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "360701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "360702",
                        "name": "章贡区"
                    },
                    {
                        "spell": "G",
                        "code": "360721",
                        "name": "赣县"
                    },
                    {
                        "spell": "X",
                        "code": "360722",
                        "name": "信丰县"
                    },
                    {
                        "spell": "D",
                        "code": "360723",
                        "name": "大余县"
                    },
                    {
                        "spell": "S",
                        "code": "360724",
                        "name": "上犹县"
                    },
                    {
                        "spell": "C",
                        "code": "360725",
                        "name": "崇义县"
                    },
                    {
                        "spell": "A",
                        "code": "360726",
                        "name": "安远县"
                    },
                    {
                        "spell": "L",
                        "code": "360727",
                        "name": "龙南县"
                    },
                    {
                        "spell": "D",
                        "code": "360728",
                        "name": "定南县"
                    },
                    {
                        "spell": "Q",
                        "code": "360729",
                        "name": "全南县"
                    },
                    {
                        "spell": "N",
                        "code": "360730",
                        "name": "宁都县"
                    },
                    {
                        "spell": "Y",
                        "code": "360731",
                        "name": "于都县"
                    },
                    {
                        "spell": "X",
                        "code": "360732",
                        "name": "兴国县"
                    },
                    {
                        "spell": "H",
                        "code": "360733",
                        "name": "会昌县"
                    },
                    {
                        "spell": "X",
                        "code": "360734",
                        "name": "寻乌县"
                    },
                    {
                        "spell": "S",
                        "code": "360735",
                        "name": "石城县"
                    },
                    {
                        "spell": "R",
                        "code": "360781",
                        "name": "瑞金市"
                    },
                    {
                        "spell": "N",
                        "code": "360782",
                        "name": "南康市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "360800",
                "name": "吉安市",
                "list": [
                    {
                        "spell": "1",
                        "code": "360801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "360802",
                        "name": "吉州区"
                    },
                    {
                        "spell": "Q",
                        "code": "360803",
                        "name": "青原区"
                    },
                    {
                        "spell": "J",
                        "code": "360821",
                        "name": "吉安县"
                    },
                    {
                        "spell": "J",
                        "code": "360822",
                        "name": "吉水县"
                    },
                    {
                        "spell": "X",
                        "code": "360823",
                        "name": "峡江县"
                    },
                    {
                        "spell": "X",
                        "code": "360824",
                        "name": "新干县"
                    },
                    {
                        "spell": "Y",
                        "code": "360825",
                        "name": "永丰县"
                    },
                    {
                        "spell": "T",
                        "code": "360826",
                        "name": "泰和县"
                    },
                    {
                        "spell": "S",
                        "code": "360827",
                        "name": "遂川县"
                    },
                    {
                        "spell": "W",
                        "code": "360828",
                        "name": "万安县"
                    },
                    {
                        "spell": "A",
                        "code": "360829",
                        "name": "安福县"
                    },
                    {
                        "spell": "Y",
                        "code": "360830",
                        "name": "永新县"
                    },
                    {
                        "spell": "J",
                        "code": "360881",
                        "name": "井冈山市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "360900",
                "name": "宜春市",
                "list": [
                    {
                        "spell": "1",
                        "code": "360901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "360902",
                        "name": "袁州区"
                    },
                    {
                        "spell": "F",
                        "code": "360921",
                        "name": "奉新县"
                    },
                    {
                        "spell": "W",
                        "code": "360922",
                        "name": "万载县"
                    },
                    {
                        "spell": "S",
                        "code": "360923",
                        "name": "上高县"
                    },
                    {
                        "spell": "Y",
                        "code": "360924",
                        "name": "宜丰县"
                    },
                    {
                        "spell": "J",
                        "code": "360925",
                        "name": "靖安县"
                    },
                    {
                        "spell": "T",
                        "code": "360926",
                        "name": "铜鼓县"
                    },
                    {
                        "spell": "F",
                        "code": "360981",
                        "name": "丰城市"
                    },
                    {
                        "spell": "Z",
                        "code": "360982",
                        "name": "樟树市"
                    },
                    {
                        "spell": "G",
                        "code": "360983",
                        "name": "高安市"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "361000",
                "name": "抚州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "361001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "361002",
                        "name": "临川区"
                    },
                    {
                        "spell": "N",
                        "code": "361021",
                        "name": "南城县"
                    },
                    {
                        "spell": "L",
                        "code": "361022",
                        "name": "黎川县"
                    },
                    {
                        "spell": "N",
                        "code": "361023",
                        "name": "南丰县"
                    },
                    {
                        "spell": "C",
                        "code": "361024",
                        "name": "崇仁县"
                    },
                    {
                        "spell": "L",
                        "code": "361025",
                        "name": "乐安县"
                    },
                    {
                        "spell": "Y",
                        "code": "361026",
                        "name": "宜黄县"
                    },
                    {
                        "spell": "J",
                        "code": "361027",
                        "name": "金溪县"
                    },
                    {
                        "spell": "Z",
                        "code": "361028",
                        "name": "资溪县"
                    },
                    {
                        "spell": "D",
                        "code": "361029",
                        "name": "东乡县"
                    },
                    {
                        "spell": "G",
                        "code": "361030",
                        "name": "广昌县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "361100",
                "name": "上饶市",
                "list": [
                    {
                        "spell": "1",
                        "code": "361101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "361102",
                        "name": "信州区"
                    },
                    {
                        "spell": "S",
                        "code": "361121",
                        "name": "上饶县"
                    },
                    {
                        "spell": "G",
                        "code": "361122",
                        "name": "广丰县"
                    },
                    {
                        "spell": "Y",
                        "code": "361123",
                        "name": "玉山县"
                    },
                    {
                        "spell": "Q",
                        "code": "361124",
                        "name": "铅山县"
                    },
                    {
                        "spell": "H",
                        "code": "361125",
                        "name": "横峰县"
                    },
                    {
                        "spell": "Y",
                        "code": "361126",
                        "name": "弋阳县"
                    },
                    {
                        "spell": "Y",
                        "code": "361127",
                        "name": "余干县"
                    },
                    {
                        "spell": "P",
                        "code": "361128",
                        "name": "鄱阳县"
                    },
                    {
                        "spell": "W",
                        "code": "361129",
                        "name": "万年县"
                    },
                    {
                        "spell": "W",
                        "code": "361130",
                        "name": "婺源县"
                    },
                    {
                        "spell": "D",
                        "code": "361181",
                        "name": "德兴市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "S",
        "code": "370000",
        "name": "山东省",
        "list": [
            {
                "spell": "J",
                "code": "370100",
                "name": "济南市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "370102",
                        "name": "历下区"
                    },
                    {
                        "spell": "S",
                        "code": "370101",
                        "name": "市中区"
                    },
                    {
                        "spell": "H",
                        "code": "370104",
                        "name": "槐荫区"
                    },
                    {
                        "spell": "T",
                        "code": "370105",
                        "name": "天桥区"
                    },
                    {
                        "spell": "L",
                        "code": "370112",
                        "name": "历城区"
                    },
                    {
                        "spell": "C",
                        "code": "370113",
                        "name": "长清区"
                    },
                    {
                        "spell": "P",
                        "code": "370124",
                        "name": "平阴县"
                    },
                    {
                        "spell": "J",
                        "code": "370125",
                        "name": "济阳县"
                    },
                    {
                        "spell": "S",
                        "code": "370126",
                        "name": "商河县"
                    },
                    {
                        "spell": "Z",
                        "code": "370181",
                        "name": "章丘市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "370200",
                "name": "青岛市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "370202",
                        "name": "市南区"
                    },
                    {
                        "spell": "S",
                        "code": "370203",
                        "name": "市北区"
                    },
                    {
                        "spell": "S",
                        "code": "370205",
                        "name": "四方区"
                    },
                    {
                        "spell": "H",
                        "code": "370211",
                        "name": "黄岛区"
                    },
                    {
                        "spell": "L",
                        "code": "370212",
                        "name": "崂山区"
                    },
                    {
                        "spell": "L",
                        "code": "370213",
                        "name": "李沧区"
                    },
                    {
                        "spell": "C",
                        "code": "370214",
                        "name": "城阳区"
                    },
                    {
                        "spell": "J",
                        "code": "370281",
                        "name": "胶州市"
                    },
                    {
                        "spell": "J",
                        "code": "370282",
                        "name": "即墨市"
                    },
                    {
                        "spell": "P",
                        "code": "370283",
                        "name": "平度市"
                    },
                    {
                        "spell": "J",
                        "code": "370284",
                        "name": "胶南市"
                    },
                    {
                        "spell": "L",
                        "code": "370285",
                        "name": "莱西市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "370300",
                "name": "淄博市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "370302",
                        "name": "淄川区"
                    },
                    {
                        "spell": "Z",
                        "code": "370303",
                        "name": "张店区"
                    },
                    {
                        "spell": "B",
                        "code": "370304",
                        "name": "博山区"
                    },
                    {
                        "spell": "L",
                        "code": "370305",
                        "name": "临淄区"
                    },
                    {
                        "spell": "Z",
                        "code": "370306",
                        "name": "周村区"
                    },
                    {
                        "spell": "H",
                        "code": "370321",
                        "name": "桓台县"
                    },
                    {
                        "spell": "G",
                        "code": "370322",
                        "name": "高青县"
                    },
                    {
                        "spell": "Y",
                        "code": "370323",
                        "name": "沂源县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "370400",
                "name": "枣庄市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "370402",
                        "name": "市中区"
                    },
                    {
                        "spell": "X",
                        "code": "370403",
                        "name": "薛城区"
                    },
                    {
                        "spell": "Y",
                        "code": "370404",
                        "name": "峄城区"
                    },
                    {
                        "spell": "T",
                        "code": "370405",
                        "name": "台儿庄区"
                    },
                    {
                        "spell": "S",
                        "code": "370406",
                        "name": "山亭区"
                    },
                    {
                        "spell": "T",
                        "code": "370481",
                        "name": "滕州市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "370500",
                "name": "东营市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "370502",
                        "name": "东营区"
                    },
                    {
                        "spell": "H",
                        "code": "370503",
                        "name": "河口区"
                    },
                    {
                        "spell": "K",
                        "code": "370521",
                        "name": "垦利县"
                    },
                    {
                        "spell": "L",
                        "code": "370522",
                        "name": "利津县"
                    },
                    {
                        "spell": "G",
                        "code": "370523",
                        "name": "广饶县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "370600",
                "name": "烟台市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "370602",
                        "name": "芝罘区"
                    },
                    {
                        "spell": "F",
                        "code": "370611",
                        "name": "福山区"
                    },
                    {
                        "spell": "M",
                        "code": "370612",
                        "name": "牟平区"
                    },
                    {
                        "spell": "L",
                        "code": "370613",
                        "name": "莱山区"
                    },
                    {
                        "spell": "C",
                        "code": "370634",
                        "name": "长岛县"
                    },
                    {
                        "spell": "L",
                        "code": "370681",
                        "name": "龙口市"
                    },
                    {
                        "spell": "L",
                        "code": "370682",
                        "name": "莱阳市"
                    },
                    {
                        "spell": "L",
                        "code": "370683",
                        "name": "莱州市"
                    },
                    {
                        "spell": "P",
                        "code": "370684",
                        "name": "蓬莱市"
                    },
                    {
                        "spell": "Z",
                        "code": "370685",
                        "name": "招远市"
                    },
                    {
                        "spell": "Q",
                        "code": "370686",
                        "name": "栖霞市"
                    },
                    {
                        "spell": "H",
                        "code": "370687",
                        "name": "海阳市"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "370700",
                "name": "潍坊市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "370702",
                        "name": "潍城区"
                    },
                    {
                        "spell": "H",
                        "code": "370703",
                        "name": "寒亭区"
                    },
                    {
                        "spell": "F",
                        "code": "370704",
                        "name": "坊子区"
                    },
                    {
                        "spell": "K",
                        "code": "370705",
                        "name": "奎文区"
                    },
                    {
                        "spell": "L",
                        "code": "370724",
                        "name": "临朐县"
                    },
                    {
                        "spell": "C",
                        "code": "370725",
                        "name": "昌乐县"
                    },
                    {
                        "spell": "Q",
                        "code": "370781",
                        "name": "青州市"
                    },
                    {
                        "spell": "Z",
                        "code": "370782",
                        "name": "诸城市"
                    },
                    {
                        "spell": "S",
                        "code": "370783",
                        "name": "寿光市"
                    },
                    {
                        "spell": "A",
                        "code": "370784",
                        "name": "安丘市"
                    },
                    {
                        "spell": "G",
                        "code": "370785",
                        "name": "高密市"
                    },
                    {
                        "spell": "C",
                        "code": "370786",
                        "name": "昌邑市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "370800",
                "name": "济宁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "370802",
                        "name": "市中区"
                    },
                    {
                        "spell": "R",
                        "code": "370811",
                        "name": "任城区"
                    },
                    {
                        "spell": "W",
                        "code": "370826",
                        "name": "微山县"
                    },
                    {
                        "spell": "Y",
                        "code": "370827",
                        "name": "鱼台县"
                    },
                    {
                        "spell": "J",
                        "code": "370828",
                        "name": "金乡县"
                    },
                    {
                        "spell": "J",
                        "code": "370829",
                        "name": "嘉祥县"
                    },
                    {
                        "spell": "W",
                        "code": "370830",
                        "name": "汶上县"
                    },
                    {
                        "spell": "S",
                        "code": "370831",
                        "name": "泗水县"
                    },
                    {
                        "spell": "L",
                        "code": "370832",
                        "name": "梁山县"
                    },
                    {
                        "spell": "Q",
                        "code": "370881",
                        "name": "曲阜市"
                    },
                    {
                        "spell": "Y",
                        "code": "370882",
                        "name": "兖州市"
                    },
                    {
                        "spell": "Z",
                        "code": "370883",
                        "name": "邹城市"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "370900",
                "name": "泰安市",
                "list": [
                    {
                        "spell": "S",
                        "code": "370901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "370902",
                        "name": "泰山区"
                    },
                    {
                        "spell": "D",
                        "code": "370911",
                        "name": "岱岳区"
                    },
                    {
                        "spell": "N",
                        "code": "370921",
                        "name": "宁阳县"
                    },
                    {
                        "spell": "D",
                        "code": "370923",
                        "name": "东平县"
                    },
                    {
                        "spell": "X",
                        "code": "370982",
                        "name": "新泰市"
                    },
                    {
                        "spell": "F",
                        "code": "370983",
                        "name": "肥城市"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "371000",
                "name": "威海市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "371002",
                        "name": "环翠区"
                    },
                    {
                        "spell": "W",
                        "code": "371081",
                        "name": "文登市"
                    },
                    {
                        "spell": "R",
                        "code": "371082",
                        "name": "荣成市"
                    },
                    {
                        "spell": "R",
                        "code": "371083",
                        "name": "乳山市"
                    }
                ]
            },
            {
                "spell": "R",
                "code": "371100",
                "name": "日照市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "371102",
                        "name": "东港区"
                    },
                    {
                        "spell": "L",
                        "code": "371103",
                        "name": "岚山区"
                    },
                    {
                        "spell": "W",
                        "code": "371121",
                        "name": "五莲县"
                    },
                    {
                        "spell": "J",
                        "code": "371122",
                        "name": "莒县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "371200",
                "name": "莱芜市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "371202",
                        "name": "莱城区"
                    },
                    {
                        "spell": "G",
                        "code": "371203",
                        "name": "钢城区"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "371300",
                "name": "临沂市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "371302",
                        "name": "兰山区"
                    },
                    {
                        "spell": "L",
                        "code": "371311",
                        "name": "罗庄区"
                    },
                    {
                        "spell": "H",
                        "code": "371301",
                        "name": "河东区"
                    },
                    {
                        "spell": "Y",
                        "code": "371321",
                        "name": "沂南县"
                    },
                    {
                        "spell": "T",
                        "code": "371322",
                        "name": "郯城县"
                    },
                    {
                        "spell": "Y",
                        "code": "371323",
                        "name": "沂水县"
                    },
                    {
                        "spell": "C",
                        "code": "371324",
                        "name": "苍山县"
                    },
                    {
                        "spell": "F",
                        "code": "371325",
                        "name": "费县"
                    },
                    {
                        "spell": "P",
                        "code": "371326",
                        "name": "平邑县"
                    },
                    {
                        "spell": "J",
                        "code": "371327",
                        "name": "莒南县"
                    },
                    {
                        "spell": "M",
                        "code": "371328",
                        "name": "蒙阴县"
                    },
                    {
                        "spell": "L",
                        "code": "371329",
                        "name": "临沭县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "371400",
                "name": "德州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "371402",
                        "name": "德城区"
                    },
                    {
                        "spell": "L",
                        "code": "371421",
                        "name": "陵县"
                    },
                    {
                        "spell": "N",
                        "code": "371422",
                        "name": "宁津县"
                    },
                    {
                        "spell": "Q",
                        "code": "371423",
                        "name": "庆云县"
                    },
                    {
                        "spell": "L",
                        "code": "371424",
                        "name": "临邑县"
                    },
                    {
                        "spell": "Q",
                        "code": "371425",
                        "name": "齐河县"
                    },
                    {
                        "spell": "P",
                        "code": "371426",
                        "name": "平原县"
                    },
                    {
                        "spell": "X",
                        "code": "371427",
                        "name": "夏津县"
                    },
                    {
                        "spell": "W",
                        "code": "371428",
                        "name": "武城县"
                    },
                    {
                        "spell": "L",
                        "code": "371481",
                        "name": "乐陵市"
                    },
                    {
                        "spell": "Y",
                        "code": "371482",
                        "name": "禹城市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "371500",
                "name": "聊城市",
                "list": [
                    {
                        "spell": "S",
                        "code": "371501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "371502",
                        "name": "东昌府区"
                    },
                    {
                        "spell": "Y",
                        "code": "371521",
                        "name": "阳谷县"
                    },
                    {
                        "spell": "S",
                        "code": "371522",
                        "name": "莘县"
                    },
                    {
                        "spell": "C",
                        "code": "371523",
                        "name": "茌平县"
                    },
                    {
                        "spell": "D",
                        "code": "371524",
                        "name": "东阿县"
                    },
                    {
                        "spell": "G",
                        "code": "371525",
                        "name": "冠县"
                    },
                    {
                        "spell": "G",
                        "code": "371526",
                        "name": "高唐县"
                    },
                    {
                        "spell": "L",
                        "code": "371581",
                        "name": "临清市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "371600",
                "name": "滨州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "371601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "371602",
                        "name": "滨城区"
                    },
                    {
                        "spell": "H",
                        "code": "371621",
                        "name": "惠民县"
                    },
                    {
                        "spell": "Y",
                        "code": "371622",
                        "name": "阳信县"
                    },
                    {
                        "spell": "W",
                        "code": "371623",
                        "name": "无棣县"
                    },
                    {
                        "spell": "Z",
                        "code": "371624",
                        "name": "沾化县"
                    },
                    {
                        "spell": "B",
                        "code": "371625",
                        "name": "博兴县"
                    },
                    {
                        "spell": "Z",
                        "code": "371626",
                        "name": "邹平县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "371700",
                "name": "菏泽市",
                "list": [
                    {
                        "spell": "M",
                        "code": "371702",
                        "name": "牡丹区"
                    },
                    {
                        "spell": "C",
                        "code": "371721",
                        "name": "曹县"
                    },
                    {
                        "spell": "S",
                        "code": "371722",
                        "name": "单县"
                    },
                    {
                        "spell": "C",
                        "code": "371723",
                        "name": "成武县"
                    },
                    {
                        "spell": "J",
                        "code": "371724",
                        "name": "巨野县"
                    },
                    {
                        "spell": "Y",
                        "code": "371725",
                        "name": "郓城县"
                    },
                    {
                        "spell": "J",
                        "code": "371726",
                        "name": "鄄城县"
                    },
                    {
                        "spell": "D",
                        "code": "371727",
                        "name": "定陶县"
                    },
                    {
                        "spell": "D",
                        "code": "371728",
                        "name": "东明县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "410000",
        "name": "河南省",
        "list": [
            {
                "spell": "Z",
                "code": "410100",
                "name": "郑州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "410102",
                        "name": "中原区"
                    },
                    {
                        "spell": "E",
                        "code": "410103",
                        "name": "二七区"
                    },
                    {
                        "spell": "G",
                        "code": "410104",
                        "name": "管城回族区"
                    },
                    {
                        "spell": "J",
                        "code": "410105",
                        "name": "金水区"
                    },
                    {
                        "spell": "S",
                        "code": "410106",
                        "name": "上街区"
                    },
                    {
                        "spell": "M",
                        "code": "410108",
                        "name": "惠济区"
                    },
                    {
                        "spell": "Z",
                        "code": "410122",
                        "name": "中牟县"
                    },
                    {
                        "spell": "G",
                        "code": "410181",
                        "name": "巩义市"
                    },
                    {
                        "spell": "X",
                        "code": "410182",
                        "name": "荥阳市"
                    },
                    {
                        "spell": "X",
                        "code": "410183",
                        "name": "新密市"
                    },
                    {
                        "spell": "X",
                        "code": "410184",
                        "name": "新郑市"
                    },
                    {
                        "spell": "D",
                        "code": "410185",
                        "name": "登封市"
                    }
                ]
            },
            {
                "spell": "K",
                "code": "410200",
                "name": "开封市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "410202",
                        "name": "龙亭区"
                    },
                    {
                        "spell": "S",
                        "code": "410203",
                        "name": "顺河回族区"
                    },
                    {
                        "spell": "G",
                        "code": "410204",
                        "name": "鼓楼区"
                    },
                    {
                        "spell": "Y",
                        "code": "410205",
                        "name": "禹王台区"
                    },
                    {
                        "spell": "J",
                        "code": "410211",
                        "name": "金明区"
                    },
                    {
                        "spell": "Q",
                        "code": "410221",
                        "name": "杞县"
                    },
                    {
                        "spell": "T",
                        "code": "410222",
                        "name": "通许县"
                    },
                    {
                        "spell": "W",
                        "code": "410223",
                        "name": "尉氏县"
                    },
                    {
                        "spell": "K",
                        "code": "410224",
                        "name": "开封县"
                    },
                    {
                        "spell": "L",
                        "code": "410225",
                        "name": "兰考县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "410300",
                "name": "洛阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "410302",
                        "name": "老城区"
                    },
                    {
                        "spell": "X",
                        "code": "410303",
                        "name": "西工区"
                    },
                    {
                        "spell": "C",
                        "code": "410304",
                        "name": "瀍河回族区"
                    },
                    {
                        "spell": "J",
                        "code": "410305",
                        "name": "涧西区"
                    },
                    {
                        "spell": "J",
                        "code": "410306",
                        "name": "吉利区"
                    },
                    {
                        "spell": "L",
                        "code": "410311",
                        "name": "洛龙区"
                    },
                    {
                        "spell": "M",
                        "code": "410322",
                        "name": "孟津县"
                    },
                    {
                        "spell": "X",
                        "code": "410323",
                        "name": "新安县"
                    },
                    {
                        "spell": "L",
                        "code": "410324",
                        "name": "栾川县"
                    },
                    {
                        "spell": "S",
                        "code": "410325",
                        "name": "嵩县"
                    },
                    {
                        "spell": "R",
                        "code": "410326",
                        "name": "汝阳县"
                    },
                    {
                        "spell": "Y",
                        "code": "410327",
                        "name": "宜阳县"
                    },
                    {
                        "spell": "L",
                        "code": "410328",
                        "name": "洛宁县"
                    },
                    {
                        "spell": "Y",
                        "code": "410329",
                        "name": "伊川县"
                    },
                    {
                        "spell": "Y",
                        "code": "410381",
                        "name": "偃师市"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "410400",
                "name": "平顶山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "410402",
                        "name": "新华区"
                    },
                    {
                        "spell": "W",
                        "code": "410403",
                        "name": "卫东区"
                    },
                    {
                        "spell": "S",
                        "code": "410404",
                        "name": "石龙区"
                    },
                    {
                        "spell": "Z",
                        "code": "410411",
                        "name": "湛河区"
                    },
                    {
                        "spell": "B",
                        "code": "410421",
                        "name": "宝丰县"
                    },
                    {
                        "spell": "Y",
                        "code": "410422",
                        "name": "叶县"
                    },
                    {
                        "spell": "L",
                        "code": "410423",
                        "name": "鲁山县"
                    },
                    {
                        "spell": "J",
                        "code": "410425",
                        "name": "郏县"
                    },
                    {
                        "spell": "W",
                        "code": "410481",
                        "name": "舞钢市"
                    },
                    {
                        "spell": "R",
                        "code": "410482",
                        "name": "汝州市"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "410500",
                "name": "安阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "410502",
                        "name": "文峰区"
                    },
                    {
                        "spell": "B",
                        "code": "410503",
                        "name": "北关区"
                    },
                    {
                        "spell": "Y",
                        "code": "410505",
                        "name": "殷都区"
                    },
                    {
                        "spell": "L",
                        "code": "410506",
                        "name": "龙安区"
                    },
                    {
                        "spell": "A",
                        "code": "410522",
                        "name": "安阳县"
                    },
                    {
                        "spell": "T",
                        "code": "410523",
                        "name": "汤阴县"
                    },
                    {
                        "spell": "H",
                        "code": "410526",
                        "name": "滑县"
                    },
                    {
                        "spell": "N",
                        "code": "410527",
                        "name": "内黄县"
                    },
                    {
                        "spell": "L",
                        "code": "410581",
                        "name": "林州市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "410600",
                "name": "鹤壁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "410602",
                        "name": "鹤山区"
                    },
                    {
                        "spell": "S",
                        "code": "410603",
                        "name": "山城区"
                    },
                    {
                        "spell": "Q",
                        "code": "410611",
                        "name": "淇滨区"
                    },
                    {
                        "spell": "X",
                        "code": "410621",
                        "name": "浚县"
                    },
                    {
                        "spell": "Q",
                        "code": "410622",
                        "name": "淇县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "410700",
                "name": "新乡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "410702",
                        "name": "红旗区"
                    },
                    {
                        "spell": "W",
                        "code": "410703",
                        "name": "卫滨区"
                    },
                    {
                        "spell": "F",
                        "code": "410704",
                        "name": "凤泉区"
                    },
                    {
                        "spell": "M",
                        "code": "410711",
                        "name": "牧野区"
                    },
                    {
                        "spell": "X",
                        "code": "410721",
                        "name": "新乡县"
                    },
                    {
                        "spell": "H",
                        "code": "410724",
                        "name": "获嘉县"
                    },
                    {
                        "spell": "Y",
                        "code": "410725",
                        "name": "原阳县"
                    },
                    {
                        "spell": "Y",
                        "code": "410726",
                        "name": "延津县"
                    },
                    {
                        "spell": "F",
                        "code": "410727",
                        "name": "封丘县"
                    },
                    {
                        "spell": "C",
                        "code": "410728",
                        "name": "长垣县"
                    },
                    {
                        "spell": "W",
                        "code": "410781",
                        "name": "卫辉市"
                    },
                    {
                        "spell": "H",
                        "code": "410782",
                        "name": "辉县市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "410800",
                "name": "焦作市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "410802",
                        "name": "解放区"
                    },
                    {
                        "spell": "Z",
                        "code": "410803",
                        "name": "中站区"
                    },
                    {
                        "spell": "M",
                        "code": "410804",
                        "name": "马村区"
                    },
                    {
                        "spell": "S",
                        "code": "410811",
                        "name": "山阳区"
                    },
                    {
                        "spell": "X",
                        "code": "410821",
                        "name": "修武县"
                    },
                    {
                        "spell": "B",
                        "code": "410822",
                        "name": "博爱县"
                    },
                    {
                        "spell": "W",
                        "code": "410823",
                        "name": "武陟县"
                    },
                    {
                        "spell": "W",
                        "code": "410825",
                        "name": "温县"
                    },
                    {
                        "spell": "J",
                        "code": "419001",
                        "name": "济源市"
                    },
                    {
                        "spell": "Q",
                        "code": "410882",
                        "name": "沁阳市"
                    },
                    {
                        "spell": "M",
                        "code": "410883",
                        "name": "孟州市"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "410900",
                "name": "濮阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "410901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "410902",
                        "name": "华龙区"
                    },
                    {
                        "spell": "Q",
                        "code": "410922",
                        "name": "清丰县"
                    },
                    {
                        "spell": "N",
                        "code": "410923",
                        "name": "南乐县"
                    },
                    {
                        "spell": "F",
                        "code": "410926",
                        "name": "范县"
                    },
                    {
                        "spell": "T",
                        "code": "410927",
                        "name": "台前县"
                    },
                    {
                        "spell": "P",
                        "code": "410928",
                        "name": "濮阳县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "411000",
                "name": "许昌市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "411002",
                        "name": "魏都区"
                    },
                    {
                        "spell": "X",
                        "code": "411023",
                        "name": "许昌县"
                    },
                    {
                        "spell": "Y",
                        "code": "411024",
                        "name": "鄢陵县"
                    },
                    {
                        "spell": "X",
                        "code": "411025",
                        "name": "襄城县"
                    },
                    {
                        "spell": "Y",
                        "code": "411081",
                        "name": "禹州市"
                    },
                    {
                        "spell": "C",
                        "code": "411082",
                        "name": "长葛市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "411100",
                "name": "漯河市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "411102",
                        "name": "源汇区"
                    },
                    {
                        "spell": "Y",
                        "code": "411103",
                        "name": "郾城区"
                    },
                    {
                        "spell": "Z",
                        "code": "411104",
                        "name": "召陵区"
                    },
                    {
                        "spell": "W",
                        "code": "411121",
                        "name": "舞阳县"
                    },
                    {
                        "spell": "L",
                        "code": "411122",
                        "name": "临颍县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "411200",
                "name": "三门峡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "411202",
                        "name": "湖滨区"
                    },
                    {
                        "spell": "M",
                        "code": "411221",
                        "name": "渑池县"
                    },
                    {
                        "spell": "S",
                        "code": "411222",
                        "name": "陕县"
                    },
                    {
                        "spell": "L",
                        "code": "411224",
                        "name": "卢氏县"
                    },
                    {
                        "spell": "Y",
                        "code": "411281",
                        "name": "义马市"
                    },
                    {
                        "spell": "L",
                        "code": "411282",
                        "name": "灵宝市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "411300",
                "name": "南阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "411302",
                        "name": "宛城区"
                    },
                    {
                        "spell": "W",
                        "code": "411303",
                        "name": "卧龙区"
                    },
                    {
                        "spell": "N",
                        "code": "411321",
                        "name": "南召县"
                    },
                    {
                        "spell": "F",
                        "code": "411322",
                        "name": "方城县"
                    },
                    {
                        "spell": "X",
                        "code": "411323",
                        "name": "西峡县"
                    },
                    {
                        "spell": "Z",
                        "code": "411324",
                        "name": "镇平县"
                    },
                    {
                        "spell": "N",
                        "code": "411325",
                        "name": "内乡县"
                    },
                    {
                        "spell": "X",
                        "code": "411326",
                        "name": "淅川县"
                    },
                    {
                        "spell": "S",
                        "code": "411327",
                        "name": "社旗县"
                    },
                    {
                        "spell": "T",
                        "code": "411328",
                        "name": "唐河县"
                    },
                    {
                        "spell": "X",
                        "code": "411329",
                        "name": "新野县"
                    },
                    {
                        "spell": "T",
                        "code": "411330",
                        "name": "桐柏县"
                    },
                    {
                        "spell": "D",
                        "code": "411381",
                        "name": "邓州市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "411400",
                "name": "商丘市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "411402",
                        "name": "梁园区"
                    },
                    {
                        "spell": "S",
                        "code": "411403",
                        "name": "睢阳区"
                    },
                    {
                        "spell": "M",
                        "code": "411421",
                        "name": "民权县"
                    },
                    {
                        "spell": "S",
                        "code": "411422",
                        "name": "睢县"
                    },
                    {
                        "spell": "N",
                        "code": "411423",
                        "name": "宁陵县"
                    },
                    {
                        "spell": "Z",
                        "code": "411424",
                        "name": "柘城县"
                    },
                    {
                        "spell": "Y",
                        "code": "411425",
                        "name": "虞城县"
                    },
                    {
                        "spell": "X",
                        "code": "411426",
                        "name": "夏邑县"
                    },
                    {
                        "spell": "Y",
                        "code": "411481",
                        "name": "永城市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "411500",
                "name": "信阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "411501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "411502",
                        "name": "浉河区"
                    },
                    {
                        "spell": "P",
                        "code": "411503",
                        "name": "平桥区"
                    },
                    {
                        "spell": "L",
                        "code": "411521",
                        "name": "罗山县"
                    },
                    {
                        "spell": "G",
                        "code": "411522",
                        "name": "光山县"
                    },
                    {
                        "spell": "X",
                        "code": "411523",
                        "name": "新县"
                    },
                    {
                        "spell": "S",
                        "code": "411524",
                        "name": "商城县"
                    },
                    {
                        "spell": "G",
                        "code": "411525",
                        "name": "固始县"
                    },
                    {
                        "spell": "H",
                        "code": "411526",
                        "name": "潢川县"
                    },
                    {
                        "spell": "H",
                        "code": "411527",
                        "name": "淮滨县"
                    },
                    {
                        "spell": "X",
                        "code": "411528",
                        "name": "息县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "411600",
                "name": "周口市",
                "list": [
                    {
                        "spell": "1",
                        "code": "411601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "411602",
                        "name": "川汇区"
                    },
                    {
                        "spell": "F",
                        "code": "411621",
                        "name": "扶沟县"
                    },
                    {
                        "spell": "X",
                        "code": "411622",
                        "name": "西华县"
                    },
                    {
                        "spell": "S",
                        "code": "411623",
                        "name": "商水县"
                    },
                    {
                        "spell": "S",
                        "code": "411624",
                        "name": "沈丘县"
                    },
                    {
                        "spell": "D",
                        "code": "411625",
                        "name": "郸城县"
                    },
                    {
                        "spell": "H",
                        "code": "411626",
                        "name": "淮阳县"
                    },
                    {
                        "spell": "T",
                        "code": "411627",
                        "name": "太康县"
                    },
                    {
                        "spell": "L",
                        "code": "411628",
                        "name": "鹿邑县"
                    },
                    {
                        "spell": "X",
                        "code": "411681",
                        "name": "项城市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "411700",
                "name": "驻马店市",
                "list": [
                    {
                        "spell": "1",
                        "code": "411701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "411702",
                        "name": "驿城区"
                    },
                    {
                        "spell": "X",
                        "code": "411721",
                        "name": "西平县"
                    },
                    {
                        "spell": "S",
                        "code": "411722",
                        "name": "上蔡县"
                    },
                    {
                        "spell": "P",
                        "code": "411723",
                        "name": "平舆县"
                    },
                    {
                        "spell": "Z",
                        "code": "411724",
                        "name": "正阳县"
                    },
                    {
                        "spell": "Q",
                        "code": "411725",
                        "name": "确山县"
                    },
                    {
                        "spell": "B",
                        "code": "411726",
                        "name": "泌阳县"
                    },
                    {
                        "spell": "R",
                        "code": "411727",
                        "name": "汝南县"
                    },
                    {
                        "spell": "S",
                        "code": "411728",
                        "name": "遂平县"
                    },
                    {
                        "spell": "X",
                        "code": "411729",
                        "name": "新蔡县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "420000",
        "name": "湖北省",
        "list": [
            {
                "spell": "W",
                "code": "420100",
                "name": "武汉市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "420102",
                        "name": "江岸区"
                    },
                    {
                        "spell": "J",
                        "code": "420103",
                        "name": "江汉区"
                    },
                    {
                        "spell": "Q",
                        "code": "420104",
                        "name": "硚口区"
                    },
                    {
                        "spell": "H",
                        "code": "420105",
                        "name": "汉阳区"
                    },
                    {
                        "spell": "W",
                        "code": "420106",
                        "name": "武昌区"
                    },
                    {
                        "spell": "Q",
                        "code": "420107",
                        "name": "青山区"
                    },
                    {
                        "spell": "H",
                        "code": "420111",
                        "name": "洪山区"
                    },
                    {
                        "spell": "D",
                        "code": "420112",
                        "name": "东西湖区"
                    },
                    {
                        "spell": "H",
                        "code": "420113",
                        "name": "汉南区"
                    },
                    {
                        "spell": "C",
                        "code": "420114",
                        "name": "蔡甸区"
                    },
                    {
                        "spell": "J",
                        "code": "420115",
                        "name": "江夏区"
                    },
                    {
                        "spell": "H",
                        "code": "420116",
                        "name": "黄陂区"
                    },
                    {
                        "spell": "X",
                        "code": "420117",
                        "name": "新洲区"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "420200",
                "name": "黄石市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "420202",
                        "name": "黄石港区"
                    },
                    {
                        "spell": "X",
                        "code": "420203",
                        "name": "西塞山区"
                    },
                    {
                        "spell": "X",
                        "code": "420204",
                        "name": "下陆区"
                    },
                    {
                        "spell": "T",
                        "code": "420205",
                        "name": "铁山区"
                    },
                    {
                        "spell": "Y",
                        "code": "420222",
                        "name": "阳新县"
                    },
                    {
                        "spell": "D",
                        "code": "420281",
                        "name": "大冶市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "420300",
                "name": "十堰市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "M",
                        "code": "420302",
                        "name": "茅箭区"
                    },
                    {
                        "spell": "Z",
                        "code": "420303",
                        "name": "张湾区"
                    },
                    {
                        "spell": "Y",
                        "code": "420321",
                        "name": "郧县"
                    },
                    {
                        "spell": "Y",
                        "code": "420322",
                        "name": "郧西县"
                    },
                    {
                        "spell": "Z",
                        "code": "420323",
                        "name": "竹山县"
                    },
                    {
                        "spell": "Z",
                        "code": "420324",
                        "name": "竹溪县"
                    },
                    {
                        "spell": "F",
                        "code": "420325",
                        "name": "房县"
                    },
                    {
                        "spell": "D",
                        "code": "420381",
                        "name": "丹江口市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "420500",
                "name": "宜昌市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "420502",
                        "name": "西陵区"
                    },
                    {
                        "spell": "W",
                        "code": "420503",
                        "name": "伍家岗区"
                    },
                    {
                        "spell": "D",
                        "code": "420504",
                        "name": "点军区"
                    },
                    {
                        "spell": "X",
                        "code": "420505",
                        "name": "猇亭区"
                    },
                    {
                        "spell": "Y",
                        "code": "420506",
                        "name": "夷陵区"
                    },
                    {
                        "spell": "Y",
                        "code": "420525",
                        "name": "远安县"
                    },
                    {
                        "spell": "X",
                        "code": "420526",
                        "name": "兴山县"
                    },
                    {
                        "spell": "Z",
                        "code": "420527",
                        "name": "秭归县"
                    },
                    {
                        "spell": "C",
                        "code": "420528",
                        "name": "长阳土家族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "420529",
                        "name": "五峰土家族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "420581",
                        "name": "宜都市"
                    },
                    {
                        "spell": "D",
                        "code": "420582",
                        "name": "当阳市"
                    },
                    {
                        "spell": "Z",
                        "code": "420583",
                        "name": "枝江市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "420600",
                "name": "襄樊市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "420602",
                        "name": "襄城区"
                    },
                    {
                        "spell": "F",
                        "code": "420606",
                        "name": "樊城区"
                    },
                    {
                        "spell": "X",
                        "code": "420607",
                        "name": "襄阳区"
                    },
                    {
                        "spell": "N",
                        "code": "420624",
                        "name": "南漳县"
                    },
                    {
                        "spell": "G",
                        "code": "420625",
                        "name": "谷城县"
                    },
                    {
                        "spell": "B",
                        "code": "420626",
                        "name": "保康县"
                    },
                    {
                        "spell": "L",
                        "code": "420682",
                        "name": "老河口市"
                    },
                    {
                        "spell": "Z",
                        "code": "420683",
                        "name": "枣阳市"
                    },
                    {
                        "spell": "Y",
                        "code": "420684",
                        "name": "宜城市"
                    }
                ]
            },
            {
                "spell": "E",
                "code": "420700",
                "name": "鄂州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "420702",
                        "name": "梁子湖区"
                    },
                    {
                        "spell": "H",
                        "code": "420703",
                        "name": "华容区"
                    },
                    {
                        "spell": "E",
                        "code": "420704",
                        "name": "鄂城区"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "420800",
                "name": "荆门市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "420802",
                        "name": "东宝区"
                    },
                    {
                        "spell": "D",
                        "code": "420804",
                        "name": "掇刀区"
                    },
                    {
                        "spell": "J",
                        "code": "420821",
                        "name": "京山县"
                    },
                    {
                        "spell": "S",
                        "code": "420822",
                        "name": "沙洋县"
                    },
                    {
                        "spell": "Z",
                        "code": "420881",
                        "name": "钟祥市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "420900",
                "name": "孝感市",
                "list": [
                    {
                        "spell": "S",
                        "code": "420901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "420902",
                        "name": "孝南区"
                    },
                    {
                        "spell": "X",
                        "code": "420921",
                        "name": "孝昌县"
                    },
                    {
                        "spell": "D",
                        "code": "420922",
                        "name": "大悟县"
                    },
                    {
                        "spell": "Y",
                        "code": "420923",
                        "name": "云梦县"
                    },
                    {
                        "spell": "Y",
                        "code": "420981",
                        "name": "应城市"
                    },
                    {
                        "spell": "A",
                        "code": "420982",
                        "name": "安陆市"
                    },
                    {
                        "spell": "H",
                        "code": "420984",
                        "name": "汉川市"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "421000",
                "name": "荆州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "421001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "421002",
                        "name": "沙市区"
                    },
                    {
                        "spell": "J",
                        "code": "421003",
                        "name": "荆州区"
                    },
                    {
                        "spell": "G",
                        "code": "421022",
                        "name": "公安县"
                    },
                    {
                        "spell": "J",
                        "code": "421023",
                        "name": "监利县"
                    },
                    {
                        "spell": "J",
                        "code": "421024",
                        "name": "江陵县"
                    },
                    {
                        "spell": "S",
                        "code": "421081",
                        "name": "石首市"
                    },
                    {
                        "spell": "H",
                        "code": "421083",
                        "name": "洪湖市"
                    },
                    {
                        "spell": "S",
                        "code": "421087",
                        "name": "松滋市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "421100",
                "name": "黄冈市",
                "list": [
                    {
                        "spell": "S",
                        "code": "421101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "421102",
                        "name": "黄州区"
                    },
                    {
                        "spell": "T",
                        "code": "421121",
                        "name": "团风县"
                    },
                    {
                        "spell": "H",
                        "code": "421122",
                        "name": "红安县"
                    },
                    {
                        "spell": "L",
                        "code": "421123",
                        "name": "罗田县"
                    },
                    {
                        "spell": "Y",
                        "code": "421124",
                        "name": "英山县"
                    },
                    {
                        "spell": "X",
                        "code": "421125",
                        "name": "浠水县"
                    },
                    {
                        "spell": "Q",
                        "code": "421126",
                        "name": "蕲春县"
                    },
                    {
                        "spell": "H",
                        "code": "421127",
                        "name": "黄梅县"
                    },
                    {
                        "spell": "M",
                        "code": "421181",
                        "name": "麻城市"
                    },
                    {
                        "spell": "W",
                        "code": "421182",
                        "name": "武穴市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "421200",
                "name": "咸宁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "421201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "421202",
                        "name": "咸安区"
                    },
                    {
                        "spell": "J",
                        "code": "421221",
                        "name": "嘉鱼县"
                    },
                    {
                        "spell": "T",
                        "code": "421222",
                        "name": "通城县"
                    },
                    {
                        "spell": "C",
                        "code": "421223",
                        "name": "崇阳县"
                    },
                    {
                        "spell": "T",
                        "code": "421224",
                        "name": "通山县"
                    },
                    {
                        "spell": "C",
                        "code": "421281",
                        "name": "赤壁市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "421300",
                "name": "随州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "421301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "421303",
                        "name": "曾都区"
                    },
                    {
                        "spell": "G",
                        "code": "421381",
                        "name": "广水市"
                    },
                    {
                        "spell": "S",
                        "code": "421321",
                        "name": "随县"
                    }
                ]
            },
            {
                "spell": "E",
                "code": "422800",
                "name": "恩施土家族苗族自治州",
                "list": [
                    {
                        "spell": "E",
                        "code": "422801",
                        "name": "恩施市"
                    },
                    {
                        "spell": "L",
                        "code": "422802",
                        "name": "利川市"
                    },
                    {
                        "spell": "J",
                        "code": "422822",
                        "name": "建始县"
                    },
                    {
                        "spell": "B",
                        "code": "422823",
                        "name": "巴东县"
                    },
                    {
                        "spell": "X",
                        "code": "422825",
                        "name": "宣恩县"
                    },
                    {
                        "spell": "X",
                        "code": "422826",
                        "name": "咸丰县"
                    },
                    {
                        "spell": "L",
                        "code": "422827",
                        "name": "来凤县"
                    },
                    {
                        "spell": "H",
                        "code": "422828",
                        "name": "鹤峰县"
                    }
                ]
            },
            {
                "spell": "s",
                "code": "429000",
                "name": "省直辖县级行政区划",
                "list": [
                    {
                        "spell": "X",
                        "code": "429004",
                        "name": "仙桃市"
                    },
                    {
                        "spell": "Q",
                        "code": "429005",
                        "name": "潜江市"
                    },
                    {
                        "spell": "T",
                        "code": "429006",
                        "name": "天门市"
                    },
                    {
                        "spell": "S",
                        "code": "429021",
                        "name": "神农架林区"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "430000",
        "name": "湖南省",
        "list": [
            {
                "spell": "C",
                "code": "430100",
                "name": "长沙市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "F",
                        "code": "430102",
                        "name": "芙蓉区"
                    },
                    {
                        "spell": "T",
                        "code": "430103",
                        "name": "天心区"
                    },
                    {
                        "spell": "Y",
                        "code": "430104",
                        "name": "岳麓区"
                    },
                    {
                        "spell": "K",
                        "code": "430105",
                        "name": "开福区"
                    },
                    {
                        "spell": "Y",
                        "code": "430111",
                        "name": "雨花区"
                    },
                    {
                        "spell": "C",
                        "code": "430121",
                        "name": "长沙县"
                    },
                    {
                        "spell": "W",
                        "code": "430122",
                        "name": "望城县"
                    },
                    {
                        "spell": "N",
                        "code": "430124",
                        "name": "宁乡县"
                    },
                    {
                        "spell": "L",
                        "code": "430181",
                        "name": "浏阳市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "430200",
                "name": "株洲市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "430202",
                        "name": "荷塘区"
                    },
                    {
                        "spell": "L",
                        "code": "430203",
                        "name": "芦淞区"
                    },
                    {
                        "spell": "S",
                        "code": "430204",
                        "name": "石峰区"
                    },
                    {
                        "spell": "T",
                        "code": "430211",
                        "name": "天元区"
                    },
                    {
                        "spell": "Z",
                        "code": "430221",
                        "name": "株洲县"
                    },
                    {
                        "spell": "Y",
                        "code": "430223",
                        "name": "攸县"
                    },
                    {
                        "spell": "C",
                        "code": "430224",
                        "name": "茶陵县"
                    },
                    {
                        "spell": "Y",
                        "code": "430225",
                        "name": "炎陵县"
                    },
                    {
                        "spell": "L",
                        "code": "430281",
                        "name": "醴陵市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "430300",
                "name": "湘潭市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "430302",
                        "name": "雨湖区"
                    },
                    {
                        "spell": "Y",
                        "code": "430304",
                        "name": "岳塘区"
                    },
                    {
                        "spell": "X",
                        "code": "430321",
                        "name": "湘潭县"
                    },
                    {
                        "spell": "X",
                        "code": "430381",
                        "name": "湘乡市"
                    },
                    {
                        "spell": "S",
                        "code": "430382",
                        "name": "韶山市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "430400",
                "name": "衡阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "430405",
                        "name": "珠晖区"
                    },
                    {
                        "spell": "Y",
                        "code": "430406",
                        "name": "雁峰区"
                    },
                    {
                        "spell": "S",
                        "code": "430407",
                        "name": "石鼓区"
                    },
                    {
                        "spell": "Z",
                        "code": "430408",
                        "name": "蒸湘区"
                    },
                    {
                        "spell": "N",
                        "code": "430412",
                        "name": "南岳区"
                    },
                    {
                        "spell": "H",
                        "code": "430421",
                        "name": "衡阳县"
                    },
                    {
                        "spell": "H",
                        "code": "430422",
                        "name": "衡南县"
                    },
                    {
                        "spell": "H",
                        "code": "430423",
                        "name": "衡山县"
                    },
                    {
                        "spell": "H",
                        "code": "430424",
                        "name": "衡东县"
                    },
                    {
                        "spell": "Q",
                        "code": "430426",
                        "name": "祁东县"
                    },
                    {
                        "spell": "L",
                        "code": "430481",
                        "name": "耒阳市"
                    },
                    {
                        "spell": "C",
                        "code": "430482",
                        "name": "常宁市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "430500",
                "name": "邵阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "430502",
                        "name": "双清区"
                    },
                    {
                        "spell": "D",
                        "code": "430503",
                        "name": "大祥区"
                    },
                    {
                        "spell": "B",
                        "code": "430511",
                        "name": "北塔区"
                    },
                    {
                        "spell": "S",
                        "code": "430521",
                        "name": "邵东县"
                    },
                    {
                        "spell": "X",
                        "code": "430522",
                        "name": "新邵县"
                    },
                    {
                        "spell": "S",
                        "code": "430523",
                        "name": "邵阳县"
                    },
                    {
                        "spell": "L",
                        "code": "430524",
                        "name": "隆回县"
                    },
                    {
                        "spell": "D",
                        "code": "430525",
                        "name": "洞口县"
                    },
                    {
                        "spell": "S",
                        "code": "430527",
                        "name": "绥宁县"
                    },
                    {
                        "spell": "X",
                        "code": "430528",
                        "name": "新宁县"
                    },
                    {
                        "spell": "C",
                        "code": "430529",
                        "name": "城步苗族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "430581",
                        "name": "武冈市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "430600",
                "name": "岳阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "430602",
                        "name": "岳阳楼区"
                    },
                    {
                        "spell": "Y",
                        "code": "430603",
                        "name": "云溪区"
                    },
                    {
                        "spell": "J",
                        "code": "430611",
                        "name": "君山区"
                    },
                    {
                        "spell": "Y",
                        "code": "430621",
                        "name": "岳阳县"
                    },
                    {
                        "spell": "H",
                        "code": "430623",
                        "name": "华容县"
                    },
                    {
                        "spell": "X",
                        "code": "430624",
                        "name": "湘阴县"
                    },
                    {
                        "spell": "P",
                        "code": "430626",
                        "name": "平江县"
                    },
                    {
                        "spell": "M",
                        "code": "430681",
                        "name": "汨罗市"
                    },
                    {
                        "spell": "L",
                        "code": "430682",
                        "name": "临湘市"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "430700",
                "name": "常德市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "430702",
                        "name": "武陵区"
                    },
                    {
                        "spell": "D",
                        "code": "430703",
                        "name": "鼎城区"
                    },
                    {
                        "spell": "A",
                        "code": "430721",
                        "name": "安乡县"
                    },
                    {
                        "spell": "H",
                        "code": "430722",
                        "name": "汉寿县"
                    },
                    {
                        "spell": "L",
                        "code": "430723",
                        "name": "澧县"
                    },
                    {
                        "spell": "L",
                        "code": "430724",
                        "name": "临澧县"
                    },
                    {
                        "spell": "T",
                        "code": "430725",
                        "name": "桃源县"
                    },
                    {
                        "spell": "S",
                        "code": "430726",
                        "name": "石门县"
                    },
                    {
                        "spell": "J",
                        "code": "430781",
                        "name": "津市市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "430800",
                "name": "张家界市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "430802",
                        "name": "永定区"
                    },
                    {
                        "spell": "W",
                        "code": "430811",
                        "name": "武陵源区"
                    },
                    {
                        "spell": "C",
                        "code": "430821",
                        "name": "慈利县"
                    },
                    {
                        "spell": "S",
                        "code": "430822",
                        "name": "桑植县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "430900",
                "name": "益阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "430901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "430902",
                        "name": "资阳区"
                    },
                    {
                        "spell": "H",
                        "code": "430903",
                        "name": "赫山区"
                    },
                    {
                        "spell": "N",
                        "code": "430921",
                        "name": "南县"
                    },
                    {
                        "spell": "T",
                        "code": "430922",
                        "name": "桃江县"
                    },
                    {
                        "spell": "A",
                        "code": "430923",
                        "name": "安化县"
                    },
                    {
                        "spell": "Y",
                        "code": "430981",
                        "name": "沅江市"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "431000",
                "name": "郴州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "431001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "431002",
                        "name": "北湖区"
                    },
                    {
                        "spell": "S",
                        "code": "431003",
                        "name": "苏仙区"
                    },
                    {
                        "spell": "G",
                        "code": "431021",
                        "name": "桂阳县"
                    },
                    {
                        "spell": "y",
                        "code": "431022",
                        "name": "宜章县"
                    },
                    {
                        "spell": "Y",
                        "code": "431023",
                        "name": "永兴县"
                    },
                    {
                        "spell": "J",
                        "code": "431024",
                        "name": "嘉禾县"
                    },
                    {
                        "spell": "L",
                        "code": "431025",
                        "name": "临武县"
                    },
                    {
                        "spell": "R",
                        "code": "431026",
                        "name": "汝城县"
                    },
                    {
                        "spell": "G",
                        "code": "431027",
                        "name": "桂东县"
                    },
                    {
                        "spell": "A",
                        "code": "431028",
                        "name": "安仁县"
                    },
                    {
                        "spell": "Z",
                        "code": "431081",
                        "name": "资兴市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "431100",
                "name": "永州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "431101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "431103",
                        "name": "冷水滩区"
                    },
                    {
                        "spell": "Q",
                        "code": "431121",
                        "name": "祁阳县"
                    },
                    {
                        "spell": "D",
                        "code": "431122",
                        "name": "东安县"
                    },
                    {
                        "spell": "S",
                        "code": "431123",
                        "name": "双牌县"
                    },
                    {
                        "spell": "D",
                        "code": "431124",
                        "name": "道县"
                    },
                    {
                        "spell": "J",
                        "code": "431125",
                        "name": "江永县"
                    },
                    {
                        "spell": "N",
                        "code": "431126",
                        "name": "宁远县"
                    },
                    {
                        "spell": "L",
                        "code": "431127",
                        "name": "蓝山县"
                    },
                    {
                        "spell": "X",
                        "code": "431128",
                        "name": "新田县"
                    },
                    {
                        "spell": "J",
                        "code": "431129",
                        "name": "江华瑶族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "431102",
                        "name": "零陵区"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "431200",
                "name": "怀化市",
                "list": [
                    {
                        "spell": "S",
                        "code": "431201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "431202",
                        "name": "鹤城区"
                    },
                    {
                        "spell": "Z",
                        "code": "431221",
                        "name": "中方县"
                    },
                    {
                        "spell": "Y",
                        "code": "431222",
                        "name": "沅陵县"
                    },
                    {
                        "spell": "C",
                        "code": "431223",
                        "name": "辰溪县"
                    },
                    {
                        "spell": "X",
                        "code": "431224",
                        "name": "溆浦县"
                    },
                    {
                        "spell": "H",
                        "code": "431225",
                        "name": "会同县"
                    },
                    {
                        "spell": "M",
                        "code": "431226",
                        "name": "麻阳苗族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "431227",
                        "name": "新晃侗族自治县"
                    },
                    {
                        "spell": "Z",
                        "code": "431228",
                        "name": "芷江侗族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "431229",
                        "name": "靖州苗族侗族自治县"
                    },
                    {
                        "spell": "T",
                        "code": "431230",
                        "name": "通道侗族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "431281",
                        "name": "洪江市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "431300",
                "name": "娄底市",
                "list": [
                    {
                        "spell": "1",
                        "code": "431301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "431302",
                        "name": "娄星区"
                    },
                    {
                        "spell": "S",
                        "code": "431321",
                        "name": "双峰县"
                    },
                    {
                        "spell": "X",
                        "code": "431322",
                        "name": "新化县"
                    },
                    {
                        "spell": "L",
                        "code": "431381",
                        "name": "冷水江市"
                    },
                    {
                        "spell": "L",
                        "code": "431382",
                        "name": "涟源市"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "433100",
                "name": "湘西土家族苗族自治州",
                "list": [
                    {
                        "spell": "J",
                        "code": "433101",
                        "name": "吉首市"
                    },
                    {
                        "spell": "L",
                        "code": "433122",
                        "name": "泸溪县"
                    },
                    {
                        "spell": "F",
                        "code": "433123",
                        "name": "凤凰县"
                    },
                    {
                        "spell": "H",
                        "code": "433124",
                        "name": "花垣县"
                    },
                    {
                        "spell": "B",
                        "code": "433125",
                        "name": "保靖县"
                    },
                    {
                        "spell": "G",
                        "code": "433126",
                        "name": "古丈县"
                    },
                    {
                        "spell": "Y",
                        "code": "433127",
                        "name": "永顺县"
                    },
                    {
                        "spell": "L",
                        "code": "433130",
                        "name": "龙山县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "G",
        "code": "440000",
        "name": "广东省",
        "list": [
            {
                "spell": "G",
                "code": "440100",
                "name": "广州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "N",
                        "code": "440115",
                        "name": "南沙区"
                    },
                    {
                        "spell": "L",
                        "code": "440103",
                        "name": "荔湾区"
                    },
                    {
                        "spell": "Y",
                        "code": "440104",
                        "name": "越秀区"
                    },
                    {
                        "spell": "H",
                        "code": "440105",
                        "name": "海珠区"
                    },
                    {
                        "spell": "T",
                        "code": "440106",
                        "name": "天河区"
                    },
                    {
                        "spell": "L",
                        "code": "440116",
                        "name": "萝岗区"
                    },
                    {
                        "spell": "B",
                        "code": "440111",
                        "name": "白云区"
                    },
                    {
                        "spell": "H",
                        "code": "440112",
                        "name": "黄埔区"
                    },
                    {
                        "spell": "P",
                        "code": "440113",
                        "name": "番禺区"
                    },
                    {
                        "spell": "H",
                        "code": "440114",
                        "name": "花都区"
                    },
                    {
                        "spell": "Z",
                        "code": "440183",
                        "name": "增城市"
                    },
                    {
                        "spell": "C",
                        "code": "440184",
                        "name": "从化市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "440200",
                "name": "韶关市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "440203",
                        "name": "武江区"
                    },
                    {
                        "spell": "Z",
                        "code": "440204",
                        "name": "浈江区"
                    },
                    {
                        "spell": "Q",
                        "code": "440205",
                        "name": "曲江区"
                    },
                    {
                        "spell": "S",
                        "code": "440222",
                        "name": "始兴县"
                    },
                    {
                        "spell": "R",
                        "code": "440224",
                        "name": "仁化县"
                    },
                    {
                        "spell": "W",
                        "code": "440229",
                        "name": "翁源县"
                    },
                    {
                        "spell": "R",
                        "code": "440232",
                        "name": "乳源瑶族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "440233",
                        "name": "新丰县"
                    },
                    {
                        "spell": "L",
                        "code": "440281",
                        "name": "乐昌市"
                    },
                    {
                        "spell": "N",
                        "code": "440282",
                        "name": "南雄市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "440300",
                "name": "深圳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "440303",
                        "name": "罗湖区"
                    },
                    {
                        "spell": "F",
                        "code": "440304",
                        "name": "福田区"
                    },
                    {
                        "spell": "N",
                        "code": "440305",
                        "name": "南山区"
                    },
                    {
                        "spell": "B",
                        "code": "440306",
                        "name": "宝安区"
                    },
                    {
                        "spell": "L",
                        "code": "440307",
                        "name": "龙岗区"
                    },
                    {
                        "spell": "Y",
                        "code": "440308",
                        "name": "盐田区"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "440400",
                "name": "珠海市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "440402",
                        "name": "香洲区"
                    },
                    {
                        "spell": "D",
                        "code": "440403",
                        "name": "斗门区"
                    },
                    {
                        "spell": "J",
                        "code": "440404",
                        "name": "金湾区"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "440500",
                "name": "汕头市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "440507",
                        "name": "龙湖区"
                    },
                    {
                        "spell": "J",
                        "code": "440511",
                        "name": "金平区"
                    },
                    {
                        "spell": "H",
                        "code": "440512",
                        "name": "濠江区"
                    },
                    {
                        "spell": "C",
                        "code": "440513",
                        "name": "潮阳区"
                    },
                    {
                        "spell": "C",
                        "code": "440514",
                        "name": "潮南区"
                    },
                    {
                        "spell": "C",
                        "code": "440515",
                        "name": "澄海区"
                    },
                    {
                        "spell": "N",
                        "code": "440523",
                        "name": "南澳县"
                    }
                ]
            },
            {
                "spell": "F",
                "code": "440600",
                "name": "佛山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "440604",
                        "name": "禅城区"
                    },
                    {
                        "spell": "N",
                        "code": "440605",
                        "name": "南海区"
                    },
                    {
                        "spell": "S",
                        "code": "440606",
                        "name": "顺德区"
                    },
                    {
                        "spell": "S",
                        "code": "440607",
                        "name": "三水区"
                    },
                    {
                        "spell": "G",
                        "code": "440608",
                        "name": "高明区"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "440700",
                "name": "江门市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "P",
                        "code": "440703",
                        "name": "蓬江区"
                    },
                    {
                        "spell": "J",
                        "code": "440704",
                        "name": "江海区"
                    },
                    {
                        "spell": "X",
                        "code": "440705",
                        "name": "新会区"
                    },
                    {
                        "spell": "T",
                        "code": "440781",
                        "name": "台山市"
                    },
                    {
                        "spell": "K",
                        "code": "440783",
                        "name": "开平市"
                    },
                    {
                        "spell": "H",
                        "code": "440784",
                        "name": "鹤山市"
                    },
                    {
                        "spell": "E",
                        "code": "440785",
                        "name": "恩平市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "440800",
                "name": "湛江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "440802",
                        "name": "赤坎区"
                    },
                    {
                        "spell": "X",
                        "code": "440803",
                        "name": "霞山区"
                    },
                    {
                        "spell": "P",
                        "code": "440804",
                        "name": "坡头区"
                    },
                    {
                        "spell": "M",
                        "code": "440811",
                        "name": "麻章区"
                    },
                    {
                        "spell": "S",
                        "code": "440823",
                        "name": "遂溪县"
                    },
                    {
                        "spell": "X",
                        "code": "440825",
                        "name": "徐闻县"
                    },
                    {
                        "spell": "L",
                        "code": "440881",
                        "name": "廉江市"
                    },
                    {
                        "spell": "L",
                        "code": "440882",
                        "name": "雷州市"
                    },
                    {
                        "spell": "W",
                        "code": "440883",
                        "name": "吴川市"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "440900",
                "name": "茂名市",
                "list": [
                    {
                        "spell": "S",
                        "code": "440901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "M",
                        "code": "440902",
                        "name": "茂南区"
                    },
                    {
                        "spell": "M",
                        "code": "440903",
                        "name": "茂港区"
                    },
                    {
                        "spell": "D",
                        "code": "440923",
                        "name": "电白县"
                    },
                    {
                        "spell": "G",
                        "code": "440981",
                        "name": "高州市"
                    },
                    {
                        "spell": "H",
                        "code": "440982",
                        "name": "化州市"
                    },
                    {
                        "spell": "X",
                        "code": "440983",
                        "name": "信宜市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "441200",
                "name": "肇庆市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "441202",
                        "name": "端州区"
                    },
                    {
                        "spell": "D",
                        "code": "441203",
                        "name": "鼎湖区"
                    },
                    {
                        "spell": "G",
                        "code": "441223",
                        "name": "广宁县"
                    },
                    {
                        "spell": "H",
                        "code": "441224",
                        "name": "怀集县"
                    },
                    {
                        "spell": "F",
                        "code": "441225",
                        "name": "封开县"
                    },
                    {
                        "spell": "D",
                        "code": "441226",
                        "name": "德庆县"
                    },
                    {
                        "spell": "G",
                        "code": "441283",
                        "name": "高要市"
                    },
                    {
                        "spell": "S",
                        "code": "441284",
                        "name": "四会市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "441300",
                "name": "惠州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "441302",
                        "name": "惠城区"
                    },
                    {
                        "spell": "H",
                        "code": "441303",
                        "name": "惠阳区"
                    },
                    {
                        "spell": "B",
                        "code": "441322",
                        "name": "博罗县"
                    },
                    {
                        "spell": "H",
                        "code": "441323",
                        "name": "惠东县"
                    },
                    {
                        "spell": "L",
                        "code": "441324",
                        "name": "龙门县"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "441400",
                "name": "梅州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "M",
                        "code": "441402",
                        "name": "梅江区"
                    },
                    {
                        "spell": "M",
                        "code": "441421",
                        "name": "梅县"
                    },
                    {
                        "spell": "D",
                        "code": "441422",
                        "name": "大埔县"
                    },
                    {
                        "spell": "F",
                        "code": "441423",
                        "name": "丰顺县"
                    },
                    {
                        "spell": "W",
                        "code": "441424",
                        "name": "五华县"
                    },
                    {
                        "spell": "P",
                        "code": "441426",
                        "name": "平远县"
                    },
                    {
                        "spell": "J",
                        "code": "441427",
                        "name": "蕉岭县"
                    },
                    {
                        "spell": "X",
                        "code": "441481",
                        "name": "兴宁市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "441500",
                "name": "汕尾市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "441502",
                        "name": "城区"
                    },
                    {
                        "spell": "H",
                        "code": "441521",
                        "name": "海丰县"
                    },
                    {
                        "spell": "L",
                        "code": "441523",
                        "name": "陆河县"
                    },
                    {
                        "spell": "L",
                        "code": "441581",
                        "name": "陆丰市"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "441600",
                "name": "河源市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "441602",
                        "name": "源城区"
                    },
                    {
                        "spell": "Z",
                        "code": "441621",
                        "name": "紫金县"
                    },
                    {
                        "spell": "L",
                        "code": "441622",
                        "name": "龙川县"
                    },
                    {
                        "spell": "L",
                        "code": "441623",
                        "name": "连平县"
                    },
                    {
                        "spell": "H",
                        "code": "441624",
                        "name": "和平县"
                    },
                    {
                        "spell": "D",
                        "code": "441625",
                        "name": "东源县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "441700",
                "name": "阳江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "441702",
                        "name": "江城区"
                    },
                    {
                        "spell": "Y",
                        "code": "441721",
                        "name": "阳西县"
                    },
                    {
                        "spell": "Y",
                        "code": "441723",
                        "name": "阳东县"
                    },
                    {
                        "spell": "Y",
                        "code": "441781",
                        "name": "阳春市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "441800",
                "name": "清远市",
                "list": [
                    {
                        "spell": "S",
                        "code": "441801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "441802",
                        "name": "清城区"
                    },
                    {
                        "spell": "F",
                        "code": "441821",
                        "name": "佛冈县"
                    },
                    {
                        "spell": "Y",
                        "code": "441823",
                        "name": "阳山县"
                    },
                    {
                        "spell": "L",
                        "code": "441825",
                        "name": "连山壮族瑶族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "441826",
                        "name": "连南瑶族自治县"
                    },
                    {
                        "spell": "Q",
                        "code": "441827",
                        "name": "清新县"
                    },
                    {
                        "spell": "Y",
                        "code": "441881",
                        "name": "英德市"
                    },
                    {
                        "spell": "L",
                        "code": "441882",
                        "name": "连州市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "441900",
                "name": "东莞市",
                "list": []
            },
            {
                "spell": "Z",
                "code": "442000",
                "name": "中山市",
                "list": []
            },
            {
                "spell": "C",
                "code": "445100",
                "name": "潮州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "445101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "445102",
                        "name": "湘桥区"
                    },
                    {
                        "spell": "C",
                        "code": "445121",
                        "name": "潮安县"
                    },
                    {
                        "spell": "R",
                        "code": "445122",
                        "name": "饶平县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "445200",
                "name": "揭阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "445201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "R",
                        "code": "445202",
                        "name": "榕城区"
                    },
                    {
                        "spell": "J",
                        "code": "445221",
                        "name": "揭东县"
                    },
                    {
                        "spell": "J",
                        "code": "445222",
                        "name": "揭西县"
                    },
                    {
                        "spell": "H",
                        "code": "445224",
                        "name": "惠来县"
                    },
                    {
                        "spell": "P",
                        "code": "445281",
                        "name": "普宁市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "445300",
                "name": "云浮市",
                "list": [
                    {
                        "spell": "S",
                        "code": "445301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "445302",
                        "name": "云城区"
                    },
                    {
                        "spell": "X",
                        "code": "445321",
                        "name": "新兴县"
                    },
                    {
                        "spell": "Y",
                        "code": "445322",
                        "name": "郁南县"
                    },
                    {
                        "spell": "Y",
                        "code": "445323",
                        "name": "云安县"
                    },
                    {
                        "spell": "L",
                        "code": "445381",
                        "name": "罗定市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "G",
        "code": "450000",
        "name": "广西壮族自治区",
        "list": [
            {
                "spell": "N",
                "code": "450100",
                "name": "南宁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "450102",
                        "name": "兴宁区"
                    },
                    {
                        "spell": "Q",
                        "code": "450103",
                        "name": "青秀区"
                    },
                    {
                        "spell": "J",
                        "code": "450105",
                        "name": "江南区"
                    },
                    {
                        "spell": "X",
                        "code": "450107",
                        "name": "西乡塘区"
                    },
                    {
                        "spell": "L",
                        "code": "450108",
                        "name": "良庆区"
                    },
                    {
                        "spell": "Y",
                        "code": "450109",
                        "name": "邕宁区"
                    },
                    {
                        "spell": "W",
                        "code": "450122",
                        "name": "武鸣县"
                    },
                    {
                        "spell": "L",
                        "code": "450123",
                        "name": "隆安县"
                    },
                    {
                        "spell": "M",
                        "code": "450124",
                        "name": "马山县"
                    },
                    {
                        "spell": "S",
                        "code": "450125",
                        "name": "上林县"
                    },
                    {
                        "spell": "B",
                        "code": "450126",
                        "name": "宾阳县"
                    },
                    {
                        "spell": "H",
                        "code": "450127",
                        "name": "横县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "450200",
                "name": "柳州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "450202",
                        "name": "城中区"
                    },
                    {
                        "spell": "Y",
                        "code": "450203",
                        "name": "鱼峰区"
                    },
                    {
                        "spell": "L",
                        "code": "450204",
                        "name": "柳南区"
                    },
                    {
                        "spell": "L",
                        "code": "450205",
                        "name": "柳北区"
                    },
                    {
                        "spell": "L",
                        "code": "450221",
                        "name": "柳江县"
                    },
                    {
                        "spell": "L",
                        "code": "450222",
                        "name": "柳城县"
                    },
                    {
                        "spell": "L",
                        "code": "450223",
                        "name": "鹿寨县"
                    },
                    {
                        "spell": "R",
                        "code": "450224",
                        "name": "融安县"
                    },
                    {
                        "spell": "R",
                        "code": "450225",
                        "name": "融水苗族自治县"
                    },
                    {
                        "spell": "S",
                        "code": "450226",
                        "name": "三江侗族自治县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "450300",
                "name": "桂林市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "450302",
                        "name": "秀峰区"
                    },
                    {
                        "spell": "D",
                        "code": "450303",
                        "name": "叠彩区"
                    },
                    {
                        "spell": "X",
                        "code": "450304",
                        "name": "象山区"
                    },
                    {
                        "spell": "Q",
                        "code": "450305",
                        "name": "七星区"
                    },
                    {
                        "spell": "Y",
                        "code": "450311",
                        "name": "雁山区"
                    },
                    {
                        "spell": "Y",
                        "code": "450321",
                        "name": "阳朔县"
                    },
                    {
                        "spell": "L",
                        "code": "450322",
                        "name": "临桂县"
                    },
                    {
                        "spell": "L",
                        "code": "450323",
                        "name": "灵川县"
                    },
                    {
                        "spell": "Q",
                        "code": "450324",
                        "name": "全州县"
                    },
                    {
                        "spell": "X",
                        "code": "450325",
                        "name": "兴安县"
                    },
                    {
                        "spell": "Y",
                        "code": "450326",
                        "name": "永福县"
                    },
                    {
                        "spell": "G",
                        "code": "450327",
                        "name": "灌阳县"
                    },
                    {
                        "spell": "L",
                        "code": "450328",
                        "name": "龙胜各族自治县"
                    },
                    {
                        "spell": "Z",
                        "code": "450329",
                        "name": "资源县"
                    },
                    {
                        "spell": "P",
                        "code": "450330",
                        "name": "平乐县"
                    },
                    {
                        "spell": "L",
                        "code": "450331",
                        "name": "荔蒲县"
                    },
                    {
                        "spell": "G",
                        "code": "450332",
                        "name": "恭城瑶族自治县"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "450400",
                "name": "梧州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "450403",
                        "name": "万秀区"
                    },
                    {
                        "spell": "D",
                        "code": "450404",
                        "name": "蝶山区"
                    },
                    {
                        "spell": "C",
                        "code": "450405",
                        "name": "长洲区"
                    },
                    {
                        "spell": "C",
                        "code": "450421",
                        "name": "苍梧县"
                    },
                    {
                        "spell": "T",
                        "code": "450422",
                        "name": "藤县"
                    },
                    {
                        "spell": "M",
                        "code": "450423",
                        "name": "蒙山县"
                    },
                    {
                        "spell": "C",
                        "code": "450481",
                        "name": "岑溪市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "450500",
                "name": "北海市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "450502",
                        "name": "海城区"
                    },
                    {
                        "spell": "Y",
                        "code": "450503",
                        "name": "银海区"
                    },
                    {
                        "spell": "T",
                        "code": "450512",
                        "name": "铁山港区"
                    },
                    {
                        "spell": "H",
                        "code": "450521",
                        "name": "合浦县"
                    }
                ]
            },
            {
                "spell": "F",
                "code": "450600",
                "name": "防城港市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "450602",
                        "name": "港口区"
                    },
                    {
                        "spell": "F",
                        "code": "450603",
                        "name": "防城区"
                    },
                    {
                        "spell": "S",
                        "code": "450621",
                        "name": "上思县"
                    },
                    {
                        "spell": "D",
                        "code": "450681",
                        "name": "东兴市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "450700",
                "name": "钦州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "450702",
                        "name": "钦南区"
                    },
                    {
                        "spell": "Q",
                        "code": "450703",
                        "name": "钦北区"
                    },
                    {
                        "spell": "L",
                        "code": "450721",
                        "name": "灵山县"
                    },
                    {
                        "spell": "P",
                        "code": "450722",
                        "name": "浦北县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "450800",
                "name": "贵港市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "450802",
                        "name": "港北区"
                    },
                    {
                        "spell": "G",
                        "code": "450803",
                        "name": "港南区"
                    },
                    {
                        "spell": "T",
                        "code": "450804",
                        "name": "覃塘区"
                    },
                    {
                        "spell": "P",
                        "code": "450821",
                        "name": "平南县"
                    },
                    {
                        "spell": "G",
                        "code": "450881",
                        "name": "桂平市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "450900",
                "name": "玉林市",
                "list": [
                    {
                        "spell": "S",
                        "code": "450901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "450902",
                        "name": "玉州区"
                    },
                    {
                        "spell": "R",
                        "code": "450921",
                        "name": "容县"
                    },
                    {
                        "spell": "L",
                        "code": "450922",
                        "name": "陆川县"
                    },
                    {
                        "spell": "B",
                        "code": "450923",
                        "name": "博白县"
                    },
                    {
                        "spell": "X",
                        "code": "450924",
                        "name": "兴业县"
                    },
                    {
                        "spell": "B",
                        "code": "450981",
                        "name": "北流市"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "451000",
                "name": "百色市",
                "list": [
                    {
                        "spell": "1",
                        "code": "451001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "451002",
                        "name": "右江区"
                    },
                    {
                        "spell": "T",
                        "code": "451021",
                        "name": "田阳县"
                    },
                    {
                        "spell": "T",
                        "code": "451022",
                        "name": "田东县"
                    },
                    {
                        "spell": "P",
                        "code": "451023",
                        "name": "平果县"
                    },
                    {
                        "spell": "D",
                        "code": "451024",
                        "name": "德保县"
                    },
                    {
                        "spell": "J",
                        "code": "451025",
                        "name": "靖西县"
                    },
                    {
                        "spell": "N",
                        "code": "451026",
                        "name": "那坡县"
                    },
                    {
                        "spell": "L",
                        "code": "451027",
                        "name": "凌云县"
                    },
                    {
                        "spell": "L",
                        "code": "451028",
                        "name": "乐业县"
                    },
                    {
                        "spell": "T",
                        "code": "451029",
                        "name": "田林县"
                    },
                    {
                        "spell": "X",
                        "code": "451030",
                        "name": "西林县"
                    },
                    {
                        "spell": "L",
                        "code": "451031",
                        "name": "隆林各族自治县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "451100",
                "name": "贺州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "451101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "451102",
                        "name": "八步区"
                    },
                    {
                        "spell": "Z",
                        "code": "451121",
                        "name": "昭平县"
                    },
                    {
                        "spell": "Z",
                        "code": "451122",
                        "name": "钟山县"
                    },
                    {
                        "spell": "F",
                        "code": "451123",
                        "name": "富川瑶族自治县"
                    },
                    {
                        "spell": "P",
                        "code": "451119",
                        "name": "平桂管理区"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "451200",
                "name": "河池市",
                "list": [
                    {
                        "spell": "1",
                        "code": "451201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "451202",
                        "name": "金城江区"
                    },
                    {
                        "spell": "N",
                        "code": "451221",
                        "name": "南丹县"
                    },
                    {
                        "spell": "T",
                        "code": "451222",
                        "name": "天峨县"
                    },
                    {
                        "spell": "F",
                        "code": "451223",
                        "name": "凤山县"
                    },
                    {
                        "spell": "D",
                        "code": "451224",
                        "name": "东兰县"
                    },
                    {
                        "spell": "L",
                        "code": "451225",
                        "name": "罗城仫佬族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "451226",
                        "name": "环江毛南族自治县"
                    },
                    {
                        "spell": "B",
                        "code": "451227",
                        "name": "巴马瑶族自治县"
                    },
                    {
                        "spell": "D",
                        "code": "451228",
                        "name": "都安瑶族自治县"
                    },
                    {
                        "spell": "D",
                        "code": "451229",
                        "name": "大化瑶族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "451281",
                        "name": "宜州市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "451300",
                "name": "来宾市",
                "list": [
                    {
                        "spell": "1",
                        "code": "451301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "451302",
                        "name": "兴宾区"
                    },
                    {
                        "spell": "X",
                        "code": "451321",
                        "name": "忻城县"
                    },
                    {
                        "spell": "X",
                        "code": "451322",
                        "name": "象州县"
                    },
                    {
                        "spell": "W",
                        "code": "451323",
                        "name": "武宣县"
                    },
                    {
                        "spell": "J",
                        "code": "451324",
                        "name": "金秀瑶族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "451381",
                        "name": "合山市"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "451400",
                "name": "崇左市",
                "list": [
                    {
                        "spell": "1",
                        "code": "451401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "451402",
                        "name": "江洲区"
                    },
                    {
                        "spell": "F",
                        "code": "451421",
                        "name": "扶绥县"
                    },
                    {
                        "spell": "N",
                        "code": "451422",
                        "name": "宁明县"
                    },
                    {
                        "spell": "L",
                        "code": "451423",
                        "name": "龙州县"
                    },
                    {
                        "spell": "D",
                        "code": "451424",
                        "name": "大新县"
                    },
                    {
                        "spell": "T",
                        "code": "451425",
                        "name": "天等县"
                    },
                    {
                        "spell": "P",
                        "code": "451481",
                        "name": "凭祥市"
                    }
                ]
            }
        ]
    },
    {
        "spell": "H",
        "code": "460000",
        "name": "海南省",
        "list": [
            {
                "spell": "H",
                "code": "460100",
                "name": "海口市",
                "list": [
                    {
                        "spell": "S",
                        "code": "460101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "460105",
                        "name": "秀英区"
                    },
                    {
                        "spell": "L",
                        "code": "460106",
                        "name": "龙华区"
                    },
                    {
                        "spell": "Q",
                        "code": "460107",
                        "name": "琼山区"
                    },
                    {
                        "spell": "M",
                        "code": "460108",
                        "name": "美兰区"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "460200",
                "name": "三亚市",
                "list": [
                    {
                        "spell": "S",
                        "code": "460201",
                        "name": "市辖区"
                    }
                ]
            },
            {
                "spell": "s",
                "code": "469000",
                "name": "省直辖县级行政区划",
                "list": [
                    {
                        "spell": "W",
                        "code": "469001",
                        "name": "五指山市"
                    },
                    {
                        "spell": "Q",
                        "code": "469002",
                        "name": "琼海市"
                    },
                    {
                        "spell": "D",
                        "code": "469003",
                        "name": "儋州市"
                    },
                    {
                        "spell": "W",
                        "code": "469005",
                        "name": "文昌市"
                    },
                    {
                        "spell": "W",
                        "code": "469006",
                        "name": "万宁市"
                    },
                    {
                        "spell": "D",
                        "code": "469007",
                        "name": "东方市"
                    },
                    {
                        "spell": "D",
                        "code": "469021",
                        "name": "定安县"
                    },
                    {
                        "spell": "T",
                        "code": "469022",
                        "name": "屯昌县"
                    },
                    {
                        "spell": "C",
                        "code": "469023",
                        "name": "澄迈县"
                    },
                    {
                        "spell": "L",
                        "code": "469024",
                        "name": "临高县"
                    },
                    {
                        "spell": "B",
                        "code": "469025",
                        "name": "白沙黎族自治县"
                    },
                    {
                        "spell": "C",
                        "code": "469026",
                        "name": "昌江黎族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "469027",
                        "name": "乐东黎族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "469028",
                        "name": "陵水黎族自治县"
                    },
                    {
                        "spell": "B",
                        "code": "469029",
                        "name": "保亭黎族苗族自治县"
                    },
                    {
                        "spell": "Q",
                        "code": "469030",
                        "name": "琼中黎族苗族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "469031",
                        "name": "西沙群岛"
                    },
                    {
                        "spell": "N",
                        "code": "469032",
                        "name": "南沙群岛"
                    },
                    {
                        "spell": "Z",
                        "code": "469033",
                        "name": "中沙群岛的岛礁及其海域"
                    }
                ]
            }
        ]
    },
    {
        "spell": "C",
        "code": "500000",
        "name": "重庆市",
        "list": [
            {
                "spell": "S",
                "code": "500100",
                "name": "市辖区",
                "list": [
                    {
                        "spell": "W",
                        "code": "500101",
                        "name": "万州区"
                    },
                    {
                        "spell": "F",
                        "code": "500102",
                        "name": "涪陵区"
                    },
                    {
                        "spell": "Y",
                        "code": "500103",
                        "name": "渝中区"
                    },
                    {
                        "spell": "D",
                        "code": "500104",
                        "name": "大渡口区"
                    },
                    {
                        "spell": "J",
                        "code": "500105",
                        "name": "江北区"
                    },
                    {
                        "spell": "S",
                        "code": "500106",
                        "name": "沙坪坝区"
                    },
                    {
                        "spell": "J",
                        "code": "500107",
                        "name": "九龙坡区"
                    },
                    {
                        "spell": "N",
                        "code": "500108",
                        "name": "南岸区"
                    },
                    {
                        "spell": "B",
                        "code": "500109",
                        "name": "北碚区"
                    },
                    {
                        "spell": "W",
                        "code": "500110",
                        "name": "万盛区"
                    },
                    {
                        "spell": "S",
                        "code": "500111",
                        "name": "双桥区"
                    },
                    {
                        "spell": "Y",
                        "code": "500112",
                        "name": "渝北区"
                    },
                    {
                        "spell": "B",
                        "code": "500113",
                        "name": "巴南区"
                    },
                    {
                        "spell": "Q",
                        "code": "500114",
                        "name": "黔江区"
                    },
                    {
                        "spell": "C",
                        "code": "500115",
                        "name": "长寿区"
                    },
                    {
                        "spell": "J",
                        "code": "500116",
                        "name": "江津区"
                    },
                    {
                        "spell": "H",
                        "code": "500117",
                        "name": "合川区"
                    },
                    {
                        "spell": "Y",
                        "code": "500118",
                        "name": "永川区"
                    },
                    {
                        "spell": "N",
                        "code": "500119",
                        "name": "南川区"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "500200",
                "name": "县",
                "list": [
                    {
                        "spell": "Q",
                        "code": "500222",
                        "name": "綦江县"
                    },
                    {
                        "spell": "T",
                        "code": "500223",
                        "name": "潼南县"
                    },
                    {
                        "spell": "T",
                        "code": "500224",
                        "name": "铜梁县"
                    },
                    {
                        "spell": "D",
                        "code": "500225",
                        "name": "大足县"
                    },
                    {
                        "spell": "R",
                        "code": "500226",
                        "name": "荣昌县"
                    },
                    {
                        "spell": "B",
                        "code": "500227",
                        "name": "璧山县"
                    },
                    {
                        "spell": "L",
                        "code": "500228",
                        "name": "梁平县"
                    },
                    {
                        "spell": "C",
                        "code": "500229",
                        "name": "城口县"
                    },
                    {
                        "spell": "F",
                        "code": "500230",
                        "name": "丰都县"
                    },
                    {
                        "spell": "D",
                        "code": "500231",
                        "name": "垫江县"
                    },
                    {
                        "spell": "W",
                        "code": "500232",
                        "name": "武隆县"
                    },
                    {
                        "spell": "Z",
                        "code": "500233",
                        "name": "忠县"
                    },
                    {
                        "spell": "K",
                        "code": "500234",
                        "name": "开县"
                    },
                    {
                        "spell": "Y",
                        "code": "500235",
                        "name": "云阳县"
                    },
                    {
                        "spell": "F",
                        "code": "500236",
                        "name": "奉节县"
                    },
                    {
                        "spell": "W",
                        "code": "500237",
                        "name": "巫山县"
                    },
                    {
                        "spell": "W",
                        "code": "500238",
                        "name": "巫溪县"
                    },
                    {
                        "spell": "S",
                        "code": "500240",
                        "name": "石柱土家族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "500241",
                        "name": "秀山土家族苗族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "500242",
                        "name": "酉阳土家族苗族自治县"
                    },
                    {
                        "spell": "P",
                        "code": "500243",
                        "name": "彭水苗族土家族自治县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "S",
        "code": "510000",
        "name": "四川省",
        "list": [
            {
                "spell": "C",
                "code": "510100",
                "name": "成都市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "510104",
                        "name": "锦江区"
                    },
                    {
                        "spell": "Q",
                        "code": "510105",
                        "name": "青羊区"
                    },
                    {
                        "spell": "J",
                        "code": "510106",
                        "name": "金牛区"
                    },
                    {
                        "spell": "W",
                        "code": "510107",
                        "name": "武侯区"
                    },
                    {
                        "spell": "C",
                        "code": "510108",
                        "name": "成华区"
                    },
                    {
                        "spell": "L",
                        "code": "510112",
                        "name": "龙泉驿区"
                    },
                    {
                        "spell": "Q",
                        "code": "510113",
                        "name": "青白江区"
                    },
                    {
                        "spell": "X",
                        "code": "510114",
                        "name": "新都区"
                    },
                    {
                        "spell": "W",
                        "code": "510115",
                        "name": "温江区"
                    },
                    {
                        "spell": "J",
                        "code": "510121",
                        "name": "金堂县"
                    },
                    {
                        "spell": "S",
                        "code": "510122",
                        "name": "双流县"
                    },
                    {
                        "spell": "P",
                        "code": "510124",
                        "name": "郫县"
                    },
                    {
                        "spell": "D",
                        "code": "510129",
                        "name": "大邑县"
                    },
                    {
                        "spell": "P",
                        "code": "510131",
                        "name": "蒲江县"
                    },
                    {
                        "spell": "X",
                        "code": "510132",
                        "name": "新津县"
                    },
                    {
                        "spell": "D",
                        "code": "510181",
                        "name": "都江堰市"
                    },
                    {
                        "spell": "P",
                        "code": "510182",
                        "name": "彭州市"
                    },
                    {
                        "spell": "Q",
                        "code": "510183",
                        "name": "邛崃市"
                    },
                    {
                        "spell": "C",
                        "code": "510184",
                        "name": "崇州市"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "510300",
                "name": "自贡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "510302",
                        "name": "自流井区"
                    },
                    {
                        "spell": "G",
                        "code": "510303",
                        "name": "贡井区"
                    },
                    {
                        "spell": "D",
                        "code": "510304",
                        "name": "大安区"
                    },
                    {
                        "spell": "Y",
                        "code": "510311",
                        "name": "沿滩区"
                    },
                    {
                        "spell": "R",
                        "code": "510321",
                        "name": "荣县"
                    },
                    {
                        "spell": "F",
                        "code": "510322",
                        "name": "富顺县"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "510400",
                "name": "攀枝花市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "510402",
                        "name": "东区"
                    },
                    {
                        "spell": "X",
                        "code": "510403",
                        "name": "西区"
                    },
                    {
                        "spell": "R",
                        "code": "510411",
                        "name": "仁和区"
                    },
                    {
                        "spell": "M",
                        "code": "510421",
                        "name": "米易县"
                    },
                    {
                        "spell": "Y",
                        "code": "510422",
                        "name": "盐边县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "510500",
                "name": "泸州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "510502",
                        "name": "江阳区"
                    },
                    {
                        "spell": "N",
                        "code": "510503",
                        "name": "纳溪区"
                    },
                    {
                        "spell": "L",
                        "code": "510504",
                        "name": "龙马潭区"
                    },
                    {
                        "spell": "L",
                        "code": "510521",
                        "name": "泸县"
                    },
                    {
                        "spell": "H",
                        "code": "510522",
                        "name": "合江县"
                    },
                    {
                        "spell": "X",
                        "code": "510524",
                        "name": "叙永县"
                    },
                    {
                        "spell": "G",
                        "code": "510525",
                        "name": "古蔺县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "510600",
                "name": "德阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "510603",
                        "name": "旌阳区"
                    },
                    {
                        "spell": "Z",
                        "code": "510623",
                        "name": "中江县"
                    },
                    {
                        "spell": "L",
                        "code": "510626",
                        "name": "罗江县"
                    },
                    {
                        "spell": "G",
                        "code": "510681",
                        "name": "广汉市"
                    },
                    {
                        "spell": "S",
                        "code": "510682",
                        "name": "什邡市"
                    },
                    {
                        "spell": "J",
                        "code": "510683",
                        "name": "绵竹市"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "510700",
                "name": "绵阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "F",
                        "code": "510703",
                        "name": "涪城区"
                    },
                    {
                        "spell": "Y",
                        "code": "510704",
                        "name": "游仙区"
                    },
                    {
                        "spell": "S",
                        "code": "510722",
                        "name": "三台县"
                    },
                    {
                        "spell": "Y",
                        "code": "510723",
                        "name": "盐亭县"
                    },
                    {
                        "spell": "A",
                        "code": "510724",
                        "name": "安县"
                    },
                    {
                        "spell": "Z",
                        "code": "510725",
                        "name": "梓潼县"
                    },
                    {
                        "spell": "B",
                        "code": "510726",
                        "name": "北川羌族自治县"
                    },
                    {
                        "spell": "P",
                        "code": "510727",
                        "name": "平武县"
                    },
                    {
                        "spell": "J",
                        "code": "510781",
                        "name": "江油市"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "510800",
                "name": "广元市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "511002",
                        "name": "市中区"
                    },
                    {
                        "spell": "Y",
                        "code": "510811",
                        "name": "元坝区"
                    },
                    {
                        "spell": "C",
                        "code": "510812",
                        "name": "朝天区"
                    },
                    {
                        "spell": "W",
                        "code": "510821",
                        "name": "旺苍县"
                    },
                    {
                        "spell": "Q",
                        "code": "510822",
                        "name": "青川县"
                    },
                    {
                        "spell": "J",
                        "code": "510823",
                        "name": "剑阁县"
                    },
                    {
                        "spell": "C",
                        "code": "510824",
                        "name": "苍溪县"
                    },
                    {
                        "spell": "L",
                        "code": "510802",
                        "name": "利州区"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "510900",
                "name": "遂宁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "510901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "510903",
                        "name": "船山区"
                    },
                    {
                        "spell": "A",
                        "code": "510904",
                        "name": "安居区"
                    },
                    {
                        "spell": "P",
                        "code": "510921",
                        "name": "蓬溪县"
                    },
                    {
                        "spell": "S",
                        "code": "510922",
                        "name": "射洪县"
                    },
                    {
                        "spell": "D",
                        "code": "510923",
                        "name": "大英县"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "511000",
                "name": "内江市",
                "list": [
                    {
                        "spell": "S",
                        "code": "511001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "511002",
                        "name": "市中区"
                    },
                    {
                        "spell": "D",
                        "code": "511011",
                        "name": "东兴区"
                    },
                    {
                        "spell": "W",
                        "code": "511024",
                        "name": "威远县"
                    },
                    {
                        "spell": "Z",
                        "code": "511025",
                        "name": "资中县"
                    },
                    {
                        "spell": "L",
                        "code": "511028",
                        "name": "隆昌县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "511100",
                "name": "乐山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "511101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "511102",
                        "name": "市中区"
                    },
                    {
                        "spell": "S",
                        "code": "511111",
                        "name": "沙湾区"
                    },
                    {
                        "spell": "W",
                        "code": "511112",
                        "name": "五通桥区"
                    },
                    {
                        "spell": "J",
                        "code": "511113",
                        "name": "金口河区"
                    },
                    {
                        "spell": "Q",
                        "code": "511123",
                        "name": "犍为县"
                    },
                    {
                        "spell": "J",
                        "code": "511124",
                        "name": "井研县"
                    },
                    {
                        "spell": "J",
                        "code": "511126",
                        "name": "夹江县"
                    },
                    {
                        "spell": "M",
                        "code": "511129",
                        "name": "沐川县"
                    },
                    {
                        "spell": "E",
                        "code": "511132",
                        "name": "峨边彝族自治县"
                    },
                    {
                        "spell": "M",
                        "code": "511133",
                        "name": "马边彝族自治县"
                    },
                    {
                        "spell": "E",
                        "code": "511181",
                        "name": "峨眉山市"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "511300",
                "name": "南充市",
                "list": [
                    {
                        "spell": "S",
                        "code": "511301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "511302",
                        "name": "顺庆区"
                    },
                    {
                        "spell": "G",
                        "code": "511303",
                        "name": "高坪区"
                    },
                    {
                        "spell": "J",
                        "code": "511304",
                        "name": "嘉陵区"
                    },
                    {
                        "spell": "N",
                        "code": "511321",
                        "name": "南部县"
                    },
                    {
                        "spell": "Y",
                        "code": "511322",
                        "name": "营山县"
                    },
                    {
                        "spell": "P",
                        "code": "511323",
                        "name": "蓬安县"
                    },
                    {
                        "spell": "Y",
                        "code": "511324",
                        "name": "仪陇县"
                    },
                    {
                        "spell": "X",
                        "code": "511325",
                        "name": "西充县"
                    },
                    {
                        "spell": "L",
                        "code": "511381",
                        "name": "阆中市"
                    }
                ]
            },
            {
                "spell": "M",
                "code": "511400",
                "name": "眉山市",
                "list": [
                    {
                        "spell": "1",
                        "code": "511401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "511402",
                        "name": "东坡区"
                    },
                    {
                        "spell": "R",
                        "code": "511421",
                        "name": "仁寿县"
                    },
                    {
                        "spell": "P",
                        "code": "511422",
                        "name": "彭山县"
                    },
                    {
                        "spell": "H",
                        "code": "511423",
                        "name": "洪雅县"
                    },
                    {
                        "spell": "D",
                        "code": "511424",
                        "name": "丹棱县"
                    },
                    {
                        "spell": "Q",
                        "code": "511425",
                        "name": "青神县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "511500",
                "name": "宜宾市",
                "list": [
                    {
                        "spell": "S",
                        "code": "511501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "511502",
                        "name": "翠屏区"
                    },
                    {
                        "spell": "Y",
                        "code": "511521",
                        "name": "宜宾县"
                    },
                    {
                        "spell": "N",
                        "code": "511522",
                        "name": "南溪县"
                    },
                    {
                        "spell": "J",
                        "code": "511523",
                        "name": "江安县"
                    },
                    {
                        "spell": "C",
                        "code": "511524",
                        "name": "长宁县"
                    },
                    {
                        "spell": "G",
                        "code": "511525",
                        "name": "高县"
                    },
                    {
                        "spell": "G",
                        "code": "511526",
                        "name": "珙县"
                    },
                    {
                        "spell": "J",
                        "code": "511527",
                        "name": "筠连县"
                    },
                    {
                        "spell": "X",
                        "code": "511528",
                        "name": "兴文县"
                    },
                    {
                        "spell": "P",
                        "code": "511529",
                        "name": "屏山县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "511600",
                "name": "广安市",
                "list": [
                    {
                        "spell": "S",
                        "code": "511601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "511602",
                        "name": "广安区"
                    },
                    {
                        "spell": "Y",
                        "code": "511621",
                        "name": "岳池县"
                    },
                    {
                        "spell": "W",
                        "code": "511622",
                        "name": "武胜县"
                    },
                    {
                        "spell": "L",
                        "code": "511623",
                        "name": "邻水县"
                    },
                    {
                        "spell": "H",
                        "code": "511681",
                        "name": "华蓥市"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "511700",
                "name": "达州市",
                "list": [
                    {
                        "spell": "1",
                        "code": "511701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "511702",
                        "name": "通川区"
                    },
                    {
                        "spell": "D",
                        "code": "511721",
                        "name": "达县"
                    },
                    {
                        "spell": "X",
                        "code": "511722",
                        "name": "宣汉县"
                    },
                    {
                        "spell": "K",
                        "code": "511723",
                        "name": "开江县"
                    },
                    {
                        "spell": "D",
                        "code": "511724",
                        "name": "大竹县"
                    },
                    {
                        "spell": "Q",
                        "code": "511725",
                        "name": "渠县"
                    },
                    {
                        "spell": "W",
                        "code": "511781",
                        "name": "万源市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "511800",
                "name": "雅安市",
                "list": [
                    {
                        "spell": "1",
                        "code": "511801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "511802",
                        "name": "雨城区"
                    },
                    {
                        "spell": "M",
                        "code": "511821",
                        "name": "名山县"
                    },
                    {
                        "spell": "Y",
                        "code": "511822",
                        "name": "荥经县"
                    },
                    {
                        "spell": "H",
                        "code": "511823",
                        "name": "汉源县"
                    },
                    {
                        "spell": "S",
                        "code": "511824",
                        "name": "石棉县"
                    },
                    {
                        "spell": "T",
                        "code": "511825",
                        "name": "天全县"
                    },
                    {
                        "spell": "L",
                        "code": "511826",
                        "name": "芦山县"
                    },
                    {
                        "spell": "B",
                        "code": "511827",
                        "name": "宝兴县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "511900",
                "name": "巴中市",
                "list": [
                    {
                        "spell": "1",
                        "code": "511901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "511902",
                        "name": "巴州区"
                    },
                    {
                        "spell": "T",
                        "code": "511921",
                        "name": "通江县"
                    },
                    {
                        "spell": "N",
                        "code": "511922",
                        "name": "南江县"
                    },
                    {
                        "spell": "P",
                        "code": "511923",
                        "name": "平昌县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "512000",
                "name": "资阳市",
                "list": [
                    {
                        "spell": "1",
                        "code": "512001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "512002",
                        "name": "雁江区"
                    },
                    {
                        "spell": "A",
                        "code": "512021",
                        "name": "安岳县"
                    },
                    {
                        "spell": "L",
                        "code": "512022",
                        "name": "乐至县"
                    },
                    {
                        "spell": "J",
                        "code": "512081",
                        "name": "简阳市"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "513200",
                "name": "阿坝藏族羌族自治州",
                "list": [
                    {
                        "spell": "W",
                        "code": "513221",
                        "name": "汶川县"
                    },
                    {
                        "spell": "L",
                        "code": "513222",
                        "name": "理县"
                    },
                    {
                        "spell": "M",
                        "code": "513223",
                        "name": "茂县"
                    },
                    {
                        "spell": "S",
                        "code": "513224",
                        "name": "松潘县"
                    },
                    {
                        "spell": "J",
                        "code": "513225",
                        "name": "九寨沟县"
                    },
                    {
                        "spell": "J",
                        "code": "513226",
                        "name": "金川县"
                    },
                    {
                        "spell": "X",
                        "code": "513227",
                        "name": "小金县"
                    },
                    {
                        "spell": "H",
                        "code": "513228",
                        "name": "黑水县"
                    },
                    {
                        "spell": "B",
                        "code": "513229",
                        "name": "马尔康县"
                    },
                    {
                        "spell": "Z",
                        "code": "513230",
                        "name": "壤塘县"
                    },
                    {
                        "spell": "A",
                        "code": "513231",
                        "name": "阿坝县"
                    },
                    {
                        "spell": "Z",
                        "code": "513232",
                        "name": "若尔盖县"
                    },
                    {
                        "spell": "H",
                        "code": "513233",
                        "name": "红原县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "513300",
                "name": "甘孜藏族自治州",
                "list": [
                    {
                        "spell": "K",
                        "code": "513321",
                        "name": "康定县"
                    },
                    {
                        "spell": "L",
                        "code": "513322",
                        "name": "泸定县"
                    },
                    {
                        "spell": "D",
                        "code": "513323",
                        "name": "丹巴县"
                    },
                    {
                        "spell": "J",
                        "code": "513324",
                        "name": "九龙县"
                    },
                    {
                        "spell": "Y",
                        "code": "513325",
                        "name": "雅江县"
                    },
                    {
                        "spell": "D",
                        "code": "513326",
                        "name": "道孚县"
                    },
                    {
                        "spell": "L",
                        "code": "513327",
                        "name": "炉霍县"
                    },
                    {
                        "spell": "G",
                        "code": "513328",
                        "name": "甘孜县"
                    },
                    {
                        "spell": "X",
                        "code": "513329",
                        "name": "新龙县"
                    },
                    {
                        "spell": "D",
                        "code": "513330",
                        "name": "德格县"
                    },
                    {
                        "spell": "B",
                        "code": "513331",
                        "name": "白玉县"
                    },
                    {
                        "spell": "S",
                        "code": "513332",
                        "name": "石渠县"
                    },
                    {
                        "spell": "S",
                        "code": "513333",
                        "name": "色达县"
                    },
                    {
                        "spell": "L",
                        "code": "513334",
                        "name": "理塘县"
                    },
                    {
                        "spell": "B",
                        "code": "513335",
                        "name": "巴塘县"
                    },
                    {
                        "spell": "X",
                        "code": "513336",
                        "name": "乡城县"
                    },
                    {
                        "spell": "D",
                        "code": "513337",
                        "name": "稻城县"
                    },
                    {
                        "spell": "D",
                        "code": "513338",
                        "name": "得荣县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "513400",
                "name": "凉山彝族自治州",
                "list": [
                    {
                        "spell": "X",
                        "code": "513401",
                        "name": "西昌市"
                    },
                    {
                        "spell": "M",
                        "code": "513422",
                        "name": "木里藏族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "513423",
                        "name": "盐源县"
                    },
                    {
                        "spell": "D",
                        "code": "513424",
                        "name": "德昌县"
                    },
                    {
                        "spell": "H",
                        "code": "513425",
                        "name": "会理县"
                    },
                    {
                        "spell": "H",
                        "code": "513426",
                        "name": "会东县"
                    },
                    {
                        "spell": "N",
                        "code": "513427",
                        "name": "宁南县"
                    },
                    {
                        "spell": "P",
                        "code": "513428",
                        "name": "普格县"
                    },
                    {
                        "spell": "B",
                        "code": "513429",
                        "name": "布拖县"
                    },
                    {
                        "spell": "J",
                        "code": "513430",
                        "name": "金阳县"
                    },
                    {
                        "spell": "Z",
                        "code": "513431",
                        "name": "昭觉县"
                    },
                    {
                        "spell": "X",
                        "code": "513432",
                        "name": "喜德县"
                    },
                    {
                        "spell": "M",
                        "code": "513433",
                        "name": "冕宁县"
                    },
                    {
                        "spell": "Y",
                        "code": "513434",
                        "name": "越西县"
                    },
                    {
                        "spell": "G",
                        "code": "513435",
                        "name": "甘洛县"
                    },
                    {
                        "spell": "M",
                        "code": "513436",
                        "name": "美姑县"
                    },
                    {
                        "spell": "L",
                        "code": "513437",
                        "name": "雷波县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "G",
        "code": "520000",
        "name": "贵州省",
        "list": [
            {
                "spell": "G",
                "code": "520100",
                "name": "贵阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "520101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "N",
                        "code": "520102",
                        "name": "南明区"
                    },
                    {
                        "spell": "Y",
                        "code": "520103",
                        "name": "云岩区"
                    },
                    {
                        "spell": "H",
                        "code": "520111",
                        "name": "花溪区"
                    },
                    {
                        "spell": "W",
                        "code": "520112",
                        "name": "乌当区"
                    },
                    {
                        "spell": "B",
                        "code": "520113",
                        "name": "白云区"
                    },
                    {
                        "spell": "X",
                        "code": "520114",
                        "name": "小河区"
                    },
                    {
                        "spell": "K",
                        "code": "520121",
                        "name": "开阳县"
                    },
                    {
                        "spell": "X",
                        "code": "520122",
                        "name": "息烽县"
                    },
                    {
                        "spell": "X",
                        "code": "520123",
                        "name": "修文县"
                    },
                    {
                        "spell": "Q",
                        "code": "520181",
                        "name": "清镇市"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "520200",
                "name": "六盘水市",
                "list": [
                    {
                        "spell": "Z",
                        "code": "520201",
                        "name": "钟山区"
                    },
                    {
                        "spell": "L",
                        "code": "520203",
                        "name": "六枝特区"
                    },
                    {
                        "spell": "S",
                        "code": "520221",
                        "name": "水城县"
                    },
                    {
                        "spell": "P",
                        "code": "520222",
                        "name": "盘县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "520300",
                "name": "遵义市",
                "list": [
                    {
                        "spell": "S",
                        "code": "520301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "520302",
                        "name": "红花岗区"
                    },
                    {
                        "spell": "H",
                        "code": "520303",
                        "name": "汇川区"
                    },
                    {
                        "spell": "Z",
                        "code": "520321",
                        "name": "遵义县"
                    },
                    {
                        "spell": "T",
                        "code": "520322",
                        "name": "桐梓县"
                    },
                    {
                        "spell": "S",
                        "code": "520323",
                        "name": "绥阳县"
                    },
                    {
                        "spell": "Z",
                        "code": "520324",
                        "name": "正安县"
                    },
                    {
                        "spell": "D",
                        "code": "520325",
                        "name": "道真仡佬族苗族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "520326",
                        "name": "务川仡佬族苗族自治县"
                    },
                    {
                        "spell": "F",
                        "code": "520327",
                        "name": "凤冈县"
                    },
                    {
                        "spell": "M",
                        "code": "520328",
                        "name": "湄潭县"
                    },
                    {
                        "spell": "Y",
                        "code": "520329",
                        "name": "余庆县"
                    },
                    {
                        "spell": "X",
                        "code": "520330",
                        "name": "习水县"
                    },
                    {
                        "spell": "C",
                        "code": "520381",
                        "name": "赤水市"
                    },
                    {
                        "spell": "R",
                        "code": "520382",
                        "name": "仁怀市"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "520400",
                "name": "安顺市",
                "list": [
                    {
                        "spell": "1",
                        "code": "520401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "520402",
                        "name": "西秀区"
                    },
                    {
                        "spell": "P",
                        "code": "520421",
                        "name": "平坝县"
                    },
                    {
                        "spell": "P",
                        "code": "520422",
                        "name": "普定县"
                    },
                    {
                        "spell": "Z",
                        "code": "520423",
                        "name": "镇宁布依族苗族自治县"
                    },
                    {
                        "spell": "G",
                        "code": "520424",
                        "name": "关岭布依族苗族自治县"
                    },
                    {
                        "spell": "Z",
                        "code": "520425",
                        "name": "紫云苗族布依族自治县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "522200",
                "name": "铜仁地区",
                "list": [
                    {
                        "spell": "T",
                        "code": "522201",
                        "name": "铜仁市"
                    },
                    {
                        "spell": "J",
                        "code": "522222",
                        "name": "江口县"
                    },
                    {
                        "spell": "Y",
                        "code": "522223",
                        "name": "玉屏侗族自治县"
                    },
                    {
                        "spell": "S",
                        "code": "522224",
                        "name": "石阡县"
                    },
                    {
                        "spell": "S",
                        "code": "522225",
                        "name": "思南县"
                    },
                    {
                        "spell": "Y",
                        "code": "522226",
                        "name": "印江土家族苗族自治县"
                    },
                    {
                        "spell": "D",
                        "code": "522227",
                        "name": "德江县"
                    },
                    {
                        "spell": "Y",
                        "code": "522228",
                        "name": "沿河土家族自治县"
                    },
                    {
                        "spell": "S",
                        "code": "522229",
                        "name": "松桃苗族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "522230",
                        "name": "万山特区"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "522300",
                "name": "黔西南布依族苗族自治州",
                "list": [
                    {
                        "spell": "X",
                        "code": "522301",
                        "name": "兴义市"
                    },
                    {
                        "spell": "X",
                        "code": "522322",
                        "name": "兴仁县"
                    },
                    {
                        "spell": "P",
                        "code": "522323",
                        "name": "普安县"
                    },
                    {
                        "spell": "Q",
                        "code": "522324",
                        "name": "晴隆县"
                    },
                    {
                        "spell": "Z",
                        "code": "522325",
                        "name": "贞丰县"
                    },
                    {
                        "spell": "W",
                        "code": "522326",
                        "name": "望谟县"
                    },
                    {
                        "spell": "C",
                        "code": "522327",
                        "name": "册亨县"
                    },
                    {
                        "spell": "A",
                        "code": "522328",
                        "name": "安龙县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "522400",
                "name": "毕节地区",
                "list": [
                    {
                        "spell": "B",
                        "code": "522401",
                        "name": "毕节市"
                    },
                    {
                        "spell": "D",
                        "code": "522422",
                        "name": "大方县"
                    },
                    {
                        "spell": "Q",
                        "code": "522423",
                        "name": "黔西县"
                    },
                    {
                        "spell": "J",
                        "code": "522424",
                        "name": "金沙县"
                    },
                    {
                        "spell": "Z",
                        "code": "522425",
                        "name": "织金县"
                    },
                    {
                        "spell": "N",
                        "code": "522426",
                        "name": "纳雍县"
                    },
                    {
                        "spell": "W",
                        "code": "522427",
                        "name": "威宁彝族回族苗族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "522428",
                        "name": "赫章县"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "522600",
                "name": "黔东南苗族侗族自治州",
                "list": [
                    {
                        "spell": "K",
                        "code": "522601",
                        "name": "凯里市"
                    },
                    {
                        "spell": "H",
                        "code": "522622",
                        "name": "黄平县"
                    },
                    {
                        "spell": "S",
                        "code": "522623",
                        "name": "施秉县"
                    },
                    {
                        "spell": "S",
                        "code": "522624",
                        "name": "三穗县"
                    },
                    {
                        "spell": "Z",
                        "code": "522625",
                        "name": "镇远县"
                    },
                    {
                        "spell": "C",
                        "code": "522626",
                        "name": "岑巩县"
                    },
                    {
                        "spell": "T",
                        "code": "522627",
                        "name": "天柱县"
                    },
                    {
                        "spell": "J",
                        "code": "522628",
                        "name": "锦屏县"
                    },
                    {
                        "spell": "J",
                        "code": "522629",
                        "name": "剑河县"
                    },
                    {
                        "spell": "T",
                        "code": "522630",
                        "name": "台江县"
                    },
                    {
                        "spell": "L",
                        "code": "522631",
                        "name": "黎平县"
                    },
                    {
                        "spell": "R",
                        "code": "522632",
                        "name": "榕江县"
                    },
                    {
                        "spell": "C",
                        "code": "522633",
                        "name": "从江县"
                    },
                    {
                        "spell": "L",
                        "code": "522634",
                        "name": "雷山县"
                    },
                    {
                        "spell": "M",
                        "code": "522635",
                        "name": "麻江县"
                    },
                    {
                        "spell": "D",
                        "code": "522636",
                        "name": "丹寨县"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "522700",
                "name": "黔南布依族苗族自治州",
                "list": [
                    {
                        "spell": "D",
                        "code": "522701",
                        "name": "都匀市"
                    },
                    {
                        "spell": "F",
                        "code": "522702",
                        "name": "福泉市"
                    },
                    {
                        "spell": "L",
                        "code": "522722",
                        "name": "荔波县"
                    },
                    {
                        "spell": "G",
                        "code": "522723",
                        "name": "贵定县"
                    },
                    {
                        "spell": "W",
                        "code": "522725",
                        "name": "瓮安县"
                    },
                    {
                        "spell": "D",
                        "code": "522726",
                        "name": "独山县"
                    },
                    {
                        "spell": "P",
                        "code": "522727",
                        "name": "平塘县"
                    },
                    {
                        "spell": "L",
                        "code": "522728",
                        "name": "罗甸县"
                    },
                    {
                        "spell": "C",
                        "code": "522729",
                        "name": "长顺县"
                    },
                    {
                        "spell": "L",
                        "code": "522730",
                        "name": "龙里县"
                    },
                    {
                        "spell": "H",
                        "code": "522731",
                        "name": "惠水县"
                    },
                    {
                        "spell": "S",
                        "code": "522732",
                        "name": "三都水族自治县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "Y",
        "code": "530000",
        "name": "云南省",
        "list": [
            {
                "spell": "K",
                "code": "530100",
                "name": "昆明市",
                "list": [
                    {
                        "spell": "S",
                        "code": "530101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "530102",
                        "name": "五华区"
                    },
                    {
                        "spell": "P",
                        "code": "530103",
                        "name": "盘龙区"
                    },
                    {
                        "spell": "G",
                        "code": "530111",
                        "name": "官渡区"
                    },
                    {
                        "spell": "X",
                        "code": "530112",
                        "name": "西山区"
                    },
                    {
                        "spell": "D",
                        "code": "530113",
                        "name": "东川区"
                    },
                    {
                        "spell": "C",
                        "code": "530121",
                        "name": "呈贡县"
                    },
                    {
                        "spell": "J",
                        "code": "530122",
                        "name": "晋宁县"
                    },
                    {
                        "spell": "F",
                        "code": "530124",
                        "name": "富民县"
                    },
                    {
                        "spell": "Y",
                        "code": "530125",
                        "name": "宜良县"
                    },
                    {
                        "spell": "S",
                        "code": "530126",
                        "name": "石林彝族自治县"
                    },
                    {
                        "spell": "S",
                        "code": "530127",
                        "name": "嵩明县"
                    },
                    {
                        "spell": "L",
                        "code": "530128",
                        "name": "禄劝彝族苗族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "530129",
                        "name": "寻甸回族彝族自治县"
                    },
                    {
                        "spell": "A",
                        "code": "530181",
                        "name": "安宁市"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "530300",
                "name": "曲靖市",
                "list": [
                    {
                        "spell": "S",
                        "code": "530301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "530302",
                        "name": "麒麟区"
                    },
                    {
                        "spell": "M",
                        "code": "530321",
                        "name": "马龙县"
                    },
                    {
                        "spell": "L",
                        "code": "530322",
                        "name": "陆良县"
                    },
                    {
                        "spell": "S",
                        "code": "530323",
                        "name": "师宗县"
                    },
                    {
                        "spell": "L",
                        "code": "530324",
                        "name": "罗平县"
                    },
                    {
                        "spell": "F",
                        "code": "530325",
                        "name": "富源县"
                    },
                    {
                        "spell": "H",
                        "code": "530326",
                        "name": "会泽县"
                    },
                    {
                        "spell": "Z",
                        "code": "530328",
                        "name": "沾益县"
                    },
                    {
                        "spell": "X",
                        "code": "530381",
                        "name": "宣威市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "530400",
                "name": "玉溪市",
                "list": [
                    {
                        "spell": "S",
                        "code": "530401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "530402",
                        "name": "红塔区"
                    },
                    {
                        "spell": "J",
                        "code": "530421",
                        "name": "江川县"
                    },
                    {
                        "spell": "C",
                        "code": "530422",
                        "name": "澄江县"
                    },
                    {
                        "spell": "T",
                        "code": "530423",
                        "name": "通海县"
                    },
                    {
                        "spell": "H",
                        "code": "530424",
                        "name": "华宁县"
                    },
                    {
                        "spell": "Y",
                        "code": "530425",
                        "name": "易门县"
                    },
                    {
                        "spell": "E",
                        "code": "530426",
                        "name": "峨山彝族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "530427",
                        "name": "新平彝族傣族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "530428",
                        "name": "元江哈尼族彝族傣族自治县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "530500",
                "name": "保山市",
                "list": [
                    {
                        "spell": "1",
                        "code": "530501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "530502",
                        "name": "隆阳区"
                    },
                    {
                        "spell": "S",
                        "code": "530521",
                        "name": "施甸县"
                    },
                    {
                        "spell": "T",
                        "code": "530522",
                        "name": "腾冲县"
                    },
                    {
                        "spell": "L",
                        "code": "530523",
                        "name": "龙陵县"
                    },
                    {
                        "spell": "C",
                        "code": "530524",
                        "name": "昌宁县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "530600",
                "name": "昭通市",
                "list": [
                    {
                        "spell": "1",
                        "code": "530601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Z",
                        "code": "530602",
                        "name": "昭阳区"
                    },
                    {
                        "spell": "L",
                        "code": "530621",
                        "name": "鲁甸县"
                    },
                    {
                        "spell": "Q",
                        "code": "530622",
                        "name": "巧家县"
                    },
                    {
                        "spell": "Y",
                        "code": "530623",
                        "name": "盐津县"
                    },
                    {
                        "spell": "D",
                        "code": "530624",
                        "name": "大关县"
                    },
                    {
                        "spell": "Y",
                        "code": "530625",
                        "name": "永善县"
                    },
                    {
                        "spell": "S",
                        "code": "530626",
                        "name": "绥江县"
                    },
                    {
                        "spell": "Z",
                        "code": "530627",
                        "name": "镇雄县"
                    },
                    {
                        "spell": "Y",
                        "code": "530628",
                        "name": "彝良县"
                    },
                    {
                        "spell": "W",
                        "code": "530629",
                        "name": "威信县"
                    },
                    {
                        "spell": "S",
                        "code": "530630",
                        "name": "水富县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "530700",
                "name": "丽江市",
                "list": [
                    {
                        "spell": "1",
                        "code": "530701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "530702",
                        "name": "古城区"
                    },
                    {
                        "spell": "Y",
                        "code": "530721",
                        "name": "玉龙纳西族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "530722",
                        "name": "永胜县"
                    },
                    {
                        "spell": "H",
                        "code": "530723",
                        "name": "华坪县"
                    },
                    {
                        "spell": "N",
                        "code": "530724",
                        "name": "宁蒗彝族自治县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "530800",
                "name": "普洱市",
                "list": [
                    {
                        "spell": "1",
                        "code": "530801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "530802",
                        "name": "思茅区"
                    },
                    {
                        "spell": "P",
                        "code": "530821",
                        "name": "宁洱哈尼族彝族自治县"
                    },
                    {
                        "spell": "M",
                        "code": "530822",
                        "name": "墨江哈尼族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "530823",
                        "name": "景东彝族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "530824",
                        "name": "景谷傣族彝族自治县"
                    },
                    {
                        "spell": "Z",
                        "code": "530825",
                        "name": "镇沅彝族哈尼族拉祜族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "530826",
                        "name": "江城哈尼族彝族自治县"
                    },
                    {
                        "spell": "M",
                        "code": "530827",
                        "name": "孟连傣族拉祜族佤族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "530828",
                        "name": "澜沧拉祜族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "530829",
                        "name": "西盟佤族自治县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "530900",
                "name": "临沧市",
                "list": [
                    {
                        "spell": "1",
                        "code": "530901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "530902",
                        "name": "临翔区"
                    },
                    {
                        "spell": "F",
                        "code": "530921",
                        "name": "凤庆县"
                    },
                    {
                        "spell": "Y",
                        "code": "530922",
                        "name": "云县"
                    },
                    {
                        "spell": "Y",
                        "code": "530923",
                        "name": "永德县"
                    },
                    {
                        "spell": "Z",
                        "code": "530924",
                        "name": "镇康县"
                    },
                    {
                        "spell": "S",
                        "code": "530925",
                        "name": "双江拉祜族佤族布朗族傣族自治县"
                    },
                    {
                        "spell": "G",
                        "code": "530926",
                        "name": "耿马傣族佤族自治县"
                    },
                    {
                        "spell": "C",
                        "code": "530927",
                        "name": "沧源佤族自治县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "532300",
                "name": "楚雄彝族自治州",
                "list": [
                    {
                        "spell": "C",
                        "code": "532301",
                        "name": "楚雄市"
                    },
                    {
                        "spell": "S",
                        "code": "532322",
                        "name": "双柏县"
                    },
                    {
                        "spell": "M",
                        "code": "532323",
                        "name": "牟定县"
                    },
                    {
                        "spell": "N",
                        "code": "532324",
                        "name": "南华县"
                    },
                    {
                        "spell": "Y",
                        "code": "532325",
                        "name": "姚安县"
                    },
                    {
                        "spell": "D",
                        "code": "532326",
                        "name": "大姚县"
                    },
                    {
                        "spell": "Y",
                        "code": "532327",
                        "name": "永仁县"
                    },
                    {
                        "spell": "Y",
                        "code": "532328",
                        "name": "元谋县"
                    },
                    {
                        "spell": "W",
                        "code": "532329",
                        "name": "武定县"
                    },
                    {
                        "spell": "L",
                        "code": "532331",
                        "name": "禄丰县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "532500",
                "name": "红河哈尼族彝族自治州",
                "list": [
                    {
                        "spell": "G",
                        "code": "532501",
                        "name": "个旧市"
                    },
                    {
                        "spell": "K",
                        "code": "532502",
                        "name": "开远市"
                    },
                    {
                        "spell": "M",
                        "code": "532503",
                        "name": "蒙自市"
                    },
                    {
                        "spell": "P",
                        "code": "532523",
                        "name": "屏边苗族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "532524",
                        "name": "建水县"
                    },
                    {
                        "spell": "S",
                        "code": "532525",
                        "name": "石屏县"
                    },
                    {
                        "spell": "M",
                        "code": "532526",
                        "name": "弥勒县"
                    },
                    {
                        "spell": "L",
                        "code": "532527",
                        "name": "泸西县"
                    },
                    {
                        "spell": "Y",
                        "code": "532528",
                        "name": "元阳县"
                    },
                    {
                        "spell": "H",
                        "code": "532529",
                        "name": "红河县"
                    },
                    {
                        "spell": "J",
                        "code": "532530",
                        "name": "金平苗族瑶族傣族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "532531",
                        "name": "绿春县"
                    },
                    {
                        "spell": "H",
                        "code": "532532",
                        "name": "河口瑶族自治县"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "532600",
                "name": "文山壮族苗族自治州",
                "list": [
                    {
                        "spell": "W",
                        "code": "532621",
                        "name": "文山县"
                    },
                    {
                        "spell": "Y",
                        "code": "532622",
                        "name": "砚山县"
                    },
                    {
                        "spell": "X",
                        "code": "532623",
                        "name": "西畴县"
                    },
                    {
                        "spell": "M",
                        "code": "532624",
                        "name": "麻栗坡县"
                    },
                    {
                        "spell": "M",
                        "code": "532625",
                        "name": "马关县"
                    },
                    {
                        "spell": "Q",
                        "code": "532626",
                        "name": "丘北县"
                    },
                    {
                        "spell": "G",
                        "code": "532627",
                        "name": "广南县"
                    },
                    {
                        "spell": "F",
                        "code": "532628",
                        "name": "富宁县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "532800",
                "name": "西双版纳傣族自治州",
                "list": [
                    {
                        "spell": "J",
                        "code": "532801",
                        "name": "景洪市"
                    },
                    {
                        "spell": "M",
                        "code": "532822",
                        "name": "勐海县"
                    },
                    {
                        "spell": "M",
                        "code": "532823",
                        "name": "勐腊县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "532900",
                "name": "大理白族自治州",
                "list": [
                    {
                        "spell": "D",
                        "code": "532901",
                        "name": "大理市"
                    },
                    {
                        "spell": "Y",
                        "code": "532922",
                        "name": "漾濞彝族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "532923",
                        "name": "祥云县"
                    },
                    {
                        "spell": "B",
                        "code": "532924",
                        "name": "宾川县"
                    },
                    {
                        "spell": "M",
                        "code": "532925",
                        "name": "弥渡县"
                    },
                    {
                        "spell": "N",
                        "code": "532926",
                        "name": "南涧彝族自治县"
                    },
                    {
                        "spell": "W",
                        "code": "532927",
                        "name": "巍山彝族回族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "532928",
                        "name": "永平县"
                    },
                    {
                        "spell": "Y",
                        "code": "532929",
                        "name": "云龙县"
                    },
                    {
                        "spell": "E",
                        "code": "532930",
                        "name": "洱源县"
                    },
                    {
                        "spell": "J",
                        "code": "532931",
                        "name": "剑川县"
                    },
                    {
                        "spell": "H",
                        "code": "532932",
                        "name": "鹤庆县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "533100",
                "name": "德宏傣族景颇族自治州",
                "list": [
                    {
                        "spell": "R",
                        "code": "533102",
                        "name": "瑞丽市"
                    },
                    {
                        "spell": "L",
                        "code": "533103",
                        "name": "芒市"
                    },
                    {
                        "spell": "L",
                        "code": "533122",
                        "name": "梁河县"
                    },
                    {
                        "spell": "Y",
                        "code": "533123",
                        "name": "盈江县"
                    },
                    {
                        "spell": "L",
                        "code": "533124",
                        "name": "陇川县"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "533300",
                "name": "怒江傈僳族自治州",
                "list": [
                    {
                        "spell": "L",
                        "code": "533321",
                        "name": "泸水县"
                    },
                    {
                        "spell": "F",
                        "code": "533323",
                        "name": "福贡县"
                    },
                    {
                        "spell": "G",
                        "code": "533324",
                        "name": "贡山独龙族怒族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "533325",
                        "name": "兰坪白族普米族自治县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "533400",
                "name": "迪庆藏族自治州",
                "list": [
                    {
                        "spell": "X",
                        "code": "533421",
                        "name": "香格里拉县"
                    },
                    {
                        "spell": "D",
                        "code": "533422",
                        "name": "德钦县"
                    },
                    {
                        "spell": "W",
                        "code": "533423",
                        "name": "维西傈僳族自治县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "X",
        "code": "540000",
        "name": "西藏自治区",
        "list": [
            {
                "spell": "L",
                "code": "540100",
                "name": "拉萨市",
                "list": [
                    {
                        "spell": "S",
                        "code": "540101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "540102",
                        "name": "城关区"
                    },
                    {
                        "spell": "L",
                        "code": "540121",
                        "name": "林周县"
                    },
                    {
                        "spell": "D",
                        "code": "540122",
                        "name": "当雄县"
                    },
                    {
                        "spell": "N",
                        "code": "540123",
                        "name": "尼木县"
                    },
                    {
                        "spell": "Q",
                        "code": "540124",
                        "name": "曲水县"
                    },
                    {
                        "spell": "D",
                        "code": "540125",
                        "name": "堆龙德庆县"
                    },
                    {
                        "spell": "D",
                        "code": "540126",
                        "name": "达孜县"
                    },
                    {
                        "spell": "M",
                        "code": "540127",
                        "name": "墨竹工卡县"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "542100",
                "name": "昌都地区",
                "list": [
                    {
                        "spell": "Q",
                        "code": "542121",
                        "name": "昌都县"
                    },
                    {
                        "spell": "J",
                        "code": "542122",
                        "name": "江达县"
                    },
                    {
                        "spell": "K",
                        "code": "542123",
                        "name": "贡觉县"
                    },
                    {
                        "spell": "R",
                        "code": "542124",
                        "name": "类乌齐县"
                    },
                    {
                        "spell": "D",
                        "code": "542125",
                        "name": "丁青县"
                    },
                    {
                        "spell": "C",
                        "code": "542126",
                        "name": "察雅县"
                    },
                    {
                        "spell": "B",
                        "code": "542127",
                        "name": "八宿县"
                    },
                    {
                        "spell": "Z",
                        "code": "542128",
                        "name": "左贡县"
                    },
                    {
                        "spell": "M",
                        "code": "542129",
                        "name": "芒康县"
                    },
                    {
                        "spell": "L",
                        "code": "542132",
                        "name": "洛隆县"
                    },
                    {
                        "spell": "B",
                        "code": "542133",
                        "name": "边坝县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "542200",
                "name": "山南地区",
                "list": [
                    {
                        "spell": "N",
                        "code": "542221",
                        "name": "乃东县"
                    },
                    {
                        "spell": "C",
                        "code": "542222",
                        "name": "扎囊县"
                    },
                    {
                        "spell": "G",
                        "code": "542223",
                        "name": "贡嘎县"
                    },
                    {
                        "spell": "S",
                        "code": "542224",
                        "name": "桑日县"
                    },
                    {
                        "spell": "Q",
                        "code": "542225",
                        "name": "琼结县"
                    },
                    {
                        "spell": "Q",
                        "code": "542226",
                        "name": "曲松县"
                    },
                    {
                        "spell": "C",
                        "code": "542227",
                        "name": "措美县"
                    },
                    {
                        "spell": "L",
                        "code": "542228",
                        "name": "洛扎县"
                    },
                    {
                        "spell": "G",
                        "code": "542229",
                        "name": "加查县"
                    },
                    {
                        "spell": "L",
                        "code": "542231",
                        "name": "隆子县"
                    },
                    {
                        "spell": "C",
                        "code": "542232",
                        "name": "错那县"
                    },
                    {
                        "spell": "N",
                        "code": "542233",
                        "name": "浪卡子县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "542300",
                "name": "日喀则地区",
                "list": [
                    {
                        "spell": "X",
                        "code": "542301",
                        "name": "日喀则市"
                    },
                    {
                        "spell": "N",
                        "code": "542322",
                        "name": "南木林县"
                    },
                    {
                        "spell": "G",
                        "code": "542323",
                        "name": "江孜县"
                    },
                    {
                        "spell": "T",
                        "code": "542324",
                        "name": "定日县"
                    },
                    {
                        "spell": "S",
                        "code": "542325",
                        "name": "萨迦县"
                    },
                    {
                        "spell": "L",
                        "code": "542326",
                        "name": "拉孜县"
                    },
                    {
                        "spell": "N",
                        "code": "542327",
                        "name": "昂仁县"
                    },
                    {
                        "spell": "X",
                        "code": "542328",
                        "name": "谢通门县"
                    },
                    {
                        "spell": "B",
                        "code": "542329",
                        "name": "白朗县"
                    },
                    {
                        "spell": "R",
                        "code": "542330",
                        "name": "仁布县"
                    },
                    {
                        "spell": "K",
                        "code": "542331",
                        "name": "康马县"
                    },
                    {
                        "spell": "D",
                        "code": "542332",
                        "name": "定结县"
                    },
                    {
                        "spell": "Z",
                        "code": "542333",
                        "name": "仲巴县"
                    },
                    {
                        "spell": "Y",
                        "code": "542334",
                        "name": "亚东县"
                    },
                    {
                        "spell": "G",
                        "code": "542335",
                        "name": "吉隆县"
                    },
                    {
                        "spell": "N",
                        "code": "542336",
                        "name": "聂拉木县"
                    },
                    {
                        "spell": "S",
                        "code": "542337",
                        "name": "萨嘎县"
                    },
                    {
                        "spell": "G",
                        "code": "542338",
                        "name": "岗巴县"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "542400",
                "name": "那曲地区",
                "list": [
                    {
                        "spell": "N",
                        "code": "542421",
                        "name": "那曲县"
                    },
                    {
                        "spell": "L",
                        "code": "542422",
                        "name": "嘉黎县"
                    },
                    {
                        "spell": "B",
                        "code": "542423",
                        "name": "比如县"
                    },
                    {
                        "spell": "N",
                        "code": "542424",
                        "name": "聂荣县"
                    },
                    {
                        "spell": "A",
                        "code": "542425",
                        "name": "安多县"
                    },
                    {
                        "spell": "X",
                        "code": "542426",
                        "name": "申扎县"
                    },
                    {
                        "spell": "S",
                        "code": "542427",
                        "name": "索县"
                    },
                    {
                        "spell": "B",
                        "code": "542428",
                        "name": "班戈县"
                    },
                    {
                        "spell": "B",
                        "code": "542429",
                        "name": "巴青县"
                    },
                    {
                        "spell": "N",
                        "code": "542430",
                        "name": "尼玛县"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "542500",
                "name": "阿里地区",
                "list": [
                    {
                        "spell": "B",
                        "code": "542521",
                        "name": "普兰县"
                    },
                    {
                        "spell": "Z",
                        "code": "542522",
                        "name": "札达县"
                    },
                    {
                        "spell": "G",
                        "code": "542523",
                        "name": "噶尔县"
                    },
                    {
                        "spell": "R",
                        "code": "542524",
                        "name": "日土县"
                    },
                    {
                        "spell": "G",
                        "code": "542525",
                        "name": "革吉县"
                    },
                    {
                        "spell": "G",
                        "code": "542526",
                        "name": "改则县"
                    },
                    {
                        "spell": "C",
                        "code": "542527",
                        "name": "措勤县"
                    }
                ]
            },
            {
                "spell": "N",
                "code": "542600",
                "name": "林芝地区",
                "list": [
                    {
                        "spell": "N",
                        "code": "542621",
                        "name": "林芝县"
                    },
                    {
                        "spell": "G",
                        "code": "542622",
                        "name": "工布江达县"
                    },
                    {
                        "spell": "M",
                        "code": "542623",
                        "name": "米林县"
                    },
                    {
                        "spell": "M",
                        "code": "542624",
                        "name": "墨脱县"
                    },
                    {
                        "spell": "B",
                        "code": "542625",
                        "name": "波密县"
                    },
                    {
                        "spell": "Z",
                        "code": "542626",
                        "name": "察隅县"
                    },
                    {
                        "spell": "N",
                        "code": "542627",
                        "name": "朗县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "S",
        "code": "610000",
        "name": "陕西省",
        "list": [
            {
                "spell": "X",
                "code": "610100",
                "name": "西安市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "610102",
                        "name": "新城区"
                    },
                    {
                        "spell": "B",
                        "code": "610103",
                        "name": "碑林区"
                    },
                    {
                        "spell": "L",
                        "code": "610104",
                        "name": "莲湖区"
                    },
                    {
                        "spell": "B",
                        "code": "610111",
                        "name": "灞桥区"
                    },
                    {
                        "spell": "W",
                        "code": "610112",
                        "name": "未央区"
                    },
                    {
                        "spell": "Y",
                        "code": "610113",
                        "name": "雁塔区"
                    },
                    {
                        "spell": "Y",
                        "code": "610114",
                        "name": "阎良区"
                    },
                    {
                        "spell": "L",
                        "code": "610115",
                        "name": "临潼区"
                    },
                    {
                        "spell": "C",
                        "code": "610116",
                        "name": "长安区"
                    },
                    {
                        "spell": "L",
                        "code": "610122",
                        "name": "蓝田县"
                    },
                    {
                        "spell": "Z",
                        "code": "610124",
                        "name": "周至县"
                    },
                    {
                        "spell": "H",
                        "code": "610125",
                        "name": "户县"
                    },
                    {
                        "spell": "G",
                        "code": "610126",
                        "name": "高陵县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "610200",
                "name": "铜川市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "610202",
                        "name": "王益区"
                    },
                    {
                        "spell": "Y",
                        "code": "610203",
                        "name": "印台区"
                    },
                    {
                        "spell": "Y",
                        "code": "610204",
                        "name": "耀州区"
                    },
                    {
                        "spell": "Y",
                        "code": "610222",
                        "name": "宜君县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "610300",
                "name": "宝鸡市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "610302",
                        "name": "渭滨区"
                    },
                    {
                        "spell": "J",
                        "code": "610303",
                        "name": "金台区"
                    },
                    {
                        "spell": "C",
                        "code": "610304",
                        "name": "陈仓区"
                    },
                    {
                        "spell": "F",
                        "code": "610322",
                        "name": "凤翔县"
                    },
                    {
                        "spell": "Q",
                        "code": "610323",
                        "name": "岐山县"
                    },
                    {
                        "spell": "F",
                        "code": "610324",
                        "name": "扶风县"
                    },
                    {
                        "spell": "M",
                        "code": "610326",
                        "name": "眉县"
                    },
                    {
                        "spell": "L",
                        "code": "610327",
                        "name": "陇县"
                    },
                    {
                        "spell": "Q",
                        "code": "610328",
                        "name": "千阳县"
                    },
                    {
                        "spell": "L",
                        "code": "610329",
                        "name": "麟游县"
                    },
                    {
                        "spell": "F",
                        "code": "610330",
                        "name": "凤县"
                    },
                    {
                        "spell": "T",
                        "code": "610331",
                        "name": "太白县"
                    }
                ]
            },
            {
                "spell": "X",
                "code": "610400",
                "name": "咸阳市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Q",
                        "code": "610402",
                        "name": "秦都区"
                    },
                    {
                        "spell": "Y",
                        "code": "610403",
                        "name": "杨陵区"
                    },
                    {
                        "spell": "W",
                        "code": "610404",
                        "name": "渭城区"
                    },
                    {
                        "spell": "S",
                        "code": "610422",
                        "name": "三原县"
                    },
                    {
                        "spell": "J",
                        "code": "610423",
                        "name": "泾阳县"
                    },
                    {
                        "spell": "Q",
                        "code": "610424",
                        "name": "乾县"
                    },
                    {
                        "spell": "L",
                        "code": "610425",
                        "name": "礼泉县"
                    },
                    {
                        "spell": "Y",
                        "code": "610426",
                        "name": "永寿县"
                    },
                    {
                        "spell": "B",
                        "code": "610427",
                        "name": "彬县"
                    },
                    {
                        "spell": "C",
                        "code": "610428",
                        "name": "长武县"
                    },
                    {
                        "spell": "X",
                        "code": "610429",
                        "name": "旬邑县"
                    },
                    {
                        "spell": "C",
                        "code": "610430",
                        "name": "淳化县"
                    },
                    {
                        "spell": "W",
                        "code": "610431",
                        "name": "武功县"
                    },
                    {
                        "spell": "X",
                        "code": "610481",
                        "name": "兴平市"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "610500",
                "name": "渭南市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "610502",
                        "name": "临渭区"
                    },
                    {
                        "spell": "H",
                        "code": "610521",
                        "name": "华县"
                    },
                    {
                        "spell": "T",
                        "code": "610522",
                        "name": "潼关县"
                    },
                    {
                        "spell": "D",
                        "code": "610523",
                        "name": "大荔县"
                    },
                    {
                        "spell": "H",
                        "code": "610524",
                        "name": "合阳县"
                    },
                    {
                        "spell": "C",
                        "code": "610525",
                        "name": "澄城县"
                    },
                    {
                        "spell": "P",
                        "code": "610526",
                        "name": "蒲城县"
                    },
                    {
                        "spell": "B",
                        "code": "610527",
                        "name": "白水县"
                    },
                    {
                        "spell": "F",
                        "code": "610528",
                        "name": "富平县"
                    },
                    {
                        "spell": "H",
                        "code": "610581",
                        "name": "韩城市"
                    },
                    {
                        "spell": "H",
                        "code": "610582",
                        "name": "华阴市"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "610600",
                "name": "延安市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "610602",
                        "name": "宝塔区"
                    },
                    {
                        "spell": "Y",
                        "code": "610621",
                        "name": "延长县"
                    },
                    {
                        "spell": "Y",
                        "code": "610622",
                        "name": "延川县"
                    },
                    {
                        "spell": "Z",
                        "code": "610623",
                        "name": "子长县"
                    },
                    {
                        "spell": "A",
                        "code": "610624",
                        "name": "安塞县"
                    },
                    {
                        "spell": "Z",
                        "code": "610625",
                        "name": "志丹县"
                    },
                    {
                        "spell": "W",
                        "code": "610626",
                        "name": "吴起县"
                    },
                    {
                        "spell": "G",
                        "code": "610627",
                        "name": "甘泉县"
                    },
                    {
                        "spell": "F",
                        "code": "610628",
                        "name": "富县"
                    },
                    {
                        "spell": "L",
                        "code": "610629",
                        "name": "洛川县"
                    },
                    {
                        "spell": "Y",
                        "code": "610630",
                        "name": "宜川县"
                    },
                    {
                        "spell": "H",
                        "code": "610631",
                        "name": "黄龙县"
                    },
                    {
                        "spell": "H",
                        "code": "610632",
                        "name": "黄陵县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "610700",
                "name": "汉中市",
                "list": [
                    {
                        "spell": "S",
                        "code": "610701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "610702",
                        "name": "汉台区"
                    },
                    {
                        "spell": "N",
                        "code": "610721",
                        "name": "南郑县"
                    },
                    {
                        "spell": "C",
                        "code": "610722",
                        "name": "城固县"
                    },
                    {
                        "spell": "Y",
                        "code": "610723",
                        "name": "洋县"
                    },
                    {
                        "spell": "X",
                        "code": "610724",
                        "name": "西乡县"
                    },
                    {
                        "spell": "M",
                        "code": "610725",
                        "name": "勉县"
                    },
                    {
                        "spell": "N",
                        "code": "610726",
                        "name": "宁强县"
                    },
                    {
                        "spell": "L",
                        "code": "610727",
                        "name": "略阳县"
                    },
                    {
                        "spell": "Z",
                        "code": "610728",
                        "name": "镇巴县"
                    },
                    {
                        "spell": "L",
                        "code": "610729",
                        "name": "留坝县"
                    },
                    {
                        "spell": "F",
                        "code": "610730",
                        "name": "佛坪县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "610800",
                "name": "榆林市",
                "list": [
                    {
                        "spell": "1",
                        "code": "610801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "610802",
                        "name": "榆阳区"
                    },
                    {
                        "spell": "S",
                        "code": "610821",
                        "name": "神木县"
                    },
                    {
                        "spell": "F",
                        "code": "610822",
                        "name": "府谷县"
                    },
                    {
                        "spell": "H",
                        "code": "610823",
                        "name": "横山县"
                    },
                    {
                        "spell": "J",
                        "code": "610824",
                        "name": "靖边县"
                    },
                    {
                        "spell": "D",
                        "code": "610825",
                        "name": "定边县"
                    },
                    {
                        "spell": "S",
                        "code": "610826",
                        "name": "绥德县"
                    },
                    {
                        "spell": "M",
                        "code": "610827",
                        "name": "米脂县"
                    },
                    {
                        "spell": "J",
                        "code": "610828",
                        "name": "佳县"
                    },
                    {
                        "spell": "W",
                        "code": "610829",
                        "name": "吴堡县"
                    },
                    {
                        "spell": "Q",
                        "code": "610830",
                        "name": "清涧县"
                    },
                    {
                        "spell": "Z",
                        "code": "610831",
                        "name": "子洲县"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "610900",
                "name": "安康市",
                "list": [
                    {
                        "spell": "1",
                        "code": "610901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "H",
                        "code": "610902",
                        "name": "汉滨区"
                    },
                    {
                        "spell": "H",
                        "code": "610921",
                        "name": "汉阴县"
                    },
                    {
                        "spell": "S",
                        "code": "610922",
                        "name": "石泉县"
                    },
                    {
                        "spell": "N",
                        "code": "610923",
                        "name": "宁陕县"
                    },
                    {
                        "spell": "Z",
                        "code": "610924",
                        "name": "紫阳县"
                    },
                    {
                        "spell": "L",
                        "code": "610925",
                        "name": "岚皋县"
                    },
                    {
                        "spell": "P",
                        "code": "610926",
                        "name": "平利县"
                    },
                    {
                        "spell": "Z",
                        "code": "610927",
                        "name": "镇坪县"
                    },
                    {
                        "spell": "X",
                        "code": "610928",
                        "name": "旬阳县"
                    },
                    {
                        "spell": "B",
                        "code": "610929",
                        "name": "白河县"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "611000",
                "name": "商洛市",
                "list": [
                    {
                        "spell": "1",
                        "code": "611001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "611002",
                        "name": "商州区"
                    },
                    {
                        "spell": "L",
                        "code": "611021",
                        "name": "洛南县"
                    },
                    {
                        "spell": "D",
                        "code": "611022",
                        "name": "丹凤县"
                    },
                    {
                        "spell": "S",
                        "code": "611023",
                        "name": "商南县"
                    },
                    {
                        "spell": "S",
                        "code": "611024",
                        "name": "山阳县"
                    },
                    {
                        "spell": "Z",
                        "code": "611025",
                        "name": "镇安县"
                    },
                    {
                        "spell": "Z",
                        "code": "611026",
                        "name": "柞水县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "G",
        "code": "620000",
        "name": "甘肃省",
        "list": [
            {
                "spell": "L",
                "code": "620100",
                "name": "兰州市",
                "list": [
                    {
                        "spell": "S",
                        "code": "620101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "620102",
                        "name": "城关区"
                    },
                    {
                        "spell": "Q",
                        "code": "620103",
                        "name": "七里河区"
                    },
                    {
                        "spell": "X",
                        "code": "620104",
                        "name": "西固区"
                    },
                    {
                        "spell": "A",
                        "code": "620105",
                        "name": "安宁区"
                    },
                    {
                        "spell": "H",
                        "code": "620111",
                        "name": "红古区"
                    },
                    {
                        "spell": "Y",
                        "code": "620121",
                        "name": "永登县"
                    },
                    {
                        "spell": "G",
                        "code": "620122",
                        "name": "皋兰县"
                    },
                    {
                        "spell": "Y",
                        "code": "620123",
                        "name": "榆中县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "620200",
                "name": "嘉峪关市",
                "list": [
                    {
                        "spell": "S",
                        "code": "620201",
                        "name": "市辖区"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "620300",
                "name": "金昌市",
                "list": [
                    {
                        "spell": "S",
                        "code": "620301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "J",
                        "code": "620302",
                        "name": "金川区"
                    },
                    {
                        "spell": "Y",
                        "code": "620321",
                        "name": "永昌县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "620400",
                "name": "白银市",
                "list": [
                    {
                        "spell": "S",
                        "code": "620401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "620402",
                        "name": "白银区"
                    },
                    {
                        "spell": "P",
                        "code": "620403",
                        "name": "平川区"
                    },
                    {
                        "spell": "J",
                        "code": "620421",
                        "name": "靖远县"
                    },
                    {
                        "spell": "H",
                        "code": "620422",
                        "name": "会宁县"
                    },
                    {
                        "spell": "J",
                        "code": "620423",
                        "name": "景泰县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "620500",
                "name": "天水市",
                "list": [
                    {
                        "spell": "S",
                        "code": "620501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "B",
                        "code": "620502",
                        "name": "秦州区"
                    },
                    {
                        "spell": "Q",
                        "code": "620521",
                        "name": "清水县"
                    },
                    {
                        "spell": "Q",
                        "code": "620522",
                        "name": "秦安县"
                    },
                    {
                        "spell": "G",
                        "code": "620523",
                        "name": "甘谷县"
                    },
                    {
                        "spell": "W",
                        "code": "620524",
                        "name": "武山县"
                    },
                    {
                        "spell": "Z",
                        "code": "620525",
                        "name": "张家川回族自治县"
                    },
                    {
                        "spell": "M",
                        "code": "620503",
                        "name": "麦积区"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "620600",
                "name": "武威市",
                "list": [
                    {
                        "spell": "1",
                        "code": "620601",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "620602",
                        "name": "凉州区"
                    },
                    {
                        "spell": "M",
                        "code": "620621",
                        "name": "民勤县"
                    },
                    {
                        "spell": "G",
                        "code": "620622",
                        "name": "古浪县"
                    },
                    {
                        "spell": "T",
                        "code": "620623",
                        "name": "天祝藏族自治县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "620700",
                "name": "张掖市",
                "list": [
                    {
                        "spell": "1",
                        "code": "620701",
                        "name": "市辖区"
                    },
                    {
                        "spell": "G",
                        "code": "620702",
                        "name": "甘州区"
                    },
                    {
                        "spell": "S",
                        "code": "620721",
                        "name": "肃南裕固族自治县"
                    },
                    {
                        "spell": "M",
                        "code": "620722",
                        "name": "民乐县"
                    },
                    {
                        "spell": "L",
                        "code": "620723",
                        "name": "临泽县"
                    },
                    {
                        "spell": "G",
                        "code": "620724",
                        "name": "高台县"
                    },
                    {
                        "spell": "S",
                        "code": "620725",
                        "name": "山丹县"
                    }
                ]
            },
            {
                "spell": "P",
                "code": "620800",
                "name": "平凉市",
                "list": [
                    {
                        "spell": "1",
                        "code": "620801",
                        "name": "市辖区"
                    },
                    {
                        "spell": "K",
                        "code": "620802",
                        "name": "崆峒区"
                    },
                    {
                        "spell": "J",
                        "code": "620821",
                        "name": "泾川县"
                    },
                    {
                        "spell": "L",
                        "code": "620822",
                        "name": "灵台县"
                    },
                    {
                        "spell": "C",
                        "code": "620823",
                        "name": "崇信县"
                    },
                    {
                        "spell": "H",
                        "code": "620824",
                        "name": "华亭县"
                    },
                    {
                        "spell": "Z",
                        "code": "620825",
                        "name": "庄浪县"
                    },
                    {
                        "spell": "J",
                        "code": "620826",
                        "name": "静宁县"
                    }
                ]
            },
            {
                "spell": "J",
                "code": "620900",
                "name": "酒泉市",
                "list": [
                    {
                        "spell": "1",
                        "code": "620901",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "620902",
                        "name": "肃州区"
                    },
                    {
                        "spell": "J",
                        "code": "620921",
                        "name": "金塔县"
                    },
                    {
                        "spell": "S",
                        "code": "620923",
                        "name": "肃北蒙古族自治县"
                    },
                    {
                        "spell": "A",
                        "code": "620924",
                        "name": "阿克塞哈萨克族自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "620981",
                        "name": "玉门市"
                    },
                    {
                        "spell": "D",
                        "code": "620982",
                        "name": "敦煌市"
                    },
                    {
                        "spell": "G",
                        "code": "620922",
                        "name": "瓜州县"
                    }
                ]
            },
            {
                "spell": "Q",
                "code": "621000",
                "name": "庆阳市",
                "list": [
                    {
                        "spell": "1",
                        "code": "621001",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "621002",
                        "name": "西峰区"
                    },
                    {
                        "spell": "Q",
                        "code": "621021",
                        "name": "庆城县"
                    },
                    {
                        "spell": "H",
                        "code": "621022",
                        "name": "环县"
                    },
                    {
                        "spell": "H",
                        "code": "621023",
                        "name": "华池县"
                    },
                    {
                        "spell": "H",
                        "code": "621024",
                        "name": "合水县"
                    },
                    {
                        "spell": "Z",
                        "code": "621025",
                        "name": "正宁县"
                    },
                    {
                        "spell": "N",
                        "code": "621026",
                        "name": "宁县"
                    },
                    {
                        "spell": "Z",
                        "code": "621027",
                        "name": "镇原县"
                    }
                ]
            },
            {
                "spell": "D",
                "code": "621100",
                "name": "定西市",
                "list": [
                    {
                        "spell": "1",
                        "code": "621101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "A",
                        "code": "621102",
                        "name": "安定区"
                    },
                    {
                        "spell": "T",
                        "code": "621121",
                        "name": "通渭县"
                    },
                    {
                        "spell": "L",
                        "code": "621122",
                        "name": "陇西县"
                    },
                    {
                        "spell": "W",
                        "code": "621123",
                        "name": "渭源县"
                    },
                    {
                        "spell": "L",
                        "code": "621124",
                        "name": "临洮县"
                    },
                    {
                        "spell": "Z",
                        "code": "621125",
                        "name": "漳县"
                    },
                    {
                        "spell": "M",
                        "code": "621126",
                        "name": "岷县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "621200",
                "name": "陇南市",
                "list": [
                    {
                        "spell": "1",
                        "code": "621201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "W",
                        "code": "621202",
                        "name": "武都区"
                    },
                    {
                        "spell": "C",
                        "code": "621221",
                        "name": "成县"
                    },
                    {
                        "spell": "W",
                        "code": "621222",
                        "name": "文县"
                    },
                    {
                        "spell": "D",
                        "code": "621223",
                        "name": "宕昌县"
                    },
                    {
                        "spell": "K",
                        "code": "621224",
                        "name": "康县"
                    },
                    {
                        "spell": "X",
                        "code": "621225",
                        "name": "西和县"
                    },
                    {
                        "spell": "L",
                        "code": "621226",
                        "name": "礼县"
                    },
                    {
                        "spell": "H",
                        "code": "621227",
                        "name": "徽县"
                    },
                    {
                        "spell": "L",
                        "code": "621228",
                        "name": "两当县"
                    }
                ]
            },
            {
                "spell": "L",
                "code": "622900",
                "name": "临夏回族自治州",
                "list": [
                    {
                        "spell": "L",
                        "code": "622901",
                        "name": "临夏市"
                    },
                    {
                        "spell": "L",
                        "code": "622921",
                        "name": "临夏县"
                    },
                    {
                        "spell": "K",
                        "code": "622922",
                        "name": "康乐县"
                    },
                    {
                        "spell": "Y",
                        "code": "622923",
                        "name": "永靖县"
                    },
                    {
                        "spell": "G",
                        "code": "622924",
                        "name": "广河县"
                    },
                    {
                        "spell": "H",
                        "code": "622925",
                        "name": "和政县"
                    },
                    {
                        "spell": "D",
                        "code": "622926",
                        "name": "东乡族自治县"
                    },
                    {
                        "spell": "J",
                        "code": "622927",
                        "name": "积石山保安族东乡族撒拉族自治县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "623000",
                "name": "甘南藏族自治州",
                "list": [
                    {
                        "spell": "H",
                        "code": "623001",
                        "name": "合作市"
                    },
                    {
                        "spell": "L",
                        "code": "623021",
                        "name": "临潭县"
                    },
                    {
                        "spell": "J",
                        "code": "623022",
                        "name": "卓尼县"
                    },
                    {
                        "spell": "Z",
                        "code": "623023",
                        "name": "舟曲县"
                    },
                    {
                        "spell": "T",
                        "code": "623024",
                        "name": "迭部县"
                    },
                    {
                        "spell": "M",
                        "code": "623025",
                        "name": "玛曲县"
                    },
                    {
                        "spell": "L",
                        "code": "623026",
                        "name": "碌曲县"
                    },
                    {
                        "spell": "X",
                        "code": "623027",
                        "name": "夏河县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "Q",
        "code": "630000",
        "name": "青海省",
        "list": [
            {
                "spell": "X",
                "code": "630100",
                "name": "西宁市",
                "list": [
                    {
                        "spell": "S",
                        "code": "630101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "C",
                        "code": "630102",
                        "name": "城东区"
                    },
                    {
                        "spell": "C",
                        "code": "630103",
                        "name": "城中区"
                    },
                    {
                        "spell": "C",
                        "code": "630104",
                        "name": "城西区"
                    },
                    {
                        "spell": "C",
                        "code": "630105",
                        "name": "城北区"
                    },
                    {
                        "spell": "D",
                        "code": "630121",
                        "name": "大通回族土族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "630122",
                        "name": "湟中县"
                    },
                    {
                        "spell": "H",
                        "code": "630123",
                        "name": "湟源县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "632100",
                "name": "海东地区",
                "list": [
                    {
                        "spell": "P",
                        "code": "632121",
                        "name": "平安县"
                    },
                    {
                        "spell": "M",
                        "code": "632122",
                        "name": "民和回族土族自治县"
                    },
                    {
                        "spell": "L",
                        "code": "632123",
                        "name": "乐都县"
                    },
                    {
                        "spell": "H",
                        "code": "632126",
                        "name": "互助土族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "632127",
                        "name": "化隆回族自治县"
                    },
                    {
                        "spell": "X",
                        "code": "632128",
                        "name": "循化撒拉族自治县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "632200",
                "name": "海北藏族自治州",
                "list": [
                    {
                        "spell": "M",
                        "code": "632221",
                        "name": "门源回族自治县"
                    },
                    {
                        "spell": "Q",
                        "code": "632222",
                        "name": "祁连县"
                    },
                    {
                        "spell": "H",
                        "code": "632223",
                        "name": "海晏县"
                    },
                    {
                        "spell": "G",
                        "code": "632224",
                        "name": "刚察县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "632300",
                "name": "黄南藏族自治州",
                "list": [
                    {
                        "spell": "T",
                        "code": "632321",
                        "name": "同仁县"
                    },
                    {
                        "spell": "J",
                        "code": "632322",
                        "name": "尖扎县"
                    },
                    {
                        "spell": "Z",
                        "code": "632323",
                        "name": "泽库县"
                    },
                    {
                        "spell": "H",
                        "code": "632324",
                        "name": "河南蒙古族自治县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "632500",
                "name": "海南藏族自治州",
                "list": [
                    {
                        "spell": "G",
                        "code": "632521",
                        "name": "共和县"
                    },
                    {
                        "spell": "T",
                        "code": "632522",
                        "name": "同德县"
                    },
                    {
                        "spell": "G",
                        "code": "632523",
                        "name": "贵德县"
                    },
                    {
                        "spell": "X",
                        "code": "632524",
                        "name": "兴海县"
                    },
                    {
                        "spell": "G",
                        "code": "632525",
                        "name": "贵南县"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "632600",
                "name": "果洛藏族自治州",
                "list": [
                    {
                        "spell": "M",
                        "code": "632621",
                        "name": "玛沁县"
                    },
                    {
                        "spell": "B",
                        "code": "632622",
                        "name": "班玛县"
                    },
                    {
                        "spell": "G",
                        "code": "632623",
                        "name": "甘德县"
                    },
                    {
                        "spell": "T",
                        "code": "632624",
                        "name": "达日县"
                    },
                    {
                        "spell": "J",
                        "code": "632625",
                        "name": "久治县"
                    },
                    {
                        "spell": "M",
                        "code": "632626",
                        "name": "玛多县"
                    }
                ]
            },
            {
                "spell": "Y",
                "code": "632700",
                "name": "玉树藏族自治州",
                "list": [
                    {
                        "spell": "Y",
                        "code": "632721",
                        "name": "玉树县"
                    },
                    {
                        "spell": "Z",
                        "code": "632722",
                        "name": "杂多县"
                    },
                    {
                        "spell": "C",
                        "code": "632723",
                        "name": "称多县"
                    },
                    {
                        "spell": "Z",
                        "code": "632724",
                        "name": "治多县"
                    },
                    {
                        "spell": "N",
                        "code": "632725",
                        "name": "囊谦县"
                    },
                    {
                        "spell": "Q",
                        "code": "632726",
                        "name": "曲麻莱县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "632800",
                "name": "海西蒙古族藏族自治州",
                "list": [
                    {
                        "spell": "G",
                        "code": "632801",
                        "name": "格尔木市"
                    },
                    {
                        "spell": "D",
                        "code": "632802",
                        "name": "德令哈市"
                    },
                    {
                        "spell": "U",
                        "code": "632821",
                        "name": "乌兰县"
                    },
                    {
                        "spell": "D",
                        "code": "632822",
                        "name": "都兰县"
                    },
                    {
                        "spell": "T",
                        "code": "632823",
                        "name": "天峻县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "N",
        "code": "640000",
        "name": "宁夏回族自治区",
        "list": [
            {
                "spell": "Y",
                "code": "640100",
                "name": "银川市",
                "list": [
                    {
                        "spell": "S",
                        "code": "640101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "X",
                        "code": "640104",
                        "name": "兴庆区"
                    },
                    {
                        "spell": "X",
                        "code": "640105",
                        "name": "西夏区"
                    },
                    {
                        "spell": "J",
                        "code": "640106",
                        "name": "金凤区"
                    },
                    {
                        "spell": "Y",
                        "code": "640121",
                        "name": "永宁县"
                    },
                    {
                        "spell": "H",
                        "code": "640122",
                        "name": "贺兰县"
                    },
                    {
                        "spell": "L",
                        "code": "640181",
                        "name": "灵武市"
                    }
                ]
            },
            {
                "spell": "S",
                "code": "640200",
                "name": "石嘴山市",
                "list": [
                    {
                        "spell": "S",
                        "code": "640201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "640202",
                        "name": "大武口区"
                    },
                    {
                        "spell": "H",
                        "code": "640205",
                        "name": "惠农区"
                    },
                    {
                        "spell": "P",
                        "code": "640221",
                        "name": "平罗县"
                    }
                ]
            },
            {
                "spell": "W",
                "code": "640300",
                "name": "吴忠市",
                "list": [
                    {
                        "spell": "S",
                        "code": "640301",
                        "name": "市辖区"
                    },
                    {
                        "spell": "L",
                        "code": "640302",
                        "name": "利通区"
                    },
                    {
                        "spell": "Y",
                        "code": "640323",
                        "name": "盐池县"
                    },
                    {
                        "spell": "T",
                        "code": "640324",
                        "name": "同心县"
                    },
                    {
                        "spell": "Q",
                        "code": "640381",
                        "name": "青铜峡市"
                    },
                    {
                        "spell": "H",
                        "code": "640303",
                        "name": "红寺堡区"
                    }
                ]
            },
            {
                "spell": "G",
                "code": "640400",
                "name": "固原市",
                "list": [
                    {
                        "spell": "1",
                        "code": "640401",
                        "name": "市辖区"
                    },
                    {
                        "spell": "Y",
                        "code": "640402",
                        "name": "原州区"
                    },
                    {
                        "spell": "X",
                        "code": "640422",
                        "name": "西吉县"
                    },
                    {
                        "spell": "L",
                        "code": "640423",
                        "name": "隆德县"
                    },
                    {
                        "spell": "J",
                        "code": "640424",
                        "name": "泾源县"
                    },
                    {
                        "spell": "P",
                        "code": "640425",
                        "name": "彭阳县"
                    }
                ]
            },
            {
                "spell": "Z",
                "code": "640500",
                "name": "中卫市",
                "list": [
                    {
                        "spell": "1",
                        "code": "640501",
                        "name": "市辖区"
                    },
                    {
                        "spell": "S",
                        "code": "640502",
                        "name": "沙坡头区"
                    },
                    {
                        "spell": "Z",
                        "code": "640521",
                        "name": "中宁县"
                    },
                    {
                        "spell": "H",
                        "code": "640522",
                        "name": "海原县"
                    }
                ]
            }
        ]
    },
    {
        "spell": "X",
        "code": "650000",
        "name": "新疆维吾尔自治区",
        "list": [
            {
                "spell": "U",
                "code": "650100",
                "name": "乌鲁木齐市",
                "list": [
                    {
                        "spell": "S",
                        "code": "650101",
                        "name": "市辖区"
                    },
                    {
                        "spell": "T",
                        "code": "650102",
                        "name": "天山区"
                    },
                    {
                        "spell": "S",
                        "code": "650103",
                        "name": "沙依巴克区"
                    },
                    {
                        "spell": "X",
                        "code": "650104",
                        "name": "新市区"
                    },
                    {
                        "spell": "S",
                        "code": "650105",
                        "name": "水磨沟区"
                    },
                    {
                        "spell": "T",
                        "code": "650106",
                        "name": "头屯河区"
                    },
                    {
                        "spell": "D",
                        "code": "650107",
                        "name": "达坂城区"
                    },
                    {
                        "spell": "M",
                        "code": "650109",
                        "name": "米东区"
                    },
                    {
                        "spell": "U",
                        "code": "650121",
                        "name": "乌鲁木齐县"
                    }
                ]
            },
            {
                "spell": "K",
                "code": "650200",
                "name": "克拉玛依市",
                "list": [
                    {
                        "spell": "S",
                        "code": "650201",
                        "name": "市辖区"
                    },
                    {
                        "spell": "D",
                        "code": "650202",
                        "name": "独山子区"
                    },
                    {
                        "spell": "K",
                        "code": "650203",
                        "name": "克拉玛依区"
                    },
                    {
                        "spell": "B",
                        "code": "650204",
                        "name": "白碱滩区"
                    },
                    {
                        "spell": "O",
                        "code": "650205",
                        "name": "乌尔禾区"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "652100",
                "name": "吐鲁番地区",
                "list": [
                    {
                        "spell": "T",
                        "code": "652101",
                        "name": "吐鲁番市"
                    },
                    {
                        "spell": "S",
                        "code": "652122",
                        "name": "鄯善县"
                    },
                    {
                        "spell": "T",
                        "code": "652123",
                        "name": "托克逊县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "652200",
                "name": "哈密地区",
                "list": [
                    {
                        "spell": "H",
                        "code": "652201",
                        "name": "哈密市"
                    },
                    {
                        "spell": "B",
                        "code": "652222",
                        "name": "巴里坤哈萨克自治县"
                    },
                    {
                        "spell": "Y",
                        "code": "652223",
                        "name": "伊吾县"
                    }
                ]
            },
            {
                "spell": "C",
                "code": "652300",
                "name": "昌吉回族自治州",
                "list": [
                    {
                        "spell": "C",
                        "code": "652301",
                        "name": "昌吉市"
                    },
                    {
                        "spell": "F",
                        "code": "652302",
                        "name": "阜康市"
                    },
                    {
                        "spell": "H",
                        "code": "652323",
                        "name": "呼图壁县"
                    },
                    {
                        "spell": "M",
                        "code": "652324",
                        "name": "玛纳斯县"
                    },
                    {
                        "spell": "Q",
                        "code": "652325",
                        "name": "奇台县"
                    },
                    {
                        "spell": "J",
                        "code": "652327",
                        "name": "吉木萨尔县"
                    },
                    {
                        "spell": "M",
                        "code": "652328",
                        "name": "木垒哈萨克自治县"
                    }
                ]
            },
            {
                "spell": "B",
                "code": "652700",
                "name": "博尔塔拉蒙古自治州",
                "list": [
                    {
                        "spell": "B",
                        "code": "652701",
                        "name": "博乐市"
                    },
                    {
                        "spell": "J",
                        "code": "652722",
                        "name": "精河县"
                    },
                    {
                        "spell": "W",
                        "code": "652723",
                        "name": "温泉县"
                    }
                ]
            },
            {
                "spell": "b",
                "code": "652800",
                "name": "巴音郭楞蒙古自治州",
                "list": [
                    {
                        "spell": "K",
                        "code": "652801",
                        "name": "库尔勒市"
                    },
                    {
                        "spell": "L",
                        "code": "652822",
                        "name": "轮台县"
                    },
                    {
                        "spell": "Y",
                        "code": "652823",
                        "name": "尉犁县"
                    },
                    {
                        "spell": "R",
                        "code": "652824",
                        "name": "若羌县"
                    },
                    {
                        "spell": "Q",
                        "code": "652825",
                        "name": "且末县"
                    },
                    {
                        "spell": "Y",
                        "code": "652826",
                        "name": "焉耆回族自治县"
                    },
                    {
                        "spell": "H",
                        "code": "652827",
                        "name": "和静县"
                    },
                    {
                        "spell": "H",
                        "code": "652828",
                        "name": "和硕县"
                    },
                    {
                        "spell": "B",
                        "code": "652829",
                        "name": "博湖县"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "652900",
                "name": "阿克苏地区",
                "list": [
                    {
                        "spell": "A",
                        "code": "652901",
                        "name": "阿克苏市"
                    },
                    {
                        "spell": "W",
                        "code": "652922",
                        "name": "温宿县"
                    },
                    {
                        "spell": "K",
                        "code": "652923",
                        "name": "库车县"
                    },
                    {
                        "spell": "X",
                        "code": "652924",
                        "name": "沙雅县"
                    },
                    {
                        "spell": "X",
                        "code": "652925",
                        "name": "新和县"
                    },
                    {
                        "spell": "B",
                        "code": "652926",
                        "name": "拜城县"
                    },
                    {
                        "spell": "W",
                        "code": "652927",
                        "name": "乌什县"
                    },
                    {
                        "spell": "A",
                        "code": "652928",
                        "name": "阿瓦提县"
                    },
                    {
                        "spell": "K",
                        "code": "652929",
                        "name": "柯坪县"
                    }
                ]
            },
            {
                "spell": "K",
                "code": "653000",
                "name": "克孜勒苏柯尔克孜自治州",
                "list": [
                    {
                        "spell": "A",
                        "code": "653001",
                        "name": "阿图什市"
                    },
                    {
                        "spell": "A",
                        "code": "653022",
                        "name": "阿克陶县"
                    },
                    {
                        "spell": "A",
                        "code": "653023",
                        "name": "阿合奇县"
                    },
                    {
                        "spell": "W",
                        "code": "653024",
                        "name": "乌恰县"
                    }
                ]
            },
            {
                "spell": "K",
                "code": "653100",
                "name": "喀什地区",
                "list": [
                    {
                        "spell": "K",
                        "code": "653101",
                        "name": "喀什市"
                    },
                    {
                        "spell": "S",
                        "code": "653121",
                        "name": "疏附县"
                    },
                    {
                        "spell": "S",
                        "code": "653122",
                        "name": "疏勒县"
                    },
                    {
                        "spell": "Y",
                        "code": "653123",
                        "name": "英吉沙县"
                    },
                    {
                        "spell": "Z",
                        "code": "653124",
                        "name": "泽普县"
                    },
                    {
                        "spell": "S",
                        "code": "653125",
                        "name": "莎车县"
                    },
                    {
                        "spell": "Y",
                        "code": "653126",
                        "name": "叶城县"
                    },
                    {
                        "spell": "M",
                        "code": "653127",
                        "name": "麦盖提县"
                    },
                    {
                        "spell": "Y",
                        "code": "653128",
                        "name": "岳普湖县"
                    },
                    {
                        "spell": "J",
                        "code": "653129",
                        "name": "伽师县"
                    },
                    {
                        "spell": "B",
                        "code": "653130",
                        "name": "巴楚县"
                    },
                    {
                        "spell": "T",
                        "code": "653131",
                        "name": "塔什库尔干塔吉克自治县"
                    }
                ]
            },
            {
                "spell": "H",
                "code": "653200",
                "name": "和田地区",
                "list": [
                    {
                        "spell": "H",
                        "code": "653201",
                        "name": "和田市"
                    },
                    {
                        "spell": "H",
                        "code": "653221",
                        "name": "和田县"
                    },
                    {
                        "spell": "M",
                        "code": "653222",
                        "name": "墨玉县"
                    },
                    {
                        "spell": "P",
                        "code": "653223",
                        "name": "皮山县"
                    },
                    {
                        "spell": "L",
                        "code": "653224",
                        "name": "洛浦县"
                    },
                    {
                        "spell": "Q",
                        "code": "653225",
                        "name": "策勒县"
                    },
                    {
                        "spell": "Y",
                        "code": "653226",
                        "name": "于田县"
                    },
                    {
                        "spell": "M",
                        "code": "653227",
                        "name": "民丰县"
                    }
                ]
            },
            {
                "spell": "I",
                "code": "654000",
                "name": "伊犁哈萨克自治州",
                "list": [
                    {
                        "spell": "Y",
                        "code": "654002",
                        "name": "伊宁市"
                    },
                    {
                        "spell": "K",
                        "code": "654003",
                        "name": "奎屯市"
                    },
                    {
                        "spell": "Y",
                        "code": "654021",
                        "name": "伊宁县"
                    },
                    {
                        "spell": "Q",
                        "code": "654022",
                        "name": "察布查尔锡伯自治县"
                    },
                    {
                        "spell": "H",
                        "code": "654023",
                        "name": "霍城县"
                    },
                    {
                        "spell": "G",
                        "code": "654024",
                        "name": "巩留县"
                    },
                    {
                        "spell": "X",
                        "code": "654025",
                        "name": "新源县"
                    },
                    {
                        "spell": "Z",
                        "code": "654026",
                        "name": "昭苏县"
                    },
                    {
                        "spell": "T",
                        "code": "654027",
                        "name": "特克斯县"
                    },
                    {
                        "spell": "N",
                        "code": "654028",
                        "name": "尼勒克县"
                    }
                ]
            },
            {
                "spell": "T",
                "code": "654200",
                "name": "塔城地区",
                "list": [
                    {
                        "spell": "T",
                        "code": "654201",
                        "name": "塔城市"
                    },
                    {
                        "spell": "U",
                        "code": "654202",
                        "name": "乌苏市"
                    },
                    {
                        "spell": "E",
                        "code": "654221",
                        "name": "额敏县"
                    },
                    {
                        "spell": "S",
                        "code": "654223",
                        "name": "沙湾县"
                    },
                    {
                        "spell": "T",
                        "code": "654224",
                        "name": "托里县"
                    },
                    {
                        "spell": "Y",
                        "code": "654225",
                        "name": "裕民县"
                    },
                    {
                        "spell": "H",
                        "code": "654226",
                        "name": "和布克赛尔蒙古自治县"
                    }
                ]
            },
            {
                "spell": "A",
                "code": "654300",
                "name": "阿勒泰地区",
                "list": [
                    {
                        "spell": "A",
                        "code": "654301",
                        "name": "阿勒泰市"
                    },
                    {
                        "spell": "B",
                        "code": "654321",
                        "name": "布尔津县"
                    },
                    {
                        "spell": "F",
                        "code": "654322",
                        "name": "富蕴县"
                    },
                    {
                        "spell": "F",
                        "code": "654323",
                        "name": "福海县"
                    },
                    {
                        "spell": "H",
                        "code": "654324",
                        "name": "哈巴河县"
                    },
                    {
                        "spell": "Q",
                        "code": "654325",
                        "name": "青河县"
                    },
                    {
                        "spell": "J",
                        "code": "654326",
                        "name": "吉木乃县"
                    }
                ]
            },
            {
                "spell": "z",
                "code": "659000",
                "name": "自治区直辖县级行政区划",
                "list": [
                    {
                        "spell": "S",
                        "code": "659001",
                        "name": "石河子市"
                    },
                    {
                        "spell": "A",
                        "code": "659002",
                        "name": "阿拉尔市"
                    },
                    {
                        "spell": "T",
                        "code": "659003",
                        "name": "图木舒克市"
                    },
                    {
                        "spell": "W",
                        "code": "659004",
                        "name": "五家渠市"
                    }
                ]
            }
        ]
    }
];


module.exports={
  work_year: work_year,
  work_type: work_type,
  company_size: company_size,
  education: education,
  month_pay: month_pay,
  region: region
}
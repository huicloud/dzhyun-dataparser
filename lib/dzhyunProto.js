"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  dzhyun: {
    options: {
      java_package: "com.dzhyun.proto"
    },
    nested: {
      EnumID: {
        values: {
          IDId: 1,
          IDObj: 2,
          IDTbl: 3,
          IDObjCount: 5,
          IDQuoteDynaSingle: 20,
          IDQuoteKlineSingle: 21,
          IDQuoteTickSingle: 22,
          IDQuoteMinSingle: 23,
          IDNewsInfoValue: 24,
          IDZhiBiaoShuChu: 25,
          IDZhiBiao: 26,
          IDStkData: 27,
          IDPaiXu: 28,
          IDJianPanBaoShuChu: 29,
          IDBlockObjOutput: 33,
          IDBlockPropOutput: 34,
          IDToken: 44,
          IDF10GsgkOutput: 55,
          IDF10CwtsZycwzbOutput: 56,
          IDF10CwtsXjllbzyOutput: 57,
          IDF10ZxjbDjdcwzbOutput: 58,
          IDF10ZxjbdjdlebOutput: 59,
          IDF10GdjcGdhsOutput: 60,
          IDF10GdjcSdgdOutput: 61,
          IDF10GdjcSdltgdOutput: 62,
          IDF10GbfhFhkgOutput: 63,
          IDF10GbfhGbjgOutput: 64,
          IDXinWenXinXiOutput: 65,
          IDXinWenXinXiZhongXinOutput: 66,
          IDYiZhiXinYeJiYuCeOutPut: 68,
          IDYiZhiXinTouZiPinJiOutPut: 69,
          IDGeGuYeJiYuCeOutPut: 70,
          IDGeGuTouZiYanBaoOutPut: 71,
          IDTongJiApp: 73,
          IDQuoteBOrderSingle: 76,
          IDDXSpirit: 77,
          IDGongGaoXinXiOutput: 80,
          IDGongGaoXinXiZhongXinOutput: 81,
          IDF10CpbdZxzbOutput: 82,
          IDF10CpbdKpqkOutput: 83,
          IDF10CpbdCjhbOutput: 84,
          IDF10CwtsLrfpbzyOutput: 85,
          IDF10CwtsZcfzbzyOutput: 86,
          IDF10ZygcOutput: 87,
          IDF10DstxJjltOutput: 88,
          IDF10DstxRzrqOutput: 89,
          IDF10DstxJgccOutput: 90,
          IDF10DstxGdzjcOutput: 91,
          IDF10DstxDzjyOutput: 92,
          IDF10DstxCgbdqkOutput: 93,
          IDF10GlcOutPut: 94,
          IDF10GlcNdbcqkOutPut: 95,
          IDF10ZxjbDjdxjllbOutPut: 96,
          IDF10GdjcKggdOutPut: 97,
          IDF10GdjcSjkzrOutPut: 98,
          IDF10GbfhGbbdOutPut: 99,
          IDF10ZbyzCyqtsszqOutPut: 100,
          IDF10ZbyzCyfssgqOutPut: 101,
          IDF10zbyzRzqkzfyssOutPut: 102,
          IDF10ZbyzXmtzMjzjqkOutPut: 103,
          IDF10ZbyzXmtzMjzjcnxmOutPut: 104,
          IDF10ZbyzXmtzMjzjbgxmOutPut: 105,
          IDF10ZbyzXmtzFmjzjxmOutPut: 106,
          IDF10HydwOutPut: 107,
          IDF10RsrProForecastOutPut: 108,
          IDF10RsrInvestRatingOutPut: 109,
          IDF10RsrEarnPSForeOutPut: 110,
          IDF10RsrResReportOutPut: 111,
          IDDXSpiritStat: 113,
          IDPaiMing: 115,
          IDOverallInfo: 121,
          IDTodayListStocks: 122,
          IDTodayBrokerStocks: 123,
          IDTodayConvertStocks: 124,
          IDTodayIssueStocks: 125,
          IDBrokerDetaileInfo: 126,
          IDStockBrokerInfo: 127,
          IDIssueDetaileInfo: 128,
          IDIssueStatInfo: 129,
          IDBrokerList: 137,
          IDFinanceQuickReport: 138,
          IDNewsDataItem: 147,
          IDStockNews: 148,
          IDAnnouncemtDataItem: 149,
          IDStockAnnouncemt: 150,
          IDSelfNews: 154,
          IDSelfAnnouncemt: 155,
          IDRepCounterRsp: 156,
          IDCounterRsp: 157,
          IDQueryCapitalRsp: 158,
          IDQueryHoldRsp: 159,
          IDQueryOrderRsp: 160,
          IDQueryDealRsp: 161,
          IDCounterSettleRsp: 162,
          IDTradeRuleRsp: 163,
          IDQuoteDividSingle: 170,
          IDF10FundCpbdFbsjjzjzOutput: 179,
          IDF10FundCpbdJjfebdqkOutput: 180,
          IDF10FundCpbdJjgbjbOutput: 181,
          IDF10FundCpbdJjjzbxOutput: 182,
          IDF10FundCpbdJjxxOutput: 183,
          IDF10FundCpbdZfeOutput: 184,
          IDF10FundCwsjJyyjOutput: 185,
          IDF10FundCwsjZcfzOutput: 186,
          IDF10FundCwsjZycwzbOutput: 187,
          IDNewStockInfo: 188,
          IDF10FundCyrHshjgOutput: 190,
          IDF10FundFefhFbsjjcyrjgOutput: 191,
          IDF10FundFefhFhOutput: 192,
          IDF10FundFefhKfsjjjdfebdOutput: 193,
          IDF10FundGpmxBqzdmcgpOutput: 194,
          IDF10FundGpmxBqzdmrgpOutput: 195,
          IDF10FundGpmxQbcgOutput: 196,
          IDF10FundHgzwOutput: 197,
          IDF10FundHytzOutput: 198,
          IDF10FundHytzQdiiOutput: 199,
          IDF10FundJbxxOutput: 200,
          IDF10FundFbsjjgkOutput: 201,
          IDF10FundKfsjjgkOutput: 202,
          IDF10FundJlggJjgsggryOutput: 203,
          IDF10FundJlggJjjlOutput: 204,
          IDF10FundJyyjOutput: 205,
          IDF10FundZccgQsmgpmxOutput: 206,
          IDF10FundZccgQdiiOutput: 207,
          IDF10FundZqtzTzzhOutput: 208,
          IDF10FundZqtzTzzhQdiiOutput: 209,
          IDF10FundZqtzZcmxOutput: 210,
          IDF10FundZycyrOutput: 211,
          IDHistoryTrends: 215,
          IDQuoteDynaMinSingle: 218,
          IDQuoteHistoryMinSingle: 221,
          IDF10FundHbjjxeOutput: 222,
          IDF10BondDfzfzfxOutput: 223,
          IDF10BondDfzfzqxxOutput: 224,
          IDF10BondFlszzfxOutput: 225,
          IDF10BondFlszztkOutput: 226,
          IDF10BondFlszzxxOutput: 227,
          IDF10BondGzxxOutput: 228,
          IDF10BondHgxxOutput: 229,
          IDF10BondKzzfxOutput: 230,
          IDF10BondKzztkOutput: 231,
          IDF10BondKzztzzgjOutput: 232,
          IDF10BondKzzxxOutput: 233,
          IDF10BondQycyrOutput: 234,
          IDF10BondQyzfxOutput: 235,
          IDF10BondQyzxxOutput: 236,
          IDF10BondZqggOutput: 237,
          IDF10BondZqxjlOutput: 238,
          IDF10BondZqzgOutput: 239,
          IDF10ForexDqjjOutput: 240,
          IDF10ForexJqjjOutput: 241,
          IDF10ForexLlhhOutput: 242,
          IDF10ForexQqwhjbzlOutput: 243,
          IDF10ForexShiborlvOutput: 244,
          IDF10ForexWbdjqOutput: 245,
          IDF10ForexWhbzMbOutput: 246,
          IDF10ForexXycjOutput: 247,
          IDF10ForexYqjjOutput: 248,
          IDF10FuturesBzhyOutput: 249,
          IDF10FuturesCpgkOutput: 250,
          IDF10FuturesFkbfOutput: 251,
          IDF10FuturesJsxzOutput: 252,
          IDF10FuturesJygzOutput: 253,
          IDF10FuturesWphyOutput: 254,
          IDF10FuturesYxysOutput: 255,
          IDF10SpotBzhyOutput: 256,
          IDF10SpotFjsmOutput: 257,
          IDF10SpotJygzOutput: 258,
          IDF10SpotPzgkOutput: 259,
          IDF10SpotWphyOutput: 260,
          IDF10SpotYxysOutput: 261,
          IDReportDataItem: 262,
          IDStockReport: 263,
          IDSelfReport: 264,
          IDQuoteFundFlowSingle: 265,
          IDMonthTrends: 266,
          IDQuoteQueueMinSingle: 269,
          IDQuoteBOrderMinSingle: 302
        }
      },
      MSG: {
        fields: {
          Id: {
            rule: "required",
            type: "int32",
            id: 1
          },
          Obj: {
            type: "string",
            id: 2
          },
          Tbl: {
            type: "Table",
            id: 3
          },
          ObjCount: {
            type: "int32",
            id: 5
          },
          RepDataQuoteDynaSingle: {
            rule: "repeated",
            type: "QuoteDynaSingle",
            id: 20
          },
          RepDataQuoteKlineSingle: {
            rule: "repeated",
            type: "QuoteKlineSingle",
            id: 21
          },
          RepDataQuoteTickSingle: {
            rule: "repeated",
            type: "QuoteTickSingle",
            id: 22
          },
          RepDataQuoteMinSingle: {
            rule: "repeated",
            type: "QuoteMinSingle",
            id: 23
          },
          RepDataNewsInfoValue: {
            rule: "repeated",
            type: "NewsInfoValue",
            id: 24
          },
          RepDataZhiBiaoShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu",
            id: 25
          },
          RepDataZhiBiao: {
            rule: "repeated",
            type: "ZhiBiao",
            id: 26
          },
          RepDataStkData: {
            rule: "repeated",
            type: "StkData",
            id: 27
          },
          RepDataPaiXu: {
            rule: "repeated",
            type: "PaiXu",
            id: 28
          },
          RepDataJianPanBaoShuChu: {
            rule: "repeated",
            type: "JianPanBaoShuChu",
            id: 29
          },
          RepDataBlockObjOutput: {
            rule: "repeated",
            type: "BlockObjOutput",
            id: 33
          },
          RepDataBlockPropOutput: {
            rule: "repeated",
            type: "BlockPropOutput",
            id: 34
          },
          RepDataToken: {
            rule: "repeated",
            type: "Token",
            id: 44
          },
          RepDataF10GsgkOutput: {
            rule: "repeated",
            type: "F10GsgkOutput",
            id: 55
          },
          RepDataF10CwtsZycwzbOutput: {
            rule: "repeated",
            type: "F10CwtsZycwzbOutput",
            id: 56
          },
          RepDataF10CwtsXjllbzyOutput: {
            rule: "repeated",
            type: "F10CwtsXjllbzyOutput",
            id: 57
          },
          RepDataF10ZxjbDjdcwzbOutput: {
            rule: "repeated",
            type: "F10ZxjbDjdcwzbOutput",
            id: 58
          },
          RepDataF10ZxjbdjdlebOutput: {
            rule: "repeated",
            type: "F10ZxjbdjdlebOutput",
            id: 59
          },
          RepDataF10GdjcGdhsOutput: {
            rule: "repeated",
            type: "F10GdjcGdhsOutput",
            id: 60
          },
          RepDataF10GdjcSdgdOutput: {
            rule: "repeated",
            type: "F10GdjcSdgdOutput",
            id: 61
          },
          RepDataF10GdjcSdltgdOutput: {
            rule: "repeated",
            type: "F10GdjcSdltgdOutput",
            id: 62
          },
          RepDataF10GbfhFhkgOutput: {
            rule: "repeated",
            type: "F10GbfhFhkgOutput",
            id: 63
          },
          RepDataF10GbfhGbjgOutput: {
            rule: "repeated",
            type: "F10GbfhGbjgOutput",
            id: 64
          },
          RepDataXinWenXinXiOutput: {
            rule: "repeated",
            type: "XinWenXinXiOutput",
            id: 65
          },
          RepDataXinWenXinXiZhongXinOutput: {
            rule: "repeated",
            type: "XinWenXinXiZhongXinOutput",
            id: 66
          },
          RepDataYiZhiXinYeJiYuCeOutPut: {
            rule: "repeated",
            type: "YiZhiXinYeJiYuCeOutPut",
            id: 68
          },
          RepDataYiZhiXinTouZiPinJiOutPut: {
            rule: "repeated",
            type: "YiZhiXinTouZiPinJiOutPut",
            id: 69
          },
          RepDataGeGuYeJiYuCeOutPut: {
            rule: "repeated",
            type: "GeGuYeJiYuCeOutPut",
            id: 70
          },
          RepDataGeGuTouZiYanBaoOutPut: {
            rule: "repeated",
            type: "GeGuTouZiYanBaoOutPut",
            id: 71
          },
          RepDataTongJiApp: {
            rule: "repeated",
            type: "TongJiApp",
            id: 73
          },
          RepDataQuoteBOrderSingle: {
            rule: "repeated",
            type: "QuoteBOrderSingle",
            id: 76
          },
          RepDataDXSpirit: {
            rule: "repeated",
            type: "DXSpirit",
            id: 77
          },
          RepDataGongGaoXinXiOutput: {
            rule: "repeated",
            type: "GongGaoXinXiOutput",
            id: 80
          },
          RepDataGongGaoXinXiZhongXinOutput: {
            rule: "repeated",
            type: "GongGaoXinXiZhongXinOutput",
            id: 81
          },
          RepDataF10CpbdZxzbOutput: {
            rule: "repeated",
            type: "F10CpbdZxzbOutput",
            id: 82
          },
          RepDataF10CpbdKpqkOutput: {
            rule: "repeated",
            type: "F10CpbdKpqkOutput",
            id: 83
          },
          RepDataF10CpbdCjhbOutput: {
            rule: "repeated",
            type: "F10CpbdCjhbOutput",
            id: 84
          },
          RepDataF10CwtsLrfpbzyOutput: {
            rule: "repeated",
            type: "F10CwtsLrfpbzyOutput",
            id: 85
          },
          RepDataF10CwtsZcfzbzyOutput: {
            rule: "repeated",
            type: "F10CwtsZcfzbzyOutput",
            id: 86
          },
          RepDataF10ZygcOutput: {
            rule: "repeated",
            type: "F10ZygcOutput",
            id: 87
          },
          RepDataF10DstxJjltOutput: {
            rule: "repeated",
            type: "F10DstxJjltOutput",
            id: 88
          },
          RepDataF10DstxRzrqOutput: {
            rule: "repeated",
            type: "F10DstxRzrqOutput",
            id: 89
          },
          RepDataF10DstxJgccOutput: {
            rule: "repeated",
            type: "F10DstxJgccOutput",
            id: 90
          },
          RepDataF10DstxGdzjcOutput: {
            rule: "repeated",
            type: "F10DstxGdzjcOutput",
            id: 91
          },
          RepDataF10DstxDzjyOutput: {
            rule: "repeated",
            type: "F10DstxDzjyOutput",
            id: 92
          },
          RepDataF10DstxCgbdqkOutput: {
            rule: "repeated",
            type: "F10DstxCgbdqkOutput",
            id: 93
          },
          RepDataF10GlcOutPut: {
            rule: "repeated",
            type: "F10GlcOutPut",
            id: 94
          },
          RepDataF10GlcNdbcqkOutPut: {
            rule: "repeated",
            type: "F10GlcNdbcqkOutPut",
            id: 95
          },
          RepDataF10ZxjbDjdxjllbOutPut: {
            rule: "repeated",
            type: "F10ZxjbDjdxjllbOutPut",
            id: 96
          },
          RepDataF10GdjcKggdOutPut: {
            rule: "repeated",
            type: "F10GdjcKggdOutPut",
            id: 97
          },
          RepDataF10GdjcSjkzrOutPut: {
            rule: "repeated",
            type: "F10GdjcSjkzrOutPut",
            id: 98
          },
          RepDataF10GbfhGbbdOutPut: {
            rule: "repeated",
            type: "F10GbfhGbbdOutPut",
            id: 99
          },
          RepDataF10ZbyzCyqtsszqOutPut: {
            rule: "repeated",
            type: "F10ZbyzCyqtsszqOutPut",
            id: 100
          },
          RepDataF10ZbyzCyfssgqOutPut: {
            rule: "repeated",
            type: "F10ZbyzCyfssgqOutPut",
            id: 101
          },
          RepDataF10zbyzRzqkzfyssOutPut: {
            rule: "repeated",
            type: "F10zbyzRzqkzfyssOutPut",
            id: 102
          },
          RepDataF10ZbyzXmtzMjzjqkOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjqkOutPut",
            id: 103
          },
          RepDataF10ZbyzXmtzMjzjcnxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjcnxmOutPut",
            id: 104
          },
          RepDataF10ZbyzXmtzMjzjbgxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjbgxmOutPut",
            id: 105
          },
          RepDataF10ZbyzXmtzFmjzjxmOutPut: {
            rule: "repeated",
            type: "F10ZbyzXmtzFmjzjxmOutPut",
            id: 106
          },
          RepDataF10HydwOutPut: {
            rule: "repeated",
            type: "F10HydwOutPut",
            id: 107
          },
          RepDataF10RsrProForecastOutPut: {
            rule: "repeated",
            type: "F10RsrProForecastOutPut",
            id: 108
          },
          RepDataF10RsrInvestRatingOutPut: {
            rule: "repeated",
            type: "F10RsrInvestRatingOutPut",
            id: 109
          },
          RepDataF10RsrEarnPSForeOutPut: {
            rule: "repeated",
            type: "F10RsrEarnPSForeOutPut",
            id: 110
          },
          RepDataF10RsrResReportOutPut: {
            rule: "repeated",
            type: "F10RsrResReportOutPut",
            id: 111
          },
          RepDataDXSpiritStat: {
            rule: "repeated",
            type: "DXSpiritStat",
            id: 113
          },
          RepDataPaiMing: {
            rule: "repeated",
            type: "PaiMing",
            id: 115
          },
          RepDataOverallInfo: {
            rule: "repeated",
            type: "OverallInfo",
            id: 121
          },
          RepDataTodayListStocks: {
            rule: "repeated",
            type: "TodayListStocks",
            id: 122
          },
          RepDataTodayBrokerStocks: {
            rule: "repeated",
            type: "TodayBrokerStocks",
            id: 123
          },
          RepDataTodayConvertStocks: {
            rule: "repeated",
            type: "TodayConvertStocks",
            id: 124
          },
          RepDataTodayIssueStocks: {
            rule: "repeated",
            type: "TodayIssueStocks",
            id: 125
          },
          RepDataBrokerDetaileInfo: {
            rule: "repeated",
            type: "BrokerDetaileInfo",
            id: 126
          },
          RepDataStockBrokerInfo: {
            rule: "repeated",
            type: "StockBrokerInfo",
            id: 127
          },
          RepDataIssueDetaileInfo: {
            rule: "repeated",
            type: "IssueDetaileInfo",
            id: 128
          },
          RepDataIssueStatInfo: {
            rule: "repeated",
            type: "IssueStatInfo",
            id: 129
          },
          RepDataBrokerList: {
            rule: "repeated",
            type: "BrokerList",
            id: 137
          },
          RepDataFinanceQuickReport: {
            rule: "repeated",
            type: "FinanceQuickReport",
            id: 138
          },
          RepDataNewsDataItem: {
            rule: "repeated",
            type: "NewsDataItem",
            id: 147
          },
          RepDataStockNews: {
            rule: "repeated",
            type: "StockNews",
            id: 148
          },
          RepDataAnnouncemtDataItem: {
            rule: "repeated",
            type: "AnnouncemtDataItem",
            id: 149
          },
          RepDataStockAnnouncemt: {
            rule: "repeated",
            type: "StockAnnouncemt",
            id: 150
          },
          RepDataSelfNews: {
            rule: "repeated",
            type: "SelfNews",
            id: 154
          },
          RepDataSelfAnnouncemt: {
            rule: "repeated",
            type: "SelfAnnouncemt",
            id: 155
          },
          RepDataRepCounterRsp: {
            rule: "repeated",
            type: "RepCounterRsp",
            id: 156
          },
          RepDataCounterRsp: {
            rule: "repeated",
            type: "CounterRsp",
            id: 157
          },
          RepDataQueryCapitalRsp: {
            rule: "repeated",
            type: "QueryCapitalRsp",
            id: 158
          },
          RepDataQueryHoldRsp: {
            rule: "repeated",
            type: "QueryHoldRsp",
            id: 159
          },
          RepDataQueryOrderRsp: {
            rule: "repeated",
            type: "QueryOrderRsp",
            id: 160
          },
          RepDataQueryDealRsp: {
            rule: "repeated",
            type: "QueryDealRsp",
            id: 161
          },
          RepDataCounterSettleRsp: {
            rule: "repeated",
            type: "CounterSettleRsp",
            id: 162
          },
          RepDataTradeRuleRsp: {
            rule: "repeated",
            type: "TradeRuleRsp",
            id: 163
          },
          RepDataQuoteDividSingle: {
            rule: "repeated",
            type: "QuoteDividSingle",
            id: 170
          },
          RepDataF10FundCpbdFbsjjzjzOutput: {
            rule: "repeated",
            type: "F10FundCpbdFbsjjzjzOutput",
            id: 179
          },
          RepDataF10FundCpbdJjfebdqkOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjfebdqkOutput",
            id: 180
          },
          RepDataF10FundCpbdJjgbjbOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjgbjbOutput",
            id: 181
          },
          RepDataF10FundCpbdJjjzbxOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjjzbxOutput",
            id: 182
          },
          RepDataF10FundCpbdJjxxOutput: {
            rule: "repeated",
            type: "F10FundCpbdJjxxOutput",
            id: 183
          },
          RepDataF10FundCpbdZfeOutput: {
            rule: "repeated",
            type: "F10FundCpbdZfeOutput",
            id: 184
          },
          RepDataF10FundCwsjJyyjOutput: {
            rule: "repeated",
            type: "F10FundCwsjJyyjOutput",
            id: 185
          },
          RepDataF10FundCwsjZcfzOutput: {
            rule: "repeated",
            type: "F10FundCwsjZcfzOutput",
            id: 186
          },
          RepDataF10FundCwsjZycwzbOutput: {
            rule: "repeated",
            type: "F10FundCwsjZycwzbOutput",
            id: 187
          },
          RepDataNewStockInfo: {
            rule: "repeated",
            type: "NewStockInfo",
            id: 188
          },
          RepDataF10FundCyrHshjgOutput: {
            rule: "repeated",
            type: "F10FundCyrHshjgOutput",
            id: 190
          },
          RepDataF10FundFefhFbsjjcyrjgOutput: {
            rule: "repeated",
            type: "F10FundFefhFbsjjcyrjgOutput",
            id: 191
          },
          RepDataF10FundFefhFhOutput: {
            rule: "repeated",
            type: "F10FundFefhFhOutput",
            id: 192
          },
          RepDataF10FundFefhKfsjjjdfebdOutput: {
            rule: "repeated",
            type: "F10FundFefhKfsjjjdfebdOutput",
            id: 193
          },
          RepDataF10FundGpmxBqzdmcgpOutput: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmcgpOutput",
            id: 194
          },
          RepDataF10FundGpmxBqzdmrgpOutput: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmrgpOutput",
            id: 195
          },
          RepDataF10FundGpmxQbcgOutput: {
            rule: "repeated",
            type: "F10FundGpmxQbcgOutput",
            id: 196
          },
          RepDataF10FundHgzwOutput: {
            rule: "repeated",
            type: "F10FundHgzwOutput",
            id: 197
          },
          RepDataF10FundHytzOutput: {
            rule: "repeated",
            type: "F10FundHytzOutput",
            id: 198
          },
          RepDataF10FundHytzQdiiOutput: {
            rule: "repeated",
            type: "F10FundHytzQdiiOutput",
            id: 199
          },
          RepDataF10FundJbxxOutput: {
            rule: "repeated",
            type: "F10FundJbxxOutput",
            id: 200
          },
          RepDataF10FundFbsjjgkOutput: {
            rule: "repeated",
            type: "F10FundFbsjjgkOutput",
            id: 201
          },
          RepDataF10FundKfsjjgkOutput: {
            rule: "repeated",
            type: "F10FundKfsjjgkOutput",
            id: 202
          },
          RepDataF10FundJlggJjgsggryOutput: {
            rule: "repeated",
            type: "F10FundJlggJjgsggryOutput",
            id: 203
          },
          RepDataF10FundJlggJjjlOutput: {
            rule: "repeated",
            type: "F10FundJlggJjjlOutput",
            id: 204
          },
          RepDataF10FundJyyjOutput: {
            rule: "repeated",
            type: "F10FundJyyjOutput",
            id: 205
          },
          RepDataF10FundZccgQsmgpmxOutput: {
            rule: "repeated",
            type: "F10FundZccgQsmgpmxOutput",
            id: 206
          },
          RepDataF10FundZccgQdiiOutput: {
            rule: "repeated",
            type: "F10FundZccgQdiiOutput",
            id: 207
          },
          RepDataF10FundZqtzTzzhOutput: {
            rule: "repeated",
            type: "F10FundZqtzTzzhOutput",
            id: 208
          },
          RepDataF10FundZqtzTzzhQdiiOutput: {
            rule: "repeated",
            type: "F10FundZqtzTzzhQdiiOutput",
            id: 209
          },
          RepDataF10FundZqtzZcmxOutput: {
            rule: "repeated",
            type: "F10FundZqtzZcmxOutput",
            id: 210
          },
          RepDataF10FundZycyrOutput: {
            rule: "repeated",
            type: "F10FundZycyrOutput",
            id: 211
          },
          RepDataHistoryTrends: {
            rule: "repeated",
            type: "HistoryTrends",
            id: 215
          },
          RepDataQuoteDynaMinSingle: {
            rule: "repeated",
            type: "QuoteDynaMinSingle",
            id: 218
          },
          RepDataQuoteHistoryMinSingle: {
            rule: "repeated",
            type: "QuoteHistoryMinSingle",
            id: 221
          },
          RepDataF10FundHbjjxeOutput: {
            rule: "repeated",
            type: "F10FundHbjjxeOutput",
            id: 222
          },
          RepDataF10BondDfzfzfxOutput: {
            rule: "repeated",
            type: "F10BondDfzfzfxOutput",
            id: 223
          },
          RepDataF10BondDfzfzqxxOutput: {
            rule: "repeated",
            type: "F10BondDfzfzqxxOutput",
            id: 224
          },
          RepDataF10BondFlszzfxOutput: {
            rule: "repeated",
            type: "F10BondFlszzfxOutput",
            id: 225
          },
          RepDataF10BondFlszztkOutput: {
            rule: "repeated",
            type: "F10BondFlszztkOutput",
            id: 226
          },
          RepDataF10BondFlszzxxOutput: {
            rule: "repeated",
            type: "F10BondFlszzxxOutput",
            id: 227
          },
          RepDataF10BondGzxxOutput: {
            rule: "repeated",
            type: "F10BondGzxxOutput",
            id: 228
          },
          RepDataF10BondHgxxOutput: {
            rule: "repeated",
            type: "F10BondHgxxOutput",
            id: 229
          },
          RepDataF10BondKzzfxOutput: {
            rule: "repeated",
            type: "F10BondKzzfxOutput",
            id: 230
          },
          RepDataF10BondKzztkOutput: {
            rule: "repeated",
            type: "F10BondKzztkOutput",
            id: 231
          },
          RepDataF10BondKzztzzgjOutput: {
            rule: "repeated",
            type: "F10BondKzztzzgjOutput",
            id: 232
          },
          RepDataF10BondKzzxxOutput: {
            rule: "repeated",
            type: "F10BondKzzxxOutput",
            id: 233
          },
          RepDataF10BondQycyrOutput: {
            rule: "repeated",
            type: "F10BondQycyrOutput",
            id: 234
          },
          RepDataF10BondQyzfxOutput: {
            rule: "repeated",
            type: "F10BondQyzfxOutput",
            id: 235
          },
          RepDataF10BondQyzxxOutput: {
            rule: "repeated",
            type: "F10BondQyzxxOutput",
            id: 236
          },
          RepDataF10BondZqggOutput: {
            rule: "repeated",
            type: "F10BondZqggOutput",
            id: 237
          },
          RepDataF10BondZqxjlOutput: {
            rule: "repeated",
            type: "F10BondZqxjlOutput",
            id: 238
          },
          RepDataF10BondZqzgOutput: {
            rule: "repeated",
            type: "F10BondZqzgOutput",
            id: 239
          },
          RepDataF10ForexDqjjOutput: {
            rule: "repeated",
            type: "F10ForexDqjjOutput",
            id: 240
          },
          RepDataF10ForexJqjjOutput: {
            rule: "repeated",
            type: "F10ForexJqjjOutput",
            id: 241
          },
          RepDataF10ForexLlhhOutput: {
            rule: "repeated",
            type: "F10ForexLlhhOutput",
            id: 242
          },
          RepDataF10ForexQqwhjbzlOutput: {
            rule: "repeated",
            type: "F10ForexQqwhjbzlOutput",
            id: 243
          },
          RepDataF10ForexShiborlvOutput: {
            rule: "repeated",
            type: "F10ForexShiborlvOutput",
            id: 244
          },
          RepDataF10ForexWbdjqOutput: {
            rule: "repeated",
            type: "F10ForexWbdjqOutput",
            id: 245
          },
          RepDataF10ForexWhbzMbOutput: {
            rule: "repeated",
            type: "F10ForexWhbzMbOutput",
            id: 246
          },
          RepDataF10ForexXycjOutput: {
            rule: "repeated",
            type: "F10ForexXycjOutput",
            id: 247
          },
          RepDataF10ForexYqjjOutput: {
            rule: "repeated",
            type: "F10ForexYqjjOutput",
            id: 248
          },
          RepDataF10FuturesBzhyOutput: {
            rule: "repeated",
            type: "F10FuturesBzhyOutput",
            id: 249
          },
          RepDataF10FuturesCpgkOutput: {
            rule: "repeated",
            type: "F10FuturesCpgkOutput",
            id: 250
          },
          RepDataF10FuturesFkbfOutput: {
            rule: "repeated",
            type: "F10FuturesFkbfOutput",
            id: 251
          },
          RepDataF10FuturesJsxzOutput: {
            rule: "repeated",
            type: "F10FuturesJsxzOutput",
            id: 252
          },
          RepDataF10FuturesJygzOutput: {
            rule: "repeated",
            type: "F10FuturesJygzOutput",
            id: 253
          },
          RepDataF10FuturesWphyOutput: {
            rule: "repeated",
            type: "F10FuturesWphyOutput",
            id: 254
          },
          RepDataF10FuturesYxysOutput: {
            rule: "repeated",
            type: "F10FuturesYxysOutput",
            id: 255
          },
          RepDataF10SpotBzhyOutput: {
            rule: "repeated",
            type: "F10SpotBzhyOutput",
            id: 256
          },
          RepDataF10SpotFjsmOutput: {
            rule: "repeated",
            type: "F10SpotFjsmOutput",
            id: 257
          },
          RepDataF10SpotJygzOutput: {
            rule: "repeated",
            type: "F10SpotJygzOutput",
            id: 258
          },
          RepDataF10SpotPzgkOutput: {
            rule: "repeated",
            type: "F10SpotPzgkOutput",
            id: 259
          },
          RepDataF10SpotWphyOutput: {
            rule: "repeated",
            type: "F10SpotWphyOutput",
            id: 260
          },
          RepDataF10SpotYxysOutput: {
            rule: "repeated",
            type: "F10SpotYxysOutput",
            id: 261
          },
          RepDataReportDataItem: {
            rule: "repeated",
            type: "ReportDataItem",
            id: 262
          },
          RepDataStockReport: {
            rule: "repeated",
            type: "StockReport",
            id: 263
          },
          RepDataSelfReport: {
            rule: "repeated",
            type: "SelfReport",
            id: 264
          },
          RepDataQuoteFundFlowSingle: {
            rule: "repeated",
            type: "QuoteFundFlowSingle",
            id: 265
          },
          RepDataMonthTrends: {
            rule: "repeated",
            type: "MonthTrends",
            id: 266
          },
          RepDataQuoteQueueMinSingle: {
            rule: "repeated",
            type: "QuoteQueueMinSingle",
            id: 269
          },
          RepDataQuoteBOrderMinSingle: {
            rule: "repeated",
            type: "QuoteBOrderMinSingle",
            id: 302
          }
        }
      },
      InfoType: {
        values: {
          Type_Unknow: 0,
          Type_Int: 105,
          Type_SInt: 120,
          Type_Float: 102,
          Type_Double: 100,
          Type_String: 115,
          Type_Binary: 98,
          Type_Table: 116,
          Type_Array: 128,
          Type_ArrayInt: 233,
          Type_ArraySInt: 248,
          Type_ArrayFloat: 230,
          Type_ArrayDouble: 228,
          Type_ArrayString: 243
        }
      },
      CInfo: {
        fields: {
          Name: {
            type: "string",
            id: 1
          },
          Type: {
            type: "int32",
            id: 2
          },
          Ratio: {
            type: "int32",
            id: 3
          }
        }
      },
      CArray: {
        fields: {
          iValues: {
            rule: "repeated",
            type: "int64",
            id: 1
          },
          fValues: {
            rule: "repeated",
            type: "float",
            id: 2
          },
          dValues: {
            rule: "repeated",
            type: "double",
            id: 3
          },
          sValues: {
            rule: "repeated",
            type: "string",
            id: 4
          }
        }
      },
      CData: {
        fields: {
          Index: {
            rule: "required",
            type: "int32",
            id: 1
          },
          iValues: {
            rule: "repeated",
            type: "int64",
            id: 2
          },
          fValues: {
            rule: "repeated",
            type: "float",
            id: 3
          },
          dValues: {
            rule: "repeated",
            type: "double",
            id: 4
          },
          sValues: {
            rule: "repeated",
            type: "string",
            id: 5
          },
          bValues: {
            rule: "repeated",
            type: "bytes",
            id: 6
          },
          tValues: {
            rule: "repeated",
            type: "Table",
            id: 7
          },
          aValues: {
            rule: "repeated",
            type: "CArray",
            id: 8
          },
          xValues: {
            rule: "repeated",
            type: "sint64",
            id: 9
          }
        }
      },
      CDataX: {
        fields: {
          Index: {
            rule: "required",
            type: "int32",
            id: 1
          },
          iValue: {
            type: "int64",
            id: 2
          },
          fValue: {
            type: "float",
            id: 3
          },
          dValue: {
            type: "double",
            id: 4
          },
          sValue: {
            type: "string",
            id: 5
          },
          bValues: {
            type: "bytes",
            id: 6
          },
          tValue: {
            type: "Table",
            id: 7
          },
          aValues: {
            type: "CArray",
            id: 8
          }
        }
      },
      Table: {
        fields: {
          Tiid: {
            type: "int32",
            id: 1
          },
          Info: {
            rule: "repeated",
            type: "CInfo",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "CData",
            id: 3
          },
          DataX: {
            rule: "repeated",
            type: "CDataX",
            id: 4
          },
          Name: {
            type: "string",
            id: 5
          },
          Memo: {
            type: "string",
            id: 6
          }
        }
      },
      StkData: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          JiaoYiDaiMa: {
            type: "string",
            id: 2
          },
          ZhongWenJianCheng: {
            type: "string",
            id: 3
          },
          ZuiXinJia: {
            type: "int64",
            id: 4
          },
          KaiPanJia: {
            type: "int64",
            id: 5
          },
          ZuiGaoJia: {
            type: "int64",
            id: 6
          },
          ZuiDiJia: {
            type: "int64",
            id: 7
          },
          ZuoShou: {
            type: "int64",
            id: 8
          },
          JunJia: {
            type: "int64",
            id: 9
          },
          ZhangDie: {
            type: "int64",
            id: 10
          },
          ZhangFu: {
            type: "int64",
            id: 11
          },
          ZhenFu: {
            type: "int64",
            id: 12
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 13
          },
          XianShou: {
            type: "int64",
            id: 14
          },
          ChengJiaoE: {
            type: "int64",
            id: 15
          },
          ZongChengJiaoBiShu: {
            type: "int64",
            id: 16
          },
          MeiBiChengJiaoGuShu: {
            type: "int64",
            id: 17
          },
          HuanShou: {
            type: "int64",
            id: 18
          },
          LiangBi: {
            type: "int64",
            id: 19
          },
          NeiPan: {
            type: "int64",
            id: 20
          },
          WaiPan: {
            type: "int64",
            id: 21
          },
          ZongMaiRu: {
            type: "int64",
            id: 22
          },
          ZongMaiChu: {
            type: "int64",
            id: 23
          },
          ZongMaiRuJunJia: {
            type: "int64",
            id: 24
          },
          ZongMaiChuJunJia: {
            type: "int64",
            id: 25
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 26
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 27
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 28
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 29
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 30
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 31
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 32
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 33
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 34
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 35
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 36
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 37
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 38
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 39
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 40
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 41
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 42
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 43
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 44
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 45
          },
          WeiBi: {
            type: "int64",
            id: 46
          },
          WeiCha: {
            type: "int64",
            id: 47
          },
          ZhangSu: {
            type: "int64",
            id: 48
          },
          JunLiang5Ri: {
            type: "int64",
            id: 49
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 50
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 51
          },
          PingPanJiaShu: {
            type: "int64",
            id: 52
          },
          AGuShangZhangJiaShu: {
            type: "int64",
            id: 53
          },
          AGuXiaDieJiaShu: {
            type: "int64",
            id: 54
          },
          AGuPingPanJiaShu: {
            type: "int64",
            id: 55
          },
          AGuChengJiaoE: {
            type: "int64",
            id: 56
          },
          BGuShangZhangJiaShu: {
            type: "int64",
            id: 57
          },
          BGuXiaDieJiaShu: {
            type: "int64",
            id: 58
          },
          BGuPingPanJiaShu: {
            type: "int64",
            id: 59
          },
          BGuChengJiaoE: {
            type: "int64",
            id: 60
          },
          JiJinShangZhangJiaShu: {
            type: "int64",
            id: 61
          },
          JiJinXiaDieJiaShu: {
            type: "int64",
            id: 62
          },
          JiJinPingPanJiaShu: {
            type: "int64",
            id: 63
          },
          JiJinChengJiaoE: {
            type: "int64",
            id: 64
          },
          QiTaShangZhangJiaShu: {
            type: "int64",
            id: 65
          },
          QiTaXiaDieJiaShu: {
            type: "int64",
            id: 66
          },
          QiTaPingPanJiaShu: {
            type: "int64",
            id: 67
          },
          QiTaChengJiaoE: {
            type: "int64",
            id: 68
          },
          MaiRuDanShu: {
            type: "int64",
            id: 69
          },
          MaiChuDanShu: {
            type: "int64",
            id: 70
          },
          FenZhongZhangFu1: {
            type: "int64",
            id: 77
          },
          FenZhongZhangFu2: {
            type: "int64",
            id: 78
          },
          FenZhongZhangFu3: {
            type: "int64",
            id: 79
          },
          FenZhongZhangFu4: {
            type: "int64",
            id: 80
          },
          FenZhongZhangFu5: {
            type: "int64",
            id: 81
          },
          ShiYingLv: {
            type: "int64",
            id: 82
          },
          ZhangTing: {
            type: "int64",
            id: 83
          },
          DieTing: {
            type: "int64",
            id: 84
          },
          ShiChangMingCheng: {
            type: "string",
            id: 85
          },
          ShiChangDuanMingCheng: {
            type: "string",
            id: 86
          },
          JiGouChiHuoShu: {
            type: "int64",
            id: 87
          },
          JiGouTuHuoShu: {
            type: "int64",
            id: 88
          },
          JiGouChiHuoLiang: {
            type: "int64",
            id: 89
          },
          JiGouTuHuoLiang: {
            type: "int64",
            id: 90
          },
          JiGouChiHuoJunE: {
            type: "int64",
            id: 91
          },
          JiGouTuHuoJunE: {
            type: "int64",
            id: 92
          },
          MeiShouGuShu: {
            type: "int64",
            id: 93
          },
          JiaoYiDanWei: {
            type: "int64",
            id: 94
          },
          ShiXiaoLv: {
            type: "int64",
            id: 95
          },
          ShiJian: {
            type: "int64",
            id: 96
          },
          ShiJingLv: {
            type: "int64",
            id: 97
          },
          ZongShiZhi: {
            type: "int64",
            id: 98
          },
          LiuTongShiZhi: {
            type: "int64",
            id: 99
          },
          RiZhangFu5: {
            type: "int64",
            id: 101
          },
          RiPingJunZhangFu3: {
            type: "int64",
            id: 102
          },
          JingTaiShiYingLv: {
            type: "int64",
            id: 103
          },
          RongZiYuEZhangFu: {
            type: "int64",
            id: 104
          },
          RongZiYuELiuTongShiZhiBiLv: {
            type: "int64",
            id: 105
          },
          ZiChanFuZhaiLv: {
            type: "int64",
            id: 106
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 107
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 108
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 109
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 110
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 111
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 112
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 113
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 114
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 115
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 116
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 117
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 118
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 119
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 120
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 121
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 122
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 123
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 124
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 125
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 126
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 127
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 128
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 129
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 130
          },
          DaDanDangRiLiuRuE: {
            type: "int64",
            id: 131
          },
          DaDanLiuRuE5: {
            type: "int64",
            id: 132
          },
          DDX: {
            type: "int64",
            id: 133
          },
          DDXPiaoHongTianShu10: {
            type: "int64",
            id: 134
          },
          DDXZongHe10: {
            type: "int64",
            id: 135
          },
          DDXBiaoZhunCha10: {
            type: "int64",
            id: 136
          },
          DDXDDXBiaoZhunCha10BiZhi: {
            type: "int64",
            id: 137
          },
          ShiFouTingPai: {
            type: "int64",
            id: 138
          },
          DaDanLiuRuZongE: {
            type: "int64",
            id: 140
          },
          DaDanLiuChuZongE: {
            type: "int64",
            id: 141
          },
          DaDanLiuRuZongE5: {
            type: "int64",
            id: 142
          },
          DaDanLiuChuZongE5: {
            type: "int64",
            id: 143
          },
          DDXLianXuPiaoHongTianShu: {
            type: "int64",
            id: 144
          },
          MA1minMA1: {
            type: "int64",
            id: 200
          },
          MA1minMA2: {
            type: "int64",
            id: 201
          },
          MA1minMA3: {
            type: "int64",
            id: 202
          },
          MA1minMA4: {
            type: "int64",
            id: 203
          },
          MA1minMA5: {
            type: "int64",
            id: 204
          },
          MA1minMA6: {
            type: "int64",
            id: 205
          },
          MA5minMA1: {
            type: "int64",
            id: 206
          },
          MA5minMA2: {
            type: "int64",
            id: 207
          },
          MA5minMA3: {
            type: "int64",
            id: 208
          },
          MA5minMA4: {
            type: "int64",
            id: 209
          },
          MA5minMA5: {
            type: "int64",
            id: 210
          },
          MA5minMA6: {
            type: "int64",
            id: 211
          },
          MA1dayMA1: {
            type: "int64",
            id: 212
          },
          MA1dayMA2: {
            type: "int64",
            id: 213
          },
          MA1dayMA3: {
            type: "int64",
            id: 214
          },
          MA1dayMA4: {
            type: "int64",
            id: 215
          },
          MA1dayMA5: {
            type: "int64",
            id: 216
          },
          MA1dayMA6: {
            type: "int64",
            id: 217
          },
          BOLL1minMID: {
            type: "int64",
            id: 218
          },
          BOLL1minUPPER: {
            type: "int64",
            id: 219
          },
          BOLL1minLOWER: {
            type: "int64",
            id: 220
          },
          BOLL5minMID: {
            type: "int64",
            id: 221
          },
          BOLL5minUPPER: {
            type: "int64",
            id: 222
          },
          BOLL5minLOWER: {
            type: "int64",
            id: 223
          },
          BOLL1dayMID: {
            type: "int64",
            id: 224
          },
          BOLL1dayUPPER: {
            type: "int64",
            id: 225
          },
          BOLL1dayLOWER: {
            type: "int64",
            id: 226
          },
          VOL1min: {
            type: "int64",
            id: 227
          },
          VOL1minMA1: {
            type: "int64",
            id: 228
          },
          VOL1minMA2: {
            type: "int64",
            id: 229
          },
          VOL1minMA3: {
            type: "int64",
            id: 230
          },
          VOL5min: {
            type: "int64",
            id: 231
          },
          VOL5minMA1: {
            type: "int64",
            id: 232
          },
          VOL5minMA2: {
            type: "int64",
            id: 233
          },
          VOL5minMA3: {
            type: "int64",
            id: 234
          },
          VOL1day: {
            type: "int64",
            id: 235
          },
          VOL1dayMA1: {
            type: "int64",
            id: 236
          },
          VOL1dayMA2: {
            type: "int64",
            id: 237
          },
          VOL1dayMA3: {
            type: "int64",
            id: 238
          },
          ARBR1minAR: {
            type: "int64",
            id: 239
          },
          ARBR1minBR: {
            type: "int64",
            id: 240
          },
          ARBR5minAR: {
            type: "int64",
            id: 241
          },
          ARBR5minBR: {
            type: "int64",
            id: 242
          },
          ARBR1dayAR: {
            type: "int64",
            id: 243
          },
          ARBR1dayBR: {
            type: "int64",
            id: 244
          },
          BIAS1minBIAS1: {
            type: "int64",
            id: 245
          },
          BIAS1minBIAS2: {
            type: "int64",
            id: 246
          },
          BIAS1minBIAS3: {
            type: "int64",
            id: 247
          },
          BIAS5minBIAS1: {
            type: "int64",
            id: 248
          },
          BIAS5minBIAS2: {
            type: "int64",
            id: 249
          },
          BIAS5minBIAS3: {
            type: "int64",
            id: 250
          },
          BIAS1dayBIAS1: {
            type: "int64",
            id: 251
          },
          BIAS1dayBIAS2: {
            type: "int64",
            id: 252
          },
          BIAS1dayBIAS3: {
            type: "int64",
            id: 253
          },
          CCI1min: {
            type: "int64",
            id: 254
          },
          CCI5min: {
            type: "int64",
            id: 255
          },
          CCI1day: {
            type: "int64",
            id: 256
          },
          CJBS1minCJBS: {
            type: "int64",
            id: 257
          },
          CJBS5minCJBS: {
            type: "int64",
            id: 258
          },
          CJBS1dayCJBS: {
            type: "int64",
            id: 259
          },
          CR1minCR: {
            type: "int64",
            id: 260
          },
          CR1minMA1: {
            type: "int64",
            id: 261
          },
          CR1minMA2: {
            type: "int64",
            id: 262
          },
          CR1minMA3: {
            type: "int64",
            id: 263
          },
          CR5minCR: {
            type: "int64",
            id: 264
          },
          CR5minMA1: {
            type: "int64",
            id: 265
          },
          CR5minMA2: {
            type: "int64",
            id: 266
          },
          CR5minMA3: {
            type: "int64",
            id: 267
          },
          CR1dayCR: {
            type: "int64",
            id: 268
          },
          CR1dayMA1: {
            type: "int64",
            id: 269
          },
          CR1dayMA2: {
            type: "int64",
            id: 270
          },
          CR1dayMA3: {
            type: "int64",
            id: 271
          },
          DMA1minDDD: {
            type: "int64",
            id: 272
          },
          DMA1minAMA: {
            type: "int64",
            id: 273
          },
          DMA5minDDD: {
            type: "int64",
            id: 274
          },
          DMA5minAMA: {
            type: "int64",
            id: 275
          },
          DMA1dayDDD: {
            type: "int64",
            id: 276
          },
          DMA1dayAMA: {
            type: "int64",
            id: 277
          },
          DMI1minPDI: {
            type: "int64",
            id: 278
          },
          DMI1minMDI: {
            type: "int64",
            id: 279
          },
          DMI1minADX: {
            type: "int64",
            id: 280
          },
          DMI1minADXR: {
            type: "int64",
            id: 281
          },
          DMI5minPDI: {
            type: "int64",
            id: 282
          },
          DMI5minMDI: {
            type: "int64",
            id: 283
          },
          DMI5minADX: {
            type: "int64",
            id: 284
          },
          DMI5minADXR: {
            type: "int64",
            id: 285
          },
          DMI1dayPDI: {
            type: "int64",
            id: 286
          },
          DMI1dayMDI: {
            type: "int64",
            id: 287
          },
          DMI1dayADX: {
            type: "int64",
            id: 288
          },
          DMI1dayADXR: {
            type: "int64",
            id: 289
          },
          KDJ1minK: {
            type: "int64",
            id: 290
          },
          KDJ1minD: {
            type: "int64",
            id: 291
          },
          KDJ1minJ: {
            type: "int64",
            id: 292
          },
          KDJ5minK: {
            type: "int64",
            id: 293
          },
          KDJ5minD: {
            type: "int64",
            id: 294
          },
          KDJ5minJ: {
            type: "int64",
            id: 295
          },
          KDJ1dayK: {
            type: "int64",
            id: 296
          },
          KDJ1dayD: {
            type: "int64",
            id: 297
          },
          KDJ1dayJ: {
            type: "int64",
            id: 298
          },
          MACD1minDIFF: {
            type: "int64",
            id: 299
          },
          MACD1minDEA: {
            type: "int64",
            id: 300
          },
          MACD1minMACD: {
            type: "int64",
            id: 301
          },
          MACD5minDIFF: {
            type: "int64",
            id: 302
          },
          MACD5minDEA: {
            type: "int64",
            id: 303
          },
          MACD5minMACD: {
            type: "int64",
            id: 304
          },
          MACD1dayDIFF: {
            type: "int64",
            id: 305
          },
          MACD1dayDEA: {
            type: "int64",
            id: 306
          },
          MACD1dayMACD: {
            type: "int64",
            id: 307
          },
          OBV1min: {
            type: "int64",
            id: 308
          },
          OBV5min: {
            type: "int64",
            id: 309
          },
          OBV1day: {
            type: "int64",
            id: 310
          },
          PSY1min: {
            type: "int64",
            id: 311
          },
          PSY5min: {
            type: "int64",
            id: 312
          },
          PSY1day: {
            type: "int64",
            id: 313
          },
          RSI1minRSI1: {
            type: "int64",
            id: 314
          },
          RSI1minRSI2: {
            type: "int64",
            id: 315
          },
          RSI1minRSI3: {
            type: "int64",
            id: 316
          },
          RSI5minRSI1: {
            type: "int64",
            id: 317
          },
          RSI5minRSI2: {
            type: "int64",
            id: 318
          },
          RSI5minRSI3: {
            type: "int64",
            id: 319
          },
          RSI1dayRSI1: {
            type: "int64",
            id: 320
          },
          RSI1dayRSI2: {
            type: "int64",
            id: 321
          },
          RSI1dayRSI3: {
            type: "int64",
            id: 322
          },
          WR1minWR1: {
            type: "int64",
            id: 323
          },
          WR1minWR2: {
            type: "int64",
            id: 324
          },
          WR5minWR1: {
            type: "int64",
            id: 325
          },
          WR5minWR2: {
            type: "int64",
            id: 326
          },
          WR1dayWR1: {
            type: "int64",
            id: 327
          },
          WR1dayWR2: {
            type: "int64",
            id: 328
          },
          DDXJinRi: {
            type: "int64",
            id: 330
          },
          DDX60Ri: {
            type: "int64",
            id: 331
          },
          DDX5Ri: {
            type: "int64",
            id: 332
          },
          DDYJinRi: {
            type: "int64",
            id: 333
          },
          DDY60Ri: {
            type: "int64",
            id: 334
          },
          DDY5Ri: {
            type: "int64",
            id: 335
          },
          DDZJinRi: {
            type: "int64",
            id: 336
          },
          LeiXing: {
            type: "int64",
            id: 400
          },
          ZiLeiXing: {
            type: "int64",
            id: 401
          },
          LeiXingMingCheng: {
            type: "string",
            id: 402
          },
          ChengJiaoLiangDanWei: {
            type: "int64",
            id: 403
          },
          MaBiao: {
            type: "string",
            id: 410
          },
          FJJJLeiXing: {
            type: "int64",
            id: 501
          },
          ZhengTiYiJia: {
            type: "int64",
            id: 502
          },
          MYiJia: {
            type: "int64",
            id: 551
          },
          MShiShiJingZhi: {
            type: "int64",
            id: 552
          },
          MShangZheXuZhang: {
            type: "int64",
            id: 553
          },
          MXiaZheXuDie: {
            type: "int64",
            id: 554
          },
          YinHanShouYi: {
            type: "int64",
            id: 511
          },
          JiaGeGangGan: {
            type: "int64",
            id: 512
          },
          PinZhongObj: {
            type: "string",
            id: 601
          },
          BaoGaoQi: {
            type: "string",
            id: 602
          },
          ShangShiRiQi: {
            type: "string",
            id: 603
          },
          MeiGuShouYi: {
            type: "int64",
            id: 604
          },
          MeiGuJingZiChan: {
            type: "int64",
            id: 605
          },
          JingZiChanShouYiLv: {
            type: "int64",
            id: 606
          },
          MeiGuJingYingXianJin: {
            type: "int64",
            id: 607
          },
          MeiGuGongJiJin: {
            type: "int64",
            id: 608
          },
          MeiGuWeiFenPei: {
            type: "int64",
            id: 609
          },
          GuDongQuanYiBi: {
            type: "int64",
            id: 610
          },
          JingLiRunTongBi: {
            type: "int64",
            id: 611
          },
          ZhuYingShouRuTongBi: {
            type: "int64",
            id: 612
          },
          XiaoShouMaoLiLv: {
            type: "int64",
            id: 613
          },
          TiaoZhengMeiGuJingZi: {
            type: "int64",
            id: 614
          },
          ZongZiChan: {
            type: "int64",
            id: 615
          },
          LiuDongZiChan: {
            type: "int64",
            id: 616
          },
          GuDingZiChan: {
            type: "int64",
            id: 617
          },
          WuXingZiChan: {
            type: "int64",
            id: 618
          },
          LiuDongFuZhai: {
            type: "int64",
            id: 619
          },
          ChangQiFuZhai: {
            type: "int64",
            id: 620
          },
          ZongFuZhai: {
            type: "int64",
            id: 621
          },
          GuDongQuanYi: {
            type: "int64",
            id: 622
          },
          ZiBenGongJiJin: {
            type: "int64",
            id: 623
          },
          JingYingXianJinLiuLiang: {
            type: "int64",
            id: 624
          },
          TouZiXianJinLiuLiang: {
            type: "int64",
            id: 625
          },
          ChouZiXianJinLiuLiang: {
            type: "int64",
            id: 626
          },
          XianJinZengJiaE: {
            type: "int64",
            id: 627
          },
          ZhuYingShouRu: {
            type: "int64",
            id: 628
          },
          ZhuYingLiRun: {
            type: "int64",
            id: 629
          },
          YingYeLiRun: {
            type: "int64",
            id: 630
          },
          TouZiShouYi: {
            type: "int64",
            id: 631
          },
          YingYeWaiShouZhi: {
            type: "int64",
            id: 632
          },
          LiRunZongE: {
            type: "int64",
            id: 633
          },
          JingLiRun: {
            type: "int64",
            id: 634
          },
          WeiFenPeiLiRun: {
            type: "int64",
            id: 635
          },
          ZongGuBen: {
            type: "int64",
            id: 636
          },
          WuXianShouGuHeJi: {
            type: "int64",
            id: 637
          },
          LiuTongAGu: {
            type: "int64",
            id: 638
          },
          LiuTongBGu: {
            type: "int64",
            id: 639
          },
          JingWaiShangShiGu: {
            type: "int64",
            id: 640
          },
          QiTaLiuTongGu: {
            type: "int64",
            id: 641
          },
          XianShouGuHeJi: {
            type: "int64",
            id: 642
          },
          GuoJiaChiGu: {
            type: "int64",
            id: 643
          },
          GuoYouFaRenGu: {
            type: "int64",
            id: 644
          },
          JingNeiFaRenGu: {
            type: "int64",
            id: 645
          },
          JingNeiZiRanRenGu: {
            type: "int64",
            id: 646
          },
          QiTaFaQiRenGu: {
            type: "int64",
            id: 647
          },
          MuJiFaRenGu: {
            type: "int64",
            id: 648
          },
          JingWaiFaRenGu: {
            type: "int64",
            id: 649
          },
          JingWaiZiRanRenGu: {
            type: "int64",
            id: 650
          },
          YouXianGuHuoQiTa: {
            type: "int64",
            id: 651
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 700
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 701
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 702
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 703
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 704
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 705
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 706
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 707
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 708
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 709
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 710
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 711
          },
          BiShi: {
            type: "int64",
            id: 801
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 901
          },
          ChiCang: {
            type: "int64",
            id: 1001
          },
          ZengCang: {
            type: "int64",
            id: 1002
          },
          RiZeng: {
            type: "int64",
            id: 1003
          },
          JieSuanJia: {
            type: "int64",
            id: 1004
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 1005
          },
          KaiPing: {
            type: "int64",
            id: 1006
          },
          JieSuanZhangDie: {
            type: "int64",
            id: 1007
          },
          JieSuanZhangFu: {
            type: "int64",
            id: 1008
          },
          RongZiMaiRuE: {
            type: "int64",
            id: 1009
          },
          RongZiRongQuanBiaoJi: {
            type: "int64",
            id: 1010
          },
          ZiJinJingE: {
            type: "int64",
            id: 1011
          },
          JingNeiZongShiZhi: {
            type: "int64",
            id: 1012
          },
          GongXianDianShu: {
            type: "int64",
            id: 1013
          },
          HangYe: {
            type: "string",
            id: 1014
          },
          PanKouBianHuaMaiRu1: {
            type: "int64",
            id: 1015
          },
          PanKouBianHuaMaiRu2: {
            type: "int64",
            id: 1016
          },
          PanKouBianHuaMaiRu3: {
            type: "int64",
            id: 1017
          },
          PanKouBianHuaMaiRu4: {
            type: "int64",
            id: 1018
          },
          PanKouBianHuaMaiRu5: {
            type: "int64",
            id: 1019
          },
          PanKouBianHuaMaiRu6: {
            type: "int64",
            id: 1020
          },
          PanKouBianHuaMaiRu7: {
            type: "int64",
            id: 1021
          },
          PanKouBianHuaMaiRu8: {
            type: "int64",
            id: 1022
          },
          PanKouBianHuaMaiRu9: {
            type: "int64",
            id: 1023
          },
          PanKouBianHuaMaiRu10: {
            type: "int64",
            id: 1024
          },
          PanKouBianHuaMaiChu1: {
            type: "int64",
            id: 1025
          },
          PanKouBianHuaMaiChu2: {
            type: "int64",
            id: 1026
          },
          PanKouBianHuaMaiChu3: {
            type: "int64",
            id: 1027
          },
          PanKouBianHuaMaiChu4: {
            type: "int64",
            id: 1028
          },
          PanKouBianHuaMaiChu5: {
            type: "int64",
            id: 1029
          },
          PanKouBianHuaMaiChu6: {
            type: "int64",
            id: 1030
          },
          PanKouBianHuaMaiChu7: {
            type: "int64",
            id: 1031
          },
          PanKouBianHuaMaiChu8: {
            type: "int64",
            id: 1032
          },
          PanKouBianHuaMaiChu9: {
            type: "int64",
            id: 1033
          },
          PanKouBianHuaMaiChu10: {
            type: "int64",
            id: 1034
          },
          ShiFouGuanZhu: {
            type: "int64",
            id: 1100
          },
          XuHao: {
            type: "int64",
            id: 1101
          },
          XiaoShuWei: {
            type: "int64",
            id: 1102
          }
        }
      },
      LingZhangGuShuJu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          ZhongWenJianCheng: {
            type: "string",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          ZhangFu: {
            type: "int64",
            id: 4
          }
        }
      },
      TopicInvestRank: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiFouReMenZhuTi: {
            type: "int64",
            id: 2
          },
          RiPingJunZhangFuPaiMing14: {
            type: "int64",
            id: 3
          },
          RiPingJunZhangFuPaiMing30: {
            type: "int64",
            id: 4
          },
          RiReDuZhi14: {
            type: "int64",
            id: 5
          },
          RiReDuZhi30: {
            type: "int64",
            id: 6
          },
          RiReDuZhi10: {
            type: "int64",
            id: 7
          }
        }
      },
      TopicInvest: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            type: "string",
            id: 2
          },
          ShiJian: {
            type: "int64",
            id: 3
          },
          ZhangFu: {
            type: "int64",
            id: 4
          },
          LiangBi: {
            type: "int64",
            id: 5
          },
          HuanShou: {
            type: "int64",
            id: 6
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 7
          },
          PingPanJiaShu: {
            type: "int64",
            id: 8
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 9
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 10
          },
          ShiFouReMenZhuTi: {
            type: "int64",
            id: 11
          },
          RiPingJunZhangFuPaiMing14: {
            type: "int64",
            id: 12
          },
          RiPingJunZhangFuPaiMing30: {
            type: "int64",
            id: 13
          },
          RiReDuZhi14: {
            type: "int64",
            id: 14
          },
          RiReDuZhi30: {
            type: "int64",
            id: 15
          },
          RiReDuZhi10: {
            type: "int64",
            id: 16
          },
          GeGuShu: {
            type: "int64",
            id: 17
          },
          DangYueZhangFu: {
            type: "int64",
            id: 18
          }
        }
      },
      LiShiHangQing: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ZhangFu: {
            rule: "required",
            type: "int64",
            id: 2
          }
        }
      },
      LiShiZouShi: {
        fields: {
          HangQing: {
            rule: "repeated",
            type: "LiShiHangQing",
            id: 1
          }
        }
      },
      TopicInvestHistory: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            type: "string",
            id: 2
          },
          ShiJian: {
            type: "int64",
            id: 3
          },
          LiShi: {
            type: "LiShiZouShi",
            id: 4
          }
        }
      },
      TopicInvestInfo: {
        fields: {
          BianHao: {
            rule: "required",
            type: "int64",
            id: 1
          },
          MingCheng: {
            rule: "required",
            type: "string",
            id: 2
          },
          ChengFenGu: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          LeiBie: {
            type: "int64",
            id: 4
          }
        }
      },
      ZhiBiaoShuChu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          ShuJu: {
            rule: "repeated",
            type: "ZBShuJu",
            id: 2
          },
          ShuXing: {
            rule: "repeated",
            type: "ZBShuXing",
            id: 3
          },
          HuiTu: {
            rule: "repeated",
            type: "ZBHuiTu",
            id: 4
          }
        },
        nested: {
          ZBShuJu: {
            fields: {
              ShiJian: {
                rule: "required",
                type: "int64",
                id: 1
              },
              JieGuo: {
                rule: "repeated",
                type: "int64",
                id: 2,
                options: {
                  packed: false
                }
              }
            }
          },
          ZBShuXing: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 2
              },
              LeiXing: {
                rule: "required",
                type: "SXLeiXing",
                id: 3
              },
              KuanDu: {
                rule: "required",
                type: "int64",
                id: 4
              },
              JingDu: {
                rule: "required",
                type: "int64",
                id: 5
              },
              DuiQi: {
                rule: "required",
                type: "int64",
                id: 6
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              },
              YiDong: {
                rule: "required",
                type: "int64",
                id: 8
              },
              CengCi: {
                rule: "required",
                type: "int64",
                id: 9
              },
              BianLiangWeiZhi: {
                rule: "required",
                type: "int64",
                id: 10
              },
              KuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 11
              },
              YouXiaoWeiZhi: {
                rule: "required",
                type: "int64",
                id: 12
              }
            },
            nested: {
              SXLeiXing: {
                values: {
                  TYPE_TEMP_EXPRESION: 0,
                  TYPE_CURV_LINE: 1,
                  TYPE_STICK_LINE: 2,
                  TYPE_COLORSTICK_LINE: 3,
                  TYPE_VOLSTICK_LINE: 4,
                  TYPE_LINESTICK_LINE: 5,
                  TYPE_CROSS_DOT: 6,
                  TYPE_CIRCLE_DOT: 7,
                  TYPE_POINT_DOT: 8,
                  TYPE_STICK3D_LINE: 9,
                  TYPE_COLOR3D_LINE: 10,
                  TYPE_DOT_DOT: 11,
                  TYPE_DASH_DOT: 12,
                  TYPE_PERCENT_BAR: 13,
                  TYPE_ENTER_LONG: 100,
                  TYPE_EXIT_LONG: 101,
                  TYPE_ENTER_SHORT: 102,
                  TYPE_EXIT_SHORT: 103
                }
              }
            }
          },
          ZBHuiTu: {
            fields: {
              LeiXing: {
                rule: "required",
                type: "HTLeiXing",
                id: 1
              },
              KuanDu: {
                rule: "required",
                type: "int64",
                id: 2
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ShangCiJiSuan: {
                rule: "required",
                type: "int64",
                id: 4
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 5
              },
              ShuChuLeiXing: {
                rule: "required",
                type: "ZBShuXing.SXLeiXing",
                id: 6
              },
              ShuChuShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              },
              ShuChuKuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 8
              },
              WenBen: {
                rule: "repeated",
                type: "string",
                id: 9
              },
              ShuJu: {
                rule: "repeated",
                type: "HTShuJu",
                id: 10
              }
            },
            nested: {
              HTShuJu: {
                fields: {
                  WeiZhi: {
                    rule: "required",
                    type: "int64",
                    id: 1
                  },
                  JiaGe: {
                    rule: "required",
                    type: "int64",
                    id: 2
                  },
                  CanShu: {
                    rule: "required",
                    type: "int64",
                    id: 3
                  }
                }
              },
              HTLeiXing: {
                values: {
                  TYPE_NOLINE: 0,
                  TYPE_POLYLINE: 1,
                  TYPE_LINE: 2,
                  TYPE_STICKLINE: 3,
                  TYPE_TEXT: 4,
                  TYPE_ICON: 5,
                  TYPE_TIP_TEXT: 6,
                  TYPE_BACK_GRD: 7,
                  TYPE_BACK_GRDLAST: 8,
                  TYPE_DRAWBMP: 9,
                  TYPE_VERTLINE: 10,
                  TYPE_TEXTABS: 11,
                  TYPE_TEXTREL: 12,
                  TYPE_RECTABS: 13,
                  TYPE_RECTREL: 14,
                  TYPE_FLAGTEXT: 15,
                  TYPE_MOVETEXT: 16,
                  TYPE_HORILINE: 17
                }
              }
            }
          }
        }
      },
      ZhiBiaoShuXingShuChu: {
        fields: {
          ShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu.ZBShuXing",
            id: 1
          }
        }
      },
      ZhiBiaoHuiTuShuChu: {
        fields: {
          ShuChu: {
            rule: "repeated",
            type: "ZhiBiaoShuChu.ZBHuiTu",
            id: 1
          }
        }
      },
      ZhiBiao: {
        fields: {
          MingCheng: {
            rule: "required",
            type: "string",
            id: 1
          },
          MiaoShu: {
            type: "string",
            id: 2
          },
          YongFa: {
            type: "string",
            id: 3
          },
          CanShuJingLing: {
            type: "string",
            id: 4
          },
          JianYiZu: {
            type: "string",
            id: 5
          },
          WenBen: {
            type: "string",
            id: 6
          },
          ShiJian: {
            type: "int64",
            id: 7
          },
          LeiXing: {
            type: "ZBLeiXing",
            id: 8
          },
          WenBenLeiXing: {
            type: "ZBWenBenLeiXing",
            id: 9
          },
          BanBen: {
            type: "int64",
            id: 10
          },
          ShuXing: {
            type: "int64",
            id: 11
          },
          MoRenLeiXing: {
            type: "int64",
            id: 12
          },
          ZiJieMa: {
            type: "string",
            id: 13
          },
          ChangYong: {
            type: "bool",
            id: 14
          },
          ZiDingYi: {
            type: "bool",
            id: 15
          },
          EWaiShuJu: {
            rule: "repeated",
            type: "int64",
            id: 16,
            options: {
              packed: false
            }
          },
          CanShu: {
            rule: "repeated",
            type: "ZBCanShu",
            id: 17
          },
          ShuChu: {
            rule: "repeated",
            type: "ZBShuChu",
            id: 18
          }
        },
        nested: {
          ZBShuChu: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              LeiXing: {
                rule: "required",
                type: "ZhiBiaoShuChu.ZBShuXing.SXLeiXing",
                id: 2
              },
              YiDong: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ShuXing: {
                rule: "required",
                type: "int64",
                id: 4
              },
              YanSe: {
                rule: "required",
                type: "int64",
                id: 5
              },
              BianLiangWeiZhi: {
                rule: "required",
                type: "int64",
                id: 6
              },
              KuoZhanShuXing: {
                rule: "required",
                type: "int64",
                id: 7
              }
            }
          },
          ZBCanShu: {
            fields: {
              MingCheng: {
                rule: "required",
                type: "string",
                id: 1
              },
              MoRenZhi: {
                rule: "required",
                type: "int64",
                id: 2
              },
              ZuiDaZhi: {
                rule: "required",
                type: "int64",
                id: 3
              },
              ZuiXiaoZhi: {
                rule: "required",
                type: "int64",
                id: 4
              },
              BuChang: {
                rule: "required",
                type: "int64",
                id: 5
              }
            }
          },
          ZBLeiXing: {
            values: {
              TYPE_EXPLORER: 0,
              TYPE_SYSTEST: 1,
              TYPE_MAIN_PICT: 2,
              TYPE_MAIN_ADD: 3,
              TYPE_SUB_PICT: 4,
              TYPE_PAINT_IT: 5,
              TYPE_TEMP_INDI: 6,
              TYPE_TECHNIQUE: 7,
              TYPE_UNKNOWN: 8
            }
          },
          ZBWenBenLeiXing: {
            values: {
              TEXTTYPE_FORMULA: 0,
              TEXTTYPE_LUA: 1,
              TEXTTYPE_UNKNOWN: 2
            }
          }
        }
      },
      BlockObjOutput: {
        fields: {
          obj: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      BlockPropOutput: {
        fields: {
          name: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      QuoteDyna: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          LastClose: {
            type: "float",
            id: 2
          },
          High: {
            type: "float",
            id: 3
          },
          Open: {
            type: "float",
            id: 4
          },
          Low: {
            type: "float",
            id: 5
          },
          New: {
            type: "float",
            id: 6
          },
          Volume: {
            type: "float",
            id: 7
          },
          Amount: {
            type: "float",
            id: 8
          }
        }
      },
      QuoteDynaSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            type: "GeGuDongTai",
            id: 2
          }
        }
      },
      QuoteDynaOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteDynaSingle",
            id: 1
          }
        }
      },
      QuoteKline: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          High: {
            type: "float",
            id: 2
          },
          Open: {
            type: "float",
            id: 3
          },
          Low: {
            type: "float",
            id: 4
          },
          Close: {
            type: "float",
            id: 5
          },
          Volume: {
            type: "float",
            id: 6
          },
          Amount: {
            type: "float",
            id: 7
          },
          TickCount: {
            type: "int32",
            id: 8
          },
          Advance: {
            type: "int32",
            id: 9
          },
          Decline: {
            type: "int32",
            id: 10
          }
        }
      },
      QuoteKlineSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "KXian",
            id: 2
          }
        }
      },
      QuoteKlineOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteKlineSingle",
            id: 1
          }
        }
      },
      QuoteTick: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          Price: {
            type: "float",
            id: 2
          },
          Volume: {
            type: "float",
            id: 3
          },
          Amount: {
            type: "float",
            id: 4
          },
          TickCount: {
            type: "int32",
            id: 5
          },
          BuyPrice: {
            rule: "repeated",
            type: "float",
            id: 6,
            options: {
              packed: false
            }
          },
          BuyVolume: {
            rule: "repeated",
            type: "float",
            id: 7,
            options: {
              packed: false
            }
          },
          SellPrice: {
            rule: "repeated",
            type: "float",
            id: 8,
            options: {
              packed: false
            }
          },
          SellVolume: {
            rule: "repeated",
            type: "float",
            id: 9,
            options: {
              packed: false
            }
          },
          Outter: {
            type: "int32",
            id: 10
          }
        }
      },
      QuoteTickSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenBiChengJiao",
            id: 2
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteTickOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteTickSingle",
            id: 1
          }
        }
      },
      QuoteMin: {
        fields: {
          Time: {
            type: "int32",
            id: 1
          },
          Price: {
            type: "float",
            id: 2
          },
          Volume: {
            type: "float",
            id: 3
          },
          Amount: {
            type: "float",
            id: 4
          },
          TickCount: {
            type: "int32",
            id: 5
          },
          BuyPrice: {
            rule: "repeated",
            type: "float",
            id: 6,
            options: {
              packed: false
            }
          },
          BuyVolume: {
            rule: "repeated",
            type: "float",
            id: 7,
            options: {
              packed: false
            }
          },
          SellPrice: {
            rule: "repeated",
            type: "float",
            id: 8,
            options: {
              packed: false
            }
          },
          SellVolume: {
            rule: "repeated",
            type: "float",
            id: 9,
            options: {
              packed: false
            }
          }
        }
      },
      QuoteMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenShi",
            id: 2
          },
          RiQi: {
            type: "int64",
            id: 3
          },
          ShiQu: {
            type: "int64",
            id: 4
          },
          JiHeJingJiaDianShu: {
            type: "int64",
            id: 5
          },
          JiaoYiShiJianDuan: {
            rule: "repeated",
            type: "JiaoYiShiJianDuanJieGou",
            id: 6
          },
          ZuoShou: {
            type: "int64",
            id: 7
          },
          QingPan: {
            type: "int64",
            id: 8
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 9
          },
          LiShiFenShi: {
            rule: "repeated",
            type: "FenShiLishi",
            id: 10
          }
        },
        nested: {
          JiaoYiShiJianDuanJieGou: {
            fields: {
              KaiShiShiJian: {
                type: "int64",
                id: 1
              },
              JieShuShiJian: {
                type: "int64",
                id: 2
              },
              KaiShiRiQi: {
                type: "int64",
                id: 3
              },
              JieShuRiQi: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      QuoteMinOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteMinSingle",
            id: 1
          }
        }
      },
      QuoteBOrder: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 3
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 4
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 5
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 6
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 7
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 8
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 9
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 10
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 11
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 12
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 13
          },
          DaDanLiuRuJinE: {
            type: "int64",
            id: 14
          },
          DaDanLiuChuJinE: {
            type: "int64",
            id: 15
          },
          DaDanJingLiuRuJinE: {
            type: "int64",
            id: 16
          }
        }
      },
      QuoteBOrderSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteBOrder",
            id: 2
          }
        }
      },
      QuoteBOrderOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteBOrderSingle",
            id: 1
          }
        }
      },
      QuoteDivid: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          ChuQuanChengShu: {
            type: "int64",
            id: 2
          },
          ChuQuanPianYi: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteDividSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteDivid",
            id: 2
          }
        }
      },
      QuoteDividOutput: {
        fields: {
          Results: {
            rule: "repeated",
            type: "QuoteDividSingle",
            id: 1
          }
        }
      },
      QuoteDynaMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "GeGuDongTai",
            id: 2
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteReportSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "ZhubiDangri",
            id: 2
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteQueueSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "WeiTuoDuiLie",
            id: 2
          }
        }
      },
      QuoteHistoryMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "FenShiLishi",
            id: 2
          },
          ZuoShou: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteFundFlow: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          DaDanLiuRuJinE: {
            type: "int64",
            id: 2
          },
          DaDanLiuChuJinE: {
            type: "int64",
            id: 3
          },
          DaDanJingLiuRuJinE: {
            type: "int64",
            id: 4
          }
        }
      },
      QuoteFundFlowSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteFundFlow",
            id: 2
          }
        }
      },
      QuoteQueueMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "WeiTuoDuiLie",
            id: 2
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      QuoteBOrderMin: {
        fields: {
          ShiJian: {
            type: "int64",
            id: 1
          },
          JingMaiRuTeDaDanBiLi: {
            type: "int64",
            id: 2
          },
          JingMaiRuDaDanBiLi: {
            type: "int64",
            id: 3
          },
          JingMaiRuZhongDanBiLi: {
            type: "int64",
            id: 4
          },
          JingMaiRuXiaoDanBiLi: {
            type: "int64",
            id: 5
          }
        }
      },
      QuoteBOrderMinSingle: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "QuoteBOrderMin",
            id: 2
          },
          QingPan: {
            type: "int64",
            id: 3
          }
        }
      },
      FenBiChengJiao: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ChengJiaoJia: {
            type: "int64",
            id: 3
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 4
          },
          ChengJiaoE: {
            type: "int64",
            id: 5
          },
          ChengJiaoDanBiShu: {
            type: "int64",
            id: 6
          },
          ShiFouZhuDongXingMaiDan: {
            type: "int64",
            id: 7
          },
          MaiMaiFangXiang: {
            type: "int64",
            id: 8
          },
          DanCiChengJiaoLiang: {
            type: "int64",
            id: 9
          },
          DanCiChengJiaoE: {
            type: "int64",
            id: 10
          },
          DanCiChengJiaoDanBiShu: {
            type: "int64",
            id: 11
          }
        }
      },
      GeGuDongTai: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          KaiPanJia: {
            type: "int64",
            id: 4
          },
          ZuiGaoJia: {
            type: "int64",
            id: 5
          },
          ZuiDiJia: {
            type: "int64",
            id: 6
          },
          ZuoShou: {
            type: "int64",
            id: 7
          },
          JunJia: {
            type: "int64",
            id: 8
          },
          ZhangDie: {
            type: "int64",
            id: 9
          },
          ZhangFu: {
            type: "int64",
            id: 10
          },
          ZhenFu: {
            type: "int64",
            id: 11
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 12
          },
          XianShou: {
            type: "int64",
            id: 13
          },
          ChengJiaoE: {
            type: "int64",
            id: 14
          },
          ZongChengJiaoBiShu: {
            type: "int64",
            id: 15
          },
          MeiBiChengJiaoGuShu: {
            type: "int64",
            id: 16
          },
          HuanShou: {
            type: "int64",
            id: 17
          },
          LiangBi: {
            type: "int64",
            id: 18
          },
          NeiPan: {
            type: "int64",
            id: 19
          },
          WaiPan: {
            type: "int64",
            id: 20
          },
          ZongMaiRu: {
            type: "int64",
            id: 21
          },
          ZongMaiChu: {
            type: "int64",
            id: 22
          },
          ZongMaiRuJunJia: {
            type: "int64",
            id: 23
          },
          ZongMaiChuJunJia: {
            type: "int64",
            id: 24
          },
          ZhangTing: {
            type: "int64",
            id: 25
          },
          DieTing: {
            type: "int64",
            id: 26
          },
          FenZhongZhangFu1: {
            type: "int64",
            id: 27
          },
          FenZhongZhangFu2: {
            type: "int64",
            id: 28
          },
          FenZhongZhangFu3: {
            type: "int64",
            id: 29
          },
          FenZhongZhangFu4: {
            type: "int64",
            id: 30
          },
          FenZhongZhangFu5: {
            type: "int64",
            id: 31
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 32
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 33
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 34
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 35
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 36
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 37
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 38
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 39
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 40
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 41
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 42
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 43
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 44
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 45
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 46
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 47
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 48
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 49
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 50
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 51
          },
          WeiBi: {
            type: "int64",
            id: 52
          },
          WeiCha: {
            type: "int64",
            id: 53
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 54
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 55
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 56
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 57
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 58
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 59
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 60
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 61
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 62
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 63
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 64
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 65
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 66
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 67
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 68
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 69
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 70
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 71
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 72
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 73
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 74
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 75
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 76
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 77
          },
          ChiCang: {
            type: "int64",
            id: 78
          },
          ZengCang: {
            type: "int64",
            id: 79
          },
          RiZeng: {
            type: "int64",
            id: 80
          },
          JieSuanJia: {
            type: "int64",
            id: 81
          },
          ZuoRiJieSuanJia: {
            type: "int64",
            id: 82
          },
          KaiPing: {
            type: "int64",
            id: 83
          },
          JieSuanZhangDie: {
            type: "int64",
            id: 84
          },
          JieSuanZhangFu: {
            type: "int64",
            id: 85
          },
          PanKouBianHuaMaiRu1: {
            type: "int64",
            id: 86
          },
          PanKouBianHuaMaiRu2: {
            type: "int64",
            id: 87
          },
          PanKouBianHuaMaiRu3: {
            type: "int64",
            id: 88
          },
          PanKouBianHuaMaiRu4: {
            type: "int64",
            id: 89
          },
          PanKouBianHuaMaiRu5: {
            type: "int64",
            id: 90
          },
          PanKouBianHuaMaiRu6: {
            type: "int64",
            id: 91
          },
          PanKouBianHuaMaiRu7: {
            type: "int64",
            id: 92
          },
          PanKouBianHuaMaiRu8: {
            type: "int64",
            id: 93
          },
          PanKouBianHuaMaiRu9: {
            type: "int64",
            id: 94
          },
          PanKouBianHuaMaiRu10: {
            type: "int64",
            id: 95
          },
          PanKouBianHuaMaiChu1: {
            type: "int64",
            id: 96
          },
          PanKouBianHuaMaiChu2: {
            type: "int64",
            id: 97
          },
          PanKouBianHuaMaiChu3: {
            type: "int64",
            id: 98
          },
          PanKouBianHuaMaiChu4: {
            type: "int64",
            id: 99
          },
          PanKouBianHuaMaiChu5: {
            type: "int64",
            id: 100
          },
          PanKouBianHuaMaiChu6: {
            type: "int64",
            id: 101
          },
          PanKouBianHuaMaiChu7: {
            type: "int64",
            id: 102
          },
          PanKouBianHuaMaiChu8: {
            type: "int64",
            id: 103
          },
          PanKouBianHuaMaiChu9: {
            type: "int64",
            id: 104
          },
          PanKouBianHuaMaiChu10: {
            type: "int64",
            id: 105
          }
        }
      },
      MaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          WeiTuoMaiRuJia1: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiRuLiang1: {
            type: "int64",
            id: 4
          },
          WeiTuoMaiRuJia2: {
            type: "int64",
            id: 5
          },
          WeiTuoMaiRuLiang2: {
            type: "int64",
            id: 6
          },
          WeiTuoMaiRuJia3: {
            type: "int64",
            id: 7
          },
          WeiTuoMaiRuLiang3: {
            type: "int64",
            id: 8
          },
          WeiTuoMaiRuJia4: {
            type: "int64",
            id: 9
          },
          WeiTuoMaiRuLiang4: {
            type: "int64",
            id: 10
          },
          WeiTuoMaiRuJia5: {
            type: "int64",
            id: 11
          },
          WeiTuoMaiRuLiang5: {
            type: "int64",
            id: 12
          },
          WeiTuoMaiChuJia1: {
            type: "int64",
            id: 13
          },
          WeiTuoMaiChuLiang1: {
            type: "int64",
            id: 14
          },
          WeiTuoMaiChuJia2: {
            type: "int64",
            id: 15
          },
          WeiTuoMaiChuLiang2: {
            type: "int64",
            id: 16
          },
          WeiTuoMaiChuJia3: {
            type: "int64",
            id: 17
          },
          WeiTuoMaiChuLiang3: {
            type: "int64",
            id: 18
          },
          WeiTuoMaiChuJia4: {
            type: "int64",
            id: 19
          },
          WeiTuoMaiChuLiang4: {
            type: "int64",
            id: 20
          },
          WeiTuoMaiChuJia5: {
            type: "int64",
            id: 21
          },
          WeiTuoMaiChuLiang5: {
            type: "int64",
            id: 22
          },
          WeiBi: {
            type: "int64",
            id: 23
          },
          WeiCha: {
            type: "int64",
            id: 24
          }
        }
      },
      KuoZhanMaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          JiaQuanPingJunWeiTuoMaiRuJia: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 4
          },
          JiaQuanPingJunWeiTuoMaiChuJia: {
            type: "int64",
            id: 5
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 6
          },
          KuoZhanMaiRuJia1: {
            type: "int64",
            id: 7
          },
          KuoZhanMaiRuJia2: {
            type: "int64",
            id: 8
          },
          KuoZhanMaiRuJia3: {
            type: "int64",
            id: 9
          },
          KuoZhanMaiRuJia4: {
            type: "int64",
            id: 10
          },
          KuoZhanMaiRuJia5: {
            type: "int64",
            id: 11
          },
          KuoZhanMaiRuLiang1: {
            type: "int64",
            id: 12
          },
          KuoZhanMaiRuLiang2: {
            type: "int64",
            id: 13
          },
          KuoZhanMaiRuLiang3: {
            type: "int64",
            id: 14
          },
          KuoZhanMaiRuLiang4: {
            type: "int64",
            id: 15
          },
          KuoZhanMaiRuLiang5: {
            type: "int64",
            id: 16
          },
          KuoZhanMaiChuJia1: {
            type: "int64",
            id: 17
          },
          KuoZhanMaiChuJia2: {
            type: "int64",
            id: 18
          },
          KuoZhanMaiChuJia3: {
            type: "int64",
            id: 19
          },
          KuoZhanMaiChuJia4: {
            type: "int64",
            id: 20
          },
          KuoZhanMaiChuJia5: {
            type: "int64",
            id: 21
          },
          KuoZhanMaiChuLiang1: {
            type: "int64",
            id: 22
          },
          KuoZhanMaiChuLiang2: {
            type: "int64",
            id: 23
          },
          KuoZhanMaiChuLiang3: {
            type: "int64",
            id: 24
          },
          KuoZhanMaiChuLiang4: {
            type: "int64",
            id: 25
          },
          KuoZhanMaiChuLiang5: {
            type: "int64",
            id: 26
          }
        }
      },
      QuanMaiMaiPan: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            type: "int64",
            id: 2
          },
          WeiMaiRuPan: {
            rule: "repeated",
            type: "MaiMaiBiao",
            id: 3
          },
          WeiMaiChuPan: {
            rule: "repeated",
            type: "MaiMaiBiao",
            id: 4
          }
        },
        nested: {
          MaiMaiBiao: {
            fields: {
              WeiZhi: {
                type: "int64",
                id: 1
              },
              Jia: {
                type: "int64",
                id: 2
              },
              Liang: {
                type: "int64",
                id: 3
              },
              DanShu: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      WeiTuoDuiLie: {
        fields: {
          Obj: {
            type: "string",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          MaiRuDuiLie: {
            rule: "repeated",
            type: "WeiTuo",
            id: 3
          },
          MaiChuDuiLie: {
            rule: "repeated",
            type: "WeiTuo",
            id: 4
          }
        },
        nested: {
          WeiTuo: {
            fields: {
              Jia: {
                rule: "required",
                type: "int64",
                id: 1
              },
              BiShu: {
                type: "int64",
                id: 2
              },
              Liang: {
                rule: "repeated",
                type: "int64",
                id: 3,
                options: {
                  packed: false
                }
              },
              ZongLiang: {
                type: "int64",
                id: 4
              }
            }
          }
        }
      },
      Level2TongJi: {
        fields: {
          Id: {
            type: "int64",
            id: 1
          },
          ShiJian: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiRu: {
            type: "int64",
            id: 3
          },
          WeiTuoMaiChu: {
            type: "int64",
            id: 4
          },
          MaiRuZhongDanBiLi: {
            type: "int64",
            id: 5
          },
          MaiRuDaDanBiLi: {
            type: "int64",
            id: 6
          },
          MaiRuTeDaDanBiLi: {
            type: "int64",
            id: 7
          },
          MaiChuZhongDanBiLi: {
            type: "int64",
            id: 8
          },
          MaiChuDaDanBiLi: {
            type: "int64",
            id: 9
          },
          MaiChuTeDaDanBiLi: {
            type: "int64",
            id: 10
          },
          DuanXianMaiRu: {
            type: "int64",
            id: 11
          },
          DuanXianMaiChu: {
            type: "int64",
            id: 12
          },
          DuanXianChiHuo: {
            type: "int64",
            id: 13
          },
          DuanXianTuHuo: {
            type: "int64",
            id: 14
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 15
          },
          ChengJiaoE: {
            type: "int64",
            id: 16
          }
        }
      },
      DynaMMP: {
        fields: {
          Rows: {
            rule: "repeated",
            type: "DynaMaiMaiPrice",
            id: 1
          }
        }
      },
      DynaMaiMaiPrice: {
        fields: {
          JiaGe: {
            type: "int64",
            id: 1
          },
          Liang: {
            type: "int64",
            id: 2
          },
          ChaZhi: {
            type: "int64",
            id: 3
          }
        }
      },
      DynaMaiMaiZongLiang: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 2
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 3
          }
        }
      },
      DynaFenshiStatus: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          IndexStatuc: {
            type: "int64",
            id: 2
          },
          DataStatus: {
            type: "GeGuDongTai",
            id: 3
          }
        }
      },
      KXian: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          KaiPanJia: {
            type: "int64",
            id: 2
          },
          ZuiGaoJia: {
            type: "int64",
            id: 3
          },
          ZuiDiJia: {
            type: "int64",
            id: 4
          },
          ShouPanJia: {
            type: "int64",
            id: 5
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 6
          },
          ChengJiaoE: {
            type: "int64",
            id: 7
          },
          ChengJiaoBiShu: {
            type: "int64",
            id: 8
          },
          ShangZhangJiaShu: {
            type: "int64",
            id: 9
          },
          XiaDieJiaShu: {
            type: "int64",
            id: 10
          },
          ChiCang: {
            type: "int64",
            id: 11
          },
          ZengCang: {
            type: "int64",
            id: 12
          },
          ZengLiang: {
            type: "int64",
            id: 13
          },
          JieSuanJia: {
            type: "int64",
            id: 14
          }
        }
      },
      FenShi: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ChengJiaoJia: {
            type: "int64",
            id: 2
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 3
          },
          ChengJiaoE: {
            type: "int64",
            id: 4
          },
          JunJia: {
            type: "int64",
            id: 5
          },
          LingXianZhiBiao: {
            type: "int64",
            id: 6
          },
          DuoKongXian: {
            type: "int64",
            id: 7
          },
          WeiTuoMaiRuZongLiang: {
            type: "int64",
            id: 8
          },
          WeiTuoMaiChuZongLiang: {
            type: "int64",
            id: 9
          }
        }
      },
      FenShiLishi: {
        fields: {
          Rows: {
            rule: "repeated",
            type: "FenShi",
            id: 1
          },
          RiQi: {
            type: "int64",
            id: 2
          }
        }
      },
      DynaAlib: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ID: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Objs: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          DAObjs: {
            rule: "repeated",
            type: "DynaAlibObj",
            id: 4
          }
        }
      },
      DynaAlibObj: {
        fields: {
          Objs: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      BackUpState: {
        fields: {
          Market: {
            rule: "required",
            type: "string",
            id: 1
          },
          BackUpTime: {
            type: "int64",
            id: 2
          },
          BackUpCloseStatus: {
            type: "int64",
            id: 3
          },
          CloseTime: {
            type: "int64",
            id: 4
          },
          CloseStatus: {
            type: "int64",
            id: 5
          }
        }
      },
      LingxianDuokongZhibiao: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          LingXianZhiBiao: {
            type: "int64",
            id: 2
          },
          DuoKongXian: {
            type: "int64",
            id: 3
          }
        }
      },
      LingxianDuokongZhibiaoStatus: {
        fields: {
          JiaoYiRiQi: {
            rule: "required",
            type: "int64",
            id: 1
          },
          IndexStatuc: {
            type: "int64",
            id: 2
          },
          DataStatus: {
            type: "LingxianDuokongZhibiao",
            id: 3
          }
        }
      },
      ZhubiDangri: {
        fields: {
          Id: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 2
          },
          ZuiXinJia: {
            type: "int64",
            id: 3
          },
          ChengJiaoLiang: {
            type: "int64",
            id: 4
          },
          ZhubiId: {
            type: "int64",
            id: 5
          }
        }
      },
      JPBLeiXing: {
        values: {
          TYPE_OBJ: 0,
          TYPE_INDI: 1,
          TYPE_TOPIC: 2,
          TYPE_LHB: 3,
          TYPE_BLKOBJ: 4,
          TYPE_TOPICANALY: 5,
          TYPE_OBJPHONE: 6
        }
      },
      JPBShuJu: {
        fields: {
          DaiMa: {
            rule: "required",
            type: "string",
            id: 1
          },
          MingCheng: {
            rule: "required",
            type: "string",
            id: 2
          },
          ShuXing: {
            type: "string",
            id: 3
          },
          KuoZhan: {
            type: "string",
            id: 4
          }
        }
      },
      JPBShuChu: {
        fields: {
          LeiXing: {
            rule: "required",
            type: "JPBLeiXing",
            id: 1
          },
          ShuJu: {
            rule: "repeated",
            type: "JPBShuJu",
            id: 2
          }
        }
      },
      JianPanBaoShuChu: {
        fields: {
          GuanJianZi: {
            rule: "required",
            type: "string",
            id: 1
          },
          JieGuo: {
            rule: "repeated",
            type: "JPBShuChu",
            id: 2
          }
        }
      },
      Token: {
        fields: {
          result: {
            rule: "required",
            type: "int32",
            id: 1,
            options: {
              "default": 0
            }
          },
          token: {
            type: "string",
            id: 2
          },
          version: {
            type: "int64",
            id: 3
          },
          createTime: {
            type: "int64",
            id: 4
          },
          refreshTime: {
            type: "int64",
            id: 5
          },
          duration: {
            type: "int64",
            id: 6
          },
          appid: {
            type: "string",
            id: 7
          },
          device: {
            type: "string",
            id: 8
          },
          uid: {
            type: "string",
            id: 9
          }
        }
      },
      PaiXu: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Value: {
            type: "int64",
            id: 2
          },
          Text: {
            type: "string",
            id: 3
          }
        }
      },
      PaiMing: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Value: {
            type: "int64",
            id: 2
          },
          Text: {
            type: "string",
            id: 3
          },
          MingCi: {
            type: "int64",
            id: 4
          }
        }
      },
      NewsInfoValue: {
        fields: {
          ver: {
            rule: "required",
            type: "string",
            id: 1
          },
          act: {
            rule: "required",
            type: "uint32",
            id: 2
          },
          newsID: {
            rule: "required",
            type: "uint64",
            id: 3
          },
          newsTitle: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiEx: {
        fields: {
          source: {
            type: "string",
            id: 1
          },
          date: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          context: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "XinWenXinXiEx",
            id: 3
          }
        }
      },
      XinWenXinXiZhongXin: {
        fields: {
          date: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          context: {
            type: "string",
            id: 3
          },
          source: {
            type: "string",
            id: 4
          }
        }
      },
      XinWenXinXiZhongXinOutput: {
        fields: {
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "XinWenXinXiZhongXin",
            id: 2
          }
        }
      },
      GongGaoXinXi: {
        fields: {
          source: {
            type: "string",
            id: 1
          },
          date: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          context: {
            type: "string",
            id: 4
          }
        }
      },
      GongGaoXinXiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "GongGaoXinXi",
            id: 3
          }
        }
      },
      GongGaoXinXiZhongXin: {
        fields: {
          date: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          context: {
            type: "string",
            id: 3
          },
          source: {
            type: "string",
            id: 4
          }
        }
      },
      GongGaoXinXiZhongXinOutput: {
        fields: {
          TotalCount: {
            rule: "required",
            type: "int64",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GongGaoXinXiZhongXin",
            id: 2
          }
        }
      },
      YiZhiXinYeJiYuCe: {
        fields: {
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          yuCeNianDu: {
            rule: "required",
            type: "string",
            id: 2
          },
          jingLiRun: {
            type: "int64",
            id: 3
          },
          meiGuShouYi: {
            type: "int64",
            id: 4
          }
        }
      },
      YiZhiXinYeJiYuCeOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "YiZhiXinYeJiYuCe",
            id: 2
          }
        }
      },
      YiZhiXinTouZiPinJi: {
        fields: {
          pinJiRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          zhengTiPinJi: {
            rule: "required",
            type: "string",
            id: 2
          }
        }
      },
      YiZhiXinTouZiPinJiOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "YiZhiXinTouZiPinJi",
            id: 2
          }
        }
      },
      GeGuYeJiYuCe: {
        fields: {
          yuCeNianDu: {
            rule: "required",
            type: "string",
            id: 1
          },
          meiGuShouYi: {
            type: "int64",
            id: 2
          }
        }
      },
      GeGuYeJiYuCeData: {
        fields: {
          yanJiuJiGou: {
            rule: "required",
            type: "string",
            id: 1
          },
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "GeGuYeJiYuCe",
            id: 3
          }
        }
      },
      GeGuYeJiYuCeOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GeGuYeJiYuCeData",
            id: 2
          }
        }
      },
      GeGuTouZiYanBao: {
        fields: {
          baoGaoRiQi: {
            rule: "required",
            type: "string",
            id: 1
          },
          yanJiuJiGou: {
            type: "string",
            id: 2
          },
          pinJiLeiBie: {
            type: "string",
            id: 3
          },
          pinJiBianDong: {
            type: "string",
            id: 4
          },
          yanBaoBiaoTi: {
            type: "string",
            id: 5
          },
          yanBaoNeiRong: {
            type: "string",
            id: 6
          },
          yanJiuZuoZhe: {
            type: "string",
            id: 7
          },
          muBiaoJiaGe: {
            type: "string",
            id: 8
          }
        }
      },
      GeGuTouZiYanBaoOutPut: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "GeGuTouZiYanBao",
            id: 2
          }
        }
      },
      TongJiApp: {
        fields: {
          ChengJiaoE: {
            type: "int64",
            id: 1
          },
          LiuTongShiZhi: {
            type: "int64",
            id: 2
          },
          ZongShiZhi: {
            type: "int64",
            id: 3
          },
          ZhangDiePing: {
            type: "ZhangDiePingShuJu",
            id: 4
          },
          LingZhangGu: {
            type: "LingZhangGuShuJu",
            id: 5
          },
          TingPaiJiaShu: {
            type: "int64",
            id: 6
          },
          ZhangTingDieTing: {
            type: "ZhangTingDieTingShuJu",
            id: 7
          },
          GuPiaoGeShu: {
            type: "int64",
            id: 8
          },
          PingJunJingTaiShiYingLv: {
            type: "int64",
            id: 9
          },
          ZiJinJingE: {
            type: "int64",
            id: 10
          },
          ZiJinLiuXiang: {
            rule: "repeated",
            type: "ZiJinLiuXiangShuJu",
            id: 11
          },
          JunJia: {
            type: "int64",
            id: 12
          },
          JiaQuanJunJia: {
            type: "int64",
            id: 13
          }
        },
        nested: {
          LingZhangGuShuJu: {
            fields: {
              Obj: {
                rule: "required",
                type: "string",
                id: 1
              },
              ZhongWenJianCheng: {
                type: "string",
                id: 2
              },
              ZuiXinJia: {
                type: "int64",
                id: 3
              },
              ZhangFu: {
                type: "int64",
                id: 4
              }
            }
          },
          ZhangDiePingShuJu: {
            fields: {
              ShangZhangJiaShu: {
                type: "int64",
                id: 1
              },
              XiaDieJiaShu: {
                type: "int64",
                id: 2
              },
              PingPanJiaShu: {
                type: "int64",
                id: 3
              }
            }
          },
          ZhangTingDieTingShuJu: {
            fields: {
              ZhangTingJiaShu: {
                type: "int64",
                id: 1
              },
              DieTingJiaShu: {
                type: "int64",
                id: 2
              }
            }
          },
          ZiJinLiuXiangShuJu: {
            fields: {
              ShiJian: {
                type: "int64",
                id: 1
              },
              ZiJinJingE: {
                type: "int64",
                id: 2
              }
            }
          }
        }
      },
      DXSpirit: {
        fields: {
          ShiJian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Obj: {
            type: "string",
            id: 2
          },
          TongZhi: {
            type: "string",
            id: 3
          },
          ShuJu: {
            type: "int64",
            id: 4
          }
        }
      },
      DXSpiritStat: {
        fields: {
          Obj: {
            type: "string",
            id: 1
          },
          HjfsTotal: {
            type: "int64",
            id: 2
          },
          KsftTotal: {
            type: "int64",
            id: 3
          },
          GttsTotal: {
            type: "int64",
            id: 4
          },
          JsxdTotal: {
            type: "int64",
            id: 5
          },
          DbmrTotal: {
            type: "int64",
            id: 6
          },
          DbmrStatistics: {
            type: "int64",
            id: 7
          },
          DbmcTotal: {
            type: "int64",
            id: 8
          },
          DbmcStatistics: {
            type: "int64",
            id: 9
          },
          FztbTotal: {
            type: "int64",
            id: 10
          },
          FdtbTotal: {
            type: "int64",
            id: 11
          },
          DkztTotal: {
            type: "int64",
            id: 12
          },
          DkdtTotal: {
            type: "int64",
            id: 13
          },
          YdmcPTotal: {
            type: "int64",
            id: 14
          },
          YdmrPTotal: {
            type: "int64",
            id: 15
          },
          LszsTotal: {
            type: "int64",
            id: 16
          },
          DyzsTotal: {
            type: "int64",
            id: 17
          },
          JgmrgdTotal: {
            type: "int64",
            id: 18
          },
          JgmcgdTotal: {
            type: "int64",
            id: 19
          },
          DcjmrdTotal: {
            type: "int64",
            id: 20
          },
          DcjmcdTotal: {
            type: "int64",
            id: 21
          },
          FdmrgdTotal: {
            type: "int64",
            id: 22
          },
          FdmcgdTotal: {
            type: "int64",
            id: 23
          },
          MrcdTotal: {
            type: "int64",
            id: 24
          },
          MccdTotal: {
            type: "int64",
            id: 25
          },
          MrxdTotal: {
            type: "int64",
            id: 26
          },
          McxdTotal: {
            type: "int64",
            id: 27
          }
        }
      },
      F10CpbdZxzbOutput: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          shiq: {
            type: "string",
            id: 3
          },
          mgsy: {
            type: "int64",
            id: 4
          },
          mgjzc: {
            type: "int64",
            id: 5
          },
          zgb: {
            type: "int64",
            id: 6
          },
          ltag: {
            type: "int64",
            id: 7
          },
          jzcsyl: {
            type: "int64",
            id: 8
          },
          mgxjl: {
            type: "int64",
            id: 9
          },
          mggjj: {
            type: "int64",
            id: 10
          },
          mgwfplr: {
            type: "int64",
            id: 11
          },
          zylrtbzz: {
            type: "int64",
            id: 12
          },
          jlrtbzz: {
            type: "int64",
            id: 13
          },
          fpyan: {
            type: "string",
            id: 14
          },
          cq: {
            type: "string",
            id: 15
          },
          cym: {
            type: "string",
            id: 16
          }
        }
      },
      F10CpbdKpqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          gdhs: {
            type: "int64",
            id: 2
          },
          rjcltg: {
            type: "int64",
            id: 3
          },
          tcsdrjcltg: {
            type: "int64",
            id: 4
          }
        }
      },
      CpbdCjhbData: {
        fields: {
          cjl: {
            type: "int64",
            id: 1
          },
          cjje: {
            type: "int64",
            id: 2
          },
          zdlx: {
            type: "string",
            id: 3
          },
          zdz: {
            type: "int64",
            id: 4
          },
          yybmc: {
            type: "string",
            id: 5
          },
          mlje: {
            type: "int64",
            id: 6
          },
          mcje: {
            type: "int64",
            id: 7
          }
        }
      },
      F10CpbdCjhb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "CpbdCjhbData",
            id: 2
          }
        }
      },
      FundCpbdFbsjjzjzData: {
        fields: {
          dwjz: {
            type: "int64",
            id: 1
          },
          dwljjz: {
            type: "int64",
            id: 2
          }
        }
      },
      F10FundCpbdFbsjjzjz: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdFbsjjzjzData",
            id: 2
          }
        }
      },
      F10FundCpbdFbsjjzjzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdFbsjjzjz",
            id: 2
          }
        }
      },
      FundCpbdJjfebdqkData: {
        fields: {
          qczfe: {
            type: "int64",
            id: 1
          },
          bqzsg: {
            type: "int64",
            id: 2
          },
          bqzsh: {
            type: "int64",
            id: 3
          },
          qmzfe: {
            type: "int64",
            id: 4
          },
          bqjsg: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundCpbdJjfebdqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjfebdqkData",
            id: 2
          }
        }
      },
      F10FundCpbdJjfebdqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjfebdqk",
            id: 2
          }
        }
      },
      FundCpbdJjgbjbData: {
        fields: {
          bqjsy: {
            type: "int64",
            id: 1
          },
          qmjzc: {
            type: "int64",
            id: 2
          },
          qmfejz: {
            type: "int64",
            id: 3
          },
          gpsz: {
            type: "int64",
            id: 4
          },
          zqsz: {
            type: "int64",
            id: 5
          },
          gpbl: {
            type: "int64",
            id: 6
          },
          zqbl: {
            type: "int64",
            id: 7
          },
          hjsz: {
            type: "int64",
            id: 8
          }
        }
      },
      F10FundCpbdJjgbjb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjgbjbData",
            id: 2
          }
        }
      },
      F10FundCpbdJjgbjbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjgbjb",
            id: 2
          }
        }
      },
      FundCpbdJjjzbxData: {
        fields: {
          qj: {
            type: "string",
            id: 1
          },
          jzzzl: {
            type: "int64",
            id: 2
          },
          bjjzsyl: {
            type: "int64",
            id: 3
          },
          cz: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundCpbdJjjzbx: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCpbdJjjzbxData",
            id: 2
          }
        }
      },
      F10FundCpbdJjjzbxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCpbdJjjzbx",
            id: 2
          }
        }
      },
      F10FundCpbdJjxxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          jjtzmb: {
            type: "string",
            id: 3
          },
          fxsytz: {
            type: "string",
            id: 4
          },
          ywbjjz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundCpbdZfeOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          gxrq: {
            rule: "required",
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          ggrq: {
            type: "string",
            id: 5
          },
          zfe: {
            type: "int64",
            id: 6
          },
          ltfe: {
            type: "int64",
            id: 7
          }
        }
      },
      FundCwsjJyyjData: {
        fields: {
          dw: {
            type: "string",
            id: 1
          },
          srhj: {
            type: "int64",
            id: 2
          },
          gpcjsr: {
            type: "int64",
            id: 3
          },
          zqcjsr: {
            type: "int64",
            id: 4
          },
          zqlxsr: {
            type: "int64",
            id: 5
          },
          cklxsr: {
            type: "int64",
            id: 6
          },
          gxsr: {
            type: "int64",
            id: 7
          },
          fyhj: {
            type: "int64",
            id: 8
          },
          jjglf: {
            type: "int64",
            id: 9
          },
          jjtgf: {
            type: "int64",
            id: 10
          },
          jjjsy: {
            type: "int64",
            id: 11
          }
        }
      },
      F10FundCwsjJyyj: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjJyyjData",
            id: 2
          }
        }
      },
      F10FundCwsjJyyjOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjJyyj",
            id: 2
          }
        }
      },
      FundCwsjZcfzData: {
        fields: {
          dw: {
            type: "string",
            id: 1
          },
          yhck: {
            type: "int64",
            id: 2
          },
          qsbfj: {
            type: "int64",
            id: 3
          },
          jybzj: {
            type: "int64",
            id: 4
          },
          gptzsz: {
            type: "int64",
            id: 5
          },
          zqtzsz: {
            type: "int64",
            id: 6
          },
          yslx: {
            type: "int64",
            id: 7
          },
          yssgk: {
            type: "int64",
            id: 8
          },
          zczj: {
            type: "int64",
            id: 9
          },
          yfjyqsk: {
            type: "int64",
            id: 10
          },
          yfjjglf: {
            type: "int64",
            id: 11
          },
          yfjjtgf: {
            type: "int64",
            id: 12
          },
          yfshk: {
            type: "int64",
            id: 13
          },
          fzzj: {
            type: "int64",
            id: 14
          },
          ssjj: {
            type: "int64",
            id: 15
          },
          cyrqyhj: {
            type: "int64",
            id: 16
          },
          fzjqyhj: {
            type: "int64",
            id: 17
          }
        }
      },
      F10FundCwsjZcfz: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjZcfzData",
            id: 2
          }
        }
      },
      F10FundCwsjZcfzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjZcfz",
            id: 2
          }
        }
      },
      FundCwsjZycwzbData: {
        fields: {
          bqjsy: {
            type: "int64",
            id: 1
          },
          kgfpsy: {
            type: "int64",
            id: 2
          },
          mfkgfpsy: {
            type: "int64",
            id: 3
          },
          qmzcjz: {
            type: "int64",
            id: 4
          },
          qmfejz: {
            type: "int64",
            id: 5
          },
          jqpjjzsyl: {
            type: "int64",
            id: 6
          },
          mfjzzzl: {
            type: "int64",
            id: 7
          },
          mfljjzzzl: {
            type: "int64",
            id: 8
          },
          mfjsy: {
            type: "int64",
            id: 9
          }
        }
      },
      F10FundCwsjZycwzb: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCwsjZycwzbData",
            id: 2
          }
        }
      },
      F10FundCwsjZycwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCwsjZycwzb",
            id: 2
          }
        }
      },
      FundCyrHshjgData: {
        fields: {
          cyrhs: {
            type: "int64",
            id: 1
          },
          hjfe: {
            type: "int64",
            id: 2
          },
          jgcyfe: {
            type: "int64",
            id: 3
          },
          jgcybl: {
            type: "int64",
            id: 4
          },
          grcyfe: {
            type: "int64",
            id: 5
          },
          grcybl: {
            type: "int64",
            id: 6
          }
        }
      },
      F10FundCyrHshjg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundCyrHshjgData",
            id: 2
          }
        }
      },
      F10FundCyrHshjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundCyrHshjg",
            id: 2
          }
        }
      },
      FundFefhFbsjjcyrjgData: {
        fields: {
          zfe: {
            type: "int64",
            id: 1
          },
          ltfe: {
            type: "int64",
            id: 2
          },
          fqrcylt: {
            type: "int64",
            id: 3
          },
          gzcy: {
            type: "int64",
            id: 4
          },
          wltfe: {
            type: "int64",
            id: 5
          },
          fqrcywlt: {
            type: "int64",
            id: 6
          },
          bdyy: {
            type: "string",
            id: 7
          }
        }
      },
      F10FundFefhFbsjjcyrjg: {
        fields: {
          bdrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhFbsjjcyrjgData",
            id: 2
          }
        }
      },
      F10FundFefhFbsjjcyrjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhFbsjjcyrjg",
            id: 2
          }
        }
      },
      FundFefhFhData: {
        fields: {
          dwfh: {
            type: "string",
            id: 1
          },
          cffe: {
            type: "string",
            id: 2
          },
          qydjr: {
            type: "string",
            id: 3
          },
          cxr: {
            type: "string",
            id: 4
          },
          hlffr: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundFefhFh: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhFhData",
            id: 2
          }
        }
      },
      F10FundFefhFhOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhFh",
            id: 2
          }
        }
      },
      FundFefhKfsjjjdfebdData: {
        fields: {
          qcze: {
            type: "int64",
            id: 1
          },
          bqsg: {
            type: "int64",
            id: 2
          },
          cfzj: {
            type: "int64",
            id: 3
          },
          bqsh: {
            type: "int64",
            id: 4
          },
          qmze: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundFefhKfsjjjdfebd: {
        fields: {
          bbrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundFefhKfsjjjdfebdData",
            id: 2
          }
        }
      },
      F10FundFefhKfsjjjdfebdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundFefhKfsjjjdfebd",
            id: 2
          }
        }
      },
      FundGpmxBqzdmcgpData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          ljmcjz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundGpmxBqzdmcgp: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxBqzdmcgpData",
            id: 2
          }
        }
      },
      F10FundGpmxBqzdmcgpOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmcgp",
            id: 2
          }
        }
      },
      FundGpmxBqzdmrgpData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          ljmrjz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundGpmxBqzdmrgp: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxBqzdmrgpData",
            id: 2
          }
        }
      },
      F10FundGpmxBqzdmrgpOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxBqzdmrgp",
            id: 2
          }
        }
      },
      FundGpmxQbcgData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          gpsl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzbl: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundGpmxQbcg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundGpmxQbcgData",
            id: 2
          }
        }
      },
      F10FundGpmxQbcgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundGpmxQbcg",
            id: 2
          }
        }
      },
      FundHgzwData: {
        fields: {
          lb: {
            type: "int64",
            id: 1
          },
          nr: {
            type: "string",
            id: 2
          },
          zq: {
            type: "int64",
            id: 3
          }
        }
      },
      F10FundHgzw: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHgzwData",
            id: 2
          }
        }
      },
      F10FundHgzwOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHgzw",
            id: 2
          }
        }
      },
      FundHytzData: {
        fields: {
          hydm: {
            type: "string",
            id: 1
          },
          hymc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          }
        }
      },
      F10FundHytz: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHytzData",
            id: 2
          }
        }
      },
      F10FundHytzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHytz",
            id: 2
          }
        }
      },
      FundHytzQdiiData: {
        fields: {
          hydm: {
            type: "string",
            id: 1
          },
          hymc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          zjzbl: {
            type: "int64",
            id: 4
          },
          bz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundHytzQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHytzQdiiData",
            id: 2
          }
        }
      },
      F10FundHytzQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHytzQdii",
            id: 2
          }
        }
      },
      F10FundJbxxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          dsymbol: {
            type: "string",
            id: 2
          },
          jjqc: {
            type: "string",
            id: 3
          },
          jjmc: {
            type: "string",
            id: 4
          },
          jjlx: {
            type: "int64",
            id: 5
          },
          tzlx: {
            type: "int64",
            id: 6
          },
          jylb: {
            type: "int64",
            id: 7
          },
          fxrq: {
            type: "string",
            id: 8
          },
          clrq: {
            type: "string",
            id: 9
          },
          jzrq: {
            type: "string",
            id: 10
          },
          glgsqc: {
            type: "string",
            id: 11
          },
          tzmb: {
            type: "string",
            id: 12
          },
          tzfw: {
            type: "string",
            id: 13
          },
          fxsytz: {
            type: "string",
            id: 14
          },
          tgrmc: {
            type: "string",
            id: 15
          },
          yjbjjz: {
            type: "string",
            id: 16
          },
          isauto: {
            type: "int64",
            id: 17
          }
        }
      },
      F10FundFbsjjgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjqc: {
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          tzlx: {
            type: "string",
            id: 5
          },
          jjmz: {
            type: "string",
            id: 6
          },
          fxrq: {
            type: "string",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          },
          jjclr: {
            type: "string",
            id: 9
          },
          jjzzr: {
            type: "string",
            id: 10
          },
          jjcxq: {
            type: "string",
            id: 11
          },
          jjtgr: {
            type: "string",
            id: 12
          },
          glgs: {
            type: "string",
            id: 13
          },
          clrq: {
            type: "string",
            id: 14
          },
          bgdz: {
            type: "string",
            id: 15
          },
          zcdz: {
            type: "string",
            id: 16
          },
          fddbr: {
            type: "string",
            id: 17
          },
          lxdh: {
            type: "string",
            id: 18
          },
          cz: {
            type: "string",
            id: 19
          },
          gswz: {
            type: "string",
            id: 20
          },
          dzyx: {
            type: "string",
            id: 21
          },
          lssws: {
            type: "string",
            id: 22
          },
          kjssws: {
            type: "string",
            id: 23
          },
          jjyjbjjz: {
            type: "string",
            id: 24
          },
          fxsytz: {
            type: "string",
            id: 25
          },
          tzmb: {
            type: "string",
            id: 26
          },
          tzfw: {
            type: "string",
            id: 27
          },
          tzcl: {
            type: "string",
            id: 28
          },
          tzln: {
            type: "string",
            id: 29
          }
        }
      },
      F10FundKfsjjgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjqc: {
            type: "string",
            id: 2
          },
          jjjc: {
            type: "string",
            id: 3
          },
          jjlx: {
            type: "string",
            id: 4
          },
          tzlx: {
            type: "string",
            id: 5
          },
          jjmz: {
            type: "string",
            id: 6
          },
          bz: {
            type: "string",
            id: 7
          },
          fxrq: {
            type: "string",
            id: 8
          },
          ssrq: {
            type: "string",
            id: 9
          },
          jjclr: {
            type: "string",
            id: 10
          },
          jjcxq: {
            type: "string",
            id: 11
          },
          jjtgr: {
            type: "string",
            id: 12
          },
          glgs: {
            type: "string",
            id: 13
          },
          clrq: {
            type: "string",
            id: 14
          },
          bgdz: {
            type: "string",
            id: 15
          },
          zcdz: {
            type: "string",
            id: 16
          },
          fddbr: {
            type: "string",
            id: 17
          },
          lxdh: {
            type: "string",
            id: 18
          },
          cz: {
            type: "string",
            id: 19
          },
          gswz: {
            type: "string",
            id: 20
          },
          dzyx: {
            type: "string",
            id: 21
          },
          lssws: {
            type: "string",
            id: 22
          },
          kjssws: {
            type: "string",
            id: 23
          },
          jjyjbjjz: {
            type: "string",
            id: 24
          },
          fxsytz: {
            type: "string",
            id: 25
          },
          tzmb: {
            type: "string",
            id: 26
          },
          tzfw: {
            type: "string",
            id: 27
          },
          tzcl: {
            type: "string",
            id: 28
          },
          tzln: {
            type: "string",
            id: 29
          }
        }
      },
      FundJlggJjgsggryData: {
        fields: {
          xb: {
            type: "string",
            id: 1
          },
          xl: {
            type: "string",
            id: 2
          },
          zw: {
            type: "string",
            id: 3
          },
          jl: {
            type: "string",
            id: 4
          },
          lb: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundJlggJjgsggry: {
        fields: {
          xm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJlggJjgsggryData",
            id: 2
          }
        }
      },
      F10FundJlggJjgsggryOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJlggJjgsggry",
            id: 2
          }
        }
      },
      FundJlggJjjlData: {
        fields: {
          xb: {
            type: "string",
            id: 1
          },
          xl: {
            type: "string",
            id: 2
          },
          zw: {
            type: "string",
            id: 3
          },
          rzkssj: {
            type: "string",
            id: 4
          },
          jl: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundJlggJjjl: {
        fields: {
          xm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJlggJjjlData",
            id: 2
          }
        }
      },
      F10FundJlggJjjlOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJlggJjjl",
            id: 2
          }
        }
      },
      FundJyyjData: {
        fields: {
          qsmc: {
            type: "string",
            id: 1
          },
          xw: {
            type: "int64",
            id: 2
          },
          yj: {
            type: "int64",
            id: 3
          },
          bl: {
            type: "int64",
            id: 4
          },
          gpcjje: {
            type: "int64",
            id: 5
          },
          gpcjbl: {
            type: "int64",
            id: 6
          },
          zqcjje: {
            type: "int64",
            id: 7
          },
          zqbl: {
            type: "int64",
            id: 8
          },
          zqhgje: {
            type: "int64",
            id: 9
          },
          zqhgbl: {
            type: "int64",
            id: 10
          },
          qzcjje: {
            type: "int64",
            id: 11
          },
          qzbl: {
            type: "int64",
            id: 12
          }
        }
      },
      F10FundJyyj: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundJyyjData",
            id: 2
          }
        }
      },
      F10FundJyyjOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundJyyj",
            id: 2
          }
        }
      },
      FundZccgQsmgpmxData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          sl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzb: {
            type: "int64",
            id: 5
          },
          tbzjc: {
            type: "string",
            id: 6
          }
        }
      },
      F10FundZccgQsmgpmx: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZccgQsmgpmxData",
            id: 2
          }
        }
      },
      F10FundZccgQsmgpmxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZccgQsmgpmx",
            id: 2
          }
        }
      },
      FundZccgQdiiData: {
        fields: {
          gpdm: {
            type: "string",
            id: 1
          },
          gpjc: {
            type: "string",
            id: 2
          },
          sl: {
            type: "int64",
            id: 3
          },
          sz: {
            type: "int64",
            id: 4
          },
          zjzb: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundZccgQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZccgQdiiData",
            id: 2
          }
        }
      },
      F10FundZccgQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZccgQdii",
            id: 2
          }
        }
      },
      FundZqtzTzzhData: {
        fields: {
          zqlx: {
            type: "string",
            id: 1
          },
          sz: {
            type: "int64",
            id: 2
          },
          bl: {
            type: "int64",
            id: 3
          }
        }
      },
      F10FundZqtzTzzh: {
        fields: {
          bgrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzTzzhData",
            id: 2
          }
        }
      },
      F10FundZqtzTzzhOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzTzzh",
            id: 2
          }
        }
      },
      FundZqtzTzzhQdiiData: {
        fields: {
          xydj: {
            type: "string",
            id: 1
          },
          sz: {
            type: "int64",
            id: 2
          },
          bl: {
            type: "int64",
            id: 3
          },
          bz: {
            type: "string",
            id: 5
          }
        }
      },
      F10FundZqtzTzzhQdii: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzTzzhQdiiData",
            id: 2
          }
        }
      },
      F10FundZqtzTzzhQdiiOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzTzzhQdii",
            id: 2
          }
        }
      },
      FundZqtzZcmxData: {
        fields: {
          zqdm: {
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          sz: {
            type: "int64",
            id: 3
          },
          bl: {
            type: "int64",
            id: 4
          },
          zytz: {
            type: "int64",
            id: 5
          }
        }
      },
      F10FundZqtzZcmx: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZqtzZcmxData",
            id: 2
          }
        }
      },
      F10FundZqtzZcmxOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZqtzZcmx",
            id: 2
          }
        }
      },
      FundZycyrData: {
        fields: {
          cyrmc: {
            type: "string",
            id: 1
          },
          cyfe: {
            type: "int64",
            id: 2
          },
          szbl: {
            type: "int64",
            id: 3
          },
          cyzjqk: {
            type: "string",
            id: 4
          }
        }
      },
      F10FundZycyr: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundZycyrData",
            id: 2
          }
        }
      },
      F10FundZycyrOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundZycyr",
            id: 2
          }
        }
      },
      FundHbjjxeData: {
        fields: {
          scdm: {
            type: "string",
            id: 1
          },
          jynm: {
            type: "string",
            id: 2
          },
          jshsx: {
            type: "int64",
            id: 3
          },
          jsgsx: {
            type: "int64",
            id: 4
          },
          zshsx: {
            type: "int64",
            id: 5
          },
          zsgsx: {
            type: "int64",
            id: 6
          },
          dzhjshsx: {
            type: "int64",
            id: 7
          },
          dzhjsgsx: {
            type: "int64",
            id: 8
          },
          dzhzshsx: {
            type: "int64",
            id: 9
          },
          dzhzsgsx: {
            type: "int64",
            id: 10
          },
          cptx: {
            type: "string",
            id: 11
          }
        }
      },
      F10FundHbjjxe: {
        fields: {
          xerq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "FundHbjjxeData",
            id: 2
          }
        }
      },
      F10FundHbjjxeOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FundHbjjxe",
            id: 2
          }
        }
      },
      F10CwtsLrfpbzy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          dw: {
            type: "string",
            id: 2
          },
          yysr: {
            type: "int64",
            id: 3
          },
          yycb: {
            type: "int64",
            id: 4
          },
          glfy: {
            type: "int64",
            id: 5
          },
          yyfy: {
            type: "int64",
            id: 6
          },
          cwfy: {
            type: "int64",
            id: 7
          },
          yylr: {
            type: "int64",
            id: 8
          },
          tzsy: {
            type: "int64",
            id: 9
          },
          yywszje: {
            type: "int64",
            id: 10
          },
          lrze: {
            type: "int64",
            id: 11
          },
          jlr: {
            type: "int64",
            id: 12
          }
        }
      },
      F10CwtsZcfzbzy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          dw: {
            type: "string",
            id: 2
          },
          zzc: {
            type: "int64",
            id: 3
          },
          ldzc: {
            type: "int64",
            id: 4
          },
          hbzj: {
            type: "int64",
            id: 5
          },
          jyxjrzc: {
            type: "int64",
            id: 6
          },
          ch: {
            type: "int64",
            id: 7
          },
          yszkze: {
            type: "int64",
            id: 8
          },
          qtysk: {
            type: "int64",
            id: 9
          },
          gdzcje: {
            type: "int64",
            id: 10
          },
          kgcsjrzc: {
            type: "int64",
            id: 11
          },
          wxzc: {
            type: "int64",
            id: 12
          },
          dqjk: {
            type: "int64",
            id: 13
          },
          yszk: {
            type: "int64",
            id: 14
          },
          yfzk: {
            type: "int64",
            id: 15
          },
          ldfz: {
            type: "int64",
            id: 16
          },
          cqfz: {
            type: "int64",
            id: 17
          },
          zfz: {
            type: "int64",
            id: 18
          },
          gdqy: {
            type: "int64",
            id: 19
          },
          zbgjj: {
            type: "int64",
            id: 20
          }
        }
      },
      ZygcData: {
        fields: {
          lb: {
            type: "string",
            id: 1
          },
          hy: {
            type: "string",
            id: 2
          },
          zysr: {
            type: "int64",
            id: 3
          },
          zysrzb: {
            type: "int64",
            id: 4
          },
          zysrtbbh: {
            type: "int64",
            id: 5
          },
          zycb: {
            type: "int64",
            id: 6
          },
          zycbtbbh: {
            type: "int64",
            id: 7
          },
          zylr: {
            type: "int64",
            id: 8
          },
          mll: {
            type: "int64",
            id: 9
          },
          mlltbbh: {
            type: "int64",
            id: 10
          }
        }
      },
      F10Zygc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZygcData",
            id: 2
          }
        }
      },
      F10DstxJjlt: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jjgf: {
            type: "int64",
            id: 2
          },
          zzgf: {
            type: "int64",
            id: 3
          },
          gflx: {
            type: "string",
            id: 4
          }
        }
      },
      F10DstxRzrq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          rzje: {
            type: "int64",
            id: 2
          },
          rzmre: {
            type: "int64",
            id: 3
          },
          rqyl: {
            type: "int64",
            id: 4
          },
          rqye: {
            type: "int64",
            id: 5
          },
          rqmcl: {
            type: "int64",
            id: 6
          }
        }
      },
      DstxJgccData: {
        fields: {
          cgjs: {
            type: "int64",
            id: 2
          },
          cgs: {
            type: "int64",
            id: 3
          },
          zltgbl: {
            type: "int64",
            id: 4
          },
          type: {
            type: "int64",
            id: 5
          }
        }
      },
      F10DstxJgcc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "DstxJgccData",
            id: 2
          }
        }
      },
      F10DstxGdzjc: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          gdmc: {
            type: "string",
            id: 2
          },
          bdfx: {
            type: "string",
            id: 3
          },
          gdlx: {
            type: "string",
            id: 4
          },
          bdsl: {
            type: "int64",
            id: 5
          },
          zzgb: {
            type: "int64",
            id: 6
          }
        }
      },
      F10DstxDzjy: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jg: {
            type: "int64",
            id: 2
          },
          drspj: {
            type: "int64",
            id: 3
          },
          zjl: {
            type: "string",
            id: 4
          },
          cjl: {
            type: "int64",
            id: 5
          },
          cjje: {
            type: "string",
            id: 6
          },
          mf: {
            type: "string",
            id: 7
          },
          mf2: {
            type: "string",
            id: 8
          }
        }
      },
      F10DstxCgbdqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          bdr: {
            type: "string",
            id: 2
          },
          bdsl: {
            type: "int64",
            id: 3
          },
          jj: {
            type: "int64",
            id: 4
          },
          jcgs: {
            type: "int64",
            id: 5
          },
          djg: {
            type: "string",
            id: 6
          },
          bdyy: {
            type: "string",
            id: 7
          }
        }
      },
      GlcData: {
        fields: {
          xm: {
            type: "string",
            id: 1
          },
          zw: {
            type: "string",
            id: 2
          },
          lb: {
            type: "string",
            id: 3
          },
          rzsj: {
            type: "string",
            id: 4
          },
          xl: {
            type: "string",
            id: 5
          },
          qmcgs: {
            type: "int64",
            id: 6
          },
          xcjzrq: {
            type: "string",
            id: 7
          },
          xc: {
            type: "int64",
            id: 8
          },
          xb: {
            type: "string",
            id: 9
          },
          csrq: {
            type: "string",
            id: 10
          },
          jl: {
            type: "string",
            id: 11
          },
          px: {
            type: "int64",
            id: 12
          }
        }
      },
      F10GlcOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "GlcData",
            id: 2
          }
        }
      },
      F10GlcNdbcqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          ndbcze: {
            type: "int64",
            id: 2
          },
          zgqswdsbcze: {
            type: "int64",
            id: 3
          },
          zgqswgjglrybcze: {
            type: "int64",
            id: 4
          },
          dldsjt: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZxjbDjdxjllb: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          jyxjlr: {
            type: "int64",
            id: 2
          },
          jyxjlc: {
            type: "int64",
            id: 3
          },
          jyxjje: {
            type: "int64",
            id: 4
          },
          tzxjlr: {
            type: "int64",
            id: 5
          },
          tzxjlc: {
            type: "int64",
            id: 6
          },
          tzxjje: {
            type: "int64",
            id: 7
          },
          czxjlr: {
            type: "int64",
            id: 8
          },
          czxjlc: {
            type: "int64",
            id: 9
          },
          czxjje: {
            type: "int64",
            id: 10
          },
          xjjzje: {
            type: "int64",
            id: 11
          }
        }
      },
      F10GdjcKggdOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          mc: {
            type: "string",
            id: 2
          },
          frdb: {
            type: "string",
            id: 3
          },
          zczb: {
            type: "int64",
            id: 4
          },
          clrq: {
            type: "string",
            id: 5
          },
          jyyw: {
            type: "string",
            id: 6
          },
          qylx: {
            type: "string",
            id: 7
          }
        }
      },
      F10GdjcSjkzrOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          mc: {
            type: "string",
            id: 2
          },
          sm: {
            type: "string",
            id: 3
          }
        }
      },
      F10GbfhGbbd: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          zgb: {
            type: "int64",
            id: 2
          },
          yltag: {
            type: "int64",
            id: 3
          },
          yltbg: {
            type: "int64",
            id: 4
          },
          bdrqgbsm: {
            type: "string",
            id: 5
          },
          zxjg: {
            type: "int64",
            id: 6
          }
        }
      },
      ZbyzCyqtsszqData: {
        fields: {
          btzzqdm: {
            type: "string",
            id: 1
          },
          btzzqjc: {
            type: "string",
            id: 2
          },
          cgsl: {
            type: "int64",
            id: 3
          },
          zbl: {
            type: "int64",
            id: 4
          },
          cstzje: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZbyzCyqtsszq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzCyqtsszqData",
            id: 2
          }
        }
      },
      ZbyzCyfssgqData: {
        fields: {
          scdxmc: {
            type: "string",
            id: 1
          },
          cstzje: {
            type: "int64",
            id: 2
          },
          cgsl: {
            type: "int64",
            id: 3
          },
          zbl: {
            type: "int64",
            id: 4
          },
          qmzmjz: {
            type: "int64",
            id: 5
          }
        }
      },
      F10ZbyzCyfssgq: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzCyfssgqData",
            id: 2
          }
        }
      },
      F10zbyzRzqkzfyss: {
        fields: {
          rzlb: {
            type: "string",
            id: 1
          },
          yarq: {
            type: "string",
            id: 2
          },
          gddh: {
            type: "string",
            id: 3
          },
          zgyxspl: {
            type: "string",
            id: 4
          },
          lgdgqdjr: {
            type: "string",
            id: 5
          },
          sgr: {
            type: "string",
            id: 6
          },
          fajc: {
            type: "string",
            id: 7
          },
          fxfs: {
            type: "string",
            id: 8
          },
          fxgplx: {
            type: "string",
            id: 9
          },
          zzfx: {
            type: "int64",
            id: 10
          },
          fxjg: {
            type: "int64",
            id: 11
          },
          zcxs: {
            type: "string",
            id: 12
          }
        }
      },
      F10ZbyzXmtzMjzjqk: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          mjzjze: {
            type: "int64",
            id: 2
          },
          bqsyje: {
            type: "int64",
            id: 3
          },
          jlsyje: {
            type: "int64",
            id: 4
          }
        }
      },
      ZbyzXmtzMjzjcnxmData: {
        fields: {
          cnxmmc: {
            type: "string",
            id: 1
          },
          ntrje: {
            type: "int64",
            id: 2
          },
          sfbgxm: {
            type: "string",
            id: 3
          },
          sjtrje: {
            type: "int64",
            id: 4
          },
          sjsy: {
            type: "int64",
            id: 5
          },
          sffhjd: {
            type: "string",
            id: 6
          },
          bgyycxsm: {
            type: "string",
            id: 7
          }
        }
      },
      F10ZbyzXmtzMjzjcnxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzMjzjcnxmData",
            id: 2
          }
        }
      },
      ZbyzXmtzMjzjbgxmData: {
        fields: {
          bghxmmc: {
            type: "string",
            id: 1
          },
          ycnxmmc: {
            type: "string",
            id: 2
          },
          ntrje: {
            type: "int64",
            id: 3
          },
          sjtrje: {
            type: "int64",
            id: 4
          },
          sjsy: {
            type: "int64",
            id: 5
          },
          xmjd: {
            type: "string",
            id: 6
          },
          bgxmqksm: {
            type: "string",
            id: 7
          }
        }
      },
      F10ZbyzXmtzMjzjbgxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzMjzjbgxmData",
            id: 2
          }
        }
      },
      ZbyzXmtzFmjzjxmData: {
        fields: {
          xmmc: {
            type: "string",
            id: 1
          },
          xmje: {
            type: "int64",
            id: 2
          },
          xmjd: {
            type: "string",
            id: 3
          },
          xmsyqk: {
            type: "string",
            id: 4
          }
        }
      },
      F10ZbyzXmtzFmjzjxm: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "ZbyzXmtzFmjzjxmData",
            id: 2
          }
        }
      },
      HydwData: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          gpmc: {
            type: "string",
            id: 2
          },
          ltg: {
            type: "int64",
            id: 3
          },
          pm1: {
            type: "int64",
            id: 4
          },
          zzc: {
            type: "int64",
            id: 5
          },
          pm2: {
            type: "int64",
            id: 6
          },
          zysr: {
            type: "int64",
            id: 7
          },
          pm3: {
            type: "int64",
            id: 8
          },
          mgsy: {
            type: "int64",
            id: 9
          },
          pm4: {
            type: "int64",
            id: 10
          },
          zgb: {
            type: "int64",
            id: 11
          },
          pm5: {
            type: "int64",
            id: 12
          },
          jzc: {
            type: "int64",
            id: 13
          },
          pm6: {
            type: "int64",
            id: 14
          },
          jlr: {
            type: "int64",
            id: 15
          },
          pm7: {
            type: "int64",
            id: 16
          },
          jzcsyl: {
            type: "int64",
            id: 17
          },
          pm8: {
            type: "int64",
            id: 18
          }
        }
      },
      F10HydwOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          sshy: {
            type: "string",
            id: 3
          },
          zjhhy: {
            type: "string",
            id: 4
          },
          data: {
            rule: "repeated",
            type: "HydwData",
            id: 5
          }
        }
      },
      RsrProForecastData: {
        fields: {
          enddate: {
            rule: "required",
            type: "string",
            id: 1
          },
          mgsy: {
            type: "int64",
            id: 2
          },
          jlr: {
            type: "int64",
            id: 3
          },
          jlrtb: {
            type: "int64",
            id: 4
          },
          zysr: {
            type: "int64",
            id: 5
          },
          zysrtb: {
            type: "int64",
            id: 6
          },
          yyyqbhl: {
            type: "int64",
            id: 7
          },
          itnum: {
            type: "int64",
            id: 8
          },
          mgjzc: {
            type: "int64",
            id: 9
          },
          lnzz: {
            type: "int64",
            id: 10
          },
          syl: {
            type: "int64",
            id: 11
          },
          sjl: {
            type: "int64",
            id: 12
          },
          peg2: {
            type: "int64",
            id: 13
          },
          sxl: {
            type: "int64",
            id: 14
          }
        }
      },
      F10RsrProForecastOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrProForecastData",
            id: 3
          }
        }
      },
      RsrInvestRatingData: {
        fields: {
          sjdValue: {
            type: "string",
            id: 1
          },
          mr: {
            type: "int64",
            id: 2
          },
          zc: {
            type: "int64",
            id: 3
          },
          zx: {
            type: "int64",
            id: 4
          },
          jc: {
            type: "int64",
            id: 5
          },
          mc: {
            type: "int64",
            id: 6
          },
          jgzs: {
            type: "int64",
            id: 7
          }
        }
      },
      F10RsrInvestRatingOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrInvestRatingData",
            id: 3
          }
        }
      },
      RsrEarnPSForeData: {
        fields: {
          endDate: {
            type: "string",
            id: 1
          },
          pj: {
            type: "string",
            id: 2
          },
          value: {
            type: "int64",
            id: 3
          }
        }
      },
      F10RsrEarnPSFore: {
        fields: {
          companyName: {
            rule: "required",
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "RsrEarnPSForeData",
            id: 3
          }
        }
      },
      F10RsrResReport: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 1
          },
          companyName: {
            type: "string",
            id: 2
          },
          titles: {
            type: "string",
            id: 3
          },
          investAdvice: {
            type: "string",
            id: 4
          },
          psName: {
            type: "string",
            id: 5
          }
        }
      },
      F10GsgkOutput: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqlx: {
            type: "string",
            id: 2
          },
          gsdm: {
            type: "string",
            id: 3
          },
          gsmc: {
            type: "string",
            id: 4
          },
          ywqc: {
            type: "string",
            id: 5
          },
          zcdz: {
            type: "string",
            id: 6
          },
          bgdz: {
            type: "string",
            id: 7
          },
          ssqy: {
            type: "string",
            id: 8
          },
          sshy: {
            type: "string",
            id: 9
          },
          gswz: {
            type: "string",
            id: 10
          },
          dzxx: {
            type: "string",
            id: 11
          },
          ssrq: {
            type: "string",
            id: 12
          },
          zgrq: {
            type: "string",
            id: 13
          },
          fxl: {
            type: "int64",
            id: 14
          },
          fxj: {
            type: "int64",
            id: 15
          },
          srkpj: {
            type: "int64",
            id: 16
          },
          sstjr: {
            type: "string",
            id: 17
          },
          zcxs: {
            type: "string",
            id: 18
          },
          frdb: {
            type: "string",
            id: 19
          },
          dsz: {
            type: "string",
            id: 20
          },
          zjl: {
            type: "string",
            id: 21
          },
          dm: {
            type: "string",
            id: 22
          },
          zqdb: {
            type: "string",
            id: 23
          },
          dh: {
            type: "string",
            id: 24
          },
          cz: {
            type: "string",
            id: 25
          },
          yb: {
            type: "string",
            id: 26
          },
          kjsws: {
            type: "string",
            id: 27
          },
          zyfw: {
            type: "string",
            id: 28
          },
          gsjs: {
            type: "string",
            id: 29
          },
          dmdh: {
            type: "string",
            id: 30
          },
          dmcz: {
            type: "string",
            id: 31
          },
          dmdzyx: {
            type: "string",
            id: 32
          },
          RegionName: {
            type: "string",
            id: 33
          }
        }
      },
      F10CwtsZycwzb: {
        fields: {
          kjssjyj: {
            type: "string",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          jbmgsy: {
            type: "int64",
            id: 3
          },
          kchjbmgsy: {
            type: "int64",
            id: 4
          },
          tbmgsy: {
            type: "int64",
            id: 5
          },
          mgjzc: {
            type: "int64",
            id: 6
          },
          mgwfplr: {
            type: "int64",
            id: 7
          },
          mggjj: {
            type: "int64",
            id: 8
          },
          xsmll: {
            type: "int64",
            id: 9
          },
          yylrl: {
            type: "int64",
            id: 10
          },
          jlrl: {
            type: "int64",
            id: 11
          },
          jqjzcsyl: {
            type: "int64",
            id: 12
          },
          tbjzcsyl: {
            type: "int64",
            id: 13
          },
          gdqy: {
            type: "int64",
            id: 14
          },
          ldbl: {
            type: "int64",
            id: 15
          },
          sdbl: {
            type: "int64",
            id: 16
          },
          mgjyxjll: {
            type: "int64",
            id: 17
          },
          bbgbr: {
            type: "string",
            id: 18
          }
        }
      },
      F10CwtsZycwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsZycwzb",
            id: 2
          }
        }
      },
      F10CwtsXjllbzy: {
        fields: {
          xjjzje: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          dw: {
            type: "string",
            id: 3
          },
          jyxjlr: {
            type: "int64",
            id: 4
          },
          jyxjlc: {
            type: "int64",
            id: 5
          },
          jyxjje: {
            type: "int64",
            id: 6
          },
          tzxjlr: {
            type: "int64",
            id: 7
          },
          tzxjlc: {
            type: "int64",
            id: 8
          },
          tzxjje: {
            type: "int64",
            id: 9
          },
          czxjlr: {
            type: "int64",
            id: 10
          },
          czxjlc: {
            type: "int64",
            id: 11
          },
          czxjje: {
            type: "int64",
            id: 12
          }
        }
      },
      F10CwtsXjllbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsXjllbzy",
            id: 2
          }
        }
      },
      F10ZxjbDjdcwzb: {
        fields: {
          jlrhb: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          mgsy: {
            type: "int64",
            id: 3
          },
          xsjll: {
            type: "int64",
            id: 4
          },
          jzcsyl: {
            type: "int64",
            id: 5
          },
          mgjyxjll: {
            type: "int64",
            id: 6
          },
          zysrtb: {
            type: "int64",
            id: 7
          },
          jlrtb: {
            type: "int64",
            id: 8
          },
          zysrhb: {
            type: "int64",
            id: 9
          }
        }
      },
      F10ZxjbDjdcwzbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ZxjbDjdcwzb",
            id: 2
          }
        }
      },
      F10Zxjbdjdleb: {
        fields: {
          ssgdsy: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          yysr: {
            type: "int64",
            id: 3
          },
          yycb: {
            type: "int64",
            id: 4
          },
          yysjjfj: {
            type: "int64",
            id: 5
          },
          xsfy: {
            type: "int64",
            id: 6
          },
          glfy: {
            type: "int64",
            id: 7
          },
          cwfy: {
            type: "int64",
            id: 8
          },
          tzsy: {
            type: "int64",
            id: 9
          },
          yylr: {
            type: "int64",
            id: 10
          },
          yywsr: {
            type: "int64",
            id: 11
          },
          yywzc: {
            type: "int64",
            id: 12
          },
          lrze: {
            type: "int64",
            id: 13
          },
          sdsfy: {
            type: "int64",
            id: 14
          },
          jlr: {
            type: "int64",
            id: 15
          },
          mgzjlr: {
            type: "int64",
            id: 16
          }
        }
      },
      F10ZxjbdjdlebOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10Zxjbdjdleb",
            id: 2
          }
        }
      },
      F10GdjcGdhs: {
        fields: {
          Gdzhs: {
            type: "int64",
            id: 1
          },
          date: {
            rule: "required",
            type: "string",
            id: 2
          },
          Hbzj: {
            type: "int64",
            id: 3
          },
          Hbbh: {
            type: "int64",
            id: 4
          },
          Rjcg: {
            type: "int64",
            id: 5
          },
          Ltgdhs: {
            type: "int64",
            id: 6
          }
        }
      },
      F10GdjcGdhsOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGdhs",
            id: 2
          }
        }
      },
      F10GdjcGd: {
        fields: {
          Gdrs: {
            type: "int64",
            id: 1
          },
          Xh: {
            type: "int64",
            id: 2
          },
          Gdmc: {
            type: "string",
            id: 3
          },
          Cgs: {
            type: "int64",
            id: 4
          },
          Zzgs: {
            type: "int64",
            id: 5
          },
          Zjqk: {
            type: "string",
            id: 6
          },
          Gbxz: {
            type: "string",
            id: 7
          },
          Gsdm: {
            type: "string",
            id: 8
          }
        }
      },
      F10GdjcSdgd: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGd",
            id: 2
          }
        }
      },
      F10GdjcSdgdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcSdgd",
            id: 2
          }
        }
      },
      F10GdjcSdltgd: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcGd",
            id: 2
          }
        }
      },
      F10GdjcSdltgdOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GdjcSdltgd",
            id: 2
          }
        }
      },
      F10GbfhFhkg: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Mgsg: {
            type: "int64",
            id: 2
          },
          Mgzz: {
            type: "int64",
            id: 3
          },
          Mgfh: {
            type: "int64",
            id: 4
          },
          Mgp: {
            type: "int64",
            id: 5
          },
          Pgjg: {
            type: "int64",
            id: 6
          },
          Zfgfsl: {
            type: "int64",
            id: 7
          },
          Zfjg: {
            type: "int64",
            id: 8
          },
          Gqdjr: {
            type: "string",
            id: 9
          },
          Cqcxr: {
            type: "string",
            id: 10
          },
          Zhjyr: {
            type: "string",
            id: 11
          }
        }
      },
      F10GbfhFhkgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GbfhFhkg",
            id: 2
          }
        }
      },
      F10GbfhGbjg: {
        fields: {
          Date: {
            rule: "required",
            type: "string",
            id: 1
          },
          Zgb: {
            type: "int64",
            id: 2
          },
          Ltgf: {
            type: "int64",
            id: 3
          },
          Ltag: {
            type: "int64",
            id: 4
          },
          Ltbg: {
            type: "int64",
            id: 5
          },
          Lthg: {
            type: "int64",
            id: 6
          },
          Qtltgf: {
            type: "int64",
            id: 7
          },
          Xsltg: {
            type: "int64",
            id: 8
          },
          Xsltag: {
            type: "int64",
            id: 9
          },
          Xsltbg: {
            type: "int64",
            id: 10
          },
          Xslthg: {
            type: "int64",
            id: 11
          },
          Xsgjcg: {
            type: "int64",
            id: 12
          },
          Xsgyfrcg: {
            type: "int64",
            id: 13
          },
          Xsjnfrcg: {
            type: "int64",
            id: 14
          },
          Xsjnzrrcg: {
            type: "int64",
            id: 15
          },
          Xsggcg: {
            type: "int64",
            id: 16
          },
          Xsjwfrcg: {
            type: "int64",
            id: 17
          },
          Xsjwzrrcg: {
            type: "int64",
            id: 18
          },
          Wltg: {
            type: "int64",
            id: 19
          },
          Gjg: {
            type: "int64",
            id: 20
          },
          Gyfrg: {
            type: "int64",
            id: 21
          },
          Jnfgyfr: {
            type: "int64",
            id: 22
          },
          Zpg: {
            type: "int64",
            id: 23
          },
          Nbzgg: {
            type: "int64",
            id: 24
          },
          Yxg: {
            type: "int64",
            id: 25
          },
          Jwfrg: {
            type: "int64",
            id: 26
          },
          Qtwltgf: {
            type: "int64",
            id: 27
          }
        }
      },
      F10GbfhGbjgOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10GbfhGbjg",
            id: 2
          }
        }
      },
      F10CpbdKpqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CpbdKpqk",
            id: 2
          }
        }
      },
      F10CpbdCjhbOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CpbdCjhb",
            id: 2
          }
        }
      },
      F10CwtsLrfpbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsLrfpbzy",
            id: 2
          }
        }
      },
      F10CwtsZcfzbzyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10CwtsZcfzbzy",
            id: 2
          }
        }
      },
      F10ZygcOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10Zygc",
            id: 2
          }
        }
      },
      F10DstxJjltOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxJjlt",
            id: 2
          }
        }
      },
      F10DstxRzrqOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxRzrq",
            id: 2
          }
        }
      },
      F10DstxJgccOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxJgcc",
            id: 2
          }
        }
      },
      F10DstxGdzjcOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxGdzjc",
            id: 2
          }
        }
      },
      F10DstxDzjyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxDzjy",
            id: 2
          }
        }
      },
      F10DstxCgbdqkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10DstxCgbdqk",
            id: 2
          }
        }
      },
      F10GlcNdbcqkOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10GlcNdbcqk",
            id: 2
          }
        }
      },
      F10ZxjbDjdxjllbOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZxjbDjdxjllb",
            id: 2
          }
        }
      },
      F10GbfhGbbdOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10GbfhGbbd",
            id: 2
          }
        }
      },
      F10ZbyzCyqtsszqOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzCyqtsszq",
            id: 2
          }
        }
      },
      F10ZbyzCyfssgqOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzCyfssgq",
            id: 2
          }
        }
      },
      F10zbyzRzqkzfyssOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10zbyzRzqkzfyss",
            id: 2
          }
        }
      },
      F10ZbyzXmtzMjzjqkOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjqk",
            id: 2
          }
        }
      },
      F10ZbyzXmtzMjzjcnxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjcnxm",
            id: 2
          }
        }
      },
      F10ZbyzXmtzMjzjbgxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzMjzjbgxm",
            id: 2
          }
        }
      },
      F10ZbyzXmtzFmjzjxmOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ZbyzXmtzFmjzjxm",
            id: 2
          }
        }
      },
      F10RsrEarnPSForeOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10RsrEarnPSFore",
            id: 2
          }
        }
      },
      F10RsrResReportOutPut: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10RsrResReport",
            id: 2
          }
        }
      },
      F10BondDfzfzfxOutput: {
        fields: {
          zqzhdm: {
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrmc: {
            type: "string",
            id: 3
          },
          fxqsr: {
            type: "string",
            id: 4
          },
          fxzzr: {
            type: "string",
            id: 5
          },
          zqze: {
            type: "int64",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          }
        }
      },
      F10BondDfzfzqxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqqc: {
            type: "string",
            id: 3
          },
          jxqsr: {
            type: "string",
            id: 4
          },
          dqr: {
            type: "string",
            id: 5
          },
          cxqx: {
            type: "int64",
            id: 6
          },
          pmll: {
            type: "int64",
            id: 7
          },
          xppz: {
            type: "string",
            id: 8
          },
          jxfs: {
            type: "int64",
            id: 9
          },
          lllx: {
            type: "int64",
            id: 10
          },
          fxcs: {
            type: "int64",
            id: 11
          },
          fxrsm: {
            type: "string",
            id: 12
          },
          chfs: {
            type: "string",
            id: 13
          },
          sfms: {
            type: "string",
            id: 14
          },
          ktqdf: {
            type: "string",
            id: 15
          },
          bzqzsl: {
            type: "int64",
            id: 16
          }
        }
      },
      F10BondFlszzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrq: {
            type: "string",
            id: 3
          },
          hzwh: {
            type: "string",
            id: 4
          },
          fxfs: {
            type: "string",
            id: 5
          },
          fxdx: {
            type: "string",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          fxsl: {
            type: "int64",
            id: 8
          },
          bjjg: {
            type: "string",
            id: 9
          },
          cxfs: {
            type: "int64",
            id: 10
          },
          zxpgjg: {
            type: "string",
            id: 11
          },
          xydj: {
            type: "string",
            id: 12
          },
          dbr: {
            type: "string",
            id: 13
          },
          dbrlx: {
            type: "string",
            id: 14
          },
          xygdpsje: {
            type: "int64",
            id: 15
          },
          wssgrq: {
            type: "string",
            id: 16
          },
          wszqlggr: {
            type: "string",
            id: 17
          },
          wszql: {
            type: "int64",
            id: 18
          },
          zzfx: {
            type: "int64",
            id: 19
          },
          sstjr: {
            type: "string",
            id: 20
          },
          kzzdjjg: {
            type: "string",
            id: 21
          },
          mjzjze: {
            type: "int64",
            id: 22
          },
          fyhj: {
            type: "int64",
            id: 23
          },
          mjzjje: {
            type: "int64",
            id: 24
          },
          tzjyr: {
            type: "string",
            id: 25
          }
        }
      },
      F10BondFlszztkOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          ybhstk: {
            type: "string",
            id: 2
          },
          mjzjtxsm: {
            type: "string",
            id: 3
          }
        }
      },
      F10BondFlszzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqmc: {
            type: "string",
            id: 3
          },
          zqmz: {
            type: "int64",
            id: 4
          },
          zqqx: {
            type: "int64",
            id: 5
          },
          jxqsr: {
            type: "string",
            id: 6
          },
          dqr: {
            type: "string",
            id: 7
          },
          ll: {
            type: "int64",
            id: 8
          },
          fxpl: {
            type: "int64",
            id: 9
          },
          fxrsm: {
            type: "string",
            id: 10
          },
          ssqsr: {
            type: "string",
            id: 11
          },
          scssgm: {
            type: "int64",
            id: 12
          },
          bzqzsl: {
            type: "int64",
            id: 13
          }
        }
      },
      F10BondGzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          gzqc: {
            type: "string",
            id: 2
          },
          zqlx: {
            type: "int64",
            id: 3
          },
          nd: {
            type: "int64",
            id: 4
          },
          fxr: {
            type: "string",
            id: 5
          },
          zfe: {
            type: "int64",
            id: 6
          },
          mz: {
            type: "int64",
            id: 7
          },
          fxjg: {
            type: "int64",
            id: 8
          },
          pmll: {
            type: "int64",
            id: 9
          },
          qx: {
            type: "int64",
            id: 10
          },
          jxfs: {
            type: "int64",
            id: 11
          },
          lllx: {
            type: "int64",
            id: 12
          },
          qxrq: {
            type: "string",
            id: 13
          },
          dqrq: {
            type: "string",
            id: 14
          },
          xppz: {
            type: "string",
            id: 15
          },
          fxcs: {
            type: "int64",
            id: 16
          },
          fxr2: {
            type: "string",
            id: 17
          },
          chfs: {
            type: "string",
            id: 18
          },
          sfms: {
            type: "string",
            id: 19
          },
          sl: {
            type: "int64",
            id: 20
          },
          ktqdf: {
            type: "string",
            id: 21
          },
          ssrq: {
            type: "string",
            id: 22
          },
          zyssgdm: {
            type: "string",
            id: 23
          },
          hgdm7: {
            type: "string",
            id: 24
          },
          hgdm28: {
            type: "string",
            id: 25
          },
          hgdm91: {
            type: "string",
            id: 26
          },
          dfqsrq: {
            type: "string",
            id: 27
          },
          bzqzsl: {
            type: "int64",
            id: 28
          }
        }
      },
      F10BondHgxxOutput: {
        fields: {
          hgzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          hgjc: {
            type: "string",
            id: 2
          },
          hgpz: {
            type: "string",
            id: 3
          }
        }
      },
      F10BondKzzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          faxr: {
            type: "string",
            id: 3
          },
          hzwh: {
            type: "string",
            id: 4
          },
          fxfs: {
            type: "string",
            id: 5
          },
          fxdx: {
            type: "string",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          fxsl: {
            type: "int64",
            id: 8
          },
          bjjg: {
            type: "string",
            id: 9
          },
          cxfs: {
            type: "int64",
            id: 10
          },
          zxpgjg: {
            type: "string",
            id: 11
          },
          xydj: {
            type: "string",
            id: 12
          },
          psje: {
            type: "int64",
            id: 13
          },
          wssgr: {
            type: "string",
            id: 14
          },
          wszqggr: {
            type: "string",
            id: 15
          },
          wszql: {
            type: "int64",
            id: 16
          },
          zzfx: {
            type: "int64",
            id: 17
          },
          sstjr: {
            type: "string",
            id: 18
          },
          kzzdjjg: {
            type: "string",
            id: 19
          },
          mjzjze: {
            type: "int64",
            id: 20
          },
          fyhj: {
            type: "int64",
            id: 21
          },
          mjzjje: {
            type: "int64",
            id: 22
          },
          zgqsr: {
            type: "string",
            id: 23
          },
          zgzzr: {
            type: "string",
            id: 24
          },
          zgdm: {
            type: "string",
            id: 25
          },
          zgjc: {
            type: "string",
            id: 26
          }
        }
      },
      F10BondKzztkOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          tztk: {
            type: "string",
            id: 2
          },
          xztk: {
            type: "string",
            id: 3
          },
          dqshtk: {
            type: "string",
            id: 4
          },
          ybhstk: {
            type: "string",
            id: 5
          },
          mjzjtX: {
            type: "string",
            id: 6
          }
        }
      },
      BondKzztzzgj: {
        fields: {
          zqmc: {
            type: "string",
            id: 1
          },
          sjlx: {
            type: "string",
            id: 2
          },
          bdqzgj: {
            type: "int64",
            id: 3
          },
          bdhzgj: {
            type: "int64",
            id: 4
          },
          xzgjsxrq: {
            type: "string",
            id: 5
          }
        }
      },
      F10BondKzztzzgj: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondKzztzzgj",
            id: 2
          }
        }
      },
      F10BondKzztzzgjOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondKzztzzgj",
            id: 2
          }
        }
      },
      F10BondKzzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqjc: {
            type: "string",
            id: 2
          },
          zqmc: {
            type: "string",
            id: 3
          },
          zqmz: {
            type: "int64",
            id: 4
          },
          zqqx: {
            type: "int64",
            id: 5
          },
          jxqsr: {
            type: "string",
            id: 6
          },
          dqr: {
            type: "string",
            id: 7
          },
          llsm: {
            type: "string",
            id: 8
          },
          fxpl: {
            type: "int64",
            id: 9
          },
          fxrsm: {
            type: "string",
            id: 10
          },
          cszgj: {
            type: "int64",
            id: 11
          },
          zxzgj: {
            type: "int64",
            id: 12
          },
          cszgsm: {
            type: "string",
            id: 13
          },
          ssqsr: {
            type: "string",
            id: 14
          },
          scssgm: {
            type: "int64",
            id: 15
          },
          bzqzsl: {
            type: "int64",
            id: 16
          }
        }
      },
      BondQycyr: {
        fields: {
          cyrmc: {
            rule: "required",
            type: "int64",
            id: 1
          },
          cyrmc2: {
            rule: "required",
            type: "string",
            id: 2
          },
          cyje: {
            type: "int64",
            id: 3
          },
          cyl: {
            type: "int64",
            id: 4
          },
          cybl: {
            type: "int64",
            id: 5
          },
          sid: {
            type: "int64",
            id: 6
          }
        }
      },
      F10BondQycyr: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondQycyr",
            id: 2
          }
        }
      },
      F10BondQycyrOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondQycyr",
            id: 2
          }
        }
      },
      F10BondQyzfxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          fxrmc: {
            type: "string",
            id: 3
          },
          ywmc: {
            type: "string",
            id: 4
          },
          fxqsr: {
            type: "string",
            id: 5
          },
          zqze: {
            type: "int64",
            id: 6
          },
          fxjg: {
            type: "int64",
            id: 7
          },
          ssrq: {
            type: "string",
            id: 8
          },
          sstjr: {
            type: "string",
            id: 9
          },
          fzcxs: {
            type: "string",
            id: 10
          },
          tgr: {
            type: "string",
            id: 11
          },
          zcdz: {
            type: "string",
            id: 12
          },
          bgdz: {
            type: "string",
            id: 13
          },
          frdb: {
            type: "string",
            id: 14
          },
          yzbm: {
            type: "string",
            id: 15
          },
          hlwdz: {
            type: "string",
            id: 16
          },
          cz: {
            type: "string",
            id: 17
          },
          zczb: {
            type: "int64",
            id: 18
          },
          kjsws: {
            type: "string",
            id: 19
          },
          lssws: {
            type: "string",
            id: 20
          },
          fxrdm: {
            type: "string",
            id: 21
          }
        }
      },
      F10BondQyzxxOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          zqmc: {
            type: "string",
            id: 2
          },
          ssrq: {
            type: "string",
            id: 3
          },
          jxqsr: {
            type: "string",
            id: 4
          },
          dqr: {
            type: "string",
            id: 5
          },
          cxqx: {
            type: "int64",
            id: 6
          },
          pmll: {
            type: "int64",
            id: 7
          },
          xppz: {
            type: "string",
            id: 8
          },
          jxfs: {
            type: "int64",
            id: 9
          },
          lllx: {
            type: "int64",
            id: 10
          },
          fxcs: {
            type: "int64",
            id: 11
          },
          fxr: {
            type: "string",
            id: 12
          },
          chfs: {
            type: "string",
            id: 13
          },
          sfms: {
            type: "string",
            id: 14
          },
          sl: {
            type: "int64",
            id: 15
          },
          ktqdf: {
            type: "string",
            id: 16
          },
          pjjg: {
            type: "string",
            id: 17
          },
          xydj: {
            type: "string",
            id: 18
          },
          dbr: {
            type: "string",
            id: 19
          },
          dfqsr: {
            type: "string",
            id: 20
          },
          bzqzsl: {
            type: "int64",
            id: 21
          }
        }
      },
      BondZqgg: {
        fields: {
          ggbt: {
            type: "string",
            id: 1
          },
          qw: {
            type: "string",
            id: 2
          },
          zlly: {
            type: "string",
            id: 3
          },
          sid: {
            type: "int64",
            id: 4
          }
        }
      },
      F10BondZqgg: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqgg",
            id: 2
          }
        }
      },
      F10BondZqggOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqgg",
            id: 2
          }
        }
      },
      BondZqxjl: {
        fields: {
          fxrq: {
            type: "string",
            id: 1
          },
          xjlllx: {
            type: "string",
            id: 2
          },
          je: {
            type: "int64",
            id: 3
          },
          zqdjr: {
            type: "string",
            id: 4
          },
          cqcxr: {
            type: "string",
            id: 5
          },
          sid: {
            type: "int64",
            id: 6
          }
        }
      },
      F10BondZqxjl: {
        fields: {
          ggrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqxjl",
            id: 2
          }
        }
      },
      F10BondZqxjlOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqxjl",
            id: 2
          }
        }
      },
      BondZqzg: {
        fields: {
          ljzgje: {
            type: "int64",
            id: 1
          },
          ljzgs: {
            type: "int64",
            id: 2
          },
          bqzgje: {
            type: "int64",
            id: 3
          },
          bqzgs: {
            type: "int64",
            id: 4
          },
          sybj: {
            type: "int64",
            id: 5
          }
        }
      },
      F10BondZqzg: {
        fields: {
          jzrq: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "BondZqzg",
            id: 2
          }
        }
      },
      F10BondZqzgOutput: {
        fields: {
          zqzhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10BondZqzg",
            id: 2
          }
        }
      },
      F10ForexDqjj: {
        fields: {
          rn: {
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexDqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          data: {
            rule: "repeated",
            type: "F10ForexDqjj",
            id: 2
          }
        }
      },
      F10ForexJqjj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexJqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexJqjj",
            id: 2
          }
        }
      },
      F10ForexLlhh: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexLlhhOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexLlhh",
            id: 2
          }
        }
      },
      F10ForexQqwhjbzlOutput: {
        fields: {
          whdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          whmc: {
            type: "string",
            id: 2
          },
          sjly: {
            type: "string",
            id: 3
          },
          jysj: {
            type: "string",
            id: 4
          },
          jchbdm: {
            type: "string",
            id: 5
          },
          jchbmc: {
            type: "string",
            id: 6
          },
          jchbgjmc: {
            type: "string",
            id: 7
          },
          jchbssz: {
            type: "int64",
            id: 8
          },
          jchbsszmc: {
            type: "string",
            id: 9
          },
          jchbssdq: {
            type: "string",
            id: 10
          },
          jchbjj: {
            type: "string",
            id: 11
          },
          bjhbdm: {
            type: "string",
            id: 12
          },
          bjhbmc: {
            type: "string",
            id: 13
          },
          bjhbgjmc: {
            type: "string",
            id: 14
          },
          bjhbssz: {
            type: "int64",
            id: 15
          },
          bjhbsszmc: {
            type: "string",
            id: 16
          },
          bjhbssdq: {
            type: "string",
            id: 17
          },
          bjhbjj: {
            type: "string",
            id: 18
          }
        }
      },
      F10ForexShiborlv: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexShiborlvOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexShiborlv",
            id: 2
          }
        }
      },
      F10ForexWbdjq: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexWbdjqOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexWbdjq",
            id: 2
          }
        }
      },
      F10ForexWhbzMb: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          whbzlx: {
            type: "int64",
            id: 2
          },
          clfs: {
            type: "int64",
            id: 3
          },
          zdmc: {
            rule: "required",
            type: "string",
            id: 4
          },
          zdzwmc: {
            type: "string",
            id: 5
          },
          bz: {
            type: "string",
            id: 6
          }
        }
      },
      F10ForexWhbzMbOutput: {
        fields: {
          stype: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexWhbzMb",
            id: 2
          }
        }
      },
      F10ForexXycj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexXycjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexXycj",
            id: 2
          }
        }
      },
      F10ForexYqjj: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          zdzwmc: {
            type: "string",
            id: 2
          },
          zdz: {
            type: "string",
            id: 3
          },
          stype: {
            type: "int64",
            id: 4
          }
        }
      },
      F10ForexYqjjOutput: {
        fields: {
          zhdm: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10ForexYqjj",
            id: 2
          }
        }
      },
      F10FuturesBzhyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          jydm: {
            type: "string",
            id: 2
          },
          jypz: {
            type: "string",
            id: 3
          },
          ssjys: {
            type: "string",
            id: 4
          },
          jydw: {
            type: "string",
            id: 5
          },
          bjdw: {
            type: "string",
            id: 6
          },
          zxjwbd: {
            type: "string",
            id: 7
          },
          zdbdxz: {
            type: "string",
            id: 8
          },
          zdbzj: {
            type: "string",
            id: 9
          },
          hyjzj: {
            type: "int64",
            id: 10
          },
          jysxf: {
            type: "string",
            id: 11
          },
          hyjgyf: {
            type: "string",
            id: 12
          },
          zhjyr: {
            type: "string",
            id: 13
          },
          zhjgr: {
            type: "string",
            id: 14
          },
          jgpj: {
            type: "string",
            id: 15
          },
          jgdd: {
            type: "string",
            id: 16
          },
          jysjysj: {
            type: "string",
            id: 17
          },
          bdjysj: {
            type: "string",
            id: 18
          },
          jgfs: {
            type: "string",
            id: 19
          },
          jyfs: {
            type: "string",
            id: 20
          },
          jybcj: {
            type: "string",
            id: 21
          },
          jgyq: {
            type: "string",
            id: 22
          },
          wtjgsxf: {
            type: "string",
            id: 23
          },
          qtfy: {
            type: "string",
            id: 24
          },
          jchbssdq: {
            type: "string",
            id: 25
          },
          jchbssgj: {
            type: "string",
            id: 26
          },
          jchbsd: {
            type: "string",
            id: 27
          },
          bjhbssdq: {
            type: "string",
            id: 28
          },
          bjhbssgj: {
            type: "string",
            id: 29
          },
          bjhbsd: {
            type: "string",
            id: 30
          },
          pzdm: {
            type: "string",
            id: 31
          },
          pzmc: {
            type: "string",
            id: 32
          },
          jgdw: {
            type: "string",
            id: 33
          },
          jgjy: {
            type: "string",
            id: 34
          },
          jgq: {
            type: "string",
            id: 35
          },
          bjfs: {
            type: "string",
            id: 36
          },
          hybd: {
            type: "string",
            id: 37
          },
          ssrq: {
            type: "string",
            id: 38
          }
        }
      },
      F10FuturesCpgk: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesCpgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesCpgk",
            id: 2
          }
        }
      },
      F10FuturesFkbf: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesFkbfOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesFkbf",
            id: 2
          }
        }
      },
      F10FuturesJsxz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesJsxzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesJsxz",
            id: 2
          }
        }
      },
      F10FuturesJygz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesJygzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesJygz",
            id: 2
          }
        }
      },
      F10FuturesWphy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesWphyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesWphy",
            id: 2
          }
        }
      },
      F10FuturesYxys: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10FuturesYxysOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10FuturesYxys",
            id: 2
          }
        }
      },
      F10SpotBzhy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          sourcetable: {
            type: "string",
            id: 4
          }
        }
      },
      F10SpotBzhyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotBzhy",
            id: 2
          }
        }
      },
      F10SpotFjsm: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotFjsmOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotFjsm",
            id: 2
          }
        }
      },
      F10SpotJygz: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotJygzOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotJygz",
            id: 2
          }
        }
      },
      F10SpotPzgk: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotPzgkOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotPzgk",
            id: 2
          }
        }
      },
      F10SpotWphy: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotWphyOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotWphy",
            id: 2
          }
        }
      },
      F10SpotYxys: {
        fields: {
          rn: {
            rule: "required",
            type: "int64",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          }
        }
      },
      F10SpotYxysOutput: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "F10SpotYxys",
            id: 2
          }
        }
      },
      OverallInfo: {
        fields: {
          TotalStockNum: {
            type: "int64",
            id: 1
          },
          AgreementStockNum: {
            type: "int64",
            id: 2
          },
          BrokerStockNum: {
            type: "int64",
            id: 3
          },
          WaitStockNum: {
            type: "int64",
            id: 4
          },
          ApplyStockNum: {
            type: "int64",
            id: 5
          }
        }
      },
      TodayListStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          MainBroker: {
            type: "string",
            id: 3
          },
          Industry: {
            type: "string",
            id: 4
          }
        }
      },
      TodayListStocks: {
        fields: {
          ListStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayListStock",
            id: 2
          }
        }
      },
      TodayBrokerStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          BrokerNum: {
            type: "int64",
            id: 3
          },
          NewAddNum: {
            type: "int64",
            id: 4
          }
        }
      },
      TodayBrokerStocks: {
        fields: {
          BrokerStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayBrokerStock",
            id: 2
          }
        }
      },
      TodayConvertStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          BrokerNum: {
            type: "int64",
            id: 3
          }
        }
      },
      TodayConvertStocks: {
        fields: {
          ConvertStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayConvertStock",
            id: 2
          }
        }
      },
      TodayIssueStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          ProjectAdvance: {
            type: "string",
            id: 3
          },
          IssuePrice: {
            type: "string",
            id: 4
          }
        }
      },
      TodayIssueStocks: {
        fields: {
          IssueStockNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "TodayIssueStock",
            id: 2
          }
        }
      },
      BrokerStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          Price: {
            type: "int64",
            id: 3
          },
          InitAmount: {
            type: "int64",
            id: 4
          },
          InitCost: {
            type: "int64",
            id: 5
          }
        }
      },
      BrokerDetaileInfo: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          FirstStockNum: {
            type: "int64",
            id: 2
          },
          LastStockNum: {
            type: "int64",
            id: 3
          },
          MainStockNum: {
            type: "int64",
            id: 4
          },
          AvgPE: {
            type: "int64",
            id: 5
          },
          AvgPB: {
            type: "int64",
            id: 6
          },
          TotalValue: {
            type: "int64",
            id: 7
          },
          Data: {
            rule: "repeated",
            type: "BrokerStock",
            id: 8
          }
        }
      },
      BrokerInfo: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          BeginDate: {
            rule: "required",
            type: "string",
            id: 2
          },
          InitAmount: {
            type: "int64",
            id: 3
          }
        }
      },
      StockBrokerInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          Data: {
            rule: "repeated",
            type: "BrokerInfo",
            id: 3
          }
        }
      },
      IssueDetaileInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          IssueAmount: {
            type: "int64",
            id: 3
          },
          CollectCapital: {
            type: "int64",
            id: 4
          },
          IssuePrice: {
            type: "string",
            id: 5
          },
          LastClose: {
            type: "int64",
            id: 6
          },
          IssuePE: {
            type: "int64",
            id: 7
          },
          OverflowRatio: {
            type: "int64",
            id: 8
          },
          ProjectAdvance: {
            type: "string",
            id: 9
          },
          IssueDate: {
            type: "string",
            id: 10
          },
          IssueTarget: {
            type: "string",
            id: 11
          }
        }
      },
      IssueStock: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          NoticeDate: {
            type: "string",
            id: 3
          },
          IssueScale: {
            type: "int64",
            id: 4
          },
          IssuePrice: {
            type: "string",
            id: 5
          },
          ProjectAdvance: {
            type: "string",
            id: 6
          },
          PE: {
            type: "int64",
            id: 7
          },
          LatestNoticeDate: {
            type: "string",
            id: 8
          }
        }
      },
      IssueStatInfo: {
        fields: {
          StockNum: {
            type: "int64",
            id: 1
          },
          TotalScale: {
            type: "int64",
            id: 2
          },
          AvgPE: {
            type: "int64",
            id: 3
          },
          Data: {
            rule: "repeated",
            type: "IssueStock",
            id: 4
          }
        }
      },
      BrokerData: {
        fields: {
          BrokerName: {
            rule: "required",
            type: "string",
            id: 1
          },
          LastStockNum: {
            type: "int64",
            id: 2
          },
          FirstStockNum: {
            type: "int64",
            id: 3
          }
        }
      },
      BrokerList: {
        fields: {
          BrokerNum: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "BrokerData",
            id: 2
          }
        }
      },
      QuickReportData: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          ReportDate: {
            type: "string",
            id: 3
          },
          ReportTitle: {
            type: "string",
            id: 4
          },
          ClassTag: {
            type: "int64",
            id: 5
          }
        }
      },
      FinanceQuickReport: {
        fields: {
          Data: {
            rule: "repeated",
            type: "QuickReportData",
            id: 2
          }
        }
      },
      NewsDataItem: {
        fields: {
          NewsId: {
            type: "int64",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Context: {
            type: "string",
            id: 4
          },
          Source: {
            type: "string",
            id: 5
          }
        }
      },
      StockNews: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "NewsDataItem",
            id: 2
          }
        }
      },
      SelfNews: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          NewsId: {
            type: "int64",
            id: 2
          },
          Date: {
            type: "string",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          Source: {
            type: "string",
            id: 6
          }
        }
      },
      NewsClassData: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ClassMask: {
            type: "int64",
            id: 2
          },
          Data: {
            type: "NewsDataItem",
            id: 3
          }
        }
      },
      AnnouncemtDataItem: {
        fields: {
          Date: {
            type: "string",
            id: 1
          },
          AnnouncemId: {
            rule: "required",
            type: "int64",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Context: {
            type: "string",
            id: 4
          },
          type: {
            type: "string",
            id: 5
          }
        }
      },
      StockAnnouncemt: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "AnnouncemtDataItem",
            id: 2
          }
        }
      },
      SelfAnnouncemt: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          AnnouncemId: {
            rule: "required",
            type: "int64",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          type: {
            type: "string",
            id: 6
          }
        }
      },
      InnerNewsDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "NewsDataItem",
            id: 2
          }
        }
      },
      InnerAnnouncemtDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "AnnouncemtDataItem",
            id: 2
          }
        }
      },
      ReportDataItem: {
        fields: {
          Id: {
            type: "int64",
            id: 1
          },
          Date: {
            type: "string",
            id: 2
          },
          Title: {
            type: "string",
            id: 3
          },
          Organization: {
            type: "string",
            id: 4
          },
          Context: {
            type: "string",
            id: 5
          },
          type: {
            type: "string",
            id: 6
          },
          RateClass: {
            type: "string",
            id: 7
          },
          RateDirection: {
            type: "string",
            id: 8
          },
          Author: {
            type: "string",
            id: 9
          },
          HightPrice: {
            type: "int64",
            id: 10
          },
          LowPrice: {
            type: "int64",
            id: 11
          }
        }
      },
      StockReport: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Data: {
            rule: "repeated",
            type: "ReportDataItem",
            id: 2
          }
        }
      },
      SelfReport: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Id: {
            type: "int64",
            id: 2
          },
          Date: {
            type: "string",
            id: 3
          },
          Title: {
            type: "string",
            id: 4
          },
          Organization: {
            type: "string",
            id: 5
          },
          Context: {
            type: "string",
            id: 6
          },
          type: {
            type: "string",
            id: 7
          },
          RateClass: {
            type: "string",
            id: 8
          },
          RateDirection: {
            type: "string",
            id: 9
          },
          Author: {
            type: "string",
            id: 10
          },
          HightPrice: {
            type: "int64",
            id: 11
          },
          LowPrice: {
            type: "int64",
            id: 12
          }
        }
      },
      InnerReportDataItem: {
        fields: {
          Version: {
            rule: "required",
            type: "int64",
            id: 1
          },
          Data: {
            type: "ReportDataItem",
            id: 2
          }
        }
      },
      RepCounterRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "uint32",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          Status: {
            type: "uint32",
            id: 3
          },
          StatusDesc: {
            type: "string",
            id: 4
          }
        }
      },
      CounterRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          }
        }
      },
      QueryCapitalRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          AvailCapital: {
            type: "int64",
            id: 3
          },
          FreezeCapital: {
            type: "int64",
            id: 4
          },
          Margin: {
            type: "int64",
            id: 5
          },
          TotalValue: {
            type: "int64",
            id: 6
          },
          TotalCapital: {
            type: "int64",
            id: 7
          }
        }
      },
      HoldItem: {
        fields: {
          HoldNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          ProductCode: {
            type: "string",
            id: 2
          },
          ProductName: {
            type: "string",
            id: 3
          },
          BuyOrSell: {
            type: "string",
            id: 4
          },
          Margin: {
            type: "int64",
            id: 5
          },
          PosAmount: {
            type: "int64",
            id: 6
          },
          AvailAmount: {
            type: "int64",
            id: 7
          },
          AvgPosPrice: {
            type: "int64",
            id: 8
          },
          NewPrice: {
            type: "int64",
            id: 9
          },
          Value: {
            type: "int64",
            id: 10
          },
          Profit: {
            type: "int64",
            id: 11
          }
        }
      },
      QueryHoldRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          AvailCapital: {
            type: "int64",
            id: 3
          },
          FreezeCapital: {
            type: "int64",
            id: 4
          },
          TotalMargin: {
            type: "int64",
            id: 5
          },
          TotalValue: {
            type: "int64",
            id: 6
          },
          TotalCapital: {
            type: "int64",
            id: 7
          },
          TotalProfit: {
            type: "int64",
            id: 8
          },
          HoldList: {
            rule: "repeated",
            type: "HoldItem",
            id: 9
          },
          CapitalId: {
            type: "string",
            id: 10
          }
        }
      },
      OrderItem: {
        fields: {
          OrderNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          OrderTime: {
            type: "string",
            id: 2
          },
          ProductCode: {
            type: "string",
            id: 3
          },
          ProductName: {
            type: "string",
            id: 4
          },
          BuyOrSell: {
            type: "string",
            id: 5
          },
          OpenOrClose: {
            type: "string",
            id: 6
          },
          OrderType: {
            type: "string",
            id: 7
          },
          OrderAmount: {
            type: "int64",
            id: 8
          },
          OrderPrice: {
            type: "int64",
            id: 9
          },
          Status: {
            type: "string",
            id: 10
          }
        }
      },
      QueryOrderRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          OrderList: {
            rule: "repeated",
            type: "OrderItem",
            id: 3
          },
          CapitalId: {
            type: "string",
            id: 4
          }
        }
      },
      DealItem: {
        fields: {
          DealNo: {
            rule: "required",
            type: "string",
            id: 1
          },
          DealTime: {
            type: "string",
            id: 2
          },
          ProductCode: {
            type: "string",
            id: 3
          },
          ProductName: {
            type: "string",
            id: 4
          },
          BuyOrSell: {
            type: "string",
            id: 5
          },
          OpenOrClose: {
            type: "string",
            id: 6
          },
          DealAmount: {
            type: "int64",
            id: 7
          },
          DealPrice: {
            type: "int64",
            id: 8
          },
          Fee: {
            type: "int64",
            id: 9
          }
        }
      },
      QueryDealRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          DealList: {
            rule: "repeated",
            type: "DealItem",
            id: 3
          },
          CapitalId: {
            type: "string",
            id: 4
          }
        }
      },
      CounterSettleRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          SettleTime: {
            type: "string",
            id: 3
          },
          Status: {
            type: "int64",
            id: 4
          }
        }
      },
      TradeRuleRsp: {
        fields: {
          RspNo: {
            rule: "required",
            type: "int64",
            id: 1
          },
          RspDesc: {
            type: "string",
            id: 2
          },
          UpdateTime: {
            type: "string",
            id: 3
          },
          TradeRate: {
            type: "int64",
            id: 4
          },
          MinTradeFee: {
            type: "int64",
            id: 5
          },
          MaxPosAmount: {
            type: "int64",
            id: 6
          },
          MaxOrderAmount: {
            type: "int64",
            id: 7
          },
          SettleTime: {
            type: "string",
            id: 8
          },
          StopTrade: {
            type: "int64",
            id: 9
          },
          TradeRule: {
            type: "int64",
            id: 10
          },
          MarginRate: {
            type: "int64",
            id: 11
          },
          ForceCloseRate: {
            type: "int64",
            id: 12
          }
        }
      },
      DanShangPinShuXing: {
        fields: {
          obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          shangShiShiJian: {
            type: "string",
            id: 2
          },
          zhongWenJianCheng: {
            type: "string",
            id: 3
          },
          yingWenQuanCheng: {
            type: "string",
            id: 4
          },
          xiaoShuDianWeiShu: {
            type: "int32",
            id: 5
          },
          jiaoYiShiJianLeiXin: {
            type: "int32",
            id: 6
          },
          jiaoYiBiZhong: {
            type: "string",
            id: 7
          },
          tuiShiShiJian: {
            type: "string",
            id: 8
          },
          shangShiZhuangTai: {
            type: "int32",
            id: 9
          },
          zhengQuanLeiBie: {
            type: "string",
            id: 10
          },
          tingPai: {
            type: "int32",
            id: 11
          }
        }
      },
      MarketTradeDate: {
        fields: {
          Market: {
            rule: "required",
            type: "string",
            id: 1
          },
          TradeDate: {
            rule: "repeated",
            type: "string",
            id: 2
          }
        }
      },
      FutureInfo: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          Name: {
            type: "string",
            id: 2
          },
          BeginDate: {
            type: "string",
            id: 3
          },
          EndDate: {
            type: "string",
            id: 4
          },
          DeliveryDay: {
            type: "string",
            id: 5
          },
          TradeUnit: {
            type: "double",
            id: 6
          },
          MarginRate: {
            type: "double",
            id: 7
          }
        }
      },
      NewStockInfo: {
        fields: {
          StockCode: {
            rule: "required",
            type: "string",
            id: 1
          },
          StockName: {
            type: "string",
            id: 2
          },
          StockSummary: {
            type: "string",
            id: 3
          },
          BuyCode: {
            type: "string",
            id: 4
          },
          IssueTotal: {
            type: "string",
            id: 5
          },
          OnlineTotal: {
            type: "string",
            id: 6
          },
          BuyLimit: {
            type: "string",
            id: 7
          },
          IssuePrice: {
            type: "string",
            id: 8
          },
          FirstClose: {
            type: "string",
            id: 9
          },
          BuyDate: {
            type: "string",
            id: 10
          },
          PubDate: {
            type: "string",
            id: 11
          },
          PayDate: {
            type: "string",
            id: 12
          },
          TradeDate: {
            type: "string",
            id: 13
          },
          IssuePE: {
            type: "string",
            id: 14
          },
          IndustryPE: {
            type: "string",
            id: 15
          },
          SuccessRate: {
            type: "string",
            id: 16
          },
          OfferTotal: {
            type: "string",
            id: 17
          },
          OfferTimes: {
            type: "string",
            id: 18
          },
          SeriesNum: {
            type: "string",
            id: 19
          },
          IncreaseTotal: {
            type: "string",
            id: 20
          }
        }
      },
      YueKXianShuJu: {
        fields: {
          Nian: {
            rule: "required",
            type: "int64",
            id: 1
          },
          ZhangFu: {
            type: "int64",
            id: 2
          }
        }
      },
      YueZouShiShuJu: {
        fields: {
          Yue: {
            rule: "required",
            type: "int64",
            id: 1
          },
          YueKXian: {
            rule: "repeated",
            type: "YueKXianShuJu",
            id: 2
          },
          ShangZhangGaiLv: {
            type: "int64",
            id: 3
          },
          PingJunZhangFu: {
            type: "int64",
            id: 4
          }
        }
      },
      HistoryTrends: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          YueZouShi: {
            rule: "repeated",
            type: "YueZouShiShuJu",
            id: 2
          }
        }
      },
      MonthTrends: {
        fields: {
          Obj: {
            rule: "required",
            type: "string",
            id: 1
          },
          HangQing: {
            rule: "repeated",
            type: "LiShiHangQing",
            id: 2
          }
        }
      },
      UAResponse: {
        fields: {
          Qid: {
            rule: "required",
            type: "string",
            id: 1
          },
          Err: {
            rule: "required",
            type: "int32",
            id: 2
          },
          Counter: {
            rule: "required",
            type: "uint32",
            id: 3
          },
          Data: {
            type: "bytes",
            id: 4
          }
        }
      },
      ChildResponse: {
        fields: {
          No: {
            rule: "required",
            type: "int32",
            id: 1
          },
          Data: {
            type: "bytes",
            id: 2
          }
        }
      },
      GroupResponse: {
        fields: {
          ChildRes: {
            rule: "repeated",
            type: "ChildResponse",
            id: 1
          }
        }
      }
    }
  }
});

module.exports = $root;

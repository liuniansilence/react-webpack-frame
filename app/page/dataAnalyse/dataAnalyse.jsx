/**
 * @file 数据管理模块
 */

let React = require('react');
import Table from 'antd/lib/table';
let GLOBAL_CONFIG = require('../../conf/conf.js');
let commonPageStyle = require('../../component/widget/common/common.css');
let dataPageStyle = require('./dataAnalyse.useable.css');
// 首页顶部标题栏部分
let HeaderElement = require('../../component/widget/header/header.jsx');
let NaviMenu = require('../../component/widget/naviMenu/naviMenu.jsx')
// 首页底部状态栏部分
let FooterElement = require('../../component/widget/footer/footer.jsx');

class dataAnalyse extends React.Component {

    constructor() {
        super();
        this.state = {
            table: {
                columns: null,
                datas: null,
                totalDatas: null
            }
        };
    }
    componentWillMount() {
        dataPageStyle.use();
        this.getTableDatas();
    }

    componentWillUnmount() {
        dataPageStyle.unuse();
    }

    getTableDatas() {
        let _this = this;
        let _distID = _this.distID;
        let _distName = _this.distName;
        let requestParams = {
            "scriptname": (_this.landType === "1") ? "jdgis.queryStatByArea" : "jdgis.queryStatByInfo",
            "filter": "1=1",
            "groupby": "镇名",
            "updateFilter": "镇名=mytbl.镇名"
        };

        $.ajax({
            type: 'POST',
            url: GLOBAL_CONFIG.requestUrl.getAgriData,
            data: {
                req: JSON.stringify(requestParams)
            },
            dataType: 'json',
            success: (data) => {
                _this.handleAgriResult(data);
            },
            error: function (xhr, type) {
                alert("网络请求数据出错");
            }
        })
    }

    // 处理后端返回数据
    handleAgriResult(data) {
        let _this = this;
        if (data.result == 0) {
            // 请求数据成功
            let fields = data.query_1.fldsDef;
            let datas = data.query_1.data;
            let totalDatas = data.query_1.totaldata;
            let agriColumns = _this.getColumns(fields);
            let agriDatas = _this.getDatas(agriColumns, datas);
            _this.setState({
                table: {
                    columns: agriColumns,
                    datas: agriDatas.datas,
                    totalDatas: agriDatas.totalDatas
                }
            });
            // _this.initPieCharts(agriColumns, agriDatas.totalDatas);
            // _this.initBarCharts(_this.barDatas.selectedKey);
            // _this.handleHeaderEvent();
        } else {
            alert("请求返回数据出错");
        }
    }

    /**
     * 获取表格表头列表【按照antd要求处理表格表头】
     * @DateTime 2017-07-29
     * @param    {[type]}   fields               [description]
     * @return   {[type]}                        [description]
     */
    getColumns (fields) {
        var fieldsLen = fields.length;
        var perWidth = 100 / (fieldsLen - 2) + '%';
        var finalColumns = [];
        for (var i = 2; i < fieldsLen; i++) {
            var tmpField = fields[i];
            var tmpColumn = {
                key: i,
                title: tmpField.name,
                dataIndex: tmpField.name,
                width: perWidth,
                className: 'agri-header'
            }
            finalColumns.push(tmpColumn);
        }
        return finalColumns;
    }

    /**
     * 获取表格数据【按照antd要求处理表格数据部分】
     * @DateTime 2017-07-29
     * @param    {[type]}   fields               [description]
     * @param    {[type]}   datas                [description]
     * @return   {[type]}                        [description]
     */
    getDatas (fields, datas) {
        var datasLen = datas.length;
        var finalDatas = {datas:[],totalDatas:[]};
        for (var i = 0; i < datasLen; i++) {
            var tmpData = datas[i];
            var tmpDataLen = tmpData.length;
            var tmpDataJson = {key:i};
            for (var j = 2; j < tmpDataLen; j++) {
                tmpDataJson[fields[j - 2]['dataIndex']] = tmpData[j];
            }
            if(i == 0) {
                finalDatas.totalDatas = tmpData.slice(2);
            } else {
                finalDatas.datas.push(tmpDataJson);
            }
        }
        return finalDatas;
    }
    
    render() {
        var _this = this;
        const tableColumns    = _this.state.table.columns,
              tableDatas      = _this.state.table.datas,
              distName        = _this.distName,
              townBtnDisplay  = (_this.distID == 'county') ? 'none': 'inline-block';
        return (<div className = "content-box">                
                <Table
                    columns={tableColumns}
                    dataSource={tableDatas}
                    pagination={false}
                    scroll={{ y: 210 }}
                    />
            </div>);
    }
}
module.exports = dataAnalyse;

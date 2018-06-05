var React = require('react');
import { Table } from 'antd';
let GLOBAL_CONFIG = require('../../../conf/conf.js');
var contentPageStyle = require('./content.less');

class contentComponent extends React.Component{
    constructor() {
        super();
        this.columns = [
            {title: '项目编号', dataIndex: 'name', key: 'PRJNUM'},
            {title: '项目名称', dataIndex: 'name', key: 'PRJNAME'},
            {title: '分类', dataIndex: 'name', key: 'PRJCLASSIFY'},
            {title: '项目内容', dataIndex: 'name', key: 'PRJCONTENT'},
            {title: '最新进展', dataIndex: 'name', key: 'LASTPROCESS'},
            {title: '项目交互', dataIndex: 'name', key: 'FEEDBACK'},
            {title: '状态', dataIndex: 'name', key: 'STATE'},
            {title: '位置', dataIndex: 'name', key: 'POSITION'},
            {title: '项目时间', dataIndex: 'name', key: 'PRJTIME'},
            {title: '责任人', dataIndex: 'name', key: 'DUTYOFFICER'}
        ];
        this.tableInfo = {
            legend: ['项目编号','项目名称','分  类','项目内容','最新进展','项目交互','状态','位  置','项目时间','责任人','经办人','代建公司','负责人','资金(万元)','领导批示','存在问题','解决方案','需领导协调事项','附件','备注','项目编辑'],
            legend_en: ['PRJNUM','PRJNAME','PRJCLASSIFY','PRJCONTENT','LASTPROCESS','FEEDBACK','STATE','POSITION','PRJTIME','DUTYOFFICER','AGENT','AGENCYCOM','PECHARGE','FUND','COMMENT','PROBLEM','SOLUTION','CONSULT','ACESYPATH','REMARK','EDIT'],
            
        }
        this.state = {
            dataSource: []
        }
    }
    
	componentWillMount () {
        contentPageStyle.use();
        this.loadInfo();
    }
    componentWillUnmount() {
        contentPageStyle.unuse();
    }
    loadInfo(){
        let requestParams = {
            "scriptname":"slprj.newprj.queryProject",
            "filter":"1=1",
            "feedbackFilter":"1=1"
        }
        $.ajax({
            type: 'POST',
            url: GLOBAL_CONFIG.requestUrl.getAgriData,
            data: {
                req: JSON.stringify(requestParams)
            },
            dataType: 'json',
            success: (data) => {
                // _this.handleAgriResult(data);
                console.log(data);
            },
            error: function (xhr, type) {
                alert('网络请求出错');
            }
        })
    }
    handleData(data){

    }
    render() {
        let data = [];
        return (
            <div className="content-box">
                <Table columns={this.columns} dataSource={data} />
            </div>
        );
    }
}
module.exports = contentComponent;

/**
 * @file 数据管理模块
 */

let React = require('react');
import Table from 'antd/lib/table';
let GLOBAL_CONFIG = require('../../conf/conf.js');
let commonPageStyle = require('../../component/widget/common/common.css');

import style from './dataAnalyse.useable.less';


class dataAnalyse extends React.Component {

    constructor() {
        super();
                    
        this.state = {
            table: {
                columns: null,
                datas: null
                // totalDatas: null
            }
        };
    }
    componentWillMount() {
        style.use();
        this.getTableDatas();
    }

    componentWillUnmount() {
        style.unuse();
    }
    
    render() {
        var _this = this;
        const tableColumns    = _this.state.table.columns,
              tableDatas      = _this.state.table.datas,
              distName        = _this.distName;
        return (<div className = "content-box">                
                <Table
                    columns={tableColumns}
                    dataSource={tableDatas}
                    pagination={false}
                    />
            </div>);
    }
}
module.exports = dataAnalyse;

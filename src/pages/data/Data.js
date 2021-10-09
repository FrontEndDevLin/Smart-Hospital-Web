import React from "react";

import { Input, Button, Table } from "antd";
import TopBar, { TopBarItem } from "../../components/topBar/TopBar";
import { SearchOutlined } from "@ant-design/icons";


import ButtonBar from "../../components/buttonBar/ButtonBar";
import TableOperateButtons from "../../components/tableOperateButtons/TableOperateButtons";

import "../../layout/data/data.less";
import request from "../../config/request";

let _vm = null;

const dataSource = [
  {
    key: "1",
    name: "视频名称1",
    belone: "视频1",
    intro: "视频1介绍",
    enable: true,
    createTime: "2021-8-27 16:21:05"
  },
  {
    key: "2",
    name: "视频名称2",
    belone: "视频2",
    intro: "视频2介绍",
    enable: true,
    createTime: "2021-8-27 16:21:55"
  }
];

const columns = [
  {
    title: "视频名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "所属分类",
    dataIndex: "belone",
    key: "belone",
  },
  {
    title: "视频介绍",
    dataIndex: "intro",
    key: "intro",
  },
  // {
  //   title: "启用状态",
  //   dataIndex: "enable",
  //   key: "enable",
  //   render: bIsEnable => {
  //     return bIsEnable ? "已启用" : "已禁用"
  //   }
  // },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
  {
    title: "操作",
    key: "action",
    width: "160px",
    align: "center",
    render: (_, item) => (
      <TableOperateButtons
        onEdit={() => { _vm.onEdit(item) }}
        onDel={() => { _vm.onDel(item) }}
      />
    )
  }
];

class Data extends React.Component {
	constructor(props) {
    super(props);

    _vm = this;

    this.state = {
      selectedRowKeys: [],
      loading: false,
    }
  }

  render() {
		const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange
    };

    return <div>
      <TopBar>
        <TopBarItem>
					<Input 
						placeholder="搜索"
						prefix={<SearchOutlined />}
						size="middle"
					/>
				</TopBarItem>
      </TopBar>
     	<div>
				<ButtonBar>
					<Button type="primary">增加</Button>
					<Button type="danger" ghost>批量删除</Button>
				</ButtonBar>
				<Table 
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
        />
			</div> 
    </div>
  }

  componentDidMount() {
    // request.get("home/getBaseInfo", {
    //   params: { 
    //     name: "Lin",
    //     pwd: "25"
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
  }

	onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  }
}

export default Data;
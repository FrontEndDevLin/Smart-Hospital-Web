import React from "react";

import { Input, Select, DatePicker, Button, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;
const { RangePicker } = DatePicker;

import TopBar, { TopBarItem } from "../../components/topBar/TopBar";
import ButtonBar from "../../components/buttonBar/ButtonBar";

const dataSource = [
  {
    key: "1",
    name: "科室名称1",
    belone: "科室1",
    intro: "自我介绍一下",
    enable: true,
    createTime: "2021-8-27 16:21:05"
  },
  {
    key: "2",
    name: "科室名称2",
    belone: "科室2",
    intro: "介绍个锤子",
    enable: true,
    createTime: "2021-8-27 16:21:55"
  }
];

const columns = [
  {
    title: "科室名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "所属科室",
    dataIndex: "belone",
    key: "belone",
  },
  {
    title: "科室介绍",
    dataIndex: "intro",
    key: "intro",
  },
  {
    title: "启用状态",
    dataIndex: "enable",
    key: "enable",
    render: bIsEnable => {
      return bIsEnable ? "已启用" : "已禁用"
    }
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    key: "createTime",
  },
  {
    title: "操作",
    key: "action",
    render: (_, item) => (
      <span>
        <span style={{ marginRight: "10px" }}>编辑</span>
        <span>删除</span>
      </span>
    )
  },
];

class Room extends React.Component {
  render() {
    return <div>
      <TopBar>
        <TopBarItem>
          <Input 
            placeholder="搜索"
            prefix={<SearchOutlined />}
            size="middle"
          />
        </TopBarItem>
        <TopBarItem>
          <Select defaultValue="全部页面" style={{ width: "100%" }}>
            <Option value="全部页面">全部页面</Option>
            <Option value="首页">首页</Option>
            <Option value="挂号页">挂号页</Option>
            <Option value="处方缴费页">处方缴费页</Option>
            <Option value="快递物流页">快递物流页</Option>
          </Select>
        </TopBarItem>
        <TopBarItem>
          <Select defaultValue="全部状态" style={{ width: "100%" }}>
            <Option value="全部状态">全部状态</Option>
            <Option value="开启">开启</Option>
            <Option value="关闭">关闭</Option>
          </Select>
        </TopBarItem>
        <div style={{ width: "300px" }}>
          <RangePicker />
        </div>
      </TopBar>
      <div>
        <ButtonBar>
          <Button type="primary">新建科室</Button>
          <Button type="primary" disabled>批量开启</Button>
          <Button type="primary" disabled>批量关闭</Button>
          <Button type="danger">批量删除</Button>
        </ButtonBar>
        <Table 
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </div>
  }

  componentDidMount() {
    
  }
}

export default Room;
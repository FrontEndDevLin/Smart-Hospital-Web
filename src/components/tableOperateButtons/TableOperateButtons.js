import React from "react";
import { Button } from "antd";

class TableOperateButtons extends React.Component {
  render() {
    const { onEdit, onDel } = this.props;
    let btnList = this.props.btnList || [
      { name: "编辑", fn: onEdit, type: "primary" }, 
      { name: "删除", fn: onDel, type: "danger" }
    ];

    return <span>
      {
        btnList.map((item, i) => 
          <Button
            key={i} 
            size="small"
            ghost 
            type={item.type || "normal"} 
            onClick={item.fn || void(0)}
            style={{ marginRight: i == btnList.length - 1 ? "0" : "10px" }}
          >
            { item.name }
          </Button>
        )
      }
    </span>
  }
}

export default TableOperateButtons;
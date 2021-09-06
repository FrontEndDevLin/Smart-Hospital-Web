import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function deleteConfirm() {
  return new Promise((resolve) => {
    let _m = Modal.confirm({
      title: "确定要删除所选项吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后数据不可恢复",
      centered: true,
      okType: "danger",
      onOk: (close) => {
        _m.update({
          okButtonProps: {
            loading: true
          }
        });
        resolve(close);
      }
    })
  })
}

export default deleteConfirm;
import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

function deleteConfirm() {
  return new Promise((resolve) => {
    let modal = Modal.confirm({
      title: "确定要删除该项吗？",
      icon: <ExclamationCircleOutlined />,
      content: "删除后数据不可恢复",
      centered: true,
      okType: "danger",
      onOk: (close) => {
        modal.update({
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
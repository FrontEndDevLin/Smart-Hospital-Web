import React from "react";
import { Modal } from "antd";

const HANDLE_TYPE = {
  NONE: 0,
  ADD: 1,
  EDIT: 2
};

class RoomEditor extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    bIsShowModal: false,
    sTitle: "",
    iCurrentMode: HANDLE_TYPE.NONE
  };

  static HANDLE_TYPE = HANDLE_TYPE;

  render() {
    let { state } = this;

    return <Modal
      title={state.sTitle}
      visible={state.bIsShowModal}
      onCancel={onCancel.bind(this)}
      onOk={onOk.bind(this)}
      centered
    >
      hello
    </Modal>
  }

  // api
  show = (iMode, oEditData) => {
    if (typeof iMode != "number") return;

    this.setState({
      iCurrentMode: iMode
    });

    switch (iMode) {
      case HANDLE_TYPE.ADD: {
        this.setState({
          bIsShowModal: true,
          sTitle: "添加"
        });
      } break;
      case HANDLE_TYPE.EDIT: {
        this.setState({
          bIsShowModal: true,
          sTitle: "编辑"
        });
      } break;
    }
  }
}

function onCancel() {
  this.setState({
    bIsShowModal: false,
    sTitle: "",
    iCurrentMode: HANDLE_TYPE.NONE
  });
}

function onOk() {
  // do sth ...
  this.props.onSave({ msg: "保存成功" });

  onCancel.call(this);
}

export default RoomEditor;
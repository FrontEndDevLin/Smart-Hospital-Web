import React from "react";
import { Modal, Form, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import request from "../../config/request";

const HANDLE_TYPE = {
  NONE: 0,
  ADD: 1,
  EDIT: 2
};



function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

class RoomEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    bIsShowModal: false,
    sTitle: "",
    iCurrentMode: HANDLE_TYPE.NONE,

    imageUrl: ""
  };

  formRef = null;

  static HANDLE_TYPE = HANDLE_TYPE;

  
  render() {
    let { state } = this;

    const uploadButton = (
      <div>
        {<PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    function onCancel() {
      this.setState({
        bIsShowModal: false,
        sTitle: "",
        iCurrentMode: HANDLE_TYPE.NONE
      });
      this.formRef = null;
    }
    
    function onOk() {
      this.formRef.current.validateFields().then(values => {
        let name = values.userName;
        let file = values.userAvatar[0];
        if (file.status == "done") {
          if (file.response.code == 1) {
            let coverFileName = file.response.result.fileName;

            // ajax

            this.props.onSave({ msg: "保存成功" });
            onCancel.call(this);
          } else {
            message.error("图片上传失败，请重试");
          }
        } else {
          if (file.status == "pending") {
            message.warning("图片上传中，请等待");
          } else {
            message.error("图片上传失败，请重试");
          }
        }
      }).catch(err => {
        message.error("缺少必要参数");
      })
    }
    return <Modal
      title={state.sTitle}
      visible={state.bIsShowModal}
      onCancel={onCancel.bind(this)}
      onOk={onOk.bind(this)}
      okButtonProps={{
        // disabled: !isValidate()
      }}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        ref={this.formRef}
        onFinish={this.onFinish}
      >
        <Form.Item
          label="Username"
          name="userName"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="User avatar"
          name="userAvatar"
          rules={[{ required: true, message: "请上传文件" }]}
          valuePropName="fileList"
          getValueFromEvent={normFile}
        > 
          <Upload 
            listType="picture-card"
            beforeUpload={this.beforeUpload}
            onChange={this.handleChange}
            action={request.getBaseURL() + "/upload/image"}
          >
            {state.imageUrl ? "" : uploadButton}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  }

  componentDidMount() {
    console.log()
  }

  beforeUpload = (file, fileList) => {
    let bIsPassExt = file.type === "image/jpeg" || file.type === "image/png";
    if (!bIsPassExt) {
      message.error("只允许上传jpeg或png图片");
    }
    let bIsPassSize = file.size / 1024 / 1024 < 2;
    if (!bIsPassSize) {
      message.error("图片不能大于2M");
    }
    return bIsPassExt && bIsPassSize;
  }

  handleChange = ({ file }) => {
    if (file.status === "done") {
      getBase64(file.originFileObj, imageUrl =>
        this.setState({
          imageUrl
        })
      );
    }
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

    this.formRef = React.createRef();
  }
	
}

export default RoomEditor;
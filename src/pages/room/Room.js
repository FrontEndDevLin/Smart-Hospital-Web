import React from "react";

class Room extends React.Component {
  render() {
    return <div>
      来自Room
    </div>
  }

  componentDidMount() {
    console.log("room页面加载完成");
  }
}

export default Room;
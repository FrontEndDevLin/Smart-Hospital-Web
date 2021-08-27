import React from "react";

import TopBar from "../../components/topBar/TopBar";

import "../../layout/data/data.less";

class Data extends React.Component {
  render() {
    return <div>
      <TopBar>
        top bar content
      </TopBar>
      来自data
    </div>
  }
}

export default Data;
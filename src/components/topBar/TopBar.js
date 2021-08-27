import React from "react";
import "./top-bar.less"

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-top-bar">
        { this.props.children }
      </div>
    )
  }
}

class TopBarItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="component-top-bar-item">
        { this.props.children }
      </div>
    )
  }
}

export { TopBarItem };
export default TopBar;
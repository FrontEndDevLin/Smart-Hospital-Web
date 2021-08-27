import React from "react";
import "./button-bar.less"

class ButtonBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-button-bar">
        { this.props.children }
      </div>
    )
  }
}

export default ButtonBar;
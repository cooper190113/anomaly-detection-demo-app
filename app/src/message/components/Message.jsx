import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionReplace from "react-css-transition-replace";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Message extends Component {
  static get propTypes() {
    return {
      message: PropTypes.string,
      messageType: PropTypes.string,
      icon: PropTypes.string,
      visible: PropTypes.bool,
      clearMessage: PropTypes.func
    }
  }

  handleClick() {
    this.props.clearMessage();
  }

  render() {
    return (
        <ReactCSSTransitionReplace
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
          {this.props.visible &&
          <div className={"alert alert-" + this.props.messageType + " alert-dismissable"}>
            <button type="button" className="close" data-dismiss="alert" aria-hidden="true" onClick={this.handleClick.bind(this)}>
              <FontAwesomeIcon icon="window-close" />
            </button>
            <span className="card-icon">
              <FontAwesomeIcon icon={this.props.icon}/>
            </span>
            {this.props.message}
          </div>}
        </ReactCSSTransitionReplace>
    );
  }
}

export default Message;

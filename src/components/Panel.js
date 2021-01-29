import React from "react";

import "./Panel.css";

class Panel extends React.Component {
    handlePanelBackgroundClick = (e) => {
        e.stopPropagation();

        this.props.resetTime();
        this.props.resetCount();
        this.props.closePanel();
    }

    handlePanelContentClick = (e) => {
        e.stopPropagation();
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div className="panel" data-testid="panel-component">
                    <div className="panel-backdrop" data-testid="panel-backdrop" onMouseDown={this.handlePanelBackgroundClick} />
                    <div className="panel-content" onMouseDown={this.handlePanelContentClick}>
                        {this.props.children}
                    </div>
                </div>);
    } else {
        return null;
    }
}
}

export default Panel;
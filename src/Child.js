import React from "react";


class Child extends React.Component {
    render() {
        const { isVisible } = this.props;
        return (
            <p style={{ display: isVisible ? "block" : "none" }}>Name: {this.props.name}, age: {this.props.age}</p>
        );
    }
}

export default Child;

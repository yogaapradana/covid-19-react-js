import React, { Component } from "react";
import NumberFormat from "react-number-format";

class Card extends Component {
    render() {
        return (
            <div className="flex-small">
                <p>{this.props.title}</p>
                <p><NumberFormat value={this.props.count} displayType={'text'} thousandSeparator={true} /></p>
            </div>
        )
    }
}

export default Card;
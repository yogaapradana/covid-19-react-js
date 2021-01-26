import React, { Component } from "react";
import "./css/flag-icon.css";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { updateData } from "./redux/action";
import { bindActionCreators } from "redux";

class CountryTable extends Component {
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="text-center">Country</th>
                            <th className="text-center">Confirmed</th>
                            <th className="text-center">Recovered</th>
                            <th className="text-center">Critical</th>
                            <th className="text-center">Death</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.covidCountry.country}</td>
                            <td className="text-center"><NumberFormat value={this.props.covidCountry.confirmed} displayType={'text'} thousandSeparator={true} /></td>
                            <td className="text-center"><NumberFormat value={this.props.covidCountry.recovered} displayType={'text'} thousandSeparator={true} /></td>
                            <td className="text-center"><NumberFormat value={this.props.covidCountry.critical} displayType={'text'} thousandSeparator={true} /></td>
                            <td className="text-center"><NumberFormat value={this.props.covidCountry.deaths} displayType={'text'} thousandSeparator={true} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators({updateData}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryTable);
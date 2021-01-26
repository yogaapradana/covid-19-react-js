import React, { Component } from "react";
import countries from "./data/countries.json";
import { connect } from "react-redux";
import { updateDataCountry } from "./redux/action";
import { bindActionCreators } from "redux";

class SideNav extends Component {
    
    getDataByCountry(e, code) {
        e.preventDefault();

        const url = 'https://covid-19-data.p.rapidapi.com/country/code?code='+code;
    
        var head = {
          headers: {
            'x-rapidapi-key': '0NNixUjfgXmsh6m2I5QUwWVUQCqCp1MjX9rjsn254gm8fKf6qg',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          }
        };
        
        fetch(url, head)
        .then((result) => result.json() )
        .then((result) => {
            if(result.message == null) {
                this.props.action.updateDataCountry(result[0]);
            }
        });
    }

    render() {
        return (
            <div className="sidenav">
                {(countries.filter(c => c.alpha2code != null)).map((data) => {
                    return (
                        <a onClick={(e) => this.getDataByCountry(e, data.alpha2code)} href={"#"+data.alpha2code} key={data.name}>{data.name}</a>
                    );
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators({updateDataCountry}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
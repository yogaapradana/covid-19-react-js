import { Component } from "react";
import './App.css';
import Card from "./Card";
import CountryTable from "./CountryTable";
import SideNav from "./SideNav";
import { connect } from "react-redux";
import { updateData } from "./redux/action";
import { bindActionCreators } from "redux";

class App extends Component {
  
  componentDidMount() {
    const url = 'https://covid-19-data.p.rapidapi.com/totals';

    var head = {
      headers: {
        'x-rapidapi-key': '0NNixUjfgXmsh6m2I5QUwWVUQCqCp1MjX9rjsn254gm8fKf6qg',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      }
    };

    fetch(url, head)
      .then((result) => result.json())
      .then((result) => {
        if(result.message == null) {
          this.props.action.updateData(result[0]);
        }
      })
  }

  render() {
    const loadCovidWorldDone = this.props.loadCovidWorldDone;
    let countryTable;
    if(loadCovidWorldDone) {
      countryTable = <CountryTable />;
    }
    
    return (
      <div className="App">
        <h1>Covid 19</h1>
        <SideNav />
        <div className="main container">
          <div className="flex-row">
            <Card title="Confirmed" count={this.props.covidWorld.confirmed} />
            <Card title="Recovered" count={this.props.covidWorld.recovered} />
            <Card title="Critical" count={this.props.covidWorld.critical} />
            <Card title="Death" count={this.props.covidWorld.deaths} />
          </div>
          {countryTable}
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: bindActionCreators({updateData}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './index.css';
import RacerForm from '../../components/racerForm';
import RacerInfo from '../../components/racerInfo';

class Racer extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
    }
  }

  getRacers = async(e) => {
    e.preventDefault();

    let season = e.target.elements.season.value;
    let round = e.target.elements.round.value;

    const URL = `http://ergast.com/api/f1/${season}/${round}/driverStandings.json`;

    let response = await fetch(URL);

    let json = await response.json();

    let data = json.MRData.StandingsTable.StandingsLists[0].DriverStandings

    this.setState({ data })

    console.log(this.state.data)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <RacerForm getRacers={this.getRacers} />
          <RacerInfo data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Racer;

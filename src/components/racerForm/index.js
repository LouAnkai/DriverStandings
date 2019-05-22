import React, { Component } from 'react';
import './index.css';

class RacerForm extends Component {
  render() {
    return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={this.props.getRacers} className="RacerForm">
          <input type="text" name="season" placeholder="Season" />
          <input type="text" name="round" class="round" placeholder="Round" />
          <input type="submit" class="submit" value="Find Racers" />
        </form>
      </div>
    </div>
    );
  }
}

export default RacerForm;

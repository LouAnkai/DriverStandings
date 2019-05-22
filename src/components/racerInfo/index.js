import React, { Component } from 'react';
import './index.css';

class RacerInfo extends Component {
  render() {
    return (
      <table class="RacerInfo">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Sponsor</th>
            <th>Points</th>
            <th>Wikipedia Page</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.data &&
          this.props.data.map( racer => {
            return (
              <tr key={racer.position}>
                <td>{racer.position}</td>
                <td>{racer.Driver.givenName} {racer.Driver.familyName}</td>
                <td>{racer.Driver.nationality}</td>
                <td>{racer.Constructors[0].name}</td>
                <td>{racer.points}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    );
  }
}

export default RacerInfo;

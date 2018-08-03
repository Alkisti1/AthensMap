import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Map  from './components/DisplayMap'

class App extends Component {
  render() {
  //set markers to load as points
    let myLocations:[
      {
          title: 'Acropolis of Athens',
          lat: 37.970833,
          lng:  23.726111,
          type: 'Landmark'
      },
      {
          title: 'Ancient Agora of Athens',
          lat: 37.975,
          lng: 23.7225,
          type: 'Landmark'
      },
      {
          title: 'Acropolis Museum',
          lat: 37.969108,
          lng: 23.728299,
          type:  'Museum'
      },
      {
          title: 'National Archaelogical Museum of Athens',
          lat: 37.98917,
          lng: 23.731827,
          type:  'Museum'
      },
      {
          title: 'Panathenaic Stadium',
          lat: 37.96833,
          lng: 23.74111,
          type: 'Landmark'
      }
    ]



    return (
      <div>
<Map />
      </div>
    );
  }
}

export default App;

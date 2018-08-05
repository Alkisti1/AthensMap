import { compose, withProps } from "recompose"
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithInfowindow from './FiveMarkers';


//used the documentation for a styled map with an info box from https://tomchentw.github.io/react-google-maps/
export const MyMap= compose(
    withProps({
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100vh` }} />,
    }),
    withGoogleMap
)((props) => {
    this.state = {
        markers: [
            {
                name: 'Acropolis of Athens',
                location: {lat: 37.970833, lng: 23.726111},
            },
            {
                name: 'Ancient Agora of Athens',
                location: {lat: 37.975, lng: 23.7225},
            },
            {
                name: 'National Archaelogical Museum of Athens',
                location: {lat: 37.98917, lng:23.731827},
            },
            {
                name: 'Panathenaic Stadium',
                location: {lat: 37.96833, lng:  23.74111},
            },
            {
                name: 'Acropolis Museum',
                location: {lat: 37.969108, lng: 23.728299},
            }
        ],
    }
    return (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{
                lat: 37.975,
                lng: 23.7225
            }}
        >
        {this.state.markers.map(marker => (
            <MarkerWithInfowindow
                key={marker.name}
                marker={marker}
            />
        ))}
        </GoogleMap>
    )
})

import React from 'react';
import './App.css';
// import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <div className="App">
      <div className="container ">
    <div className="phone">
      <div className="power" />
      <div className="photo" />
      <div className="voiceP" />
      <div className="voiceM" />
      <div className="map">
        <div className="map-container" style={{ height: 'inherit', width: '100%', borderRadius: '15px' }}>
          {/*<ReactMapGL*/}
          {/*  {...viewport}*/}
          {/*  width="00px"*/}
          {/*  height="500px"*/}
          {/*  onViewportChange={(viewport) => setViewport(viewport)}*/}
          {/*  mapboxApiAccessToken="pk.eyJ1IjoidmliZXNwb3QiLCJhIjoiY2p4YnN5cHY3MDB3NDN4czVrOWtpanU4aCJ9.nexbisROPDgIPDPUPm5tvQ"*/}
          {/*/>*/}
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;

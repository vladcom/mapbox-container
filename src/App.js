import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidmxhZHNlZ2VkYSIsImEiOiJja3g1YXRidnkxNWRpMzBvMXY4ZTFrMjg5In0.UrvwrNXzefU7EeEmALzpyg';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
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
        <div className="map-container" style={ { height: 'inherit', width: '100%', borderRadius: '15px' } }>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;

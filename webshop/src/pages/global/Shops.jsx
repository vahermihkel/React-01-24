import { useState } from 'react';
// import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <br />
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>All shops</button>
    <br />
    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    {/* <Map mapCoordinaates={coordinaates}  /> */}
  </div>)
}

export default Shops;
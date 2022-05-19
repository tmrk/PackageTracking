import './App.css';
import { useState, useEffect } from 'react';
import mockData from './mockData.json';

const jsonAddress = "https://my.api.mockaroo.com/orders.json?key=e49e6840";


const Package = ({item}) => {
  return (
    <li>
      <span>Package #{item.id}</span>
      <ul className="info">
        <li><span>ETA:</span> <span>{item.eta}</span></li>
        <li><span>Last updated:</span> <span>{item.last_updated}</span></li>
        <li><span>Latitude:</span> <span>{item.location_coordinate_latitude}</span></li>
        <li><span>Longitude:</span> <span>{item.location_coordinate_longitude}</span></li>
        <li><span>Location:</span> <span>{item.location_name}</span></li>
        <li><span>Location status OK:</span> <span>{item.location_status_ok}</span></li>
        <li><span>Notes:</span> <span>{item.notes}</span></li>
        <li><span>Parcel ID:</span> <span>{item.parcel_id}</span></li>
        <li><span>Sender:</span> <span>{item.sender}</span></li>
        <li><span>Status:</span> <span>{item.status}</span></li>
        <li><span>User Name:</span> <span>{item.user_name}</span></li>
        <li><span>User Phone:</span> <span>{item.user_phone}</span></li>
        <li><span>Verification Required:</span> <span>{item.verification_required}</span></li>
      </ul>
    </li>
  );
}

const Packages = () => {

  const [packages, setPackages] = useState([]);

  // Fetch the date and put it in state
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(jsonAddress).catch((error) => {
        console.log(error);
        setPackages(mockData);
      });
      res.json().then(res => setPackages(res));
    }
    fetchData();
  }, []);

  const handleClick = () => {
    setPackages([{id: 47389439872}]);
  }

  return (
    <div id="packages">
      <ul onClick={handleClick}>
        {packages.map((item) => (
          <Package key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <header>
      <h1>Package Tracking</h1>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>May 2022</p>
    </footer>
  );
}

function App() {
  return (
    <div id="app">
      <Header />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;

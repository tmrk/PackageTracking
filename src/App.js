import './App.css';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import mockData from './mockData.json';

const jsonAddress = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

const Map = ({lat, long, width = 520, height = 200}) => {
  const mapboxApiKey = "pk.eyJ1IjoidG1hcmtpIiwiYSI6IlVqTDJabncifQ.b2sMuSa0vQhZe3LekhHGsw";
  const coords = [long, lat].join(",");
  const size = [width, height].join("x");
  const makiIcon = "gift";
  const iconColour = "D40511";
  const marker = "pin-s-" + makiIcon + "+" + iconColour + "(" + coords + ")";
  const mapBoxSrc = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/"
                  + marker + "/" + coords + ",14/" + size
                  + "?access_token=" + mapboxApiKey;
  return (<img src={mapBoxSrc} alt="Map" />);
}

const Package = ({item}) => {
  return (
    <li>
      <div>
        <span className="title">Package #{item.id}</span>
        <span className={"status " + item.status}>{item.status}</span>
      </div>
      <ul className="info">
        <li><span>ETA:</span> <Moment date={item.eta} durationFromNow /></li>
        <li><span>Last updated:</span> <Moment date={item.last_updated} format="YYYY-MM-DD hh:mm" /></li>
        <li><span>Location:</span> <span>{item.location_name}</span></li>
        <li><span>Location status</span> <span>{item.location_status_ok ? "OK" : "Not OK"}</span></li>
        <li><span>Parcel ID:</span> <span>{item.parcel_id}</span></li>
        <li><span>Sender:</span> <span>{item.sender}</span></li>
        <li><span>User Name:</span> <span>{item.user_name}</span></li>
        <li><span>User Phone:</span> <span>{item.user_phone}</span></li>
        <li><span>Verification Required:</span> <span>{item.verification_required ? "Yes" : "No"}</span></li>
        <li><span>Notes:</span> <span>{item.notes}</span></li>
        <li>
          <Map lat={item.location_coordinate_latitude} long={item.location_coordinate_longitude} />
        </li>
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

  return (
    <div id="packages">
      <ul>
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

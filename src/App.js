import './App.css';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import mockData from './mockData.json';

const jsonAddress = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

const Map = ({lat, long, width = 520, height = 200}) => {
  const bingBasicKey = "AhigxzE7Dngd184QTIo-A1z0JDbKGuDfWMsY6yAzbCODFw_xtv0WULWqMBN47U9-";
  const coords = [lat,long].join(",");
  const size = [width, height].join(",");
  const iconStyle = "91"; // Styles: https://docs.microsoft.com/en-us/bingmaps/rest-services/common-parameters-and-types/pushpin-syntax-and-icon-styles
  const bingMapSrc = "https://dev.virtualearth.net/REST/v1/Imagery/Map/CanvasLight?format=png&pushpin="
    + coords + ";"
    + iconStyle + "&mapSize="
    + size + "&key="
    + bingBasicKey;

  return (<img src={bingMapSrc} alt="Map" />);
}

const Package = ({item}) => {
  return (
    <li>
      <div>
        <span className="title">Package #{item.id}</span>
        <span className={"status " + item.status}>{item.status.replaceAll("-"," ")}</span>
      </div>
      <ul className="info">
        <li><span>Estimated arrival:</span> <Moment date={item.eta} durationFromNow /></li>
        <li><span>Last updated:</span> <Moment date={item.last_updated} format="YYYY-MM-DD hh:mm" /></li>
        <li>
          <span>Location:</span>
          <span className={item.location_status_ok ? "location ok" : "location not-ok"}>
            {item.location_name}
          </span>
        </li>
        <li><span>Parcel ID:</span> <span>{item.parcel_id}</span></li>
        <li><span>Sender:</span> <span>{item.sender}</span></li>
        <li><span>User Name:</span> <span>{item.user_name}</span></li>
        <li><span>User Phone:</span> <span>{item.user_phone}</span></li>
        <li><span>Verification Required:</span> <span>{item.verification_required ? "Yes" : "No"}</span></li>
        {item.notes && <li><span>Notes:</span> <span>{item.notes}</span></li> }
        <li>
          <Map lat={item.location_coordinate_latitude} long={item.location_coordinate_longitude} />
        </li>
      </ul>
    </li>
  );
}

const Loading = ({loadingDone}) => {
  return (
    <div id="loading" className={loadingDone ? "hidden" : ""}>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

const Packages = () => {

  const [packages, setPackages] = useState([]);
  const [loadingDone, setLoadingDone] = useState(false);

  // Fetch the date and put it in state
  useEffect(() => {
    async function fetchData() {
      await fetch(jsonAddress)
        .then(response => response.json())
        .then(response => {
          setLoadingDone(true);
          setPackages(response);
        });
    }
    fetchData();
  }, []);
  console.log(loadingDone);
  return (
    <div id="packages">
      <Loading loadingDone={loadingDone} />
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

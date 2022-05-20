import { useState, useEffect } from 'react';
import Loading from './Loading';
import Search from './Search';
import Package from './Package';

const jsonAddress = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

const Packages = () => {

  const [packages, setPackages] = useState([]);
  const [loadingDone, setLoadingDone] = useState(false);
  const [searchTerm, setSearchTerm] = useState();

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

  return (
    <div id="packages">
      <Loading loadingDone={loadingDone} />
      <Search
        packages={packages}
        setPackages={setPackages}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ul>
        {packages.map((item) => (
          <Package key={item.id} item={item} searchTerm={searchTerm} />
        ))}
      </ul>
    </div>
  );

}

export default Packages;

import './App.css';
import { Header, Footer } from './Layout';
import Packages from './Packages';

const jsonAddress = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

function App() {
  return (
    <div id="app">
      <Header />
      <Packages jsonAddress={jsonAddress} />
      <Footer />
    </div>
  );
}

export default App;

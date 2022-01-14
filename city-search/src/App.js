import './App.css';
import './CityInputBox'
import CityInputBox from './CityInputBox';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <CityInputBox/>
      <Footer/>
    </div>
  );
}

export default App;

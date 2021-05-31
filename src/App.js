import logo from './logo.svg';
import './App.css';
import store from "./reduxWeather/store"
import WeatherComp from "./components/WeatherComp"
import {Provider} from "react-redux"
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
       <WeatherComp />
    </div>
    </Provider>
    
  );
}

export default App;

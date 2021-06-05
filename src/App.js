import logo from './logo.svg';
import './App.css';
import store from "./reduxWeather/store"
import WeatherComp from "./components/WeatherComp"
import {Provider} from "react-redux"
import HomePage from "./components/HomePage"

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
       {/* <WeatherComp /> */}
       <HomePage />
    </div>
    </Provider>
    
  );
}

export default App;

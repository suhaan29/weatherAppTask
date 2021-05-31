import {React , useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../reduxWeather/weather/weatherAct'
import "./weather.css"
function WeatherComp ({weatherData, fetchWeather}) {

    useEffect(() => {
        fetchWeather()
      }, [])

      return weatherData.loading ? (
        <h2>Loading</h2>
      ) : weatherData.error ? (
        <h2>{weatherData.error}</h2>
      ) : (
          <div className = "wrapper">
        <div className = "container">
           <span>Mumbai : </span>
              {console.log(weatherData)}
            {weatherData &&
              weatherData.weather &&
              
            //   weatherData.weather.map(weather => <p>{weather.main.temp}</p>)}
            weatherData.main.temp }

            <span> Degrees Celcius &deg;</span>
          
        </div>
        </div>
      )
}

const mapStateToProps = state => {
    return {
      weatherData: state.weather
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchWeather: () => dispatch(fetchWeather())
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WeatherComp)
  
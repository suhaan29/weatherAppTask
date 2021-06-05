import {React , useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../reduxWeather/weather/weatherAct'
import "./weather.css"
function WeatherComp ({weatherData, fetchWeather, city}) {

    useEffect(() => {
        fetchWeather(city)
      }, [])

      return weatherData.loading ? (
        <span>loading</span>
      ) : weatherData.error ? (
        <div className = "wrapper">
               <div className = "container">
        <h2>{weatherData.error}</h2></div></div>
        
      ) : (
          <div className = "wrapper">
               <div className = "container">
               <span>{city} : </span>
              {console.log(weatherData)}
                { weatherData.weather &&
                  weatherData.weather.weather &&
                  weatherData.weather.main.temp }
  
            <span> Degrees Celcius &deg;</span>
          
        </div>
        </div>
      )
}

const mapStateToProps = state => {
    return {
      weatherData: state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchWeather: (city) => dispatch(fetchWeather(city))
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WeatherComp)
  
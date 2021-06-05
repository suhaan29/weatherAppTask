import React, {useState} from 'react'
import WeatherComp from "./WeatherComp"

import './SearchPage.css'

const SearchPage = () => {

    const [cityName, setCityName] = useState(' ')

    const [show, setShow] = useState(false)

    var weatherDisplay = '';

    const submitHandler = e => {
        e.preventDefault()
        console.log(cityName);
    }
   if(show === false)
   {
    return (
        <div className = "parentContainer">
           <form onSubmit = {submitHandler}>
               <div>
                <label>Enter City</label>
                <input
                 value = {cityName}
                 onChange = {e => setCityName(e.target.value)}
                 type = 'text'
                ></input>   
               </div>
               <button onClick = {() => setShow(true)}className = "searchButton">Submit</button>
               
            </form> 
            {weatherDisplay}
        </div>
    )
}
else {
    console.log(cityName)
    return (
        <div>
            <WeatherComp city = {cityName} />
        </div>
    )
}
}
export default SearchPage
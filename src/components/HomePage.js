import React, {useState} from 'react'
import './homePage.css'
import SearchPage from "./SearchPage"


const HomePage = () => {


    
const [popUp, setPopUp] = useState(false);
var page = '';
var displayOff = 'open'
var parent = 'parent'
if(popUp === true)
{

    page = <SearchPage />
    displayOff = "doff"
    parent = "parentAfterClick"
}


    return (
        <div className =  {parent} >
            
                <button onClick = {() => setPopUp(!popUp)} className = {displayOff}>Open Search</button>
                {page}
        </div>
    )
}

export default HomePage
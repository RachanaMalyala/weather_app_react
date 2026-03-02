import { useState } from "react"
import Searchbox from "./Searchbox"
import InfoBox from "./Infobox"
export default function WeatherApp(){
    const [weatherinfo,setweatherinfo]=useState({
                city:"Delhi",
        feelsLike
: 
undefined,
humidity
: 
100,
temp
: 
10.05,
tempMax
: 
10.05,
tempMin
: 
10.05,
weather
: 
"fog",
    })
    let updateinfo=(result)=>{
        setweatherinfo(result);
    }
    return (
        <div  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <h2>Weather app by delta</h2>
            <InfoBox wetherinfo={weatherinfo}/>
            <Searchbox updateinfo={updateinfo}/>
        </div>
    )
}
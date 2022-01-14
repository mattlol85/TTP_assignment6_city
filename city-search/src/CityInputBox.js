import React, {useState} from "react"
import CitySearchResults from "./CitySearchResults";
import "./CityInputBox.css"

export default function CityInputBox(){
    const [val, setVal] = useState(0)
    return (
        <div>
            <div id="input-box">
                <label id="city-label">City:  </label>
                <input type={"text"} onInput={event => setVal(event.target.value)}/>
            </div>
            <CitySearchResults city={val}/>
        </div>
    )
}

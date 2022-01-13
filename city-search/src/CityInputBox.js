import React, {useState, useEffect} from "react"
import CitySearchResults from "./CitySearchResults";

export default function CityInputBox(){
    const [val, setVal] = useState(0)
    return (
        <div>
            <div id="input-box">
                <label>City:  </label>
                <input type={"text"} onInput={event => setVal(event.target.value)}/>
            </div>
            <CitySearchResults city={val}/>
        </div>
    )
}

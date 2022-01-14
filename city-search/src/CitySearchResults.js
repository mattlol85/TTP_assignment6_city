import React, { useEffect, useState } from "react"
import './CitySearchResults.css'

export default function CitySearchResults(props) {

    const [data, setData] = useState(null)
    const url = `https://ctp-zip-api.herokuapp.com/city/${props.city}`
    let argUp = props.city.toString()
    useEffect(() => {
        fetch(`https://ctp-zip-api.herokuapp.com/city/${argUp.toUpperCase()}`)
            .then(res => res.json())
            .then(ret => setData(ret))
    }, [url])

    if (data && props.city.length > 1) {
        return (

            <>       <h2>These are the associated zip codes for {props.city.toString().toUpperCase()}</h2>

                <div id="results">
                    {data.map((elm) => {
                        return <div id="result-item">
                            <h3>{elm}</h3>
                        </div>
                    })}
                </div>
            </>
        )
    }

    return (
        <div id="no-res"><h2>No Results</h2></div>
    )

}




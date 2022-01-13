import React, {useEffect, useState} from "react"

export default function CitySearchResults(props){

    const[data, setData] = useState(null)
    const url = `https://ctp-zip-api.herokuapp.com/city/${props.city}`
    let argUp = props.city.toString()
    useEffect(() => {
        fetch(`https://ctp-zip-api.herokuapp.com/city/${argUp.toUpperCase()}`)
            .then(res => res.json())
            .then(ret => setData(ret))
    },[url])

    if(data && props.city.length>1) {
            return (
                <div id={"results"}>
                    <h2>These are the associated zip codes for {props.city.toString().toUpperCase()}</h2>
                    {data.map((elm) =>{
                        return <div>
                            <h3>{elm}</h3>
                            <br></br>
                                </div>
                    })}
                </div>
            )
    }

    return(
        <div id="no-res"><h2>No Results</h2></div>
    )

}




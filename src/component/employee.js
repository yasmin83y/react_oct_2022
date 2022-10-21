import axios from 'axios';
import React, { useEffect } from 'react';

function Employee() {

    //use useEffect hook whenever you want to call
    //remote REST API
    //useEffect takes 2 parameters
    //useEffect(callbackfunction, array) => useEffect (()=>{//apicall})
    useEffect(()=>{
        callRestApi()
    }, [])

    const callRestApi=()=>{
        axios.get("https://dummy.restapiexample.com/api/v1/employees")
        .then((response)=>{
            console.log(response)
            console.log(response.data)
            console.log(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return ( 
        <div>
            <h1>Remote Employee data</h1>
        </div>
     );
}

export default Employee;
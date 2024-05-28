import React, { useEffect, useState } from 'react'

function Reqresponse() {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

useEffect(() => {
    const fetchData = async () =>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            if(!res.ok){
                throw new Error('failed to fetch data');
            }
            const result = await res.json();
            setData(result);
            }catch(error) {
                setError(error.message);
            }finally {
                setLoading(false);
            }
        };
        fetchData();
} , []);

    if(loading){
        return <div>Loading......</div>
    }
    if(error){
        return <div> Error : {error}</div>
    }


  return (
    <div>
      <h1> Data loaded</h1>
      <p>{JSON.stringify(data,null,2)}</p>
    </div>
  )
}

export default Reqresponse;

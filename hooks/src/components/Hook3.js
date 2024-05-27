import React,{ useState,useEffect } from "react";

function Hook3(){
    const [message , setMessage] = useState('Hello React !');

    useEffect (() => {
        const timer = setTimeout(() => {
            setMessage('Hello World !');
        },1000);
            return () => clearTimeout(timer);
        },[]);
        return (
        <><h1> {message}</h1></>
    
    );
}
export default Hook3;
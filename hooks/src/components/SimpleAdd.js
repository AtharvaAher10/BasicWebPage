import { useCallback,useState } from "react";

const SimpleAdd = () => {
    const [num1 , setNum1] = useState(0);
    const [num2 , setNum2] = useState(0);
    const [result , setResult] = useState(0);

    const add = useCallback(() => {
        setResult(num1+num2);
    } , [num1,num2]);

    return(
        <div>
            <h1>simple Addition</h1>        
            <div>
            <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
            placeholder="Number 1"
            />
            <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
            placeholder="Number 1"
            />
        </div>
        <button onClick={add}> Add</button>
        <h2> Result : {result}</h2>
        </div>
    );

};

export default SimpleAdd;
import React, { useState } from 'react';
export default function ProblemBox(props){
    let [clickCounter, setClickCounter] = useState(0);
    let [message, setMessage] = useState(props.point);
    function click(){
        const newClickCounter = clickCounter + 1;
        setClickCounter(newClickCounter);
        if (newClickCounter === 1) {
            setMessage(props.question);
        } else if (newClickCounter <= 2) {
            setMessage(props.answer);
            setClickCounter(-1);
        } else if (newClickCounter === 0) {
            setMessage(props.point);
        }
    }
    return(
        <div>
            <div onClick={click}>
                <h1>{message}</h1>
            </div>
            
        </div>
    )
}
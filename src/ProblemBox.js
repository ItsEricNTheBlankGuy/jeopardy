import React from 'react';
export default function ProblemBox(props){

    function clues(){
        alert(props.question);
    }
    return(
        <div>
            <div onClick={clues}>
                <h1>{props.point}</h1>
            </div>
            
        </div>
    )
}
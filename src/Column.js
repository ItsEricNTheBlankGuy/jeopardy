import React from 'react';
import ProblemBox from './ProblemBox.js';
export default function Column(props){

    return(
        <div>
            <div>
                <h1>{props.genre}</h1>
            </div>
            <ProblemBox point={"100"} question={props.questionAgain}/>
            <ProblemBox point={"200"} question={props.questionAgainTwo}/>
            <ProblemBox point={"300"} question={props.questionAgainThree}/>
            <ProblemBox point={"400"} question={props.questionAgainFour}/>
            <ProblemBox point={"500"} question={props.questionAgainFive}/>
        </div>
    )
}
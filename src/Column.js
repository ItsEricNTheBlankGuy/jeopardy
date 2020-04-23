import React from 'react';
import ProblemBox from './ProblemBox.js';
export default function Column(props){

    return(
        <div>
            <div>
                <h1>{props.genre}</h1>
            </div>
            <ProblemBox point={"100"} question={props.questionAgain} answer={props.answerOne}/>
            <ProblemBox point={"200"} question={props.questionAgainTwo} answer={props.answerTwo}/>
            <ProblemBox point={"300"} question={props.questionAgainThree} answer={props.answerThree}/>
        </div>
    )
}
import React from 'react';
import './App.css';
import questionData from './question-data.json';
import Column from './Column.js';

function App() {

  return (
    <div className="App">
        
        <div className="board">
            <h1 className="title"> Jeopardy </h1>
            <div className="boardContent">
                {/* Column - 1 (HISTORY) */}
                <div className="column one">
                    <Column 
                        genre = {questionData.topics[0]}
                        questionAgain = {questionData.questions[0].clue}
                        questionAgainTwo = {questionData.questions[1].clue}
                        questionAgainThree = {questionData.questions[2].clue}
                        answerOne = {questionData.questions[0].answer}
                        answerTwo = {questionData.questions[1].answer}
                        answerThree={questionData.questions[2].answer}
                    />
                </div>
                {/* Column - 2 (SPORTS) */}
                <div className="column two">
                    <Column 
                        genre = {questionData.topics[1]}
                        questionAgain = {questionData.questions[3].clue}
                        questionAgainTwo = {questionData.questions[4].clue}
                        questionAgainThree = {questionData.questions[5].clue}
                        answerOne = {questionData.questions[3].answer}
                        answerTwo = {questionData.questions[4].answer}
                        answerThree={questionData.questions[5].answer}
                    />
                </div>
                {/* Column - 3 (TECH) */}
                <div className="column three">
                    <Column 
                        genre = {questionData.topics[2]}
                        questionAgain = {questionData.questions[6].clue}
                        questionAgainTwo = {questionData.questions[7].clue}
                        questionAgainThree = {questionData.questions[8].clue}
                        answerOne = {questionData.questions[6].answer}
                        answerTwo = {questionData.questions[7].answer}
                        answerThree={questionData.questions[8].answer}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

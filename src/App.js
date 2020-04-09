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
                <div className="column">
                    <Column 
                        genre = {questionData.topics[0]}
                        questionAgain = {questionData.questions[0].clue}
                        questionAgainTwo = {questionData.questions[1].clue}
                        questionAgainThree = {questionData.questions[2].clue}
                    />
                </div>
                {/* Column - 2 (SPORTS) */}
                <div className="column">
                    <Column 
                        genre = {questionData.topics[1]}
                        questionAgain = {questionData.questions[3].clue}
                        questionAgainTwo = {questionData.questions[4].clue}
                        questionAgainThree = {questionData.questions[5].clue}
                    />
                </div>
                {/* Column - 3 (TECH) */}
                <div className="column">
                    <Column 
                        genre = {questionData.topics[2]}
                        questionAgain = {questionData.questions[6].clue}
                        questionAgainTwo = {questionData.questions[7].clue}
                        questionAgainThree = {questionData.questions[8].clue}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

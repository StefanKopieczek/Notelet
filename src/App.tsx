import React, {Component} from 'react';
import NoteTest from './components/NoteTest';
import ScoreBoard from './components/ScoreBoard';
import {QuestionData, randomQuestion} from './QuestionData';

interface AppState {
  question: QuestionData;
  correctAnswers: number;
  totalAnswers: number;
}

export default class App extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      question: randomQuestion(),
      correctAnswers: 0,
      totalAnswers: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Notelet</h1>
        <NoteTest
          question={this.state.question}
          onCorrect={this.onCorrectAnswer}
          onIncorrect={this.onIncorrectAnswer}
        />
        <ScoreBoard
          correct={this.state.correctAnswers}
          total={this.state.totalAnswers}
        />
      </div>
    );
  }

  onCorrectAnswer = () => {
    this.setState({
      question: randomQuestion(),
      correctAnswers: this.state.correctAnswers + 1,
      totalAnswers: this.state.totalAnswers + 1,
    });
  };

  onIncorrectAnswer = () => {
    this.setState({
      question: randomQuestion(),
      totalAnswers: this.state.totalAnswers + 1,
    });
  };
}

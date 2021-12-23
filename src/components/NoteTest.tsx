import React, {Component} from 'react';
import {QuestionData} from '../QuestionData';
import OptionsButton from './OptionsButton';
import SheetMusic from './SheetMusic';

interface NoteTestProps {
  question: QuestionData;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default class NoteTest extends Component<NoteTestProps, {}> {
  constructor(props: NoteTestProps) {
    super(props);
  }

  render() {
    return (
      <div id="note-test">
        <div id="question">What note is this?</div>
        <SheetMusic staves={[[this.props.question.note]]} width={80} />
        {this.props.question.answers.map((name, i) => {
          return (
            <OptionsButton
              key={i}
              note={name}
              onClick={
                i === this.props.question.correctAnswerIndex
                  ? this.props.onCorrect
                  : this.props.onIncorrect
              }
            />
          );
        })}
      </div>
    );
  }
}

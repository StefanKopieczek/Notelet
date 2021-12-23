import React, {Component} from 'react';
import OptionsButton from './OptionsButton';
import Score from './Score';

export default class NoteTest extends Component {
  render() {
    return (
      <div id="note-test">
        <div id="question">What note is this?</div>
        <Score staves={[['c4']]} width={80} />
        <OptionsButton note="C" />
        <OptionsButton note="D" />
        <OptionsButton note="E" />
        <OptionsButton note="A" />
      </div>
    );
  }
}

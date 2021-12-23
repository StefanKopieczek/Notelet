import React, {Component} from 'react';
import OptionsButton from './OptionsButton';
import Score from './Score';

export default class NoteTest extends Component {
  render() {
    return (
      <div className="App">
        <Score staves={[['c4', 'e4', 'g4']]} />
        <OptionsButton />
        <OptionsButton />
        <OptionsButton />
        <OptionsButton />
      </div>
    );
  }
}

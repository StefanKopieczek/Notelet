import React, {Component} from 'react';
import OptionsButton from './OptionsButton';
import SheetMusic from './SheetMusic';

// The number of options from among which the user has to select the correct note.
const NUM_OPTIONS = 4;

const NOTE_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const OCTAVES = [4, 5];

interface NoteTestState {
  note: string;
  correctName: string;
  incorrectNames: string[];
}

export default class NoteTest extends Component<{}, NoteTestState> {
  constructor(props: {}) {
    super(props);
    this.state = this.initState();
  }

  initState(): NoteTestState {
    const selectedNote = this.randomNote();
    const selectedNoteName = this.getNoteName(selectedNote);
    const pickedNames = [selectedNoteName];
    const wrongAnswers = [];

    while (pickedNames.length < NUM_OPTIONS) {
      const answer = this.getNoteName(this.randomNote(pickedNames));
      pickedNames.push(answer);
      wrongAnswers.push(answer);
    }

    return {
      note: selectedNote,
      correctName: selectedNoteName,
      incorrectNames: wrongAnswers,
    };
  }

  render() {
    return (
      <div id="note-test">
        <div id="question">What note is this?</div>
        <SheetMusic staves={[[this.state.note]]} width={80} />
        <OptionsButton note={this.state.correctName} />
        {this.state.incorrectNames.map((name, i) => {
          return <OptionsButton note={name} key={i} />;
        })}
      </div>
    );
  }

  randomNote(forbiddenNames: string[] = []): string {
    const validNotes = NOTE_NAMES.filter(
      note => !forbiddenNames.includes(note)
    );
    return this.randomElement(validNotes) + this.randomElement(OCTAVES);
  }

  getNoteName(note: string): string {
    return note.charAt(0).toUpperCase();
  }

  randomElement<T>(list: T[]): T {
    return list[Math.floor(Math.random() * list.length)];
  }
}

// The number of options from among which the user has to select the correct note.
const NUM_OPTIONS = 4;

const NOTE_NAMES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const OCTAVES = [4, 5];

export interface QuestionData {
  note: string;
  answers: string[];
  correctAnswerIndex: number;
}

export function randomQuestion(): QuestionData {
  const selectedNote = randomNote();
  const selectedNoteName = getNoteName(selectedNote);
  const pickedNames = [selectedNoteName];
  const wrongAnswers = [];

  while (pickedNames.length < NUM_OPTIONS) {
    const answer = getNoteName(randomNote(pickedNames));
    pickedNames.push(answer);
    wrongAnswers.push(answer);
  }

  const answers = shuffle(pickedNames);

  return {
    note: selectedNote,
    answers: answers,
    correctAnswerIndex: answers.indexOf(selectedNoteName),
  };
}

function randomNote(forbiddenNames: string[] = []): string {
  const validNotes = NOTE_NAMES.filter(note => !forbiddenNames.includes(note));
  return randomElement(validNotes) + randomElement(OCTAVES);
}

function getNoteName(note: string): string {
  return note.charAt(0).toUpperCase();
}

function randomElement<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle<T>(array: T[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

import React, {Component} from 'react';

interface ScoreBoardProps {
  correct: number;
  total: number;
}

export default class ScoreBoard extends Component<ScoreBoardProps, {}> {
  constructor(props: ScoreBoardProps) {
    super(props);
  }

  render() {
    if (this.props.total > 0) {
      return (
        <div className="score-board">
          You got {this.props.correct} right out of {this.props.total}.
        </div>
      );
    } else {
      return <div className="score-board" />;
    }
  }
}

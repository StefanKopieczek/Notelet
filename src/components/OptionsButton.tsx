import React, {Component} from 'react';

export interface OptionsButtonProps {
  note: string;
  onClick: () => void;
}

export default class OptionsButton extends Component<OptionsButtonProps> {
  render() {
    return (
      <button
        type="button"
        className="options-button"
        onClick={this.props.onClick}
      >
        {this.props.note}
      </button>
    );
  }
}

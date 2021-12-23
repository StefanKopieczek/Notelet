import React, {Component} from 'react';

export interface OptionsButtonProps {
  note: string;
}

export default class OptionsButton extends Component<OptionsButtonProps> {
  render() {
    return (
      <button type="button" className="options-button">
        {this.props.note}
      </button>
    );
  }
}

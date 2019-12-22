import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.context.onLanguageChange('english', 'primary')}></i>
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch', 'red')}></i>
      </div>
    );
  }
}

export default LanguageSelector;

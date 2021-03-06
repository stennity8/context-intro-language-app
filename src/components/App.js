import React, { Component } from 'react';
import UserCreate from '../components/UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

export class App extends Component {
  state={
    color: 'primary'
  }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value={this.state.color}>
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;

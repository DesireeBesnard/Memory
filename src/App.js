import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'

class App extends Component {
  handleCardClick(card) {
    console.log(card, 'clicked')
  }

  render() {
    return ( 
      <div className="memory">
        <GuessCount guesses={0}/>
        <Card card="H" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="JM" feedback="justMatched" onClick={this.handleCardClick} />
        <Card card="MM" feedback="justMismatched" onClick={this.handleCardClick} />
        <Card card="V" feedback="visible" onClick={this.handleCardClick} />
        <Card card="H" feedback="hidden" onClick={this.handleCardClick} />
        <Card card="JM" feedback="justMatched" onClick={this.handleCardClick} />
      </div>
    )
  }
}

export default App
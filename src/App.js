import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash'

import {TodoList as TodoList01} from './Tut01.js'

class App extends Component {
  componentDidMount () {
    const intervalId = setInterval(() => this.tick(), 200)

    this.setState({
      intervalId,
      tut01Data: ['buy butter', 'checkout the new big bang theory episode', 'walk on the moon']
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  tick () {
    const x = _.random(0, 1, true)

    if (x < 0.06) {
      this.setState({
        tut01Data: [...this.state.tut01Data, _.sample([
          'play guitar',
          'wash dishes',
          'buy a goat',
          'hire a go go dancer',
          'change my husband'
        ])]
      })
    }
  }

  render () {
    const tut01Data = _.get(this.state, 'tut01Data', [])

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Allegorithmic Learning Sandbox!</h2>
        </div>
        <div className="App-intro">
          <h2>Tut01</h2>
          <TodoList01 data={tut01Data}></TodoList01>
        </div>
      </div>
    );
  }
}

export default App;

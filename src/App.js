import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import _ from 'lodash'

import {sourceData} from './Data'
import {TodoList as Tut01} from './Tut01'
import {DataGrid as Tut02} from './Tut02'

class App extends Component {
  componentDidMount () {
    const intervalId = setInterval(() => this.tick(), 200)

    this.setState({
      intervalId,
      time: 0,
      tut01Data: ['buy butter', 'checkout the new big bang theory episode', 'walk on the moon'],
      tut02Data: [],
      tut02Header: ['id', 'name', 'imageUrl']
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.intervalId)
  }

  tick () {
    this.setState({ time: this.state.time + 0.2 })

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

    if (x < 0.06) {
      this.setState({
        tut02Data: _.take(sourceData, this.state.tut02Data.length + 1)
      })
    }

    if (this.state.time > 20.0) {
      this.setState({
        tut02Header: ['id', 'name']
      })
    } else if (this.state.time > 10.0) {
      this.setState({
        tut02Header: ['imageUrl', 'name']
      })
    }
  }

  render () {
    const tut01Data = _.get(this.state, 'tut01Data', [])
    const tut02Header = _.get(this.state, 'tut02Header', [])
    const tut02Lines = _.get(this.state, 'tut02Data', [])

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Allegorithmic Learning Sandbox!</h2>
        </div>
        <div className="App-intro">
          <h3>Tut01</h3>
          <Tut01 data={tut01Data} />
          <h3>Tut02</h3>
          <Tut02 header={tut02Header} lines={tut02Lines} />
        </div>
      </div>
    )
  }
}

export default App;

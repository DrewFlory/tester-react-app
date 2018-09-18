import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime(){
    this.setState({
      time: new Date()
    })
  }
  componentWillMount(){
    setInterval(()=>this.currentTime(),1000)
  }

  render() {

    return (
      <div className= "body">
        <div className="line-background">
          <h1 className= "time">
            {this.state.time.toLocaleTimeString()}
          </h1>
        </div>

        <div className="start-button">
            <button className="button">
              <h2>Start</h2>
            </button>
        </div>
      </div>
    )
  }
}

export default App;
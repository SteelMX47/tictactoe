import React, {Component} from 'react';
/* Importar Bootstrap (JS) */
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
/* Importar componentes */
import {Board} from './components'

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
      return(
        <div className="game">
          <div className="game-board">
            <Board/>
          </div>
          <div className="game-info">
            <div>

            </div>
            <ol>

            </ol>
          </div>
        </div>
      )
    }
}

export default App;

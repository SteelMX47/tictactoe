import React, {Component} from 'react';
import {Square} from './';

export default class Board extends Component{
    constructor(props){
        super(props)
        this.state={
            turnX:true,
            squares:Array(9).fill(null)
        }
    }
    setSqValue=()=>{
        // Checar turno
        // Checar si está vacío
        // Checar si no hay ganador
    }
    render(){
        const {turnX} = this.state
        return(
            <div>
                <div className="status">{`Es el turno de ${turnX?'X':'O'}`}</div>
                <div className="board-row">
                    <Square setSqValue={this.setSqValue} value={squares[0]} i={0}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[1]} i={1}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[2]} i={2}></Square>
                </div>
                <div className="board-row">
                    <Square setSqValue={this.setSqValue} value={squares[3]} i={3}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[4]} i={4}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[5]} i={5}></Square>
                </div>
                <div className="board-row">
                    <Square setSqValue={this.setSqValue} value={squares[6]} i={6}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[7]} i={7}></Square>
                    <Square setSqValue={this.setSqValue} value={squares[8]} i={8}></Square>
                </div>
            </div>
        )
    }
}


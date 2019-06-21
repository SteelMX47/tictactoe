import React,{Component} from 'react';

export default class Square extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    render(){
        return(
            <button className="square" onClick={this.props.setSqValue}>
                {this.props.value}
            </button>
        )
    }
}
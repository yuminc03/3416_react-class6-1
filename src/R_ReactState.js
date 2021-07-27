import React, { Component } from 'react';

class R_ReactState extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        }
    }

    render(){
        return(
            <div style={{padding: "0px"}}>
                {this.props.StateString}{this.props.StateNumber}
            </div>
        );
    }
}

export default R_ReactState;
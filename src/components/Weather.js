import React from "react";
import Picture from "./Picture";

class Weather extends React.Component{
    render(){
        return(
            <div>
            {this.props.temp && <div>Temperature in the city{this.props.temp}</div>}
            {this.props.temp &&<Picture temp={this.props.temp}/>}
            
            <p>{this.props.error}</p>
        
            </div>
        );
    }
}

export default Weather;
import React from "react";


class Picture extends React.Component{
 www=()=>{
     if(this.props.temp>25){return "hot";}
     else return "cold";
}
    
    render(){
        return(
            
            <div className={this.www()}>{this.www()}</div>
        );
    }
}

export default Picture;
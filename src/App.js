import React from "react";
import Weather from "./components/Weather";
import Info from "./components/info";
import Form from "./components/form";

const API_KEY="5d14ddf627b4ab107bdcef22c0a54913";



class App extends React.Component{

    state={
        temp:undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        error:undefined
    }

    gettingWeather=async(e)=>{
        e.preventDefault();
        var city=e.target.elements.city.value;
        if (city){
            const api_url= await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data= await api_url.json();
            if(data.cod!=404){this.setState({
                temp:data.main.temp,
                error:undefined });}
                else{
                    this.setState({
                        temp:undefined,
                        error:"Enter correct city"
                    })
                }
            

   
    

     
    }
    else{
        this.setState({
            temp:undefined,
            error:"Error enter the city"
        });
    }

}
    
    render() {
        return(
            <div>
            <h1>Hello</h1>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather 
                    temp={this.state.temp}
                    error={this.state.error}
                />
            </div>
            
        );
    }
}

export default App;


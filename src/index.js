//Importing modules
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//Creating app class
class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         lat: null,
    //         errorMsg: ''
    //     };}
    //Alt version
    state = {
        lat: null,
        errorMsg: '',
    };

    
    
    componentDidMount(){
        console.log('Component mounted successfully');
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMsg:err})
        );
    }
    componentDidUpdate(){

    }

    render() {

        if (this.state.errorMsg && !this.state.lat)
        {
            return(
                <div>
                    Error: {this.state.errorMsg}
                </div>
            )
        }

        if (!this.state.errorMsg && this.state.lat)
        {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
                
              
            );
        }
        
        return (
            <div>
                Loading...
            </div>
        );
        
    } 
}


//Rendering app
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
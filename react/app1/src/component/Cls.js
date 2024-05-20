import React from 'react';
import ReactDOM from 'react-dom/client';

class Cls extends React.Component{
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    render(){
        return(
            <h1>my fav colour is {this.state.favoritecolor}</h1>
        );
    }
}
export default Cls;
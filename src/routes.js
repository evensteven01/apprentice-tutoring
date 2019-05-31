import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';

export default class MyRoutes extends React.Component {
    render() {

        return (
            <div>
                <Route exact path="/" render={() => 
                    <Home id="home" onTogglePageState={this.props.onTogglePageState}/>
                } />
                <Route exact path="/about" render={() =>
                    <About id="about" />
                } />
            </div>
        );
    }
};
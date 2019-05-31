import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyRoutes from './routes';
import ScrollToTop from './components/ScrollToTop';

import * as consts from './utils/constants.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Until redux is introduced, we need to hardcode knowldge of routes here
            homeState: consts.COLLAPSED,
            headerState: consts.EXPANDED
        }   
    }
    onChildToggle(childId, childState) {
        console.log('Toggled by: ' + childId + ' to state: ' + childState);
        const headerState = childState==consts.EXPANDED ? consts.COLLAPSED : consts.EXPANDED;
        this.setState({headerState: headerState})
    }
    render() {
        return (
            <Router>
                <ScrollToTop>
                <div className="app">
                    <Navbar />
                    <Header componentState={this.state.headerState}/>
                    <MyRoutes onTogglePageState={this.onChildToggle} />
                    <Footer />
                </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;

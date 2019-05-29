import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import routes from './routes';

class App extends React.Component {
    render() {
        return (
            <Router routes={routes}>
                <div className="app">
                    <div className="jumbotron text-center">
                        <h1>APPRENTICE TUTORING</h1>
                    </div>
                    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="nav-link" to="/About">About</Link>
                    </div>
                    <hr />
                    

                </div>
            </Router>
            
        );
    }
}

export default App;

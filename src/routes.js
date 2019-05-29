import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import ScrollToTop from './components/ScrollToTop';

export default (
    <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
    </ScrollToTop>
);
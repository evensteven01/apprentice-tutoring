import React from 'react';
import * as consts from '../utils/constants.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentState: props.componentState
        }
    }
    componentWillReceiveProps(props) {
      this.setState({componentState: props.componentState});
    }
    toggle() {
        const header = document.getElementById('header');
        header.classList.toggle('moveHeader');
    }
    render() {
        let headerClasses = "jumbotron";
        headerClasses += this.state.componentState==consts.COLLAPSED ? " moveHeader" : "";
        return (
            <div id="header" className={headerClasses}>
                <h1 onClick={()=> (this.toggle())}>APPRENTICE TUTORING</h1>
            </div>
        );
    }
}

export default Header;

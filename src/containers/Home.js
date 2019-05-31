import React from 'react';
import profileImg from '../images/steve-profile.jpg';

import * as consts from '../utils/constants.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMeState: consts.COLLAPSED,
            tutoringState: consts.COLLAPSED,
        }
    }
    togglePageState(componentName) {
        console.log('Toggling page state: ' + componentName);
        let aboutMeState = 0;
        let tutoringState = 0;
        if(componentName==='aboutMe') {
            aboutMeState = this.state.aboutMeState==consts.COLLAPSED ? consts.EXPANDED : consts.COLLAPSED;
            this.setState({aboutMeState: aboutMeState});
            const wrapper = document.getElementById('wrapper');
        } else if(componentName==='tutoring') {
            tutoringState = this.state.tutoringState==consts.COLLAPSED ? consts.EXPANDED : consts.COLLAPSED;
            this.setState({tutoringState: tutoringState});
        }
        const homeState = aboutMeState+tutoringState>0 ? consts.EXPANDED : consts.COLLAPSED;
        this.props.onTogglePageState('home', homeState);
    }
    render() {
        let col1 = null;
        let col2 = null;
        if(this.state.aboutMeState==consts.EXPANDED) {
            col1 = (
                <div>
                <img className="rounded mx-auto d-block text-center" src={profileImg} />
                <p>Im a Software Engineer with over 10 years of experience in web apps, mobile apps, and TCP/UDP servers.
                    Ive been the sole developer, DB administrator, and linux administrator at a start up as well as started
                    a project leading and managing a team of 7 people. I earned my Masters in Software Engineering. 
                    But most importantly, Im the proud father of a toddler.
                </p>
                
                <hr />
                <p>Find Apprentice Tutoring on Social Media</p>
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.linkedin.com/in/steven-ford-6204612a/">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.facebook.com/apprenticetutoring/">Facebook</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.instagram.com/apprenticetutoring/">Instagram</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="https://twitter.com/AFordsoft">Twitter</a>
                    </li>
                </ul>
                <hr className="d-sm-none" />
                </div>
            );
        } else if (this.state.tutoringState==consts.EXPANDED) {
            col2 = (
                <div>
                    <h5>Title description, Dec 7, 2017</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco.</p>
                    <br />
                    <h2>TITLE HEADING</h2>
                    <h5>Title description, Sep 2, 2017</h5>
                    <div className="fakeimg">Fake Image</div>
                    <p>Some text..</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco.</p>
                </div>
            );
        }
        return (
            <div className="home-container">
                <div className="container" style={{marginTop:'30px'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center" onClick={()=> (this.togglePageState('aboutMe'))}>About Me</h2>
                            {col1}
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center" onClick={()=> (this.togglePageState('tutoring'))}>Tutoring</h2>
                            {col2}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;
import React from 'react';
import { Link } from "react-router-dom";

import profileImg from '../images/steve-profile.jpg';
import legoMan from '../images/LegoProgrammer_sm.jpeg';
import kaylaLearning from '../images/kaylaLearning_sm.jpg';
import oneOnOne from '../images/OneOnOne.svg';
import personalizedPlan from '../images/personalized_plan.svg';
import theoryAndPractice from '../images/theory_practice.svg';

import * as consts from '../utils/constants.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutMeState: consts.COLLAPSED,
            tutoringState: consts.COLLAPSED,
        }
        this.togglePageState = this.togglePageState.bind(this);
    }
    togglePageState(componentName) {
        console.log('Toggling page state: ' + componentName);
        let aboutMeState = 0;
        let tutoringState = 0;
        if(componentName==='aboutMe') {
            aboutMeState = this.state.aboutMeState==consts.COLLAPSED ? consts.EXPANDED : consts.COLLAPSED;
            if(aboutMeState==consts.EXPANDED){
                tutoringState = consts.COLLAPSED;
            }
            this.setState();
            const wrapper = document.getElementById('wrapper');
        } else if(componentName==='tutoring') {
            tutoringState = this.state.tutoringState==consts.COLLAPSED ? consts.EXPANDED : consts.COLLAPSED;
            if(tutoringState==consts.EXPANDED){
                aboutMeState = consts.COLLAPSED;
            }
        }
        console.log('New aboutMeState: ' + aboutMeState);
        console.log('New tutoringState: ' + tutoringState);
        this.setState({tutoringState: tutoringState, aboutMeState: aboutMeState});
        const homeState = aboutMeState+tutoringState>0 ? consts.EXPANDED : consts.COLLAPSED;
        this.props.onTogglePageState('home', homeState);
    }
    render() {
        let chosenContent = null;
        if(this.state.aboutMeState==consts.EXPANDED) {
            chosenContent = (
                <div className="boxed-background">
                <div className="float-left thumbnail-container">
                    <img src={profileImg} width="185" height="200" />
                    <p>
                    Costume Designer: My beloved 2 year old daughter
                    </p>
                </div>
                <p>Im a Software Engineer with over 10 years of experience in web apps, mobile apps, and TCP/UDP servers.
                    Ive been the sole developer, DB administrator, and linux administrator at a start up as well as started
                    a project leading and managing a team of 7 people. I earned my Masters in Software Engineering. 
                </p>
                
                <div className="clearBoth" />
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
            chosenContent = (
                <div className="boxed-background">
                    <h3 className="text-center">Apprentice Tutoring by Fordsoft</h3>
                    <br />
                    <img className="float-left" src={legoMan} width="185" height="200" />
                    <p>I started Apprentice Tutoring because I like what I do! Software Engineering is my passion.
                    Working with me, you will be well on your well to software craftsmanship. </p>
                    <p>Whether you need tutoring for college or high school classes, or you just want to prepare for
                    college or for joining the work force, I have just the thing for you.</p>
                    <div className="clearBoth" />
                    <br />
                    <div className="inner-content">
                        <div className="column">
                            <img src={oneOnOne} width="70" height="70" className="center" />
                            <h4 className="text-center">One-on-one</h4>
                            <p className="text-center">You get all my attention, and my teaching adapts to you.</p>
                        </div>
                        <div className="column">
                            <img src={personalizedPlan} width="70" height="70" className="center" />
                            <h4 className="text-center">Personalized</h4>
                            <p className="text-center">Help with specific subjects, or build a personalized curriculums for college or industry preperation.</p>
                        </div>
                        <div className="column">
                            <img src={theoryAndPractice} width="90" height="70" className="center" />
                            <h4 className="text-center">Theory and Practice</h4>
                            <p className="text-center">We'll go beyond theory and learn how Software Engineering happens in real life.</p>
                        </div>
                        
                    </div>
                    <div className="clearBoth" />
                    
                    <br />
                    <Link className="nav-link" to="/Tutoring">Learn more...</Link>
                </div>
            );
        }
        return (
            <div className="home-container">
                <div className="container" style={{marginTop:'30px'}}>
                    <div className="row animated-nav-bar pullRightLeft">
                        <a className="text-center" onClick={()=> (this.togglePageState('aboutMe'))}>About Me</a>
                        <a className="text-center" onClick={()=> (this.togglePageState('tutoring'))}>Tutoring</a>
                    </div>
                    <br />
                    <div class="main-content">
                        {chosenContent}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;
import React from 'react';

import theoryAndPractice from '../images/theory_practice.svg';
import underConstruction from '../images/UnderConstruction.svg';
import * as consts from '../utils/constants.js';

class Tutoring extends React.Component {
    render() {
        const servicesOffered = {
            title: 'Services Offered',
            introduction: 'I offer several different services to fit your needs.',
            containerStyle: consts.CONTAINER_STYLE_ROWS,
            childCardStyle: consts.CARD_STYLE_STANDARD,
            subsections: [
                {
                    title: 'Traditional Tutoring',
                    introduction: 'We’ll cover the specific material and subject and you specify. I’ll show you how its connected to the big picture of Computer Science and the Software Engineering Industry.',
                    image: underConstruction
                },
                {
                    title: 'Personalized Curriculum',
                    introduction: 'Let\'s come up with a set of subjects to cover to accomplish your learning and professional goals.',
                    image: underConstruction,
                    containerStyle: consts.CONTAINER_STYLE_COLUMNS,
                    subsections: [
                        {
                            title: 'College Preperation',
                            introduction: 'Get an edge over your classmates and jumpstart your higher education pursues by learning the material beforehand. We can even personalize it to your specfic school’s curriculum.',
                            image: underConstruction
                        },
                        {
                            title: 'Career Preparation',
                            introduction: 'Are you almost ready to start your career, but want to prepare for success? Lets design a curriculum to prepare you for the real world.',
                            image: underConstruction
                        },
                        {
                            title: 'Full Curriculum',
                            introduction: 'Lets cover all the subjects necessary for becoming a Software Engineer, without having to go thousands of dollars in to debt.',
                            image: underConstruction
                        }
                    ]
                }
            ],
        };
        const coursesTutored = {
            title: 'Courses Tutored',
            introduction: 'Courses tutored',
            childCardStyle: consts.CARD_STYLE_LIST,
            subsections: [
                {title: 'Intro to Computer Science'},
                {title: 'Intro to Programming I, II'},
                {title: 'Software Engineering'},
                {title: 'Algorithms and Data Structures'},
                {title: 'Object-Oriented Software Design'},
                {title: 'Operating Systems'},
                {title: 'Computer Networks'},
                {title: 'Collaborative Design'},
                {title: 'Web Application Architecture & Development'},
                {title: 'Physics I'},
                {title: '(Coming Soon) Computer Architecture'},
                {title: '(Coming Soon) Programming Languages'},
                {title: '(Coming Soon) Database Systems'},
            ],
        };
        const subjectsOffered = {
            title: 'Other Subjects Offered',
            introduction: '',
            childCardStyle: consts.CARD_STYLE_LIST,
            subsections: [
                {title: 'Intro to Distributed Systems'},
                {title: 'Intro to Cloud Computing'},
                {title: 'Intro Functional Programming '},
                {title: 'Web Technologies'},

                {title: 'Software Development Process'},
                {title: 'Technical Resumes'},
                {title: 'Technical Interviews'},
                {title: 'Scrum'},
                {title: 'Testing'},
                {title: 'Debugging'},
            ],
        };
        const pricing = {
            title: 'Pricing',
            cardStyle: consts.CARD_STYLE_LIST,
            subsections: [
                {introduction: 'Hourly Rate: $60 in-person, $55 online'},
                {introduction: 'Rate Details: Discount for referrals. Discounted group lessons: 2 people $40/hour each, 3 people $30/hour each.'},
            ],
        };
        return (
            <div>
                <div>
                    <Section 
                        {...servicesOffered} />
                    <Section 
                        {...coursesTutored} />
                    <Section 
                        {...subjectsOffered} />
                    <Section 
                        {...pricing} />
                    <ContactForm />
                </div>
            </div>
        );
    }
}

class Section extends React.Component {
    render() {
        const subSections = this.props.subsections ? this.props.subsections : [];
        const containerClassNames = 'section-container';
        let sectionCardsContainerClasses = 'section-cards ' + this.props.containerStyle; //Row or column

        const subSectionsHtml = subSections.map((subSection, index) =>{
            return <Card 
                    {...subSection}
                    cardStyle={this.props.childCardStyle ? this.props.childCardStyle : undefined} /> //List or standard(card)
        });
        return (
            <div className={containerClassNames} >
                <div className='title'>{this.props.title}</div>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                {subSections.length>0 ? <div className={sectionCardsContainerClasses}>{subSectionsHtml}</div> : null}
            </div>
        );
    }
}

Section.defaultProps = {
    childCardStyle: consts.CARD_STYLE_STANDARD,
    containerStyle: consts.CONTAINER_STYLE_COLUMNS
}

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const subSections = this.props.subsections ? this.props.subsections : [];
        let containerClassNames = "card-container " + this.props.cardStyle;
        if(this.props.level==1) {
            containerClassNames += " first-level";
        } else {
            containerClassNames += " second-level";
        }

        let cardCardsContainerClasses = 'card-cards ' + this.props.containerStyle; //Row or column

        const subSectionsHtml = subSections.map((subSection, index) =>{
            return <Card 
                    {...subSection} 
                    level={this.props.level+1}
                    cardStyle={this.props.childCardStyle ? this.props.childCardStyle : undefined} /> //List or standard
        })

        return (
            <div className={containerClassNames} >
                {this.props.image && <img src={this.props.image} />}
                <p className="title">{this.props.title}</p>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                
                {subSections.length>0 ? <div className={cardCardsContainerClasses}>{subSectionsHtml}</div> : null}
            </div>
        );
    }
}

Card.defaultProps = {
    level: 1,
    cardStyle: consts.CARD_STYLE_STANDARD,
    childCardStyle: consts.CARD_STYLE_STANDARD,
    containerStyle: consts.CONTAINER_STYLE_COLUMNS
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
        this.chooseHandler = this.chooseHandler.bind(this);
    }
    chooseHandler() {
        console.log('RUFF!');
        this.setState({showMenu: true});
    }
    render() {
        const display = true;
        return (
            <div>
            <div className="form-container">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
                <button onClick={this.chooseHandler}>Send Via...</button>
                {this.state.showMenu && <div>
                    <button>Email Client</button>
                    <button>GMail Web Client</button></div>}
            </div>
            </div>
         );
    }
}

export default Tutoring;
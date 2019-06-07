import React from 'react';

import theoryAndPractice from '../images/theory_practice.svg';
import * as consts from '../utils/constants.js';

class Tutoring extends React.Component {
    render() {
        const servicesOffered = {
            title: 'Services Offered',
            introduction: 'I offer several different services to fit your needs.',
            subsections: [
                {
                    title: 'Traditional Tutoring',
                    introduction: 'We’ll cover the specific material and subject and you specify. I’ll show you how its connected to the big picture of Computer Science and the Software Engineering Industry.',
                    image: theoryAndPractice
                },
                {
                    title: 'Personalized Curriculum',
                    introduction: 'Let\'s come up with a set of subjects to cover to accomplish your learning and professional goals.',
                    image: theoryAndPractice,
                    subsections: [
                        {
                            title: 'College Preperation',
                            introduction: 'Get an edge over your classmates and jumpstart your higher education pursues by learning the material beforehand. We can even personalize it to your specfic school’s curriculum.'
                        },
                        {
                            title: 'Career Preparation',
                            introduction: 'Are you almost ready to start your career, but want to prepare for success? Lets design a curriculum to prepare you for the real world.'
                        },
                        {
                            title: 'Full Curriculum',
                            introduction: 'Lets cover all the subjects necessary for becoming a Software Engineer, without having to go thousands of dollars in to debt.'
                        }
                    ]
                }
            ],
        };
        const coursesTutored = {
            title: 'Courses Tutored',
            introduction: 'Courses tutored',
            subsectionStyle: consts.CARD_STYLE_LIST,
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
            subsections: [
                {title: 'Intro to Distributed Systems'},
                {title: 'Intro to Cloud Computing'},
                {title: 'Intro Functional Programming '},
                {title: 'Web Technologies'},

                {title: 'Software Development Process (Fundamentals of SE book)'},
                {title: 'Technical Resumes'},
                {title: 'Technical Interviews'},
                {title: 'Scrum'},
                {title: 'Testing'},
                {title: 'Debugging'},
            ],
        };
        const pricing = {
            title: 'Pricing',
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
                    <hr />
                    <hr />
                    <hr />
                    <h2>Services Offered</h2>
                    <Card title="Traditional Tutoring" />
                    <Card title="Personalized Curriculum" />
                        <h4>College Preperation</h4>
                        <h4>Career Preperation</h4>
                        <h4>Full Curriculum</h4>
                </div>
            </div>
        );
    }
}

class Section extends React.Component {
    render() {
        const subSections = this.props.subsections ? this.props.subsections : [];
        const titleClassNames = 'section-title';
        let sectionCardsContainerClasses = 'section-cards';
        if(this.props.subsectionStyle && this.props.subsectionStyle==consts.CARD_STYLE_STANDARD){
            sectionCardsContainerClasses += " standard-card";
        } else if(this.props.subsectionStyle && this.props.subsectionStyle==consts.CARD_STYLE_LIST){
            sectionCardsContainerClasses += " list-card";
        }

        const subSectionsHtml = subSections.map((subSection, index) =>{
            return <Card 
                    {...subSection}
                    style={this.props.subsectionStyle ? this.props.subsectionStyle : undefined} />
        });
        return (
            <div className="section-container" >
                <div className={titleClassNames}>{this.props.title}</div>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                {subSections.length>0 ? <div className={sectionCardsContainerClasses}>{subSectionsHtml}</div> : null}
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const subSections = this.props.subsections ? this.props.subsections : [];
        let titleClassNames = "card-title";
        let containerClassNames = "card-container";
        if(this.props.level==1) {
            containerClassNames += " first-level";
            titleClassNames += " first-level";
        } else {
            containerClassNames += " second-level";
            titleClassNames += " second-level";
        }

        if(this.props.style==consts.CARD_STYLE_STANDARD){
            containerClassNames += " standard-card";
        } else if(this.props.style==consts.CARD_STYLE_LIST){
            containerClassNames += " list-card";
        }

        const subSectionsHtml = subSections.map((subSection, index) =>{
            return <Card 
                    {...subSection} 
                    level={this.props.level+1}
                    style={this.props.subsectionStyle ? this.props.subsectionStyle : undefined} />
        })

        return (
            <div className={containerClassNames} >
                {this.props.image && <img src={this.props.image} />}
                <p className={titleClassNames}>{this.props.title}</p>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                
                {subSections.length>0 ? <div className="">{subSectionsHtml}</div> : null}
            </div>
        );
    }
}

Card.defaultProps = {
    level: 1,
    style: consts.CARD_STYLE_STANDARD
}

class ContactForm extends React.Component {
    render() {
        return ( <div >Contact Form</div> );
    }
}

export default Tutoring;
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
                {introduction: 'Rate Details: Discount for referrals. Discounted group lessons: 2 people $50/hour each, 3 people $40/hour each.'},
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
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            helpNeeded: '',
            helpWantedDescription: '',
        }
        this.sendHandler = this.sendHandler.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    sendHandler(sendOption) {
        const toMe = 'tutoring@swcraftsman.com'
        console.log('Send via: ' + sendOption);
        const serviceNeeded = consts.serviceKey[this.state.helpNeeded];
        const subject = 'Apprentice Tutoring: ' + serviceNeeded;
        const address = this.state.address ? 'My address is ' + this.state.address + '.' : '';
        let body_message = 'Dear Steven Ford,\r\n\r\n' +
            'My name is ' + this.state.firstName + ' ' + this.state.lastName + '. ' +
            'I am interested in tutoring and/or mentorship from you, and would like to ' +
            'learn more about your ' + serviceNeeded + ' services. \r\n \r\n' +
            'My specific needs are: \r\n' + this.state.helpWantedDescription + '\r\n\r\n' +
            'You can contact me at ' + this.state.phone + '\r\n\r\n' +
            'Thank you,\r\n\r\n' + this.state.firstName + ' ' + this.state.lastName;
        body_message = encodeURIComponent(body_message)

        let mailto_link = '';
        if(sendOption==='emailClient'){
            mailto_link = 'mailto:' + toMe + '?subject=' + subject + '&body=' + body_message;
        } else if(sendOption==='gmailClient'){
            mailto_link = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + toMe + '&su=' + subject +
                '&body=' + body_message;
        }
        


        const win = window.open(mailto_link, 'emailWindow');
        
    }
    onChange(event) {
        const field = event.target.id;
        if(field === 'fname'){
            this.setState({firstName: event.target.value})
        } else if(field==='lname') {
            this.setState({lastName: event.target.value})
        } else if(field==='phone') {
            this.setState({phone: event.target.value})
        } else if(field==='address') {
            this.setState({address: event.target.value})
        } else if(field==='helpNeeded') {
            this.setState({helpNeeded: event.target.value})
        } else if(field==='helpWantedDescription') {
            this.setState({helpWantedDescription: event.target.value})
        }
    }
    render() {
        return (
            <div>
            <div className="form-container">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.firstName} onChange={this.onChange} />
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lastName} onChange={this.onChange} />
                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Your phone number.." value={this.state.phone} onChange={this.onChange} />
                <label for="address">Address</label>
                <textarea id="address" name="address" placeholder="Where do you live?" style={{height:'50px'}}
                     value={this.state.address} onChange={this.onChange}></textarea>
                <label for="helpNeeded">How do you need help?</label>
                <select id="helpNeeded" name="helpNeeded"  value={this.state.helpNeeded} onChange={this.onChange}>
                    <option value="tutoring">Traditional Tutoring</option>
                    <option value="collegePrep">College Preperation</option>
                    <option value="careerPrep">Career Preperation</option>
                    <option value="fullCurriculum">Full Curriculum</option>
                    <option value="other">Other</option>
                </select>
                <label for="helpWantedDescription">Tutoring Detailss</label>
                <textarea id="helpWantedDescription" name="helpWantedDescription" 
                    placeholder="Describe what you hope to get out of tutoring..." style={{height:'120px'}}
                    value={this.state.helpWantedDescription} onChange={this.onChange}></textarea>
                <div class="dropdown">
                    <button class="dropbtn">Submit Via</button>
                    <div class="dropdown-content">
                        <a onClick={() => this.sendHandler('emailClient')}>Email Client</a>
                        <a onClick={() => this.sendHandler('gmailClient')}>GMail Web Client</a>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Tutoring;
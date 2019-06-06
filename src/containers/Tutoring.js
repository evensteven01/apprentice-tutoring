import React from 'react';

import theoryAndPractice from '../images/theory_practice.svg';

class Tutoring extends React.Component {
    render() {
        const servicesOffered = {
            title: 'Services Offered',
            introduction: 'I offer several different services to fit your needs.',
            subsections: [
                {
                    title: 'Personalized Curriculum',
                    introduction: 'This is Personalized Curriculum',
                    image: theoryAndPractice,
                    subsections: [
                        {
                            title: 'College Preperation',
                            introduction: 'This is College Preperation'
                        }
                    ]
                }
            ],
        };
        const patisFamily = {
            title: 'Raul',
            introduction: 'Yo soy Raul',
            subsections: [
                {
                    title: 'Pati',
                    introduction: 'Yo soy Pati',
                    subsections: [
                        {
                            title: 'Kayla',
                            introduction: 'Yo soy Kayla'
                        }
                    ]
                }
            ],
        };
        return (
            <div>
                <div>
                    <Section 
                        {...servicesOffered} />
                    <Section 
                        {...patisFamily} />
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
                <div>
                    <Card title="Course Tutored" />
                </div>
                <div>
                    <Card title="Subjects Offered" />
                </div>
                <div>
                    <Card title="Pricing" />
                </div>
                <div>
                    <Card title="Get Started" />
                </div>
            </div>
        );
    }
}

class Section extends React.Component {
    render() {
        const subSections = this.props.subsections ? this.props.subsections : [];
        const titleClassNames = 'section-title';
        return (
            <div className="section-container" >
                <div className={titleClassNames}>{this.props.title}</div>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                {subSections.map(function(subSection, index){
                    const subSections = subSection.subsections ? subSection.subsections : []    
                    return <Card {...subSection} />
                })}
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
        let titleClassNames = "card-title ";
        let containerClassNames = "card-container ";
        if(this.props.level==1) {
            titleClassNames += "first-level";
            containerClassNames += "first-level";
        } else {
            titleClassNames += "second-level";
            containerClassNames += "second-level";
        }

        return (
            <div className={containerClassNames} >
                {this.props.image && <img src={this.props.image} />}
                <p className={titleClassNames}>{this.props.title}</p>
                {this.props.introduction && <p>{this.props.introduction}</p>}
                {subSections.map((subSection, index) =>{
                    const subSections = subSection.subsections ? subSection.subsections : []    
                    return <Card {...subSection} level={this.props.level+1} />
                })}
            </div>
        );
    }
}

Card.defaultProps = {
    level: 1
}

export default Tutoring;
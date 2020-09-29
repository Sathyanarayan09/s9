import React, {Component} from 'react';

import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import FaGraduationCap from 'react-icons/lib/fa/graduation-cap';
import MdSchool from 'react-icons/lib/md/school';
import MdTimeline from 'react-icons/lib/md/timeline';
import {Button, Header, Image, Modal} from 'semantic-ui-react'

const data = [
    {name: '10th', Score: 7.2},
    {name: '12th', Score: 7.2},
    {name: 'B.E', Score: 7.32},
];

class EducationQualification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: '0', height: '0', finished: false, stepIndex: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };


    renderStepActions(step) {
        const {stepIndex} = this.state;

        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    onClick={this.handleNext}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const {finished, stepIndex} = this.state;

        return (
            <div style={{maxWidth: 800, maxHeight: 400, margin: 'auto', paddingTop: 70}}>
                <h1 style={{paddingLeft: 15,fontSize:35}}>Education <MdTimeline style={{Color: '#000', height: 50, width: 40}}/>
                </h1>
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel icon={<FaGraduationCap style={{Color: '#000', height: 50, width: 40}}/>}><p
                            style={{fontSize: 20, paddingTop: 5}}>Bachelor of
                            Engineering</p></StepLabel>
                        <StepContent>
                            <p>Completed B.E Computer Science And Engineering at GKM College of Engineering and
                                Technology with <strong>7.32</strong> CGPA. &nbsp;
                                <Modal trigger={<Button size="medium"><p style={{fontSize:13}}>Learn more..</p></Button>}>
                                    <Modal.Header>B.E Computer Science And Engineering</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>
                                            <Header>Institution: GKM College of Engineering and Technology</Header>
                                            <Header>Academic Year : 2013-2017</Header>
                                            <Header>CGPA : 7.32</Header>
                                            <Header>Responsibilities held  :  Digital Media Designer at Advertising Committee <strong>|</strong> Student Coordinators at R&D Cell.</Header>
                                            <Header>Awards & Achievements : "Earn while you learn" - special award for excellent performance at advertising committee  <strong>|</strong> "Innovative project" - For my final year project  <strong>|</strong> 8th semester department topper with 9 GPA.</Header>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>

                            </p>

                            {this.renderStepActions(0)}

                        </StepContent>

                    </Step>
                    <Step>
                        <StepLabel icon={<MdSchool style={{Color: '#000', height: 50, width: 40}}/>}><p
                            style={{fontSize: 20}}>12th Grade</p>
                        </StepLabel>
                        <StepContent>
                            <p>Completed 12th CBSE at Vels Vidyashram with <strong>7.2 </strong> CGPA.
                                &nbsp;
                                <Modal trigger={<Button size="medium"><p style={{fontSize:13}}>Learn more..</p></Button>}>
                                    <Modal.Header>12th Grade</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>
                                            <Header>Institution: Vels Vidyashram (CBSE)</Header>
                                            <Header>Year of Completion : 2013</Header>
                                            <Header>Percentage : 68%</Header>
                                            <Header>Awards : "Best Short Film" - Inter-school Competition <strong>|</strong> Participated and won in many Inter-school events.</Header>
                                            <Header>Sports : Football - Participated in CBSE clusters.</Header>
                                            <Header>Other : Part of school band as a Side-Drummer for 2 years.</Header>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal></p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel icon={<MdSchool style={{Color: '#000', height: 50, width: 40}}/>}><p
                            style={{fontSize: 20}}>10th Grade</p>
                        </StepLabel>
                        <StepContent>
                            <p>Completed 10th CBSE at Vels Vidyashram with <strong>7.2 </strong> CGPA.
                                &nbsp;
                                <Modal trigger={<Button size="medium"><p style={{fontSize:13}}>Learn more..</p></Button>}>
                                    <Modal.Header>10th Grade</Modal.Header>
                                    <Modal.Content>
                                        <Modal.Description>
                                            <Header>Institution: Vels Vidyashram (CBSE)</Header>
                                            <Header>Year of Completion : 2011</Header>
                                            <Header>CGPA : 7.2</Header>
                                            <Header>Sports : Swimming - Represented school at CBSE clusters.</Header>
                                            <Header>Other : Part of school band as a Trumpet player for 4 years.</Header>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal></p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
                {this.state.finished && (
                    <div style={{align: 'center'}}>
                        <ResponsiveContainer width={this.state.width / 2 + 150} height={300}>
                            <LineChart width={600} height={300} data={data}
                                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <Tooltip/>
                                <Legend verticalAlign="bottom"/>
                                <Line type="monotone" dataKey="Score" stroke="#000" activeDot={{r: 8}}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        );
    }
}


const style = {
    height: 200,
    width: 200,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

export default EducationQualification;

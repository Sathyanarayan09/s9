import React, {Component} from 'react';

import TiDeviceLaptop from 'react-icons/lib/ti/device-laptop';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Accordion, Icon} from 'semantic-ui-react'

const colors = {
    "bar": "#b8b9ba",
    "title": {
        "text": "#fff",
        "background": "#000"
    }
}

class Projects extends React.Component {
    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeIndex} = this.state
        return (
            <div style={{maxWidth: 600, maxHeight: 400, margin: 'auto', paddingTop: 70}}>
                <h1 style={{paddingLeft: 15, fontSize: 35}}>Projects <TiDeviceLaptop style={{Color: '#000'}}/></h1>
                <Card style={{padding: 20}}>
                    <Accordion styled>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            Human Resource Information system based on Gamification - Web Application (Dec - 2015)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <p><span style={{color: '#d9dbdd'}}>Project Summary</span></p>
                            <p>
                                • This application is associated with full fledged HR Management functionalities like, employee
                                monitoring, attendance maintenance, salary calculation and task assignment. Gamification
                                concept was implemented for employee motivation and engagement at work.
                            </p>

                            <p><span style={{color: '#d9dbdd'}}>Software stack :</span> PHP | Bootstrap | Sql | embedded c. </p>
                            <p><span style={{color: '#d9dbdd'}}>International Journal :</span><a href="http://www.ijesrt.com/issues%20pdf%20file/Archive-2017/March-2017/9.pdf" target="_blank"> Link</a></p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            GKMCET Prompt - Android Application (Feb - 2014)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>
                                This application was built for college utility purpose which consists of bus route timing details, internal mark calculator, logins for staffs & students and syllabus downloading facility for respective departments.
                            </p>
                            <p><span style={{color: '#d9dbdd'}}>Software stack :</span> Android Studio. </p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown'/>
                            E-voting System - Java Application (Jul - 2012)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <p>
                                This Application serves as an e-voting application for school level (SPL and ASPL election) as a replacement for ballot voting.
                            </p>
                            <p><span style={{color: '#d9dbdd'}}>Software stack :</span>Java NetBeans | MySQL</p>
                        </Accordion.Content>
                    </Accordion>
                </Card>

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

export default Projects;

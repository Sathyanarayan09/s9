import React, { Component } from 'react';

import MdWork from 'react-icons/lib/md/work';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';


class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div style={{ maxWidth: 800, maxHeight: 400, margin: 'auto', paddingTop: 70 }}>
                <h1 style={{ paddingLeft: 15, fontSize: 35 }}>Work Experience <MdWork
                    style={{ Color: '#000', height: 50, width: 40 }} /></h1>
                <Card>
                    <CardTitle
                        style={{ color: '#188efb', cursor: 'pointer' }}
                        onClick={() => window.open('https://www.commutatus.com/')}
                        title="Commutatus"
                        subtitle="Chennai, Tamil Nadu"
                     />
                    <CardText><p style={{ fontSize: 20 }}>Front-end developer - (Feb 2018 - Present) :</p>
                    </CardText>
                    <CardText>
                        <h5><span style={{ color: '#808080' }}>Work Summary</span></h5>
                        <p>- Worked on almost every stage of Application Development right from collecting requirements, developing / architecting codebase from scratch and deploying with CI/CD tools.</p>
                        <p>- Engaging with clients/partners to understand the business goals and provide appropriate solutions.</p>
                        <p>- Collaborating and working closely with team to ship deliverables on time.</p>
                        <h5><span style={{ color: '#808080' }}>Software Stack</span></h5>
                        <p>React | React Native | Redux | GraphQl | REST | Flutter | Next.js</p>
                    </CardText>
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

export default WorkExperience;

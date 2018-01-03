import React, {Component} from 'react';

import MdWork from 'react-icons/lib/md/work';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    render() {
        const {finished, stepIndex} = this.state;

        return (
            <div style={{maxWidth: 800, maxHeight: 400, margin: 'auto', paddingTop: 70}}>
                <h1 style={{paddingLeft: 15, fontSize: 35}}>Work Experience <MdWork
                    style={{Color: '#000', height: 50, width: 40}}/></h1>
                <Card>
                    <CardTitle title="Lap Solutions" subtitle="Chennai based Startup"/>
                    <CardText><p style={{fontSize: 20}}>Mobile Application Developer - (May 2017 - Present) :</p>
                    </CardText>
                    <CardText>
                        <h5><span style={{color: '#d9dbdd'}}>Work Summary</span></h5>
                        <p>- Worked on almost every stage of Application development right from collecting requirements, providing guidelines for design, developing application and implementation that in various stages of development.</p>
                        <p>- Followed Agile Methodology.</p>
                        <p>- Worked with Git version control system.</p>
                        <h5><span style={{color: '#d9dbdd'}}>Software Stack</span></h5>
                        <p>React Native | Redux | Node.js | MongoDb | Expo SDK</p>
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

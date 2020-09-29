import React, { Component } from 'react';

import GoFlame from 'react-icons/lib/go/flame';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import SkillBar from 'react-skillbars';

const skills = [
    { type: "JavaScript", level: 90 },
    { type: "React", level: 90 },
    { type: "ReactNative", level: 90 },
    { type: "Redux", level: 90 },
    { type: "REST", level: 90 },
    { type: "graphQL", level: 85 },
    { type: "SCSS/CSS", level: 85 },
    { type: "Flutter", level: 70 },
    { type: "Next.js", level: 70 },
 ];

const colors = {
    "bar": "#b8b9ba",
    "title": {
        "text": "#fff",
        "background": "#000"
    }
}

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    render() {
        const { finished, stepIndex } = this.state;

        return (
            <div style={{ maxWidth: 800, maxHeight: 400, margin: 'auto', paddingTop: 70 }}>
                <h1 style={{ paddingLeft: 15, fontSize: 35 }}>Skills<GoFlame style={{ Color: '#000' }} /></h1>
                <Card style={{ padding: 20 }}>
                    <SkillBar colors={colors} skills={skills} />
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

export default Skill;

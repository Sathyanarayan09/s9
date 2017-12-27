import React, {Component} from 'react';

import GoFlame from 'react-icons/lib/go/flame';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import SkillBar from 'react-skillbars';

const skills = [
    {type: "PhotoShop", level: 90},
    {type: "JavaScript", level: 75},
    {type: "ReactNative", level: 75},
    {type: "Node.js", level: 65},
    {type: "Expo Sdk", level: 75},
    {type: "HTML5/CSS", level: 80},
    {type: "MongoDb", level: 70},
    {type: "Sql", level: 70},
    {type: "PHP", level: 67},

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
        const {finished, stepIndex} = this.state;

        return (
            <div style={{maxWidth: 800, maxHeight: 400, margin: 'auto', paddingTop: 70}}>
                <h1 style={{paddingLeft: 15, fontSize: 35}}>Skills<GoFlame style={{Color: '#000'}}/></h1>
                <Card style={{padding:20}}>
                    <SkillBar colors={colors} skills={skills}/>
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

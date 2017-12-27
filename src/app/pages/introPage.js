import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-material-responsive-grid';
import TextLoop from 'react-text-loop';
import FaHeart from 'react-icons/lib/fa/heart';
import FaCode from 'react-icons/lib/fa/code';
import FaCoffee from 'react-icons/lib/fa/coffee';


class IntroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: '0', height: '0'};
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


    render() {
        return (
            <div style={divst}>
                <h1 style={text}> Hi, I&#39;m <span style={{color: '#ff0000'}}>Sathyanarayan</span> <br/> a
                    Developer & Dreamer<br/>
                    Me +
                    <TextLoop fade="true" speed="3000">
                        <span>&nbsp;<FaCode style={{color: 'black'}}/></span>
                        <span>&nbsp;<FaCoffee style={{color: 'black'}}/></span>
                    </TextLoop> = <FaHeart style={{color: 'red'}}/>
                </h1>


            </div>

        );
    }
}


const divst = {
    position: "absolute",
    margin: "auto",
    top: '40%',
    right: 0,
    bottom: 0,
    left: 0,


};
const text = {
    textAlign: 'center'

};

export default IntroPage;

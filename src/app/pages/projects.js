import React, { Component } from 'react';

import TiDeviceLaptop from 'react-icons/lib/ti/device-laptop';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Accordion, Icon } from 'semantic-ui-react'

const colors = {
    "bar": "#b8b9ba",
    "title": {
        "text": "#fff",
        "background": "#000"
    }
}

class Projects extends React.Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        return (
            <div style={{ maxWidth: 600, maxHeight: 400, margin: 'auto', paddingTop: 70 }}>
                <h1 style={{ paddingLeft: 15, fontSize: 35 }}>Projects <TiDeviceLaptop style={{ Color: '#000' }} /></h1>
                <Card style={{ padding: 20 }}>
                    <Accordion styled>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                           AIESEC (Expa CRM)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <p><span style={{ color: '#808080' }}>Project Summary</span></p>
                            <p>EXPA is a CRM tool to manage and analyze global operations, and plays a major role for AIESEC's internal operations.</p>
                            <p><span style={{ color: '#808080' }}>Software stack: </span> React | GraphQl | Redux |  REST | Apollo | Relay | Ruby on Rails. </p>
                            <p><span style={{ color: '#808080' }}>Project:</span><a href="https://aiesec.org/" target="_blank"> Link</a></p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                           Educatly (Social)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <p>A platform that helps students to get into universities, Educatly is the future of international education.</p>
                            <p><span style={{ color: '#808080' }}>Software stack: </span> React | GraphQl | Redux | Apollo | Ruby on Rails. </p>
                            <p><span style={{ color: '#808080' }}>Project:</span><a href="https://www.educatly.com/" target="_blank"> Link</a></p>
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Ragya (Music player app)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <p>One of its kind music player to enjoy an uninterrupted supply of the best of Indian classical music, played based on the time of the day.</p>
                            <p><span style={{ color: '#808080' }}>Software stack: </span>React Native | Redux | Apollo | GraphQl </p>
                            <p>
                                <span style={{ color: '#808080' }}>Project:</span>
                                <a href="https://play.google.com/store/apps/details?id=com.ragya&hl=en_IN" target="_blank"> Android | </a>
                                <a href="https://apps.apple.com/in/app/ragya/id1481987704" target="_blank"> iOS</a>
                            </p>

                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Nadim (CRM)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <p>NADIM's ultra-high end furniture designs and manufacturing company, we enable them to handle all internal processes with help of a CRM tool.</p>
                            <p><span style={{ color: '#808080' }}>Software stack: </span>React | Redux | Rest | Ruby on Rails</p>
                            <p>
                                <span style={{ color: '#808080' }}>Project:</span>
                                <a href="https://www.nadim.org/" target="_blank"> Link</a>
                            </p>

                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Gehna (Mobile POS app)
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <p>Gehna is leading custom handmade jewellery designer for gold, diamond jewelleries in Chennai, we developed a POS app to fasten the sales process.</p>
                            <p><span style={{ color: '#808080' }}>Software stack: </span>React native | Redux | Rest | Ruby on Rails</p>
                        </Accordion.Content>

                    </Accordion>
                </Card>

            </div >
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

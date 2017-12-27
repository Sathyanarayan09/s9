import React, {Component} from 'react';

import FaPaperPlaneO from 'react-icons/lib/fa/paper-plane-o';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Accordion, Icon} from 'semantic-ui-react'
import ATVParallax from '../pages/parallex/index';

const rootDivStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
}


class FinalPage extends React.Component {


    render() {

        return (
            <div style={{maxWidth: 600, maxHeight: 400, margin: 'auto', paddingTop: 70}}>
                {/*
                <h1 style={{paddingLeft: 15, fontSize: 35}}> <FaPaperPlaneO style={{Color: '#000'}}/></h1>
*/}
                <br></br><br></br>
                <div style={rootDivStyle}>
                    <ATVParallax style={{width: 400, height: 500}}>


                        <img src={require('../pages/parallex/img/1.png')}/>
                        <img src={require('../pages/parallex/img/2.png')}/>
                        <img src={require('../pages/parallex/img/3.PNG')}/>
                        <img src={require('../pages/parallex/img/4.PNG')}/>
                        <img src={require('../pages/parallex/img/5.PNG')}/>
                        <img src={require('../pages/parallex/img/6.PNG')}/>
                        <img src={require('../pages/parallex/img/7.PNG')}/>
                        <img src={require('../pages/parallex/img/8.PNG')}/>

                        <div>
                            <div style={{
                                position: "relative",
                                top: "80%",
                                height: "20%",
                                width: "100%",
                                display: "table"
                            }}>
          <span style={{
              fontSize: "3rem",
              display: "table-cell",
              textAlign: "center",
              verticalAlign: "middle"
          }}><ATVParallax style={{Color: '#000'}}/></span>
                            </div>
                        </div>
                    </ATVParallax>
                </div>
            </div>
        );
    }
}


export default FinalPage;

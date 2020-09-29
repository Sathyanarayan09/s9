import React, { Component } from 'react';
import Email from 'react-icons/lib/md/email';


import ATVParallax from '../pages/parallex/index';
const img = [
    require('../pages/parallex/img/1.png'),
    require('../pages/parallex/img/2.png'),
    require('../pages/parallex/img/3.PNG'),
    require('../pages/parallex/img/4.PNG'),
    require('../pages/parallex/img/5.PNG'),
    require('../pages/parallex/img/6.PNG'),
    require('../pages/parallex/img/7.PNG'),
    require('../pages/parallex/img/8.PNG'),
    require('../pages/parallex/img/9.PNG'),
    require('../pages/parallex/img/10.PNG'),
    require('../pages/parallex/img/11.PNG'),
    require('../pages/parallex/img/12.PNG'),
]
const rootDivStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: '10px'
}


class FinalPage extends React.Component {


    render() {

        return (
            <div style={{ maxWidth: 600, maxHeight: 400, margin: 'auto', paddingTop: 70 }}>
                <h3 style={{ textAlign: 'center' }}>
                    Want to use my platinum card to get your work done? let's get in touch ;)
                </h3>
                <div style={rootDivStyle}>
                    <ATVParallax style={{ width: 380, height: 420 }}>
                        {
                            img.map((item, index) => {
                                return <img src={item} />
                            })
                        }
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
                                }}><ATVParallax style={{ Color: '#000' }} /></span>
                            </div>
                        </div>
                    </ATVParallax>
                </div>
                <div style={{
                    position: 'absolute', bottom: 0,
                    right: 0,
                    bottom: 20,
                    left: 0,
                }}>
                    <h3 style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <a  href="mailto:sathyanarayan065@gmail.com">sathyanarayan065@gmail.com</a>   <Email style={{ Color: '#000', height: 50, width: 40 }} ></Email>
                    </h3>
                </div>

            </div >

        );
    }
}


export default FinalPage;

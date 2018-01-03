import React from 'react';
import AwesomeButton from 'react-awesome-button';
import {FaArrowLeft, FaArrowRight, FaArrowUp} from 'react-icons/lib/fa'
import 'react-awesome-button/dist/styles.css';
import {Fullpage, HorizontalSlider, Slide} from './lib/index';

import IntroPage from './pages/introPage'
import EducationQualification from './pages/educationQualification'
import WorkExperience from './pages/workExperience'
import Skill from './pages/skill'
import Projects from './pages/projects'
import FinalPage from './pages/finalPage'



const {changeFullpageSlide, changeHorizontalSlide} = Fullpage;

require('./normalize.css');
require('./skeleton.css');
require('./exampleStyles.styl');

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 1,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: -3,
    scrollSpeed: 500,
    resetSlides: true,
    hideScrollBars: true,
    enableArrowKeys: false,
    breakpoint: 375
};

const topNavStyle = {
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    cursor: 'pointer',
    zIndex: 10,
    top: '7px',

};

const horizontalNavStyle = {
    position: 'absolute',
    width: '100%',
    top: '50%',
    zIndex: 10
};

const horizontalSliderProps = {
    name: 'horizontalSlider1',
    infinite: true
};

class FullpageReact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {
                Fullpage: 0,
                horizontalSlider1: 0
            }
        };

        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
        this.onSlideChangeEnd = this.onSlideChangeEnd.bind(this);
    }

    onSlideChangeStart(name, props, state, newState) {
        if (!this.horizontalNav) {
            this.horizontalNav = document.getElementById('horizontal-nav');
        }

        if (name === 'horizontalSlider1') {
            scrollNavStart(this.horizontalNav);
        }
    }

    onSlideChangeEnd(name, props, state, newState) {
        if (name === 'horizontalSlider1') {
            scrollNavEnd(this.horizontalNav);
        }

        const oldActive = this.state.active;
        const sliderState = {
            [name]: newState.activeSlide
        };

        const updatedState = Object.assign(oldActive, sliderState);
        this.setState(updatedState);
    }

    componentDidMount() {

    }

    render() {
        const {active} = this.state;

        const currentActive = active.Fullpage;
        const prevSlide = changeFullpageSlide.bind(null, currentActive - 1);
        const nextSlide = changeFullpageSlide.bind(null, currentActive + 1);
        const goToTop = changeFullpageSlide.bind(null, 0);

        const horizontalSliderName = horizontalSliderProps.name;
        const horizontalActive = this.state.active[horizontalSliderName];

        const prevHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive - 1);
        const nextHorizontalSlide = changeHorizontalSlide.bind(null, horizontalSliderName, horizontalActive + 1);

        const topNav = (
            <div style={topNavStyle}>

        <span style={{paddingRight: 10}} onClick={prevSlide}>
         <AwesomeButton bubbles><FaArrowLeft/></AwesomeButton>
        </span>
                <span onClick={goToTop}>
          <AwesomeButton size='auto'><FaArrowUp/></AwesomeButton>
        </span>
                <span style={{paddingLeft: 10}} onClick={nextSlide}>
          <AwesomeButton bubbles><FaArrowRight/></AwesomeButton>
        </span>
            </div>
        );

        const horizontalNav = (
            <div id='horizontal-nav' style={horizontalNavStyle}>
                <span onClick={prevHorizontalSlide}><button>PREV</button></span>
                <span style={{position: 'absolute', right: '0px'}} onClick={nextHorizontalSlide}><button>Next</button></span>
            </div>
        );

        const horizontalSlides = [
            <Slide style={{backgroundColor: '#4bbfc3'}}>
                <p>Horizontal 2</p>

            </Slide>,
            <Slide style={{backgroundColor: '#4bbfc3'}}></Slide>,
            <Slide style={{backgroundColor: '#4bbfc3'}}><p>Horizontal 3</p></Slide>
        ];
        horizontalSliderProps.slides = horizontalSlides;

        const horizontalSlider = <HorizontalSlider
            id='horizontal-slider-1' {...horizontalSliderProps}>{horizontalNav}</HorizontalSlider>;

        const verticalSlides = [
            <Slide style={{backgroundColor: '#fff'}}>
                <IntroPage/>
            </Slide>,
            <Slide style={{backgroundColor: '#e2e2e2'}}>
                <EducationQualification/>
            </Slide>,
            <Slide style={{backgroundColor: '#fff'}}>
                <WorkExperience/>
            </Slide>,
            <Slide style={{backgroundColor: '#e2e2e2'}}>
                <Skill/>
            </Slide>,
            <Slide style={{backgroundColor: '#fff'}}>
                <Projects/>
            </Slide>,
            <Slide style={{backgroundColor: '#e2e2e2'}}>
                <FinalPage/>
            </Slide>
        ];
        fullPageOptions.slides = verticalSlides;

        return (
            <Fullpage onSlideChangeStart={this.onSlideChangeStart}
                      onSlideChangeEnd={this.onSlideChangeEnd} {...fullPageOptions}>
                {topNav}
            </Fullpage>
        );
    }
}

function scrollNavStart(nav) {
    // make the nav fixed when we start scrolling horizontally
    nav.style.position = 'fixed';
}

function scrollNavEnd(nav) {
    // make the nav absolute when scroll finishes
    nav.style.position = 'absolute';
}

export default FullpageReact;

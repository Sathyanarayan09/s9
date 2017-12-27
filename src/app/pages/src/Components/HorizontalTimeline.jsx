import React, {PropTypes} from 'react';

// Decorators
import Radium from 'radium';
import dimensions from 'react-dimensions';

// Components
import EventsBar from './EventsBar';

// Helpers and constansts
import {zip, daydiff, cummulativeSeperation} from '../helpers';
import Constants from '../Constants';

/**
 * Default method to convert a date to a string label
 * @param {string} date The string representation of a date
 * @return {string} The formatted date string
 */
const defaultGetLabel = (date, index) => (new Date(date)).toDateString().substring(4);

/*
 * This is the Horizontal Timeline. This component expects an array of dates
 * just as strings (e.g. 1993-01-01) and layes them horizontaly on the the screen
 * also expects a callback which is activated when that particular index is
 * clicked passing that index along
 */
class HorizontalTimeline extends React.Component {

  render() {
    const props = this.props;

    if (!props.containerWidth) {
      //As long as we do not know the width of our container, do not render anything!
      return false;
    }

    // Convert the date strings to actual date objects
    const dates = props.values.map((value) => new Date(value));
    // Calculate the distances for all events
    const distances = cummulativeSeperation(
      dates,
      props.labelWidth,
      props.minEventPadding,
      props.maxEventPadding,
      props.linePadding,
    );

    // Convert the distances and dates to events
    const events = distances.map((distance, index) => ({
      distance,
      label: props.getLabel(props.values[index], index),
      date: props.values[index],
    }));

    const visibleWidth = this.props.containerWidth - 80;

    const totalWidth = Math.max(
      events[events.length - 1].distance + this.props.linePadding,
      visibleWidth
    );

    let barPaddingRight = 0;
    let barPaddingLeft = 0;
    if (!this.props.isOpenEnding) {
      barPaddingRight = totalWidth - events[events.length - 1].distance;
    }
    if (!this.props.isOpenBeginning) {
      barPaddingLeft = events[0].distance;
    }

    return (
      <EventsBar
        width={props.containerWidth}
        height={props.containerHeight}
        events={events}
        isTouchEnabled={props.isTouchEnabled}
        totalWidth={totalWidth}
        visibleWidth={visibleWidth}
        index={props.index}
        styles={props.styles}
        indexClick={props.indexClick}
        labelWidth={props.labelWidth}
        fillingMotion={props.fillingMotion}
        barPaddingRight={barPaddingRight}
        barPaddingLeft={barPaddingLeft}
      />
    );
  };

}

/**
 * The expected properties from the parent
 * @type {Object}
 */


/**
 * The values that the properties will take if they are not provided
 * by the user.
 * @type {Object}
 */


export default Radium(dimensions({elementResize: true})(HorizontalTimeline));

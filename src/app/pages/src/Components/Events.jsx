import React, { PropTypes } from 'react';

import { cummulativeSeperation } from '../helpers';
import TimelineDot from './TimelineDot';

/**
 * The markup Information for all the events on the horizontal timeline.
 *
 * @param  {object} props The props from parent mainly styles
 * @return {StatelessFunctionalReactComponent} Markup Information for the fader
 */
const EventsBar = ({ events, selectedIndex, styles, handleDateClick, labelWidth }) => (
  <ol
    className='events-bar'
    style={{
      listStyle: 'none'
    }}
  >
    {events.map((event, index) =>
      <TimelineDot
        distanceFromOrigin={event.distance}
        label={event.label}
        date={event.date}
        index={index}
        key={index}
        onClick={handleDateClick}
        selected={selectedIndex}
        styles={styles}
        labelWidth={labelWidth}
      />
    )}
  </ol>
);

/**
 * The styles that parent will provide
 * @type {Object}
 */


export default EventsBar;

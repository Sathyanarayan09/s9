import React, { PropTypes } from 'react';
import Radium from 'radium';

/**
 * The static/non-static styles Information for a single event dot on the timeline
 */
const dots = {
  /**
   * The style information for the clickable dates that apper floating over the timeline
   */
  links: {
    position: 'absolute',
    bottom: 0,
    textAlign: 'center',
    paddingBottom: 15,
  },
  /**
   * The base style information for the event dot that appers exactly on the timeline
   */
  base: {
    position: 'absolute',
    bottom: -5,
    height: 12,
    width: 12,
    borderRadius: '50%',
    transition: 'background-color 0.3s, border-color 0.3s',
    ':hover': {}, // We need this to track the hover state of this element
  },
  /**
   * future: The style information for the future dot (wrt selected).
   * @param {object} styles User passed styles ( foreground, background etc info
   */
  future: (styles) => ({
    backgroundColor: styles.background,
    // border: `2px solid ${styles.background}`,
    border: `2px solid ${styles.outline}`,
  }),
  /**
   * past: The styles information for the past dot (wrt selected)
   * @param {object} styles User passed styles ( foreground, background etc info
   */
  past: (styles) => ({
    backgroundColor: styles.background,
    border: `2px solid ${styles.foreground}`,
  }),
  /**
   * present: The styles information for the preset dot
   * @param {object} styles User passed styles ( foreground, background etc info
   */
  present: (styles) => ({
    backgroundColor: styles.foreground,
    border: `2px solid ${styles.foreground}`,
  }),
};


/**
 * The markup for one single dot on the timeline
  *
 * @param {object} props The props passed down
 * @return {StatelessFunctionalReactComponent} The markup for a dot
 */
class TimelineDot extends React.Component {

  __getDotStyles__ = (dotType, key) => {
    const hoverStyle = {
      backgroundColor: this.props.styles.foreground,
      border: `2px solid ${this.props.styles.foreground}`,
    };

    return [
      dots.base,
      { left: this.props.labelWidth / 2 - dots.base.width / 2},
      dots[dotType](this.props.styles),
      Radium.getState(this.state, key, ':hover') || Radium.getState(this.state, 'dot-dot', ':hover')
        ? hoverStyle
        : undefined,
    ]
  }

  render() {
    let dotType = 'future';
    if (this.props.index < this.props.selected) {
      dotType = 'past';
    } else if (this.props.index === this.props.selected) {
      dotType = 'present';
    }

    return (
      <li
        key={ this.props.date }
        id={`timeline-dot-${this.props.date}`}
        className={`${dotType} dot-label`}
        onClick={() => this.props.onClick(this.props.index)}
        style={[
          dots.links,
          {
            left: this.props.distanceFromOrigin - this.props.labelWidth / 2,
            cursor: 'pointer',
            width: this.props.labelWidth,
            ':hover': {}, // We need this to track the hover state of this element
          }
        ]}
      >
        { this.props.label }
        <span
          key='dot-dot'
          onClick={() => this.props.onClick(this.props.index) }
          style={this.__getDotStyles__(dotType, this.props.date)}
        />
      </li>
    );
  }
}

/**
 * propTypes
 * @type {Object}
 */


export default Radium(TimelineDot);

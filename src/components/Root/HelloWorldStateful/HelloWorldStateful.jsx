// import styles
import styles from './HelloWorldStateful.scss';
// NPM imports
import React from 'react';
// import $ from 'jquery';
// import { Link } from 'react-router';
    // Icons:
// import {Icon} from 'react-fa'; // Documentation @ https://github.com/andreypopp/react-fa search available icons: http://fontawesome.io/icons/
    // Grid:
// import { Grid, Cell } from 'radium-grid'; // Documentation @ https://github.com/FormidableLabs/radium-grid. Expanded article explaining use case @ https://formidable.com/blog/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/.
    // Pre-built, styles components in material styles.
// import { Button, Card, Row, Col } from 'react-materialize'; // Documentation @ https://react-materialize.github.io/
// Import React Child Components:

export default class HelloWorldStateful extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.HelloWorldStateful}>
        Hello, {this.props.parentState}!
      </div>
    )
  }
}

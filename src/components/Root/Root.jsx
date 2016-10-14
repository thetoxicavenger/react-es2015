// import styles
import styles from './Root.scss';
// NPM imports
import React from 'react';
// Import React Child Components:
import HelloWorldStateless from './HelloWorldStateless/HelloWorldStateless';
import HelloWorldStateful from './HelloWorldStateful/HelloWorldStateful';
// import $ from 'jquery';
// import { Link } from 'react-router';
    // Icons:
// import {Icon} from 'react-fa'; // Documentation @ https://github.com/andreypopp/react-fa
    // Grid:
// import { Grid, Cell } from 'radium-grid'; // Documentation @ https://github.com/FormidableLabs/radium-grid. Expanded article explaining use case @ https://formidable.com/blog/2016/06/20/radium-grid-a-react-grid-system-injected-with-the-power-of-radium/.
    // Pre-built, styles components in material styles.
// import { Button, Card, Row, Col } from 'react-materialize'; // Documentation @ https://react-materialize.github.io/
// Import React Child Components:

export default class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      parentState: "World"
    };
  }
  render() {
    return (
      <div className={styles.Root}>
        <HelloWorldStateless parentState={this.state.parentState}/>
        <HelloWorldStateful parentState={this.state.parentState}/>
      </div>
    )
  }
}

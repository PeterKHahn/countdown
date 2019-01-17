// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';



type Props = {};


class Countdown extends Component {
  


  render() {

    var DateDiff = {
 
      inDays: function(d1, d2) {
          var t2 = d2.getTime();
          var t1 = d1.getTime();
    
          return parseInt((t2-t1)/(24*3600*1000));
      }
    
       
    }
   
    
    var d1 = new Date(this.props.date);
    var d2 = new Date();

    return(
        <div>Number of days until {this.props.date} : {DateDiff.inDays(d2, d1)}</div>
    )
  }
}

export default class Home extends Component<Props> {
  props: Props;

  render() {



    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.intro}>Welcome to</div>
        <div className={styles.title}>The Countdown</div>
        <Link to={routes.COUNTER}>to the Count Down</Link>
        <Countdown date="April 26, 2019"/>

      </div>
    );
  }
}

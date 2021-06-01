import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

const Countdown = (props) => {
  const drawDate = props.nextDraw.DrawDate;
  const jackpotAmount = props.nextDraw.JackpotAmount;

  const start = moment().add(drawDate);console.log('start',start);
  return (
  <div className="content">
      <h3 className="content__heading">
        <Moment date={drawDate} format="hh:mm:ss" local trim durationFromNow interval={1000}/>
      </h3>
      <p className="content__text">
        until next draw
      </p>
      <Moment>{drawDate}</Moment>
      <h6><small>Estimated jackpot</small></h6>
      <h3>${jackpotAmount}</h3>
  </div>
  );
}

export default Countdown;

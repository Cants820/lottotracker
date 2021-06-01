import React from "react";
import "./Hero.css";
import Result from "../../Components/Result";
import Countdown from "../../Components/Countdown";

const draw = [2,6,9,13,23,22];

const nextDraw =  {
DrawNumber: 3565,
DrawDate: "2021-06-02T07:00:00",
DrawCloseTime: "1900-01-01T19:45:05",
JackpotAmount: 51000000,
EstimatedCashValue: 34700000,
WinningNumbers: { },
Prizes: { },
WinningRetailers: [ ],
RaceTime: null,
DrawCloseDateTime: "2021-06-02T19:45:05"
}


const Hero = () => {
  return (
    <section className="hero">
      <div className="content-block__card">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-6 offset-lg-1">
              <div className="card text-center">
                <div className="card-header">
                  <a href="/draw-games/superlotto-plus"><img src="https://static.www.calottery.com/-/media/Project/calottery/shared/logos/SuperLottoPlus_4C_Vert_2016.png?rev=819d10e4030742d0bbb6bd726cb48006&amp;h=814&amp;w=1270&amp;la=en&amp;hash=D6CFF953F1066068177FF9848BCFC417" className="card-img-top" alt="SuperLotto Plus, calottery"/></a>
                </div>
                <div className="card-body">
                  <p>Saturday, December 29, 2021</p>
                  <Result draw={draw}/>
                </div>
                <div className="card-footer">
                  <h3>$999,999,999</h3>
                  <h6><small>Estimated jackpot</small></h6>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 d-none d-md-block align-self-center">
                <Countdown nextDraw={nextDraw} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

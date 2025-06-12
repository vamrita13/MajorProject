import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Stockzone Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals. 
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategles, analyze
            positions, and examine data points like open Interest, Fil/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/tijori-Logo.png"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
          Investment research platform that offers detalled insights on
            stocks, sectors, supply chains, and more.
         </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
            
          Thematic investing
            platformi that helps you invest un diversified baskets of stocks on
            ETFs
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "150px", height: "50px" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life wand bealth insuranice. No spam and no
            misselling
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;

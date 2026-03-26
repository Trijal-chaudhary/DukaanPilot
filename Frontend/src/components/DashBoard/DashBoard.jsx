import React, { useEffect } from "react";
import "./DashBoard.css";
import { isLogged } from "../../services/fetching";
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    isLogged("hello").then((ele) => {
      console.log(ele);
      if (ele.message === "no") {
        navigate("/login");
      }
    });
  }, []);
  return (
    <div className="dashboard7392">
      <div className="header7392">
        <h1>Namaste, Rajesh</h1>
        <p>
          Your digital concierge has analyzed your store's health. Here's what
          needs your attention today.
        </p>
      </div>

      <div className="cardsRow7392">
        <div className="card7392">
          <p className="cardTitle7392">TOTAL CUSTOMERS</p>
          <div className="cardValueRow7392">
            <h2>1,284</h2>
            <span className="badge7392">+12%</span>
          </div>
        </div>

        <div className="card7392 activeCard7392">
          <p className="cardTitle7392">ACTIVE</p>
          <h2>892</h2>
          <div className="greenBar7392"></div>
        </div>

        <div className="card7392">
          <p className="cardTitle7392">AT RISK</p>
          <h2 className="warning7392">354</h2>
        </div>

        <div className="card7392">
          <p className="cardTitle7392">LOST</p>
          <h2 className="danger7392">38</h2>
          <span className="critical7392">CRITICAL</span>
        </div>
      </div>

      <div className="bottomSection7392">
        <div className="retention7392">
          <h3>Customer Retention</h3>
          <p>Active vs Lost monthly trend</p>

          <div className="circle7392">
            <div className="innerCircle7392">
              <h2>94%</h2>
              <span>RETENTION</span>
            </div>
          </div>

          <div className="legend7392">
            <div>
              <span className="dot green7392"></span> Active
            </div>
            <div>
              <span className="dot red7392"></span> Lost
            </div>
          </div>
        </div>

        <div className="aiCard7392">
          <span className="aiTag7392">AI CONCIERGE</span>
          <p className="aiLive7392">Active right now</p>

          <h2>3 of your most loyal customers haven't ordered in 14 days.</h2>

          <p className="aiDesc7392">
            I suggest sending a personalized "We Miss You" offer with a 10%
            discount code to bring them back before the weekend peak.
          </p>

          <div className="aiButtons7392">
            <button className="primaryBtn7392">Send Email Campaign ✉️</button>
            <button className="secondaryBtn7392">Show Customer Details</button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quickActions7392">
        <p>QUICK AI ACTIONS:</p>
        <div className="actions7392">
          <button>Who owes me money?</button>
          <button>Simplify my taxes</button>
          <button>Top selling items</button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

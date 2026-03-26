import React from "react";
import "./Insight.css";
const Insight = () => {
  return (
    <div className="insights9274">
      {/* Header */}
      <div className="header9274">
        <div>
          <h1>Customer Health Insights</h1>
          <p>
            Your digital concierge has identified 12 customers who haven't
            visited in over 30 days. Let's bring them back.
          </p>
        </div>

        <button className="primaryBtn9274">💬 Generate Messages</button>
      </div>

      {/* Tabs */}
      <div className="tabs9274">
        <button className="activeTab9274">All (142)</button>
        <button>Active (98)</button>
        <button>At Risk ●</button>
        <button>Lost ●</button>
      </div>

      {/* Main Section */}
      <div className="main9274">
        {/* Table Section */}
        <div className="tableCard9274">
          {/* Table Header */}
          <div className="tableHeader9274">
            <p></p>
            <p>CUSTOMER NAME</p>
            <p>DAYS INACTIVE</p>
            <p>STATUS</p>
            <p>ACTION</p>
          </div>

          {/* Row 1 */}
          <div className="tableRow9274">
            <input type="checkbox" />
            <div className="user9274">
              <div className="avatar9274">AK</div>
              <p>Arjun Kapoor</p>
            </div>
            <p>42 days</p>
            <span className="tag9274 warning9274">⚠ AT RISK</span>
            <p>⋮</p>
          </div>

          {/* Row 2 */}
          <div className="tableRow9274 selected9274">
            <input type="checkbox" checked readOnly />
            <div className="user9274">
              <div className="avatar9274 green9274">PP</div>
              <p>Priya Patel</p>
            </div>
            <p>65 days</p>
            <span className="tag9274 danger9274">⛔ LOST</span>
            <p>⋮</p>
          </div>

          {/* Row 3 */}
          <div className="tableRow9274">
            <input type="checkbox" />
            <div className="user9274">
              <div className="avatar9274">RJ</div>
              <p>Rahul Jain</p>
            </div>
            <p>5 days</p>
            <span className="tag9274 success9274">✔ ACTIVE</span>
            <p>⋮</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right9274">
          {/* Concierge Card */}
          <div className="aiCard9274">
            <h3>✨ Concierge Advice</h3>

            <p>
              "I noticed 5 customers regularly buy <b>Gold Leaf Tea</b> but
              haven't ordered in a month. Should I draft a special 10% discount
              message for them?"
            </p>

            <button className="optionBtn9274">Yes, draft for all 5 →</button>

            <button className="optionBtn9274 secondary9274">
              Show me the list first
            </button>
          </div>

          {/* Growth Card */}
          <div className="growth9274">
            <p>GROWTH TREND</p>
            <h2>+14%</h2>
            <span>Retention vs Last Month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insight;

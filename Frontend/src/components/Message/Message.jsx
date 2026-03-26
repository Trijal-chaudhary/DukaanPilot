import React from "react";
import "./Message.css";
const Message = () => {
  const customers = [
    {
      name: "Rajesh Sharma",
      initials: "RS",
      risk: "HIGH RISK",
      last: "Last active: 2 days ago",
      msg: "Namaste Rajesh ji, aapka last month ka payment pending hai...",
    },
    {
      name: "Amit Kumar",
      initials: "AK",
      risk: "MEDIUM RISK",
      last: "Last active: Today",
      msg: "Hello Amit ji! Hope business is great...",
    },
    {
      name: "Priya Verma",
      initials: "PV",
      risk: "HIGH RISK",
      last: "Last active: 5 days ago",
      msg: "Priya ji, aapke orders thode kam ho gaye hain...",
    },
  ];

  return (
    <div className="outreach8812">
      <div className="header8812">
        <div>
          <h1>Customer Outreach</h1>
          <p>AI-powered Hinglish messages for your high-risk accounts.</p>
        </div>

        <div className="tag8812">⚡ Campaign ready!</div>
      </div>

      <div className="analysis8812">
        <div>
          <p className="bold8812">AI analyzing your data...</p>
          <span>Identifying churn patterns and payment delays.</span>
        </div>
        <div className="progress8812">
          <div className="bar8812"></div>
        </div>
      </div>

      <div className="cards8812">
        {customers.map((c, i) => (
          <div key={i} className="card8812">
            <div className="top8812">
              <div className="avatar8812">{c.initials}</div>
              <div>
                <h3>{c.name}</h3>
                <p>{c.last}</p>
              </div>
              <span className="risk8812">{c.risk}</span>
            </div>

            <div className="msg8812">"{c.msg}"</div>

            <button className="copy8812">📋 Copy Message</button>
          </div>
        ))}
      </div>

      <div className="bottom8812">
        <div className="broadcast8812">
          <h2>Broadcast to All High-Risk?</h2>
          <p>
            AI has identified 14 other customers who haven't paid this week.
          </p>

          <div className="chips8812">
            <span>Next Step</span>
            <span>Auto-Draft</span>
            <span>WhatsApp Sync</span>
          </div>

          <button className="bigBtn8812">Yes, Analyze All</button>
        </div>

        <div className="stats8812">
          <h2>85%</h2>
          <p>Recovery Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Message;

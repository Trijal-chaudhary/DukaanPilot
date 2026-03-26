import React from "react";
import "./AddData.css";
const AddData = () => {
  return (
    <div className="feed6158">
      <div className="header6158">
        <h1>
          Feed your <span>Pilot.</span>
        </h1>
        <p>
          Add your sales, customer visits, or bills. Our AI will analyze
          patterns and suggest ways to grow your Dukaan.
        </p>
      </div>

      <div className="tabs6158">
        <button className="activeTab6158">Manual Entry</button>
        <button>Paste Data</button>
        <button>Demo Mode</button>
      </div>

      <div className="main6158">
        <div className="left6158">
          <div className="card6158">
            <h3>New Entry</h3>

            <div className="inputRow6158">
              <div className="inputGroup6158">
                <label>CUSTOMER NAME</label>
                <input placeholder="e.g. Rahul Sharma" />
              </div>

              <div className="inputGroup6158">
                <label>DAYS SINCE LAST VISIT</label>
                <input placeholder="0" />
              </div>
            </div>

            <button className="primaryBtn6158">Add Customer</button>
          </div>

          <div className="card6158">
            <div className="bulkHeader6158">
              <h3>AI Bulk Import</h3>
              <span className="tag6158">POWERED BY PILOT</span>
            </div>

            <p className="desc6158">Paste chat logs or digital receipts</p>

            <textarea placeholder="Paste your WhatsApp or bill data here... e.g. 'Rahul bought milk for 50 yesterday'"></textarea>

            <div className="bulkFooter6158">
              <p>Data is encrypted and processed privately.</p>
              <button className="processBtn6158">Process Data</button>
            </div>
          </div>
        </div>

        <div className="right6158">
          <div className="card6158">
            <div className="recentHeader6158">
              <h3>Recent Entries</h3>
              <span className="view6158">View all</span>
            </div>

            <div className="empty6158">
              <div className="circle6158"></div>
              <h4>Start by adding your customer data</h4>
              <p>
                Once you add data, your AI Pilot will start building your
                business growth map.
              </p>
              <button className="demoBtn6158">Load Demo Data</button>
            </div>
          </div>

          <div className="card6158">
            <p className="suggestTitle6158">AI SUGGESTIONS</p>

            <div className="suggestBtns6158">
              <button>Import from Excel</button>
              <button>Sync WhatsApp</button>
              <button>Scan Receipt</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;

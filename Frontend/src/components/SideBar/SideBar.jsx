import React, { useEffect } from "react";
import "./SideBar.css";
import { useNavigate } from "react-router-dom";
import { loggout } from "../../services/fetching";
const SideBar = ({ Currpage, setCurrPage }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/${Currpage}`);
  }, [Currpage]);
  const handelLogOut = async () => {
    await loggout("hello");
    navigate("/login");
  };
  return (
    <div className="sidebar4821">
      <div className="logoSection4821">
        <h2>
          DukaanPilot <span>AI</span>
        </h2>
        <p>PREMIUM MERCHANT</p>
      </div>

      <div className="menu4821">
        <div
          className={`menuItem4821 ${Currpage === "" ? "active4821" : ""}`}
          onClick={() => setCurrPage("")}
        >
          <p>Dashboard</p>
          {/* <div className="activeBar4821"></div> */}
        </div>

        <div
          className={`menuItem4821 ${
            Currpage === "AddData" ? "active4821" : ""
          }`}
          onClick={() => setCurrPage("AddData")}
        >
          <p>Add Data</p>
        </div>

        <div
          className={`menuItem4821 ${
            Currpage === "Insights" ? "active4821" : ""
          }`}
          onClick={() => setCurrPage("Insights")}
        >
          <p>Insights</p>
        </div>

        <div
          className={`menuItem4821 ${
            Currpage === "Messages" ? "active4821" : ""
          }`}
          onClick={() => setCurrPage("Messages")}
        >
          <p>Messages</p>
        </div>
      </div>

      <div className="aiButtonWrapper4821">
        <button onClick={() => setCurrPage("chat")} className="aiButton4821">
          ✨ Ask AI Assistant
        </button>
      </div>

      <div className="bottom4821">
        <div className="menuItem4821">
          <p>Profile</p>
        </div>

        <div className="menuItem4821" onClick={() => handelLogOut()}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

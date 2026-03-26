import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import DashBoard from "./components/DashBoard/DashBoard";
import { useState } from "react";
import AddData from "./components/AddData/AddData";
import Insight from "./components/Insight/Insight";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import ChatAI from "./components/ChatAI/ChatAI";
import Message from "./components/Message/Message";

function AppContent() {
  const [Currpage, setCurrPage] = useState("");
  const location = useLocation();

  // pages where sidebar should NOT be shown
  const hideSidebar = ["/signup", "/login"];

  return (
    <>
      {!hideSidebar.includes(location.pathname) && (
        <SideBar Currpage={Currpage} setCurrPage={setCurrPage} />
      )}

      <div className="mainROuterCount">
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/Insights" element={<Insight />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatAI />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

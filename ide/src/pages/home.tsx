import React from "react";
import TopBar from "../components/topBar";
import CodeEditor from "../components/editor";
import RightPanel from "../components/RightPanel";
import Console from "../components/Console";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="full-page">
      <TopBar />
      <div className="center-panel-section">
        <div className="editor-container">
          <CodeEditor />
        </div>
        <div className="right-panel-container">
          <RightPanel />
        </div>
      </div>
      <Console />
    </div>
  );
};

export default Home;

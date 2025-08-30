// Home.tsx
import React, { useState } from "react";
import TopBar from "../components/topBar";
import CodeEditor from "../components/editor";
import RightPanel from "../components/RightPanel";
import Console from "../components/Console";
import { useCompiler } from "../hooks/useCompiler";
import "./home.css";

const Home: React.FC = () => {
  
  const [code, setCode] = useState<string>("");
  const { compile, loading, errors, symbols, astImage, connectionError } = useCompiler();

  return (
    <div className="full-page">
      <TopBar />
      <div className="center-panel-section">
        <div className="editor-container">
          <CodeEditor errors={errors} code={code} onChange={setCode} />
        </div>
        <div className="right-panel-container">
          <RightPanel symbols={symbols} />
        </div>
      </div>
      <Console errors={errors} />
    </div>
  );
};

export default Home;

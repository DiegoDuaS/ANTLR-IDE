import React, { useState } from "react";
import TopBar from "../components/topBar";
import CodeEditor from "../components/editor";
import RightPanel from "../components/RightPanel";
import Console from "../components/Console";
import "./home.css";

const Home: React.FC = () => {
  const [errors, setErrors] = useState<any[]>([]);
  const [code, setCode] = useState<string>("");

  const handleCompile = async () => {
    try {
      // Ejemplo de cómo mandar al backend
      const response = await fetch("http://localhost:5000/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      });

      const data = await response.json();
      setErrors(data.errors); // supongamos que backend manda { errors: [...] }
    } catch (err) {
      console.error("Error compilando:", err);
    }
  };

  return (
    <div className="full-page">
      <TopBar />
      <div className="center-panel-section">
        <div className="editor-container">
          <CodeEditor errors={errors} code={code} onChange={setCode} />
        </div>
        <div className="right-panel-container">
          <RightPanel />
        </div>
      </div>
      <Console errors={errors} />
    </div>
  );
};

export default Home;

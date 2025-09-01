import React, { useState } from "react";
import TopBar from "../components/topBar";
import CodeEditor from "../components/editor";
import RightPanel from "../components/RightPanel";
import Console from "../components/Console";
import { useCompiler } from "../hooks/useCompiler";
import "./home.css";
import { SemanticError } from "../helpers/types";
import { Symbol } from "../helpers/types";

const Home: React.FC = () => {
  const [code, setCode] = useState<string>("");

  const {
    compile,
    loading,
    errors,
    symbols,
    astImage,
    connectionError,
    setErrors,
    setSymbols,
    setAstImage,
  } = useCompiler();

  return (
    <div className="full-page">
      <TopBar
        onCompile={() => compile(code)}
        loading={loading}
        setCode={setCode}
        setErrors={setErrors}
        setSymbols={setSymbols}
        setAstImage={setAstImage}
      />

      <div className="center-panel-section">
        <div className="editor-container">
          <CodeEditor errors={errors} code={code} onChange={setCode} />
        </div>
        <div className="right-panel-container">
          <RightPanel astImage={astImage} symbols={symbols} loading={loading} />
        </div>
      </div>

      <Console errors={errors} loading={loading} />
    </div>
  );
};


export default Home;

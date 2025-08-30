import React, { useState, useEffect} from "react";
import ASTView from "./ASTView";
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";

const RightPanel: React.FC = () => {
  const [astText, setAstText] = useState("");

  useEffect(() => {
    fetch("/ast.txt")
      .then((res) => res.text())
      .then((text) => setAstText(text))
      .catch((err) => console.error("Error leyendo AST:", err));
  }, []);

  return (
    <div className="right">
      

      <Tabs
        tabs={[
          { label: "AST", content: <ASTView astText={astText} /> },
          { label: "Tabla de símbolos", content: <SymbolTable /> },
        ]}
      />
    </div>
  );
};

export default RightPanel;

import React from "react";
import ASTView from "./ASTView";
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";

const RightPanel: React.FC = () => {
  return (
    <div>
      <Tabs
        tabs={[
          { label: "AST", content: <ASTView /> },
          { label: "Tabla de símbolos", content: <SymbolTable /> }
        ]}
      />
    </div>
  );
};

export default RightPanel;

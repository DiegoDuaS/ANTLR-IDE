import React, { useState } from "react";
import ASTView from "./ASTView"; // el componente de imagen con zoom
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";
import astImage from './ast_tree.png';

const RightPanel: React.FC = () => {

  return (
    <div className="right">
      <Tabs
        tabs={[
          { label: "AST", content: <ASTView src={astImage} /> },
          { label: "Tabla de símbolos", content: <SymbolTable /> },
        ]}
      />
    </div>
  );
};

export default RightPanel;

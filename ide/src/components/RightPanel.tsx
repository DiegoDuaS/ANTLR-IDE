import React, { useState } from "react";
import ASTView from "./ASTView"; // el componente de imagen con zoom
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";
import astImage from './ast_tree.png';
import { Symbol } from "../helpers/types";



interface Props {
  symbols: Symbol[];
}

const RightPanel: React.FC<Props> = ({ symbols }) => {
  

  return (
    <div className="right">
      <Tabs
        tabs={[
          { label: "AST", content: <ASTView src={astImage} /> },
          { label: "Tabla de símbolos", content: <SymbolTable symbols={symbols} /> },
        ]}
      />
    </div>
  );
};

export default RightPanel;

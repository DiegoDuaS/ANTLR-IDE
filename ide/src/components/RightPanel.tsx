import React, { useState } from "react";
import ASTView from "./ASTView"; // el componente de imagen con zoom
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";
import { Symbol } from "../helpers/types";



interface Props {
  symbols: Symbol[];
  astImage: string | null;
}

const RightPanel: React.FC<Props> = ({ astImage, symbols }) => {
  

  return (
    <div className="right">
      <Tabs
        tabs={[
          { label: "AST", content: <ASTView src={astImage ?? "./ast_tree.png"} /> },
          { label: "Tabla de símbolos", content: <SymbolTable symbols={symbols} /> },
        ]}
      />
    </div>
  );
};

export default RightPanel;

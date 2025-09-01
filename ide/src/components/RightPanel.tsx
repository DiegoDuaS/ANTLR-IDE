import React, { useState } from "react";
import ASTView from "./ASTView"; // el componente de imagen con zoom
import SymbolTable from "./SymbolTable";
import Tabs from "./Tabs";
import "./components.css";
import { Symbol } from "../helpers/types";



interface Props {
  symbols: Symbol[];
  astImage: string | null;
  loading: boolean;
}

const RightPanel: React.FC<Props> = ({ astImage, symbols, loading}) => {
  

  return (
    <div className="right">
      <Tabs
        tabs={[
          { label: "AST", content: <ASTView src={astImage ?? ""} loading={loading} /> },
          { label: "Tabla de símbolos", content: <SymbolTable symbols={symbols} loading={loading} /> },
        ]}
      />
    </div>
  );
};

export default RightPanel;

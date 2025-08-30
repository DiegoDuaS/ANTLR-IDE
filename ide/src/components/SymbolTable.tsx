import React from "react";
import "./components.css";
import { Symbol } from "../helpers/types";

interface Props {
  symbols: Symbol[];
}

const SymbolTable: React.FC<Props> = ({ symbols }) => {
  return (
    <div className="symbol-table">
      <table className="table" border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Clase</th>
            <th>Línea</th>
            <th>Columna</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((sym, idx) => (
            <tr key={idx}>
              <td>{sym.name}</td>
              <td>{sym.type}</td>
              <td>{sym.kind}</td>
              <td>{sym.line}</td>
              <td>{sym.column}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SymbolTable;

import React from "react";
import "./components.css";
import { Symbol } from "../helpers/types";

interface Props {
  symbols: Symbol[];
  loading: boolean;
}

const SymbolTable: React.FC<Props> = ({ symbols, loading }) => {
  if (loading) {
    return <div className="symbol-table">Cargando símbolos...</div>;
  }

  if (!symbols || symbols.length === 0) {
    return <div className="symbol-table">No hay símbolos para mostrar.</div>;
  }

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
            <th>Offset</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {symbols.map((sym, idx) => (
            <tr key={idx}>
              <td>{sym.name}</td>
              <td>{sym.type ? sym.type : "N/A"}</td>
              <td>{sym.kind}</td>
              <td>{sym.line}</td>
              <td>{sym.column}</td>
              <td>{sym.offset ? sym.type : "N/A"}</td>
              <td>{sym.size ? sym.type : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SymbolTable;

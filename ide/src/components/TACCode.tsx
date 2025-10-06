import React from "react";
import "./components.css";

interface Props {
  TAC: string[];
  loading: boolean;
}

const TACCode: React.FC<Props> = ({ TAC, loading }) => {
  if (loading) {
    return <div className="symbol-table">Cargando TAC...</div>;
  }

  if (!TAC || TAC.length === 0) {
    return <div className="symbol-table">No hay TAC para mostrar.</div>;
  }

  return (
    <div className="symbol-table">
      <h3>Three Address Code (TAC)</h3>
      <div className="tac-list" >
        {TAC.map((instr, index) => (
            <div key={index}>
            <span>{index}: </span>
            <span>{instr}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TACCode;

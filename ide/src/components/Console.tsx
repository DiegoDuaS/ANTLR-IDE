import React from "react";
import "./components.css";
import { SemanticError } from "../helpers/types";

interface ConsoleProps {
  errors: SemanticError[];
  loading: boolean;
}

const Console: React.FC<ConsoleProps> = ({ errors, loading }) => {
  return (
    <div className="console">
      <p>FM.D POWERSHELL</p>
      <p>
        C:\Users\FMD <span className="cursor">{">"} {loading && "compilando ..."}</span>
      </p>

      {errors.length === 0 ? (
        <p>No se encontraron errores 🎉</p>
      ) : loading ? (
        <p></p>
      ) : (
        errors.map((err, idx) => (
          <p key={idx}>
            [ERROR SEMÁNTICO] {err.mensaje} (línea {err.linea}, columna {err.columna})
          </p>
        ))
      )}
    </div>
  );
};

export default Console;

import React from "react";
import "./components.css";
import { SemanticError } from "../helpers/types";

interface ConsoleProps {
  errors: SemanticError[];
}

const Console: React.FC<ConsoleProps> = ({ errors }) => {
  return (
    <div className="console">
      <p>FM.D POWERSHELL</p>
      <p>
        C:\Users\FMD <span className="cursor">{">"}</span>
      </p>

      {errors.length === 0 ? (
        <p>No se encontraron errores 🎉</p>
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

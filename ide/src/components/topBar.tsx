import React from "react";
import "./components.css"

const TopBar: React.FC = () => {
  return (
    <div>
      <button className="section-button">Compilar</button>
      <button className="section-button">Limpiar</button>
    </div>
  );
};

export default TopBar;

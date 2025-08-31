import React from "react";
import { TbCircleLetterCFilled } from "react-icons/tb";
import "./components.css"

interface TopBarProps {
  onCompile: () => void;
  loading: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ onCompile, loading }) => {

  return (
    <header>
      <div className="header-section-main">
        <TbCircleLetterCFilled size={34}/>
        <h2> IDE - Compiladores</h2>
      </div>
      <div className="header-section">
        <button 
          className="section-button" 
          onClick={() => {
            onCompile();
          }}
          disabled={loading}
        >
          {loading ? "Compilando..." : "Compilar"}
        </button>
        <button className="section-button">Limpiar</button>
      </div>
      <div className="header-section">
        <p className="names">Fabiola Contreras</p>
        <p className="names">Diego Duarte</p>
        <p className="names">María Jose Villafuerte</p>
      </div>
      
    </header>
  );
};

export default TopBar;


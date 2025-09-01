import React from "react";
import { TbCircleLetterCFilled } from "react-icons/tb";
import "./components.css"
import { SemanticError } from "../helpers/types";
import { Symbol as CompSymbol } from "../helpers/types";

interface TopBarProps {
  onCompile: () => void;
  loading: boolean;
  setCode: (value: string) => void;
  setErrors: (value: SemanticError[]) => void;
  setSymbols: (value: CompSymbol[]) => void;
  setAstImage: (value: string | null) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onCompile, loading, setCode, setErrors, setSymbols, setAstImage}) => {

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
        <button
          className="section-button"
          onClick={() => {
            setErrors([]);
            setSymbols([]);
            setAstImage(null);
          }}
        >
          Limpiar
        </button>
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


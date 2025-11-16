import React from "react";
import "./components.css";
import { FaDownload } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa";

interface Props {
  loading: boolean;
}

const MIPSCode: React.FC<Props> = ({ loading }) => {

  const downloadASM = async () => {
    try {
      const response = await fetch("http://localhost:8080/download/mips");

      if (!response.ok) {
        alert("El archivo MIPS aún no está listo o no existe.");
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "program.asm";
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Error descargando el archivo MIPS.");
    }
  };

  if (loading) {
    return <div className="symbol-table">Generando código MIPS...</div>;
  }

  return (
    <div className="symbol-table">
      <h3>MIPS</h3>
      <div className="file-name">
        <FaRegFileCode size={80} />
        <p>program.asm</p>
      </div>

      <button className="download-button" onClick={downloadASM}>
        <FaDownload /> DESCARGAR
      </button>
    </div>
  );
};

export default MIPSCode;

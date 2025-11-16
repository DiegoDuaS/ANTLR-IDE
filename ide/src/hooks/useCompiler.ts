// hooks/useCompiler.ts
import { useState } from "react";
import { SemanticError } from "../helpers/types";
import { Symbol } from "../helpers/types";

type CompileResult = {
  errors: SemanticError[];
  symbols: Symbol[];
  astImage?: string;
  tac: string[];
};

export function useCompiler() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<SemanticError[]>([]);
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [astImage, setAstImage] = useState<string | null>(null);
  const [TAC, setTAC] = useState<string[]>([]);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const compile = async (code: string) => {
    setLoading(true);
    setConnectionError(null);

    try {
      const response = await fetch("http://localhost:8080/compilar-mips", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: code }),
      });

      const data: CompileResult = await response.json();

      setErrors(data.errors ?? []);
      setSymbols(data.symbols ?? []);
      setTAC(data.tac ?? []);
      if (data.astImage) {
        setAstImage(`data:image/png;base64,${data.astImage}`);
      } else {
        setAstImage(null);
      }
    } catch (err) {
      console.error("Error compilando:", err);
      setConnectionError("No se pudo conectar al compilador.");
      setErrors([]);
      setSymbols([]);
      setAstImage(null);
    } finally {
      setLoading(false);
    }
  };

  // Exponemos también los setters para limpiar desde otro componente
  return {
    compile,
    loading,
    errors,
    symbols,
    astImage,
    TAC,
    connectionError,
    setErrors,
    setSymbols,
    setAstImage,
  };
}


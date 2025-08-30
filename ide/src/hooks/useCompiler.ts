// hooks/useCompiler.ts
import { useState } from "react";
import { SemanticError } from "../helpers/types";
import { Symbol } from "../helpers/types";

type CompileResult = {
  errors: SemanticError[];
  symbols: Symbol[];
  astImage?: string;
};

export function useCompiler() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<SemanticError[]>([]);
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const [astImage, setAstImage] = useState<string | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);

  const compile = async (code: string) => {
    setLoading(true);
    setConnectionError(null); // limpiamos errores de red
    try {
      const response = await fetch("http://localhost:5000/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data: CompileResult = await response.json();

      setErrors(data.errors ?? []);
      setSymbols(data.symbols ?? []);
      setAstImage(data.astImage ?? null);
    } catch (err) {
      console.error("Error compilando:", err);
      setConnectionError("No se pudo conectar al compilador.");
      setErrors([]); // aquí vaciamos errores semánticos, para que no se mezclen
      setSymbols([]);
      setAstImage(null);
    } finally {
      setLoading(false);
    }
  };

  return { compile, loading, errors, symbols, astImage, connectionError };
}

export type SemanticError = {
  mensaje: string;
  linea: number;
  columna: number;
};

export interface ASTViewProps {
  src: string; 
  loading: boolean;
}

export type Symbol = {
  // Información básica
  name: string;
  kind: "VARIABLE" | "CONSTANT" | "FUNCTION" | "CLASS";
  type: string | null;      // tipo de dato o null si no aplica
  line: number;
  column: number;
  offset: number;
  size: number;

  // Información de funciones
  parameters?: Symbol[];    // parámetros de la función
  nested?: boolean;         // si la función es anidada
  capturedVariables?: string[]; // variables capturadas (closures)

  // Información de clases
  members?: Symbol[];       // funciones y variables dentro de la clase
  superClass?: string | null;   // nombre de la superclase, si existe

  // Información de ámbito
  scopeId?: number;         // id del scope donde se encuentra
  enclosingFunctionName?: string; // función que la contiene si está anidada
};

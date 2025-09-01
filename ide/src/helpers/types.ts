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
  name: string;
  kind: string;
  type: string;
  line: number;
  column: number;
};
import React, { useEffect, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";

type SemanticError = {
  mensaje: string;
  linea: number;
  columna: number;
};

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  errors: SemanticError[];
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, errors }) => {
  const monacoRef = useRef<any>(null);
  const editorRef = useRef<any>(null);

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  // Cada vez que cambien los errores -> pintar decoraciones
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;
    const monaco = monacoRef.current;

    const decorations = errors.map((err) => ({
      range: new monaco.Range(err.linea, err.columna, err.linea, err.columna + 1),
      options: {
        inlineClassName: "error-highlight",
        hoverMessage: { value: `**Error**: ${err.mensaje}` }
      }
    }));

    editorRef.current.deltaDecorations([], decorations);
  }, [errors]);

  return (
    <div style={{ height: "100%", border: "1px solid #ccc" }}>
      <Editor
        height="100%"
        language="personal"
        value={code}
        theme="vs-dark"
        onMount={handleEditorMount}
        onChange={(value) => onChange(value || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true
        }}
      />
    </div>
  );
};

export default CodeEditor;

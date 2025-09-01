import React, { useEffect, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { SemanticError } from "../helpers/types";
import "./components.css";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  errors: SemanticError[];
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, errors }) => {
  const monacoRef = useRef<any>(null);
  const editorRef = useRef<any>(null);
  const decorationsRef = useRef<string[]>([]); // <- Guardar decoraciones previas

  const handleEditorMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;
    const monaco = monacoRef.current;

    const newDecorations = errors.map((err) => ({
      range: new monaco.Range(err.linea, err.columna, err.linea, err.columna + 5),
      options: {
        inlineClassName: "error-highlight",
        hoverMessage: { value: `**Error**: ${err.mensaje}` },
      },
    }));

    // Actualiza decoraciones guardando el ID
    decorationsRef.current = editorRef.current.deltaDecorations(
      decorationsRef.current,
      newDecorations
    );
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
          automaticLayout: true,
        }}
      />
      <style>
        {`
          .error-highlight {
            background-color: rgba(255, 0, 0, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default CodeEditor;

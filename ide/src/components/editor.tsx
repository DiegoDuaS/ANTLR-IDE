import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor: React.FC = () => {
  return (
    <div style={{ height: "100%", border: "1px solid #ccc" }}>
      <Editor
        height="100%"
        defaultLanguage={undefined}
        defaultValue=""
        theme="vs-dark"
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
import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";

interface ASTNode {
  name: string;
  children?: ASTNode[];
}

// Función simple para parsear tu AST textual a un objeto jerárquico
function parseAST(astText: string): ASTNode {
  const tokens = astText.match(/\(|\)|[^\s()]+/g) || [];
  let index = 0;

  function parseNode(): ASTNode {
    const node: ASTNode = { name: tokens[index++] };
    node.children = [];
    while (tokens[index] && tokens[index] !== ")") {
      if (tokens[index] === "(") {
        index++;
        node.children.push(parseNode());
      } else {
        node.children.push({ name: tokens[index++] });
      }
    }
    index++; // saltar ")"
    if (node.children.length === 0) delete node.children;
    return node;
  }

  return parseNode();
}

interface ASTViewProps {
  astText: string;
}

const ASTView: React.FC<ASTViewProps> = ({ astText }) => {
  const [treeData, setTreeData] = useState<ASTNode | null>(null);

  useEffect(() => {
    if (astText) {
      const parsed = parseAST(astText);
      setTreeData(parsed);
    }
  }, [astText]);

  return (
    <div style={{ width: "100%", height: "800px", backgroundColor: "white" }}>
      {treeData && <Tree data={treeData} orientation="vertical" />}
    </div>
  );
};

export default ASTView;

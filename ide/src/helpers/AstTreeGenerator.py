import re
from graphviz import Digraph

# ---------------------------
# 1. Clase y parser
# ---------------------------
class Node:
    def __init__(self, name):
        self.name = name
        self.children = []

def parse_sexpr(text: str) -> Node:
    tokens = re.findall(r'\(|\)|[^\s()]+', text)
    index = 0

    def parse_node():
        nonlocal index
        if tokens[index] == "(":
            index += 1
            name = tokens[index]
            index += 1
            node = Node(name)
            while tokens[index] != ")":
                node.children.append(parse_node())
            index += 1
            return node
        else:
            name = tokens[index]
            index += 1
            return Node(name)

    return parse_node()

# ---------------------------
# 2. Construir y dibujar con Graphviz
# ---------------------------
def build_graphviz(node, dot=None):
    if dot is None:
        dot = Digraph(comment='AST', format='png')
        dot.attr(rankdir='TB')  # top to bottom
        dot.attr(splines='ortho')  # líneas rectas
        dot.attr(nodesep='0.5')   # separación horizontal
        dot.attr(ranksep='1.0')   # separación vertical

    dot.node(node.name, node.name)

    for child in node.children:
        dot.edge(node.name, child.name)
        build_graphviz(child, dot)

    return dot

# ---------------------------
# 3. Ejecutar
# ---------------------------
if __name__ == "__main__":
    with open("ast.txt", "r", encoding="utf-8") as f:
        text = f.read()
    root = parse_sexpr(text)

    dot = build_graphviz(root)
    dot.render('ast_tree', cleanup=True)  # crea ast_tree.png automáticamente

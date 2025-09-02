# ANTLR-IDE

Este proyecto es un IDE web desarrollado en React con TypeScript para compilar, analizar y visualizar código personalizado. Permite al usuario escribir código, detectar errores semánticos, ver la Tabla de Símbolos y explorar el AST generado con funcionalidades de zoom y paneo.

<img width="1867" height="946" alt="image" src="https://github.com/user-attachments/assets/31d40c79-8f6d-4e53-aaf6-a06d4bd47e34" />

## Características principales

- Editor de código
  - Basado en Monaco Editor.
  - Resalta errores semánticos en línea.
  - Actualización en tiempo real de errores.

- Compilación y análisis
  - Invoca un compilador interno mediante un endpoint REST (POST /compilar).
  - Genera errores semánticos, tabla de símbolos y AST.
  - Los errores se muestran en una consola estilo Powershell, indicando línea y columna.

- Panel derecho
  - Visualización del AST con soporte de zoom y paneo.
  - Tabla de símbolos con información de variables, funciones y tipos.

- Interfaz amigable
  - Barra superior para compilar código, limpiar resultados y mostrar autores.
  - Sistema de pestañas para alternar entre AST y tabla de símbolos.
  - Feedback visual durante la compilación.

## Estructura del proyecto

```
src/
├─ pages/
│  └─ Home.tsx            # Página principal del IDE
├─ components/            # Componentes UI
│  ├─ CodeEditor.tsx      # Editor de código con resaltado de errores
│  ├─ Console.tsx         # Consola estilo Powershell
│  ├─ RightPanel.tsx      # Panel derecho con Tabs (AST + Tabla de símbolos)
│  ├─ ASTView.tsx         # Componente de visualización del AST con zoom
│  ├─ SymbolTable.tsx     # Tabla de símbolos
│  ├─ Tabs.tsx            # Componente de pestañas
│  ├─ TopBar.tsx          # Barra superior con botones de acción
│  └─ components.css      # Estilos compartidos para componentes
├─ hooks/
│  └─ useCompiler.ts      # Hook para manejar compilación, errores, símbolos y AST
├─ helpers/
│  └─ types.ts            # Tipos TypeScript: SemanticError, Symbol, ASTViewProps, etc.
└─ home.css               # Estilos de la página principal
```

## Uso
1. Instalar dependencias:
```
npm install
```

2. Ejecutar en modo desarrollo:

```
npm run start
```

3. Abrir en el navegador:

http://localhost:3000 

## Flujo de compilación

1. Escribir código en el editor.
2. Presionar Compilar en la barra superior.
3. useCompiler envía el código al endpoint POST /compilar.
4. Se reciben:
  - Errores semánticos → resaltados en el editor y listados en la consola.
  - Tabla de símbolos → mostrada en el panel derecho.
  - AST (imagen) → mostrada en el panel derecho con zoom y paneo.
5. Opcionalmente, presionar Limpiar para reiniciar editor, errores, símbolos y AST.

## Contribuidores

[Fabiola Contreras](https://github.com/Fabiola-cc)
[Diego Duarte](https://github.com/DiegoDuaS)
[María José Villafuerte](https://github.com/Maria-Villafuerte)

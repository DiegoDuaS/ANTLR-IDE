import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ASTViewProps } from "../helpers/types";

const ASTView: React.FC<ASTViewProps> = ({ src }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        border: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={5}
        wheel={{ step: 0.1 }}
        doubleClick={{ disabled: true }}
        centerOnInit={true} // centra al inicio
      >
        <TransformComponent
          wrapperStyle={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          contentStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={src}
            alt="AST"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ASTView;

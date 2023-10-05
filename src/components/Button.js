import React from "react";

export function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button style={{ backgroundColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}

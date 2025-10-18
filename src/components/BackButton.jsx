import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        border: "none",
        backgroundColor: "#007bff",
        color: "white",
        cursor: "pointer",
        marginBottom: "20px"
      }}
    >
      ← Voltar
    </button>
  );
};

export default BackButton;

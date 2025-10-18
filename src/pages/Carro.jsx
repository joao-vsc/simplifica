import React from "react";
import BackButton from "../components/BackButton";

function Carro() {
  return (
    <div className="page">
      <BackButton />
      <h2>Informações sobre Carro</h2>
      <p>Aqui poderás colocar detalhes sobre documentação, inspeções, seguros, etc.</p>
    </div>
  );
}

export default Carro;

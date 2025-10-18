import React from "react";
import './App.css';

import InfoCard from "./components/InfoCard";

import carroIcon from "../public/icons/car.svg";
import saudeIcon from "../public/icons/health.svg";
import impostosIcon from "../public/icons/taxes.svg";
import financasIcon from "../public/icons/finances.svg";
import educacaoIcon from "../public/icons/transportation.svg";


function App() {
  const infoItems = [
    { icon: carroIcon, title: "Carro" },
    { icon: saudeIcon, title: "Saúde" },
    { icon: impostosIcon, title: "Impostos" },
    { icon: financasIcon, title: "Finanças" },
    { icon: educacaoIcon, title: "Transportes" },
  ];

  return (
    <div className="app">
      <h1>Simplifica</h1>
      <h2>A plataforma que tem a informação que precisas!</h2>
      <div className="info-grid">
        {infoItems.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import InfoCard from "./components/InfoCard";

import Carro from "./pages/Carro";
import Saude from "./pages/Saude";
import Impostos from "./pages/Impostos";
import Financas from "./pages/Financas";
import Transportes from "./pages/Transportes";

import carroIcon from "../public/icons/car.svg";
import saudeIcon from "../public/icons/health.svg";
import impostosIcon from "../public/icons/taxes.svg";
import financasIcon from "../public/icons/finances.svg";
import transporteIcon from "../public/icons/transportation.svg";


function App() {
  const infoItems = [
    { icon: carroIcon, title: "Carro", path: "/carro" },
    { icon: saudeIcon, title: "Saúde", path: "/saude" },
    { icon: impostosIcon, title: "Impostos", path: "/impostos" },
    { icon: financasIcon, title: "Finanças", path: "/financas" },
    { icon: transporteIcon, title: "Transportes", path: "/transportes" },
  ];
 return (
    <div className="app">
       <h1>Simplifica</h1>
      <h2>A plataforma que tem a informação que precisas!</h2>

      <Routes>
        <Route
          path="/"
          element={
            <div className="info-grid">
              {infoItems.map((item, index) => (
                <Link to={item.path} key={index} style={{ textDecoration: "none", color: "inherit" }}>
                  <InfoCard icon={item.icon} title={item.title} />
                </Link>
              ))}
            </div>
          }
        />

        <Route path="/carro" element={<Carro />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/impostos" element={<Impostos />} />
        <Route path="/financas" element={<Financas />} />
        <Route path="/transportes" element={<Transportes />} />
      </Routes>
    </div>
  );
}

export default App;

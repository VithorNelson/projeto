import React from "react";
import "./App.css";
import r from "../src/r.png";
import d from "../src/d.png";
import t from "../src/t.png";

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <img src={r} alt="Logo do Homem-Aranha" className="logo" />
        <h1>Homem-Aranha</h1>
        <nav>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">História</a></li>
            <li><a href="#">Galeria</a></li>
          </ul>
        </nav>
        <div className="icons">
          <img src={d} alt="Ícone de usuário" className="icon" />
          <img src={t} alt="Ícone de ajuda" className="icon" />
        </div>
      </header>

      <main className="content">
        <h2>O Herói Amigão da Vizinhança</h2>
        <p>O Homem-Aranha é um dos heróis mais icônicos da Marvel, conhecido por sua inteligência e responsabilidade.</p>
        
        {/* Imagens maiores e centralizadas */}
        <div className="image-container">
          <img src={r} alt="Imagem 1" className="large-image" />
          <img src={d} alt="Imagem 2" className="large-image" />
          <img src={t} alt="Imagem 3" className="large-image" />
        </div>
      </main>
    </div>
  );
}

export default App;

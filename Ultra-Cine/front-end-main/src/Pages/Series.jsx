import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import BannerRound6 from "../assets/bannround6.png";
import PosterRound6 from "../assets/squid-game.jpeg";
import Stranger3 from "../assets/stranger3.jpg";
import Stranger2 from "../assets/strangerthingsphoto2.jpg";
import Filme3 from "../assets/filme3.jpeg";
import Filme4 from "../assets/filme4.jpeg";
import Filme5 from "../assets/filme5.jpg";
import Filme6 from "../assets/filme6.jpeg";

export default function Series() {
  const series1 = [Stranger3, Stranger2, Filme3, Filme4, Filme5, Filme6];
  const series2 = [Filme4, Filme5, Filme6, Stranger3, Stranger2, Filme3];

  return (
    <>

      <section className="destaque">
        <div className="destaque-bg">
          <img src={BannerRound6} alt="Round 6" className="fundo" />
        </div>
        <div className="destaque-conteudo">
          <div className="poster">
            <img src={PosterRound6} alt="Poster Round 6" />
          </div>
          <div className="info">
            <h2>Round 6</h2>
            <p>
              Centenas de jogadores falidos aceitam um estranho convite para um
              jogo de sobrevivência...
            </p>
            <span>Ação | Drama | Mistério</span>
            <br />
            <button className="btn-assistir">▶ Assistir</button>
          </div>
        </div>
      </section>

      <section className="series">
        <h2>Séries</h2>
        <Carousel items={series1} />
      </section>

      <section className="series">
        <Carousel items={series2} />
      </section>
    </>
  );
}

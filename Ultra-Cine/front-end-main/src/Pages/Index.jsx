import React, { useEffect } from "react";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/entremnbanner.jpg";
import banner3 from "../assets/alicebanner.jpg";
import banner4 from "../assets/Ragnarok.jpeg";
import banner5 from "../assets/operaçãoving.jpg";
import AlicePoster from "../assets/AlicePoster.jpg";
import Harry3 from "../assets/harrypotter3.jpg";
import JohnWick3 from "../assets/johnwick3.jpeg";
import EntreMontanhas from "../assets/entremontnhas.jpeg";
import Harry6 from "../assets/harrypotter6.jpg";
import Harry4 from "../assets/harrypotter4.jpg";
import Filme4 from "../assets/filme4.jpeg";
import Harry5 from "../assets/harry5.jpg";
import JohnWick4 from "../assets/johnwick4.jpeg";

import Stranger3 from "../assets/stranger3.jpg";
import Stranger2 from "../assets/strangerthingsphoto2.jpg";
import Filme3 from "../assets/filme3.jpeg";
import Filme5 from "../assets/filme5.jpg";
import Filme6 from "../assets/filme6.jpeg";

import Terror1 from "../assets/filme7.jpeg";
import Terror2 from "../assets/filme2.jpg";

export default function Index() {
    useEffect(() => {
        // Carrossel principal
        let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
                dots[i].classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        const interval = setInterval(nextSlide, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Scroll nos filmes
        const scrollContainer = document.getElementById("filmes-scroll");
        const btnEsquerda = document.querySelector(".seta.esquerda");
        const btnDireita = document.querySelector(".seta.direita");

        if (btnEsquerda && btnDireita && scrollContainer) {
            btnEsquerda.addEventListener("click", () => {
                scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
            });

            btnDireita.addEventListener("click", () => {
                scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
            });
        }
    }, []);

    return (
        <>
            {/* CARROSSEL */}
            <section className="carousel">
                <div className="slide active">
                    <img src={banner1} alt="Banner 1" />
                    <div className="overlay"></div>
                    <div className="slide-info">
                        <h2>DESTAQUE ULTRACINE WEB</h2>
                        <h1>
                            FEAR STREET
                            <br />
                            PART ONE
                            <br />
                            <span>1994</span>
                        </h1>
                        <p>
                            Depois de uma série de assassinatos brutais, um grupo de
                            adolescentes enfrenta uma força maligna que aterroriza a cidade há
                            séculos.
                        </p>
                        <button className="play-button">▶</button>
                    </div>
                </div>

                <div className="slide">
                    <img src={banner2} alt="Banner 2" />
                    <div className="overlay"></div>
                    <div className="slide-info">
                        <h2>LANÇAMENTO DA SEMANA</h2>
                        <h1>
                            ENTRE MONTANHAS<br />
                            <span>2025</span>
                        </h1>
                        <p>
                            Um desfiladeiro separa dois agentes e um mundo super secreto e
                            aparentemente demoníaco.
                        </p>
                        <button className="play-button">▶</button>
                    </div>
                </div>

                <div className="slide">
                    <img src={banner3} alt="Banner 3" />
                    <div className="overlay"></div>
                    <div className="slide-info">
                        <h2>CLÁSSICO</h2>
                        <h1>
                            ALICE NO PAIS DAS MARAVILHAS<br />
                            <span>2010</span>
                        </h1>
                        <p>
                            A busca de Alice pelo Coelho Branco e sua constante mudança de
                            tamanho refletem a jornada da própria identidade.
                        </p>
                        <button className="play-button">▶</button>
                    </div>
                </div>

                <div className="slide">
                    <img src={banner4} alt="Banner 4" />
                    <div className="overlay"></div>
                    <div className="slide-info">
                        <h2>Mistério</h2>
                        <h1>
                            RAGNAROK<br />
                            <span>2020</span>
                        </h1>
                        <p>
                            Edda, assolada por mudanças climáticas e poluição industrial, onde
                            um jovem chamado Magne descobre ser a reencarnação do deus Thor.
                        </p>
                        <button className="play-button">▶</button>
                    </div>
                </div>

                <div className="slide">
                    <img src={banner5} alt="Banner 5" />
                    <div className="overlay"></div>
                    <div className="slide-info">
                        <h2>Lançamento</h2>
                        <h1>
                            OPERAÇÂO VINGANÇA<br />
                            <span>2025</span>
                        </h1>
                        <p>Nulo</p>
                        <button className="play-button">▶</button>
                    </div>
                </div>

                <div className="indicators">
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </section>

            {/* FILMES */}
            <section className="filmes">
                <h2>Filmes</h2>
                <div className="carousel-wrapper">
                    <button className="seta esquerda">&#10094;</button>
                    <div className="filmes-lista" id="filmes-scroll">
                        {[AlicePoster, Harry3, JohnWick3, EntreMontanhas, Harry6, Harry4, Filme4, Harry5, JohnWick4].map(
                            (img, i) => (
                                <a key={i} href="#">
                                    <img src={img} alt={`Filme ${i}`} />
                                </a>
                            )
                        )}
                    </div>
                    <button className="seta direita">&#10095;</button>
                </div>
            </section>

            {/* SÉRIES */}
            <section className="series">
                <h2>Séries</h2>
                <div className="carousel-wrapper">
                    <button className="seta esquerda">&#10094;</button>
                    <div className="filmes-lista" id="filmes-scroll">
                        {[Stranger3, Stranger2, Filme3, Filme4, Filme5, Filme6].map((img, i) => (
                            <a key={i} href="#">
                                <img src={img} alt={`Série ${i}`} />
                            </a>
                        ))}
                    </div>
                    <button className="seta direita">&#10095;</button>
                </div>
            </section>

            {/* TERROR */}
            <section className="terror">
                <h2>Terror</h2>
                <div className="carousel-wrapper">
                    <button className="seta esquerda">&#10094;</button>
                    <div className="filmes-lista" id="filmes-scroll">
                        {[Terror1, Terror2, Filme3, Filme4, Filme5, Filme6].map((img, i) => (
                            <a key={i} href="#">
                                <img src={img} alt={`Terror ${i}`} />
                            </a>
                        ))}
                    </div>
                    <button className="seta direita">&#10095;</button>
                </div>
            </section>
        </>
    );
}

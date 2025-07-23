import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Banner1 from "../assets/banner.jpg";
import Banner2 from "../assets/entremnbanner.jpg";
import Banner3 from "../assets/alicebanner.jpg";
import Banner4 from "../assets/Ragnarok.jpeg";
import Banner5 from "../assets/operaçãoving.jpg";
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

export default function Home() {
    const filmes = [
        AlicePoster,
        Harry3,
        JohnWick3,
        EntreMontanhas,
        Harry6,
        Harry4,
        Filme4,
        Harry5,
        JohnWick4,
    ];

    const series = [Stranger3, Stranger2, Filme3, Filme4, Filme5, Filme6];

    useEffect(() => {
        let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");

        function showSlide(index) {
            slides.forEach((slide, i) =>
                slide.classList.toggle("active", i === index)
            );
            dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        }

        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 4000);
    }, []);

    return (
        <>
            <Navbar />

            <main>
                <section className="carousel">
                    {[Banner1, Banner2, Banner3, Banner4, Banner5].map((banner, i) => (
                        <div className={`slide ${i === 0 ? "active" : ""}`} key={i}>
                            <img src={banner} alt={`Banner ${i + 1}`} />
                            <div className="overlay"></div>
                        </div>
                    ))}
                    <div className="indicators">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </section>
            </main>

            <section className="filmes">
                <h2>Filmes</h2>
                <Carousel items={filmes} />
            </section>

            <section className="series">
                <h2>Séries</h2>
                <Carousel items={series} />
            </section>
        </>
    );
}

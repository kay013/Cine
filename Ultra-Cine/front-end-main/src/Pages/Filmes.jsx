import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import AlicePoster from "../assets/AlicePoster.jpg";
import Harry3 from "../assets/harrypotter3.jpg";
import JohnWick3 from "../assets/johnwick3.jpeg";
import EntreMontanhas from "../assets/entremontnhas.jpeg";
import Harry6 from "../assets/harrypotter6.jpg";
import Harry4 from "../assets/harrypotter4.jpg";
import Filme4 from "../assets/filme4.jpeg";
import Harry5 from "../assets/harry5.jpg";
import JohnWick4 from "../assets/johnwick4.jpeg";
import destaqueBg from "../assets/alicebanner.jpg";

export default function Filmes() {
    const filmes1 = [
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

    const filmes2 = [
        EntreMontanhas,
        Harry6,
        Harry4,
        Filme4,
        Harry5,
        JohnWick4,
        AlicePoster,
        Harry3,
        JohnWick3,
    ];

    return (
        <>

            <section className="destaque">
                <div className="destaque-bg">
                    <img src={destaqueBg} alt="Alice destaque" className="fundo" />
                </div>
                <div className="destaque-conteudo">
                    <div className="poster">
                        <img src={AlicePoster} alt="Poster Alice" />
                    </div>
                    <div className="info">
                        <h2>Alice</h2>
                        <p>
                            A busca de Alice pelo Coelho Branco e sua constante mudança de
                            tamanho refletem a jornada da própria identidade em um mundo em
                            constante transformação.
                        </p>
                        <span>Ação | Mistério</span>
                        <br />
                        <button className="btn-assistir">▶ Assistir</button>
                    </div>
                </div>
            </section>

            <section className="filmes">
                <h2>Filmes</h2>
                <Carousel items={filmes1} />
            </section>

            <section className="filmes">
                <Carousel items={filmes2} />
            </section>
        </>
    );
}

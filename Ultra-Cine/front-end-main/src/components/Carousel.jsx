import React, { useEffect, useRef } from "react";

export default function Carousel({ items }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const btnLeft = container.parentElement.querySelector(".seta.esquerda");
    const btnRight = container.parentElement.querySelector(".seta.direita");

    btnLeft.addEventListener("click", () => {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    });
  }, []);

  return (
    <div className="carousel-wrapper">
      <button className="seta esquerda">&#10094;</button>
      <div className="filmes-lista" ref={scrollRef}>
        {items.map((img, i) => (
          <a key={i} href="#">
            <img src={img} alt={`Item ${i}`} />
          </a>
        ))}
      </div>
      <button className="seta direita">&#10095;</button>
    </div>
  );
}

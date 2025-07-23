import logo from "../assets/logo2.png";

export default function Navbar() {
    return (
        <header className="navbar">
            <img src={logo} alt="Logo Ultra Vision" className="logo" />
            <button className="home-button">
                <i className="fi fi-rr-list"></i>
            </button>

            <nav className="nav-links">
                <a href="/">Início</a>
                <a href="/filmes">Filmes</a>
                <a href="/series">Séries</a>
                <div className="dropdown">
                    <button className="dropbtn">Mais Opções ▾</button>
                    <div className="dropdown-content">
                            <a href="#">Ação</a>
                            <a href="#">Terror</a>
                            <a href="#">Crime</a>
                            <a href="#">Fantasia</a>
                            <a href="#">Mistério</a>
                            <a href="#">Ficção científica</a>
                    </div>
                </div>
            </nav>

            <div className="nav-right">
                <input type="text" placeholder="Procurar..." className="search-bar" />
                <a href="/inter">
                    <button className="assine-btn">Assine</button>
                </a>
                <div className="user-profile">👤</div>
            </div>
        </header>
    );
}

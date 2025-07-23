import React, { useState } from "react";

export default function Inter() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !email || !senha || !confirmSenha) {
            alert("Por favor, preencha todos os campos");
            return;
        }
        window.location.href = "/"; // redireciona para home
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Assine agora</h1>
                <p>Assine agora e aproveite os melhores filmes e séries do momento.</p>
                <br />
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmSenha}
                    onChange={(e) => setConfirmSenha(e.target.value)}
                />
                <br />
                <button type="submit" className="assine-btn">
                    Entrar
                </button>
                <br />
                <p>
                    Ao assinar, você concorda com os <a href="#">Termos de Uso</a> e a{" "}
                    <a href="#">Política de Privacidade</a>.
                </p>
                <br />
                <p>
                    Já tem uma conta? <a href="/login">Entrar</a>
                </p>
                <p>
                    Esqueceu sua senha? <a href="/register">Recuperar senha</a>
                </p>
            </form>
        </>
    );
}

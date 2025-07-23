import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    window.location.href = "/";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <br />
        <button type="submit" className="assine-btn">
          Entrar
        </button>
        <br />
        <p>
          Não tem uma conta? <a href="/inter">Assine aqui</a>
        </p>
      </form>
    </>
  );
}

import React from "react";
import usersData from "./data/users.json";
import "./App.css";

function App() {
  const filteredUsers = usersData;
  return (
    <div className="container">
      <h1 className="title">Lista de Usuários</h1>
      <div className="filterContainer">
        <div className="filterItem">
          <label htmlFor="name-filter" className="label">
            Nome:
          </label>
          <input
            type="text"
            id="name-filter"
            placeholder="Filtrar por nome"
            className="input"
          />
        </div>
        <div className="filterItem">
          <label htmlFor="email-filter" className="label">
            Email:
          </label>
          <input
            type="text"
            id="email-filter"
            placeholder="Filtrar por email"
            className="input"
          />
        </div>
        <button className="button">Buscar</button>
      </div>
      <ul className="list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="listItem">
            <span className="userName">{user.name}</span>
            <span className="userEmail">{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
